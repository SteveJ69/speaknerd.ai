# SpeakNerd Weekly #3: Hallucination

**Subject line:** That time AI invented a Supreme Court case (and a lawyer believed it)

---

Hey — Steve here.

Last week we learned about **LLMs** — the prediction engines behind modern AI. This week, let's talk about what happens when those predictions go wrong. Really wrong.

## This Week's Term: Hallucination

**The quick version:** When AI confidently states something that's completely made up. Fake facts, invented sources, imaginary people — delivered with absolute certainty.

**The deeper version:**

In 2023, a lawyer used ChatGPT to write a legal brief. The AI cited six court cases to support the argument. Impressive, right? One problem: **none of those cases existed.** The AI invented them — case names, dates, rulings, everything. The lawyer submitted the brief to a federal judge without checking. He was sanctioned and fined. It made national news.

This is a hallucination. The AI didn't lie on purpose — it doesn't have purposes. It just predicted what a legal brief SHOULD look like, and that prediction included realistic-sounding but completely fake case citations. It was doing what it always does: generating plausible-sounding text. Sometimes "plausible-sounding" and "true" aren't the same thing.

The scariest part? There's no warning light. The AI sounds just as confident when it's wrong as when it's right. There's no "I'm not sure about this one" hesitation. It just states things with the authority of an encyclopedia — even when it's making them up.

## How to Protect Yourself

The golden rule: **Trust, but verify.** Especially for:
- Specific facts and statistics
- Names, dates, and citations
- Medical, legal, or financial advice
- Anything where being wrong has consequences

AI is an incredible first draft machine and brainstorming partner. It's a terrible fact-checker.

## Try It Yourself (2 minutes)

Ask ChatGPT or Claude: *"Name 5 research papers about the effects of social media on teenage mental health, with authors and publication years."*

Then try to look up those papers. Some will be real. Some might be completely fabricated — with real-sounding author names, journals, and dates. That's hallucination in action.

## Go Deeper

- 📖 [The lawyer who cited fake cases](https://www.nytimes.com/2023/06/08/nyregion/lawyer-chatgpt-sanctions.html) — the story that made hallucinations famous
- 📖 Search for "AI hallucination examples 2024" — there are some truly wild ones
- 🔗 [Read the full SpeakNerd term page](https://speaknerd.ai/terms/hallucination)

## The Nerd Corner

Hallucinations occur because LLMs are probabilistic text generators, not knowledge databases. They produce tokens based on statistical likelihood, not factual accuracy. Mitigation strategies include RAG (Retrieval-Augmented Generation) for grounding responses in real documents, chain-of-thought prompting for better reasoning, temperature reduction for more conservative outputs, and citation verification workflows. No current technique eliminates hallucinations entirely.

---

*Next week: **Generative AI** — the revolution that put AI on the front page of every newspaper. What exactly IS GenAI, and why is it different from the AI that came before?*

*— Steve*

*P.S. Got a question about an AI term? Just reply to this email. I read every one.*
