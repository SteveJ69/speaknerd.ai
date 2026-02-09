# SpeakNerd Weekly #27: RAG

**Subject line:** How to make AI stop making stuff up

---

Hey — Steve here.

Last week we covered **Vector Database**. This week, let's talk about something you've probably heard but maybe never fully understood.

## This Week's Term: RAG

**The quick version:** Teaching AI to Google things before answering you. Reduces the 'making stuff up' problem.

**The deeper version:**

Imagine you're taking a test. In scenario A, you have to answer everything from memory. In scenario B, you get to look through your notes first, then answer. You're going to do way better in scenario B, right?

RAG is scenario B for AI. Instead of making the AI answer purely from memory (which is how it normally works, and why it sometimes makes stuff up), RAG lets it look up relevant information first, then use that info to give you a better answer.

Here's how it works: you ask a question, the system searches through a collection of documents to find relevant pieces, hands those pieces to the AI along with your question, and the AI generates an answer based on actual source material. It's like giving the AI a cheat sheet before the exam.

## Why This Matters

Because RAG is the main solution to the hallucination problem. When an AI makes stuff up, it's usually because it's guessing from memory. RAG forces it to reference real documents first. If you ever hear a company say their AI is "grounded" or "based on your data," they're probably using RAG. It's one of the most practical AI techniques out there.

## Try It Yourself (2 minutes)

Ask ChatGPT about something recent — it might not know. Try the same question on Perplexity.ai — it searches first, then answers. That's RAG.

## Go Deeper

- Search for "RAG explained simply" — you'll find great visual guides
- 🔗 [Read the full SpeakNerd term page](https://speaknerd.ai/terms/rag)

## The Nerd Corner

RAG combines a retrieval system (typically vector search using embeddings) with a generative model. Documents are chunked, embedded into a vector space, and stored in a vector database. At query time, relevant chunks are retrieved via semantic similarity, injected into the prompt as context, and the LLM generates a response grounded in those sources. Frameworks like LangChain and LlamaIndex simplify RAG implementation.

---

*Next week: **Diffusion Model** — we'll break down what it means and why you should care.*

*— Steve*

*P.S. Know someone who'd find this useful? Forward this email. They can [sign up here](https://speaknerd.ai).*
