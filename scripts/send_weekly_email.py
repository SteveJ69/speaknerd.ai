#!/usr/bin/env python3
"""Send the next weekly SpeakNerd newsletter via Buttondown API."""

import json
import os
import sys
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError

BUTTONDOWN_API = "https://api.buttondown.com/v1/emails"
COUNTER_FILE = Path(__file__).parent / "email_counter.txt"
EMAILS_DIR = Path(__file__).parent.parent / "content" / "emails"
TOTAL_EMAILS = 75


def get_current_number() -> int:
    """Read the current email number from the counter file."""
    if COUNTER_FILE.exists():
        return int(COUNTER_FILE.read_text().strip())
    return 0


def bump_counter(n: int) -> None:
    """Write the next email number to the counter file."""
    COUNTER_FILE.write_text(str(n) + "\n")


def find_email_file(number: int) -> Path | None:
    """Find the email markdown file for the given number."""
    # Files are named like 01-prompt.md, 42-json.md, etc.
    pattern = f"{number:02d}-*.md"
    matches = list(EMAILS_DIR.glob(pattern))
    return matches[0] if matches else None


def parse_email(filepath: Path) -> tuple[str, str]:
    """Extract subject line and body from an email markdown file.

    Returns (subject, body) where body is everything after the first ---.
    """
    text = filepath.read_text(encoding="utf-8")
    lines = text.split("\n")

    subject = ""
    body_start = 0

    for i, line in enumerate(lines):
        # Subject line format: **Subject line:** The actual subject
        if line.startswith("**Subject line:**"):
            subject = line.replace("**Subject line:**", "").strip()
        # Body starts after the first ---
        if line.strip() == "---" and i > 0:
            body_start = i + 1
            break

    body = "\n".join(lines[body_start:]).strip()
    return subject, body


def send_email(subject: str, body: str, api_key: str) -> dict:
    """Send an email via the Buttondown API."""
    payload = json.dumps({
        "subject": subject,
        "body": body,
        "status": "about_to_send",
    }).encode("utf-8")

    req = Request(BUTTONDOWN_API, data=payload, method="POST")
    req.add_header("Authorization", f"Token {api_key}")
    req.add_header("Content-Type", "application/json")

    with urlopen(req) as resp:
        return json.loads(resp.read())


def main():
    api_key = os.environ.get("BUTTONDOWN_API_KEY")
    if not api_key:
        print("ERROR: BUTTONDOWN_API_KEY not set")
        sys.exit(1)

    current = get_current_number()
    next_number = current + 1

    if next_number > TOTAL_EMAILS:
        print(f"All {TOTAL_EMAILS} emails have been sent. Newsletter complete!")
        sys.exit(0)

    email_file = find_email_file(next_number)
    if not email_file:
        print(f"ERROR: No email file found for #{next_number:02d}")
        sys.exit(1)

    subject, body = parse_email(email_file)
    if not subject:
        print(f"ERROR: No subject line found in {email_file.name}")
        sys.exit(1)

    print(f"Sending email #{next_number}: {subject}")
    print(f"File: {email_file.name}")
    print(f"Body length: {len(body)} chars")

    try:
        result = send_email(subject, body, api_key)
        print(f"SUCCESS: Email sent — {result.get('id', 'no id')}")
        bump_counter(next_number)
        print(f"Counter bumped to {next_number}")
    except HTTPError as e:
        error_body = e.read().decode("utf-8", errors="replace")
        print(f"ERROR: Buttondown API returned {e.code}: {error_body}")
        sys.exit(1)


if __name__ == "__main__":
    main()
