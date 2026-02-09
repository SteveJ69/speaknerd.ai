# SpeakNerd Weekly #57: Cookie

**Subject line:** Not the chocolate chip kind (unfortunately)

---

Hey — Steve here.

Last week we covered **Cache**. This week, let's talk about something you've probably heard but maybe never fully understood.

## This Week's Term: Cookie

**The quick version:** A tiny file websites save on your computer to remember who you are. That's why Amazon remembers your cart and why ads stalk you across the internet.

**The deeper version:**

You walk into your favorite coffee shop. The barista sees you and says, "The usual?" They remember you. Now imagine if every single time you walked in, they had no idea who you were. "Welcome! What's your name? What do you like? Do you have an account?" Every. Single. Time. That would be exhausting.

The internet has this problem. Websites are stateless — they have amnesia by default. Every time you visit, they don't know who you are. Cookies fix this. A cookie is a tiny text file a website stores on your computer that says, "Hey, this is the same person from before. They're logged in. Their cart has 3 items. They prefer dark mode."

There are two kinds of cookies. First-party cookies are helpful — they keep you logged in and remember your preferences. Third-party cookies are the creepy ones — they're from advertisers tracking you across different websites so they can show you eerily specific ads. That pair of shoes you looked at once? Third-party cookies are why they follow you everywhere for the next two weeks.

## Why This Matters

Because cookies control a lot of your online experience, and understanding them helps you manage your privacy. Those "accept cookies" banners? Now you know what they're asking. Clearing cookies logs you out of everything because the websites lose their memory of you. And those "personalized ads"? That's cookies (and their replacements) at work.

## Try It Yourself (2 minutes)

Press F12, go to Application > Cookies. You'll see cookies for the current site — tracking sessions, preferences, maybe your shopping cart.

## Go Deeper

- Search for "Cookie explained simply" — you'll find great visual guides
- 🔗 [Read the full SpeakNerd term page](https://speaknerd.ai/terms/cookie)

## The Nerd Corner

HTTP cookies are key-value pairs stored by the browser per domain, sent with every request via the Cookie header. Attributes include Expires/Max-Age (lifetime), Domain/Path (scope), Secure (HTTPS only), HttpOnly (no JavaScript access), and SameSite (CSRF protection). Session cookies exist only in memory; persistent cookies survive browser closure. Third-party cookie deprecation is pushing adoption of alternatives like the Privacy Sandbox, server-side tracking, and first-party data strategies.

---

*Next week: **Bandwidth** — we'll break down what it means and why you should care.*

*— Steve*

*P.S. Know someone who'd find this useful? Forward this email. They can [sign up here](https://speaknerd.ai).*
