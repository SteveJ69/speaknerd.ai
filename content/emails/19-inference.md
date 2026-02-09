# SpeakNerd Weekly #19: Inference

**Subject line:** When AI stops learning and starts answering

---

Hey — Steve here.

Last week we covered **Algorithm**. This week, let's talk about something you've probably heard but maybe never fully understood.

## This Week's Term: Inference

**The quick version:** Training is studying for the exam. Inference is taking it. It's the moment AI actually uses its knowledge to give you an answer.

**The deeper version:**

Think about learning to drive. There's the learning phase — months of practice, making mistakes, building skills. Then there's the actual driving phase — you get in the car and go somewhere. Those are two very different things.

AI works the same way. Training is the learning phase — it costs millions of dollars, takes weeks or months, and requires massive amounts of data and computing power. Inference is the driving phase — it's when the trained model actually processes your question and generates an answer. Every time you type something into ChatGPT and get a response, that's inference.

Here's why this matters practically: training happens once (well, periodically), but inference happens billions of times. Every single conversation, every image generated, every translation — that's all inference. It's why AI companies obsess over making inference faster and cheaper. Training builds the brain; inference is the brain thinking.

## Why This Matters

Because when people talk about the cost of AI, they're usually talking about inference costs. Every question you ask costs someone a fraction of a cent in computing power. That adds up to billions. It's also why some AI features are free and others aren't — inference isn't free, and someone's paying for it.

## Try It Yourself (2 minutes)

Time how fast ChatGPT responds. Then try a complex question with "think step by step" — more reasoning = more inference compute.

## Go Deeper

- Search for "Inference explained simply" — you'll find great visual guides
- 🔗 [Read the full SpeakNerd term page](https://speaknerd.ai/terms/inference)

## The Nerd Corner

Inference is the forward pass through a trained model to generate predictions from new inputs. Optimization techniques include quantization (reducing precision from FP32 to INT8/INT4), distillation, pruning, speculative decoding, KV caching, and batching. Inference costs scale with model size, context length, and output token count. Dedicated inference hardware (GPUs, TPUs, custom ASICs) and frameworks (vLLM, TensorRT, ONNX Runtime) optimize throughput and latency.

---

*Next week: **Fine-tuning** — we'll break down what it means and why you should care.*

*— Steve*

*P.S. Know someone who'd find this useful? Forward this email. They can [sign up here](https://speaknerd.ai).*
