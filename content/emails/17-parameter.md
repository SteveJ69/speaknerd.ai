# SpeakNerd Weekly #17: Parameter

**Subject line:** The tiny dials that make AI smart (billions of them)

---

Hey — Steve here.

Last week we covered **Reinforcement Learning**. This week, let's talk about something you've probably heard but maybe never fully understood.

## This Week's Term: Parameter

**The quick version:** The internal 'dials' that get tuned during training. GPT-4 has hundreds of billions of them. More parameters generally means smarter (and way more expensive).

**The deeper version:**

Imagine a massive mixing board in a recording studio — thousands of dials and sliders that shape the sound. Each one controls something slightly different. Together, they determine what the final music sounds like. An AI model's parameters are those dials.

When an AI trains, it's essentially adjusting billions of these tiny numerical dials until the output sounds right. "Turn this one up a bit. Turn that one down." Each parameter captures a tiny piece of learned knowledge. One parameter alone means nothing, but billions of them working together can understand language, generate images, and write code.

The numbers are wild. GPT-3 had 175 billion parameters. GPT-4 is rumored to have over a trillion. Claude and other models are in the same ballpark. That's why training these models costs millions of dollars — you're tuning billions of dials across massive amounts of data, and that takes enormous computing power.

## Why This Matters

Because parameter count is one of the first things people mention when comparing AI models, and it helps you understand the cost conversation. More parameters generally means more capable (up to a point) but also more expensive to train and run. When a company says "we trained a 70 billion parameter model," you now know that means 70 billion internal dials that were tuned to capture knowledge.

## Try It Yourself (2 minutes)

Ask an AI: "Explain quantum physics in one sentence." Then: "Now in 500 words with analogies." Same parameters, wildly different outputs based on your prompt.

## Go Deeper

- Search for "Parameter explained simply" — you'll find great visual guides
- 🔗 [Read the full SpeakNerd term page](https://speaknerd.ai/terms/parameter)

## The Nerd Corner

Parameters are the learnable weights and biases in a neural network, adjusted during training via backpropagation and gradient descent to minimize the loss function. In transformer models, parameters exist in embedding layers, attention weight matrices (Q, K, V projections), feed-forward layers, and layer normalization. Scaling laws (Chinchilla) suggest optimal compute allocation between parameter count and training tokens. Parameter-efficient fine-tuning methods (LoRA, QLoRA, adapters) modify a small subset of parameters for downstream tasks.

---

*Next week: **Algorithm** — we'll break down what it means and why you should care.*

*— Steve*

*P.S. Know someone who'd find this useful? Forward this email. They can [sign up here](https://speaknerd.ai).*
