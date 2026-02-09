# SpeakNerd Weekly #70: Supabase

**Subject line:** Firebase but open source (and why developers love it)

---

Hey — Steve here.

Last week we covered **Vercel**. This week, let's talk about something you've probably heard but maybe never fully understood.

## This Week's Term: Supabase

**The quick version:** A service that gives you a database, authentication, and storage in one package. The backend you don't have to build.

**The deeper version:**

Building a web app? You're going to need a place to store data, a way to handle logins, and probably file storage too. You could build all of that from scratch... or you could use Supabase and get it all in about 10 minutes.

Supabase is like a backend-in-a-box. It gives you a PostgreSQL database (the serious, production-grade kind), user authentication (email, Google, GitHub logins), file storage, and real-time subscriptions — all through a clean dashboard and simple API.

Think of it as hiring an entire backend team, except it's a service that costs nothing on the free tier and scales with you. I used Supabase for my recipe app and it handled everything from user accounts to image uploads without me needing to manage a single server.

## Why This Matters

Because Supabase eliminates the hardest part of building an app — the backend infrastructure. If you're vibe coding your first app, Supabase is one of the tools that makes it actually possible for a non-expert to build something real. Free tier is genuinely generous, and you can get pretty far without paying a dime.

## Try It Yourself (2 minutes)

Create a free project at supabase.com. In 2 minutes: real PostgreSQL database with auto-generated API. No backend code needed.

## Go Deeper

- Search for "Supabase explained simply" — you'll find great visual guides
- 🔗 [Read the full SpeakNerd term page](https://speaknerd.ai/terms/supabase)

## The Nerd Corner

Supabase is an open-source Firebase alternative built on PostgreSQL. It provides: a Postgres database with Row Level Security (RLS), GoTrue for auth, a RESTful API auto-generated from your schema (PostgREST), real-time subscriptions via websockets, Edge Functions (Deno), and S3-compatible storage. Self-hosting is possible via Docker. Client libraries exist for JavaScript, Python, Flutter, and more.

---

*Next week: **SaaS** — we'll break down what it means and why you should care.*

*— Steve*

*P.S. Know someone who'd find this useful? Forward this email. They can [sign up here](https://speaknerd.ai).*
