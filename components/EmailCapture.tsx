"use client";

import { useState } from "react";

interface EmailCaptureProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  className?: string;
}

export function EmailCapture({
  heading = "Every week, one AI concept. Plain English. 60 seconds.",
  subheading = "No spam. No jargon. Just one thing explained so well you could explain it to someone else.",
  buttonText = "Count me in",
  className = "",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const formData = new FormData();
      formData.append("email", email);

      const res = await fetch(
        "https://buttondown.com/api/emails/embed-subscribe/SteveBuildsAI",
        { method: "POST", body: formData }
      );

      if (res.ok || res.status === 201) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={`text-center ${className}`}>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8">
          <p className="text-xl font-semibold text-emerald-700">
            You&apos;re in.
          </p>
          <p className="mt-2 text-emerald-600">
            Check your inbox — your first term is on its way.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <h3 className="text-xl sm:text-2xl font-bold text-text text-center">
        {heading}
      </h3>
      <p className="mt-2 text-text-muted text-center max-w-md mx-auto">
        {subheading}
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "..." : buttonText}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-sm text-red-600 text-center">
          Something went wrong. Try again?
        </p>
      )}
    </div>
  );
}
