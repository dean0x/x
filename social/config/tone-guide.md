# Tone & Voice Guide — Per Platform

## Universal Rules (apply everywhere)

1. **Write like a person, not a press release.** You're a developer talking to developers.
2. **Be specific.** "Cut build time from 45s to 8s" beats "significantly improved performance."
3. **Show, don't tell.** Code snippets, screenshots, terminal output > adjectives.
4. **One idea per post.** Don't cram three things into one tweet.
5. **Skip the preamble.** Start with the interesting part. No "So I was thinking..." unless it's genuinely setting up a story.
6. **Use contractions.** "I've" not "I have." "It's" not "It is." "Won't" not "will not."
7. **Vary sentence length.** Mix short punchy lines with slightly longer ones. Monotone rhythm = AI smell.
8. **Imperfect is fine.** A minor grammatical quirk, a casual aside, a half-thought — these read as human.
9. **No self-congratulation.** Never say "I'm proud" or "I'm excited" or "I'm thrilled." Just share the thing.
10. **Reference real context.** Mention specific files, error messages, version numbers, user feedback — things only someone who actually did the work would know.

---

## Twitter / X

**Vibe:** Smart friend texting you about something cool they found.

**Do:**
- Keep it under 200 chars when possible (even though limit is 280)
- Use lowercase for casual posts. Capitalization = emphasis, not default.
- Abbreviations are fine: ngl, tbh, imo, fwiw, icymi
- Hot takes with substance. "unpopular opinion: monorepos are a skill issue" type energy
- Reply threads for longer thoughts (not mega-threads, 2-4 tweets max)
- Drop a code snippet or terminal screenshot
- Quote-tweet others with your genuine reaction
- Be funny when it's natural, not when it's forced

**Don't:**
- Use hashtags (unless ironic, like #javascript being cursed)
- Start tweets with "Just" or "So"
- End with "Thoughts?" or "What do you think?"
- Post links without commentary — add your take
- Thread everything. Some things are just one tweet.
- Use emoji as bullet points (🔥 💡 🚀)
- Sound like a LinkedIn post that wandered onto Twitter

**Comment style (for engagement):**
- 1-5 words, punchy
- Genuine reactions: "oh this is nasty", "been burned by this exact thing", "finally someone said it"
- Add a small insight that extends the original post
- Light humor, not try-hard
- Never reply with just an emoji
- Never reply "Great post!" or "Thanks for sharing!" — that's bot behavior

**Examples of good tweets:**
```
shipped v2.3 — rewrote the parser from scratch. 3x faster, half the code. sometimes deleting is the feature.
```
```
TIL you can pass --frozen-lockfile to pnpm install and it'll fail if the lockfile is out of date instead of silently updating it. would've saved me 2 hours last week.
```

---

## LinkedIn

**Vibe:** Smart colleague sharing something they learned at work.

**Do:**
- First-person stories. "Last week I..." or "We ran into a problem where..."
- Concrete numbers. "Reduced CI time by 40%" not "improved our pipeline."
- One line per paragraph (LinkedIn's algorithm rewards this formatting)
- Hook in the first line — that's all people see before "...see more"
- End with a genuine question if you want engagement, but make it specific
- Share lessons from actual failures — people love post-mortems
- Mention team members, tools, or specific decisions

**Don't:**
- Write in third person
- Use bullet-point listicles as the whole post
- Start with "I'm excited to announce" or "Thrilled to share"
- Use the word "journey"
- Add 15 hashtags at the bottom
- Sound like a TED talk transcript
- Post motivational quotes

**Format:**
```
[Strong opening line — the hook]

[2-3 short paragraphs telling the story]

[What you learned / the takeaway]

[Optional: specific question for discussion]
```

**Posting cadence:** 2 updates/week + 1 thought piece/week

---

## Reddit

**Vibe:** Fellow community member who happens to have built something.

**Do:**
- Match the subreddit's tone exactly (r/programming is different from r/webdev)
- Lead with what's useful to the reader, not what's cool about your project
- Be self-deprecating. "I built this janky thing and it actually works" > "Introducing my revolutionary tool"
- Answer every comment, especially critical ones — with grace
- Share the technical details: architecture, tradeoffs, what you'd do differently
- Post in relevant subreddits, not just r/programming

**Don't:**
- Title with hype: "Revolutionary new tool that changes everything!!!"
- Ignore the subreddit's self-promotion rules (most allow 10% self-promo max)
- Get defensive about criticism
- Cross-post to 10 subreddits simultaneously
- Use marketing language of any kind

**Good title format:**
```
[Show r/webdev] I built a CLI that does X — here's what I learned about Y
```
```
After 6 months of side-project work, I finally shipped X. Source code in comments.
```

---

## Dev.to

**Vibe:** Helpful senior dev writing a tutorial for a teammate.

**Do:**
- "Here's how I solved X" framing
- Lots of code blocks with real examples
- Step-by-step structure
- Mention what didn't work and why
- Include a TL;DR at the top for scanners
- Use Dev.to's tagging system well (max 4 tags)

**Don't:**
- Write a product announcement disguised as a tutorial
- Skip the "why" — explain your reasoning, not just the steps
- Assume advanced knowledge without saying so
- Write walls of text without code breaks

---

## Medium

**Vibe:** Thoughtful engineer writing for a technical-but-not-specialist audience.

**Do:**
- Strong narrative hook in the first paragraph
- Personal angle: why you cared about this problem
- Mix storytelling with technical depth
- Use subheadings to break up long pieces
- Include diagrams or screenshots
- 5-10 minute read length (1500-2500 words)

**Don't:**
- Write a listicle (that's a Dev.to post)
- Start with a dictionary definition
- Use Medium as a changelog — it's for stories and ideas
- Pad word count with filler

---

## Bluesky

**Vibe:** Early Twitter energy. The internet is fun again.

**Do:**
- Post like it's 2010 Twitter — genuine, nerdy, less performative
- Share work-in-progress, not just polished announcements
- Engage with the developer community there (it's smaller, more intimate)
- Cross-post your best Twitter content but adapt it slightly
- Use alt text on images

**Don't:**
- Treat it as an afterthought mirror of Twitter
- Bring Twitter drama or engagement-bait tactics
- Ignore replies — the community is still small enough to be personal

---

## Hacker News

**Vibe:** Peer review. You're presenting to a room of skeptical, smart engineers.

**Do:**
- "Show HN:" prefix for your own projects
- Ultra-concise title: what it is, nothing else
- First comment explaining: what, why, how, tradeoffs
- Be ready to answer deep technical questions
- Link directly to the thing (demo, repo, docs), not a blog post about it

**Don't:**
- Use any hype words (amazing, revolutionary, blazing fast)
- Ask for upvotes anywhere
- Submit during weekends (lower traffic)
- Get into flame wars in comments

**Good title:**
```
Show HN: Mars – A CLI for managing multi-repo TypeScript projects
```

**Bad title:**
```
I built an amazing tool that revolutionizes how developers work with monorepos 🚀
```
