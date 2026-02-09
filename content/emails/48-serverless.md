# SpeakNerd Weekly #48: Serverless

**Subject line:** There ARE servers. You just don't care about them.

---

Hey — Steve here.

Last week we covered **The Cloud**. This week, let's talk about something you've probably heard but maybe never fully understood.

## This Week's Term: Serverless

**The quick version:** There ARE still servers — you just don't manage them. Like taking an Uber instead of owning a car. Someone else handles the maintenance, insurance, and parking.

**The deeper version:**

The name is a lie. There are absolutely servers. You just don't have to think about them.

Traditionally, running a website or app meant managing servers. You'd rent a computer in the cloud, install your software, keep it updated, make sure it didn't crash, and pay for it 24/7 — even when nobody was using it at 3 AM. It's like owning a car: insurance, maintenance, gas, parking — all your problem.

Serverless flips that. You just write your code and upload it. The cloud provider handles everything else — the servers, the scaling, the uptime, all of it. Your code runs when someone needs it and sits dormant when they don't. You only pay for actual usage. It's like taking an Uber — you pay per ride, not per month, and you never think about oil changes.

## Why This Matters

Because serverless is why small teams can build apps that serve millions of users without a dedicated infrastructure team. If you ever build something with AI (or any web tool), serverless platforms like Vercel, Cloudflare Workers, or AWS Lambda let you go from idea to live product without becoming a server administrator. It removes a massive barrier to getting stuff out the door.

## Try It Yourself (2 minutes)

If a Typeform sends you email notifications — that trigger is probably serverless. It only runs when someone submits, then turns off.

## Go Deeper

- Search for "Serverless explained simply" — you'll find great visual guides
- 🔗 [Read the full SpeakNerd term page](https://speaknerd.ai/terms/serverless)

## The Nerd Corner

Serverless computing abstracts server management, with the cloud provider dynamically allocating resources per request. FaaS (Function as a Service) platforms include AWS Lambda, Google Cloud Functions, Azure Functions, and Cloudflare Workers. Key characteristics: event-driven execution, automatic scaling to zero, pay-per-invocation pricing, and stateless functions. Trade-offs include cold start latency, execution time limits, vendor lock-in, and debugging complexity. Edge computing extends serverless to CDN nodes for lower latency.

---

*Next week: **Docker** — we'll break down what it means and why you should care.*

*— Steve*

*P.S. Know someone who'd find this useful? Forward this email. They can [sign up here](https://speaknerd.ai).*
