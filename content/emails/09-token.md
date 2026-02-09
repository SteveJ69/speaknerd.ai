# SpeakNerd Weekly #9: Token

**Subject line:** The reason AI charges you per word (sort of)

---

Hey — Steve here.

Last week we covered **GPT**. This week, let's talk about something you've probably heard but maybe never fully understood.

## This Week's Term: Token

**The quick version:** AI doesn't read words — it reads chunks called tokens. Think of them as syllables for robots.

**The deeper version:**

You read words. AI reads tokens. A token is roughly a piece of a word — sometimes a whole word, sometimes just a chunk. The word "hamburger" might be two tokens: "ham" and "burger." The word "the" is one token. A long word like "unbelievable" might be three or four tokens.

Why does this matter? Because AI has a limit on how many tokens it can handle at once. It's like a conveyor belt with a maximum capacity. If you give it a really long document, it might not be able to read the whole thing because it runs out of token space. That limit is called the "context window."

Also, tokens are how AI companies charge you. When you use the API (the programmer version of ChatGPT), you pay per token. More tokens in your question = more money. More tokens in the answer = more money. It's like being charged per word at the world's most expensive telegraph office.

## Why This Matters

Because tokens explain two things that will confuse you otherwise: why AI sometimes "forgets" what you told it earlier in a long conversation (it ran out of token space), and why AI services cost what they cost (you're paying per token).

## Try It Yourself (2 minutes)

Go to platform.openai.com/tokenizer and paste a sentence. Watch how it splits text into tokens. Try "I'm hungry" versus "I am famished" — the token counts might surprise you.

## Go Deeper

- Search for "Token explained simply" — you'll find great visual guides
- 🔗 [Read the full SpeakNerd term page](https://speaknerd.ai/terms/token)

## The Nerd Corner

Tokens are produced by a tokenizer (like BPE — Byte Pair Encoding) that breaks text into subword units. GPT-4 uses roughly 1 token per 4 characters of English text. Context windows range from 4K to 128K+ tokens depending on the model. Token costs for GPT-4 are roughly $0.03/1K input tokens and $0.06/1K output tokens.

---

*Next week: **Model** — we'll break down what it means and why you should care.*

*— Steve*

*P.S. Know someone who'd find this useful? Forward this email. They can [sign up here](https://speaknerd.ai).*
