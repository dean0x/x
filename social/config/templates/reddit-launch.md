# Reddit Launch Post Template

## Structure
Title + body. The body should explain what it does, why you built it, and link to the code.

## Title Format
```
[Show r/{sub}] {What it is} — {what makes it interesting or different}
```
or
```
I built {thing} because {problem}. It does {main feature}. Source in comments.
```
or (self-deprecating, often works better):
```
I got tired of {annoying thing} so I wrote a CLI to do it for me. It's probably overkill but here we are.
```
```
Built a thing that {does X}. It's held together with regex and optimism.
```

## Body Format
```
**What it is:** One sentence.

**Why I built it:** The actual problem you had.

**How it works:** 2-3 sentences on the technical approach. Mention interesting tradeoffs.

**What I'd do differently:** Be brutally honest. Reddit respects self-awareness. "I'd probably rewrite the parser. it works but it's held together with string matching and hope." This kind of honesty earns more trust than any polished pitch.

**Links:**
- GitHub: {url}
- Demo: {url} (if applicable)

Happy to answer questions about the implementation.
```

## Rules
- Understate, don't overstate. "It's a small CLI tool" > "It's a powerful platform."
- Be ready to answer every comment. Reddit engagement = replies.
- Post source code. Reddit developers want to read your code.
- Mention the tradeoffs and limitations before someone else does.
- Follow the subreddit's self-promotion rules (usually 10% max).
- Don't cross-post to 10 subs simultaneously. Pick the 1-2 most relevant.

## Good Example Title
```
[Show r/typescript] I built a CLI that auto-generates workspace configs from your directory structure — no more hand-editing tsconfig references
```

## Bad Example Title
```
🚀 Introducing the ULTIMATE TypeScript workspace management tool!!!
```
