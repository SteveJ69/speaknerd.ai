# SpeakNerd Weekly #56: Cache

**Subject line:** The reason your browser remembers stuff

---

Hey — Steve here.

Last week we covered **CDN**. This week, let's talk about something you've probably heard but maybe never fully understood.

## This Week's Term: Cache

**The quick version:** Keeping a nearby copy of something so you don't have to go get it every time. Like photocopying a library book so you don't have to drive back for every reference.

**The deeper version:**

You're writing a paper and need to keep referencing the same book. Option A: drive to the library every single time you need a quote. Option B: photocopy the relevant pages and keep them on your desk. Option B is caching.

Caching means storing a copy of frequently used data somewhere fast and close, so you don't have to fetch it from the original (slow, far away) source every time. Your browser caches website images so it doesn't re-download them every visit. Your phone caches app data so apps open faster. Servers cache database results so they don't re-run the same query thousands of times.

Caching is everywhere because it's one of the simplest ways to make things feel fast. The first time you visit a website, it might take 2 seconds to load. The second time? Half a second — because most of the assets were cached on your computer. The trade-off? Sometimes the cache is stale (outdated), which is why "have you tried clearing your cache?" is the first troubleshooting step for most web problems.

## Why This Matters

Because caching is why "clear your cache" fixes so many problems. When a website looks broken or shows old content, it's often serving you a stale cached version. Understanding caching also helps you understand why freshly published content sometimes takes a while to appear — the old version is cached and hasn't expired yet.

## Try It Yourself (2 minutes)

Visit a website, then visit again. Second visit is faster? Your browser cached the assets. Press Ctrl+Shift+R to force fresh load and feel the difference.

## Go Deeper

- Search for "Cache explained simply" — you'll find great visual guides
- 🔗 [Read the full SpeakNerd term page](https://speaknerd.ai/terms/cache)

## The Nerd Corner

Caching stores frequently accessed data at faster-access layers in the memory hierarchy. Browser caches use HTTP headers (Cache-Control, ETag, Last-Modified) to manage freshness. Server-side caches include in-memory stores (Redis, Memcached), ORM query caches, and full-page caches. CDN edge caches distribute content globally. Cache invalidation ("one of the two hard problems in computer science") strategies include TTL-based expiration, event-driven purging, and stale-while-revalidate patterns.

---

*Next week: **Cookie** — we'll break down what it means and why you should care.*

*— Steve*

*P.S. Know someone who'd find this useful? Forward this email. They can [sign up here](https://speaknerd.ai).*
