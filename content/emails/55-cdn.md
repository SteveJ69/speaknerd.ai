# SpeakNerd Weekly #55: CDN

**Subject line:** Why Netflix doesn't buffer (and your site shouldn't either)

---

Hey — Steve here.

Last week we covered **SSL/TLS**. This week, let's talk about something you've probably heard but maybe never fully understood.

## This Week's Term: CDN

**The quick version:** Copies of your website stored around the world so it loads fast everywhere. Like having franchise locations instead of one store that everyone has to drive to.

**The deeper version:**

Imagine there's only one pizza shop in the entire country, located in Kansas. If you live in Kansas, great — fresh pizza in 10 minutes. If you live in New York? Your pizza arrives cold and 3 days late. The solution? Open pizza shops all over the country. That's a CDN.

A CDN (Content Delivery Network) takes your website's files — images, videos, CSS, JavaScript — and copies them to servers all over the world. When someone in Tokyo visits your site, they get files from a server in Tokyo. Someone in London gets files from a server in London. Nobody has to wait for data to travel halfway around the globe.

Cloudflare (the company that probably hosts your favorite websites) is one of the biggest CDNs. They have servers in over 300 cities worldwide. When you visit a Cloudflare-protected site, you're connecting to whichever server is closest to you. That's why even a tiny blog can load fast for someone on the other side of the planet.

## Why This Matters

Because CDNs are why the internet feels fast. Without them, every website would load at the speed of the farthest data center. They also provide security benefits — absorbing attacks, blocking bots, and protecting against traffic spikes. If you ever build a website, putting it behind a CDN (many are free, like Cloudflare's basic plan) is one of the easiest performance wins.

## Try It Yourself (2 minutes)

Think about Netflix streaming 4K without buffering. CDNs place servers close to you physically. That's why it works.

## Go Deeper

- Search for "CDN explained simply" — you'll find great visual guides
- 🔗 [Read the full SpeakNerd term page](https://speaknerd.ai/terms/cdn)

## The Nerd Corner

CDNs are geographically distributed networks of proxy servers and data centers that cache static and dynamic content at edge locations. They use anycast routing to direct users to the nearest PoP (Point of Presence). Features include HTTP/3 support, edge computing (Workers), image optimization, DDoS mitigation, WAF (Web Application Firewall), and SSL termination. Major providers include Cloudflare, Fastly, Akamai, and AWS CloudFront. Cache hit ratios, TTFB (Time to First Byte), and origin shield configurations are key performance metrics.

---

*Next week: **Cache** — we'll break down what it means and why you should care.*

*— Steve*

*P.S. Know someone who'd find this useful? Forward this email. They can [sign up here](https://speaknerd.ai).*
