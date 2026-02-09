# SpeakNerd Weekly #20: Fine-tuning

**Subject line:** How to teach an old AI new tricks

---

Hey — Steve here.

Last week we covered **Inference**. This week, let's talk about something you've probably heard but maybe never fully understood.

## This Week's Term: Fine-tuning

**The quick version:** Taking a general AI and training it to be an expert at one specific thing. Like teaching a general practitioner to be a heart surgeon.

**The deeper version:**

Imagine a doctor who just graduated medical school. They know a little about everything — bones, hearts, skin, brains. They're smart, but they're not an expert in anything specific. Now imagine that doctor spends two years doing nothing but heart surgery. After that, they're a heart specialist.

That's fine-tuning. You take a general AI that knows a little about everything (like ChatGPT) and train it on a specific set of data so it becomes really good at one thing. Want an AI that writes like your company? Fine-tune it on your company's writing. Want one that knows everything about tax law? Fine-tune it on tax documents.

The original AI already has the foundation — it knows language, it knows how to reason, it knows how to write. Fine-tuning just sharpens it in one direction.

## Why This Matters

Because this is how businesses are making AI actually useful for specific tasks. A generic AI gives generic answers. A fine-tuned AI gives answers that sound like they came from an expert in your field. If you ever build something with AI, fine-tuning might be how you make it stand out from everyone else using the same generic tools.

## Try It Yourself (2 minutes)

Ask ChatGPT to "Write a SOAP note for a patient with lower back pain." The fact that it knows medical formats? That's fine-tuning at work.

## Go Deeper

- Search for "Fine-tuning explained simply" — you'll find great visual guides
- 🔗 [Read the full SpeakNerd term page](https://speaknerd.ai/terms/fine-tuning)

## The Nerd Corner

Fine-tuning involves additional training of a pre-trained model on a domain-specific dataset. It adjusts the model's weights to optimize for a particular task while retaining general knowledge. Methods include full fine-tuning (expensive), LoRA (Low-Rank Adaptation), and QLoRA. It's distinct from RAG, which adds knowledge at inference time rather than training time.

---

*Next week: **Transformer** — we'll break down what it means and why you should care.*

*— Steve*

*P.S. Know someone who'd find this useful? Forward this email. They can [sign up here](https://speaknerd.ai).*
