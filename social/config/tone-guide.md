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
11. **80/20 rule.** 80% of content should be genuinely useful (tips, insights, replies). 20% max is about your own stuff.
12. **Engage fast.** Reply to comments on your posts within the first hour. Early engagement velocity drives algorithmic reach on every platform.
13. **Link to articles.** X's 2026 algorithm boosts tweets that link to articles (Dev.to, Medium, Substack). Include links when you have related content.

---

## Twitter / X

**Vibe:** Smart friend texting you about something cool they found. Funny, a bit sarcastic, never takes itself too seriously.

**Do:**
- Keep it under 200 chars when possible (even though limit is 280)
- Use lowercase for casual posts. Capitalization = emphasis, not default.
- Abbreviations are fine: ngl, tbh, imo, fwiw, icymi
- Hot takes with substance. "unpopular opinion: monorepos are a skill issue" type energy
- Reply threads for longer thoughts (not mega-threads, 2-4 tweets max)
- Drop a code snippet or terminal screenshot
- Quote-tweet others with your genuine reaction
- Include article links when relevant — X's algorithm now boosts these
- React to trending events with your genuine take — other tool releases, dev debates, viral moments. Speed matters; if it's stale, skip it.

**Don't:**
- Use hashtags (unless ironic, like #javascript being cursed)
- Start tweets with "Just" or "So"
- End with "Thoughts?" or "What do you think?"
- Post links without commentary — add your take
- Thread everything. Some things are just one tweet.
- Use emoji as bullet points (🔥 💡 🚀)
- Sound like a LinkedIn post that wandered onto Twitter

### Humor & Wit (Twitter-specific)

Twitter is where personality wins. Be funny. Be sarcastic. Be the dev who says what everyone's thinking.

**Sarcasm rules:**
- Target systems, tools, ecosystem problems — never target people
- Self-deprecating about your own tools and code is always safe
- Mock-serious tone works great: treat a minor annoyance like a catastrophe
- Understatement > overstatement. "it works. somehow." hits harder than trying to be loud
- If a joke needs explaining, it's not landing. Cut it.

**What makes dev humor land:**
- Relatable pain: debugging, dependency hell, CSS, config files, prod incidents
- Absurd specificity: "spent 4 hours on a bug that was a missing semicolon" energy
- Unexpected honesty: admitting things most devs think but don't say publicly
- Technical inside jokes that make devs feel like they're in on it
- Anti-hype: "it's fine. it does the thing. no it won't change your life."

**Examples of funny/witty tweets:**
```
shipped v2.3 — rewrote the parser from scratch. 3x faster, half the code. sometimes deleting is the feature.
```
```
TIL you can pass --frozen-lockfile to pnpm install and it'll fail if the lockfile is out of date instead of silently updating it. would've saved me 2 hours last week.
```
```
just mass-deleted 4000 lines and the tests still pass. either the refactor worked or the tests are lying. scared to find out which.
```
```
spent 3 hours debugging a race condition. the fix was adding one `await`. im fine. everything is fine.
```
```
hot take: your tsconfig.json has more lines than your actual code and that's a skill issue (mine, specifically)
```
```
the best error message i've ever written: "this shouldn't happen. if it does, something is deeply wrong and you should probably take a walk."
```
```
open source maintainer mood: mass-closing issues labeled "won't fix" because i simply will not be fixing them
```

**Comment style (for engagement):**
- 1-5 words, punchy, genuinely funny when possible
- Sarcastic agreement: "oh absolutely not", "this is violence", "cursed but valid"
- Real reactions: "oh this is nasty", "been burned by this exact thing", "finally someone said it"
- Add a small insight that extends the original post
- Dark humor about shared dev pain: "this is the way" when someone describes a hacky workaround
- Never reply with just an emoji
- Never reply "Great post!" or "Thanks for sharing!" — that's bot behavior
- A 3-word sarcastic agreement gets more engagement than a 50-word serious analysis

### Thread Strategy

When a topic deserves more than one tweet:
- **4-8 tweets** is the sweet spot (completion drops after 8)
- **First tweet is everything** — it must hook people into clicking "Show this thread"
- Insert a screenshot, terminal output, or diagram every 3-4 tweets (increases completion by ~45%)
- Don't number tweets unless the order is critical

---

## LinkedIn

**Vibe:** Smart colleague sharing something they learned at work. Honest about failures.

**Do:**
- First-person stories. "Last week I..." or "We ran into a problem where..."
- Concrete numbers. "Reduced CI time by 40%" not "improved our pipeline."
- One line per paragraph (LinkedIn's algorithm rewards this formatting)
- Hook in the first line — that's all people see before "...see more"
- End with a genuine question if you want engagement, but make it specific
- Share lessons from actual failures — failure posts outperform success stories on LinkedIn
- Mention team members, tools, or specific decisions

**Don't:**
- Write in third person
- Use bullet-point listicles as the whole post
- Start with "I'm excited to announce" or "Thrilled to share"
- Use the word "journey"
- Add 15 hashtags at the bottom
- Sound like a TED talk transcript
- Post motivational quotes

**Algorithm notes (2025-2026):**
- Failure/lessons-learned posts get significantly more reach than success announcements
- Comments in the first 60-120 minutes heavily influence how far the post reaches
- Carousels/PDFs get ~4x more reach than plain text
- Video reach has dropped ~35% — deprioritized by the algorithm
- Niche, specific content gets served to exactly the right audience

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

**Vibe:** Fellow community member who happens to have built something. Self-deprecating. Brutally honest.

Reddit rewards the opposite of marketing. The more you undersell, the more they trust you. Sarcasm and self-deprecation are your best tools here.

**Do:**
- Match the subreddit's tone exactly (r/programming is snarkier than r/webdev)
- Lead with what's useful to the reader, not what's cool about your project
- Be self-deprecating. "I built this janky thing and it actually works" > "Introducing my revolutionary tool"
- Answer every comment, especially critical ones — with grace and humor
- Share the technical details: architecture, tradeoffs, what you'd do differently
- Post in relevant subreddits, not just r/programming
- Admit what's broken, ugly, or hacky before someone else points it out

**Don't:**
- Title with hype: "Revolutionary new tool that changes everything!!!"
- Ignore the subreddit's self-promotion rules (most allow 10% self-promo max)
- Get defensive about criticism — laugh at valid criticism, it's disarming
- Cross-post to 10 subreddits simultaneously (pick 1-2 most relevant)
- Use marketing language of any kind

### Humor & Sarcasm (Reddit-specific)

Reddit devs have the sharpest BS detector on the internet. Humor is how you earn trust.

**Self-deprecation is king:**
- Openly mock your own code quality: "it works but i'm not proud of the parser"
- Undersell: "it's a small tool that does one thing. it does that thing okay."
- Be honest about limitations: "the caching is basically a hashmap and a prayer"
- Admit your motivation: "i was too lazy to keep editing config files so i automated my laziness"

**Sarcasm targets (safe):**
- The JS/TS ecosystem and its churn
- Config file proliferation
- "It works on my machine" energy
- The gap between planned architecture and actual architecture
- Dependencies that pull in half of npm

**Good titles (with personality):**
```
[Show r/webdev] I built a CLI that does X — here's what I learned about Y
```
```
After 6 months of side-project work, I finally shipped X. Source code in comments.
```
```
I got tired of editing tsconfig files by hand so I wrote a CLI to do it for me. It's probably overkill but here we are.
```
```
Built a thing that auto-generates workspace configs. It's held together with regex and optimism.
```

**Best subreddits:** r/opensource, r/sideproject, r/coolgithubprojects, r/programming, r/webdev, r/typescript, r/javascript, r/node, r/commandline
- r/programming: most skeptical, wants deep technical substance
- r/webdev: more supportive, appreciates practical tools
- r/opensource: receptive to launches if you're genuine
- r/sideproject: most forgiving, celebrates any shipped project

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
- Keep titles under 12 words — attractive AND informative

**Don't:**
- Write a product announcement disguised as a tutorial
- Skip the "why" — explain your reasoning, not just the steps
- Assume advanced knowledge without saying so
- Write walls of text without code breaks

**Syndication tip:** If cross-posting from your blog, wait 2-10 days for Google to index your original first. Always use canonical URLs.

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

**Syndication tip:** Same as Dev.to — publish on your own site first, syndicate to Medium after indexing. Use canonical links.

---

## Bluesky

**Vibe:** Early Twitter energy. The internet is fun again. Nerdy and genuine.

Bluesky has 35M+ users and a growing dev community. It's less noisy than X, so genuine engagement stands out more.

**Do:**
- Post like it's 2010 Twitter — genuine, nerdy, less performative
- Share work-in-progress, not just polished announcements
- Engage with the developer community there (it's smaller, more intimate)
- Cross-post your best Twitter content but adapt it slightly
- Use alt text on images
- Be playful — the community rewards personality over polish

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
- Respond to EVERY comment — comments are a stronger ranking signal than upvotes
- Submit Tuesday-Thursday for best visibility

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
