# SpeakNerd Weekly #14: Training Data

**Subject line:** Garbage in, garbage out (the AI edition)

---

Hey — Steve here.

Last week we covered **Neural Network**. This week, let's talk about something you've probably heard but maybe never fully understood.

## This Week's Term: Training Data

**The quick version:** The examples AI learns from. Feed it garbage, it produces garbage. Like raising a kid on nothing but reality TV — don't be surprised by the results.

**The deeper version:**

You know the saying "you are what you eat"? For AI, it's "you are what you trained on." Training data is the massive collection of examples that an AI system learns from. For a language model like ChatGPT, that's basically a huge chunk of the internet — books, websites, Wikipedia, forums, code repositories, the works.

The quality of the training data directly determines the quality of the AI. Train it on well-written, accurate content? You get smart, coherent responses. Train it on toxic internet comments? You get a toxic AI. Train it mostly on English? It'll be great at English and terrible at Swahili. The training data bakes in every strength AND every weakness.

This is also why AI has a "knowledge cutoff date." The model learned from data up to a certain point and doesn't know what happened after that. It's not checking the internet in real-time (unless it has tools for that). It's working from a snapshot of the world frozen at whatever date its training data ends.

## Why This Matters

Because understanding training data helps you understand AI's limitations. When an AI gives a biased answer, it's often because the training data was biased. When it doesn't know about something recent, it's because that event happened after the training cutoff. You can't fix what you don't understand, and training data is the root of most AI quirks.

## Try It Yourself (2 minutes)

Ask ChatGPT: "What happened in the news today?" Notice it can't answer accurately — its training data has a cutoff date.

## Go Deeper

- Search for "Training Data explained simply" — you'll find great visual guides
- 🔗 [Read the full SpeakNerd term page](https://speaknerd.ai/terms/training-data)

## The Nerd Corner

Training data encompasses all datasets used during model development, including pre-training corpora (Common Crawl, Books3, Wikipedia), fine-tuning datasets (instruction-following, RLHF preference data), and evaluation benchmarks. Data quality, deduplication, filtering, and curation significantly impact model performance. Key concerns include copyright, data poisoning, memorization of PII, and distribution shift between training and deployment domains.

---

*Next week: **Supervised Learning** — we'll break down what it means and why you should care.*

*— Steve*

*P.S. Know someone who'd find this useful? Forward this email. They can [sign up here](https://speaknerd.ai).*
