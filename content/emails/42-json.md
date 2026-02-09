# SpeakNerd Weekly #42: JSON

**Subject line:** The language machines use to talk to each other

---

Hey — Steve here.

Last week we covered **API**. This week, let's talk about something you've probably heard but maybe never fully understood.

## This Week's Term: JSON

**The quick version:** The universal language computers use to share structured information. It looks like a bunch of curly braces and quotes, but it's actually super logical and readable.

**The deeper version:**

When two people share information, they use a language they both understand. When two computers share information, they often use JSON (pronounced "jay-son"). It stands for JavaScript Object Notation, but don't let the name scare you — it's just a way of organizing data that both humans and computers can read.

Here's what JSON looks like:

```
{
  "name": "Steve",
  "age": 52,
  "hobbies": ["robotics", "AI", "coffee"]
}
```

See? It's not that scary. Curly braces hold objects, quotes hold text, brackets hold lists. The key is on the left, the value is on the right. Even if you've never seen code before, you can probably figure out what that says.

JSON won the internet because it's simple, lightweight, and every programming language can read and write it. Every time an app loads data — weather, social media posts, your shopping cart — there's a good chance JSON is carrying that data behind the scenes. It's the envelope that information travels in.

## Why This Matters

Because JSON is the data format you're most likely to encounter if you interact with any AI API, web service, or data tool. When you connect apps together, export data, or work with AI responses programmatically — it's usually JSON. Being able to read it (even roughly) gives you a superpower when working with any technical tool.

## Try It Yourself (2 minutes)

Visit any API endpoint (like https://api.quotable.io/random). Those curly braces and key-value pairs? That's JSON. It's basically English for machines.

## Go Deeper

- Search for "JSON explained simply" — you'll find great visual guides
- 🔗 [Read the full SpeakNerd term page](https://speaknerd.ai/terms/json)

## The Nerd Corner

JSON is a lightweight, text-based data interchange format derived from JavaScript object literal syntax but language-independent. It supports strings, numbers, booleans, null, arrays, and nested objects. JSON Schema provides validation. Alternatives include YAML (superset, human-friendly), XML (verbose, legacy), Protocol Buffers (binary, fast), and MessagePack (binary JSON). JSON parsing is available natively in most languages. JSONL (newline-delimited) is used for streaming and log data.

---

*Next week: **Frontend** — we'll break down what it means and why you should care.*

*— Steve*

*P.S. Know someone who'd find this useful? Forward this email. They can [sign up here](https://speaknerd.ai).*
