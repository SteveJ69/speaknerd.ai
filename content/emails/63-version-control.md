# SpeakNerd Weekly #63: Version Control

**Subject line:** The "undo" button for your entire project

---

Hey — Steve here.

Last week we covered **Repository**. This week, let's talk about something you've probably heard but maybe never fully understood.

## This Week's Term: Version Control

**The quick version:** A system that tracks every change to your project so you can undo mistakes. Like a time machine: 'Take me back to Tuesday when everything still worked.'

**The deeper version:**

Have you ever saved over a file and immediately regretted it? Or had a project going great, then made a bunch of changes that broke everything, and wished you could just go back? Version control is the "undo button" for your entire project — but infinitely more powerful.

It tracks every single change anyone makes, who made it, and when. You can rewind to any point in history. You can see exactly what changed between two versions. You can create parallel "branches" to try out ideas without risking the working version. If the experiment fails? Delete the branch. If it works? Merge it in.

Git is the version control system that basically everyone uses. Created by Linus Torvalds (the same person who created Linux) because he was frustrated with existing tools. GitHub is the most popular website for hosting Git repositories. Together, they're how millions of developers collaborate on software — from two-person startups to teams of thousands at Google and Microsoft.

## Why This Matters

Because version control isn't just for professional developers anymore. Anyone building a website, writing a book, or managing documents can benefit from never losing work. And if you're getting into vibe coding — building apps with AI — understanding version control (even the basics of commit, push, pull) is essential. It's your safety net.

## Try It Yourself (2 minutes)

In Google Docs, click File > Version History. Those saved versions? That's version control (simplified). Git does this for code.

## Go Deeper

- Search for "Version Control explained simply" — you'll find great visual guides
- 🔗 [Read the full SpeakNerd term page](https://speaknerd.ai/terms/version-control)

## The Nerd Corner

Version control systems (VCS) track changes to files over time using snapshots (Git) or deltas (SVN). Git is a distributed VCS where each clone contains the full repository history. Core concepts: working directory, staging area, commits (DAG of snapshots), branches (lightweight pointers), and merges (three-way merge, fast-forward). Collaboration workflows include feature branches, pull requests, code review, and CI/CD triggers on push. Git internals use SHA-1 hashed objects (blobs, trees, commits, tags) stored in .git/objects.

---

*Next week: **IDE** — we'll break down what it means and why you should care.*

*— Steve*

*P.S. Know someone who'd find this useful? Forward this email. They can [sign up here](https://speaknerd.ai).*
