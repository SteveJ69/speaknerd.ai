# SpeakNerd Weekly #59: Latency

**Subject line:** Why your video call is laggy (and what that actually means)

---

Hey — Steve here.

Last week we covered **Bandwidth**. This week, let's talk about something you've probably heard but maybe never fully understood.

## This Week's Term: Latency

**The quick version:** The delay between asking and getting an answer. When your video call freezes for 2 seconds — that's latency. Lower is always better.

**The deeper version:**

You click a button. There's a pause. Then something happens. That pause? That's latency. It's the time delay between doing something and seeing the result. In an ideal world, latency would be zero. In reality, data has to travel through wires, get processed by servers, and travel back. That takes time.

Think about a phone call. When you're talking to someone across the room, there's essentially no delay. Call someone in another country, and sometimes there's that awkward half-second gap where you both start talking at the same time. That gap is latency — the time it takes for your voice to travel there and their voice to travel back.

On the internet, latency is measured in milliseconds. Under 50ms feels instant. 100-200ms is noticeable but fine. Over 500ms and things start feeling sluggish. Over a second and you're wondering if the page is broken. Every tech company obsesses over reducing latency because even small delays make users bounce.

## Why This Matters

Because latency affects every digital experience you have. Slow websites, laggy video games, glitchy video calls, buffering videos — that's all latency. When AI takes a few seconds to respond, that's inference latency. Understanding it helps you diagnose why things feel slow and appreciate why tech companies build data centers all over the world (to get closer to you and reduce latency).

## Try It Yourself (2 minutes)

Open terminal: ping google.com. The milliseconds shown is your latency. Under 50ms = great. Over 200ms = noticeable lag.

## Go Deeper

- Search for "Latency explained simply" — you'll find great visual guides
- 🔗 [Read the full SpeakNerd term page](https://speaknerd.ai/terms/latency)

## The Nerd Corner

Latency is the time delay in a system, typically measured as round-trip time (RTT) in milliseconds. Network latency depends on physical distance, routing hops, congestion, and protocol overhead. Application latency includes processing time, database queries, and serialization. Optimization strategies include CDNs, edge computing, connection pooling, caching, async processing, and protocol optimization (HTTP/3, QUIC). P50/P95/P99 percentiles are used to measure latency distributions in production systems.

---

*Next week: **Encryption** — we'll break down what it means and why you should care.*

*— Steve*

*P.S. Know someone who'd find this useful? Forward this email. They can [sign up here](https://speaknerd.ai).*
