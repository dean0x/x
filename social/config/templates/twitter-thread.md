# Twitter Thread Template

## Why Threads
Threads get 3x more engagement than single tweets. They're the best format for:
- Model comparisons with actual results
- "I tried X, here's what happened" narratives
- Breaking down a paper or new release
- Sharing a workflow or technique with examples
- Telling the story of building something

## Structure (4-8 tweets, sweet spot is 5-6)

### Tweet 1 — The Hook (MOST IMPORTANT)
```
{bold claim, surprising result, or intriguing question}

{optional: "thread 🧵" or just let the content speak}
```
This tweet determines if anyone clicks "Show this thread." Make it impossible to scroll past.

### Tweet 2 — Context / Setup
```
{brief background — what you were trying to do, what you tested, what the situation was}
```

### Tweets 3-5 — The Meat
```
{the actual findings, comparisons, code, screenshots, results}
{one idea per tweet — don't cram}
{insert a screenshot or code snippet every 2-3 tweets for visual breaks}
```

### Tweet 6 (or last) — The Landing
```
{takeaway, opinion, or what you'll do next}
{optional: link to repo, article, or full writeup}
```

## Rules
- **First tweet is everything.** If the hook doesn't work, nobody sees tweets 2-8.
- **One idea per tweet.** If you're cramming, you need another tweet.
- **Visual breaks every 2-3 tweets.** Screenshot, code snippet, terminal output. Increases thread completion by ~45%.
- **Don't number tweets** (1/8, 2/8...) unless order is critical. It looks robotic.
- **Max 8 tweets.** Completion drops hard after that. If you need more, write an article and link it.
- **End with value, not a CTA.** "follow me for more" is engagement bait. Let the thread sell itself.
- **Each tweet should work on its own** — people share individual tweets from threads.

## Thread Types for AI/LLM Content

### Model Comparison Thread
```
[1] tested claude, gpt-4o, and gemini on the same real-world coding task. not a benchmark — actual production code. results surprised me.

[2] the task: refactor a 400-line auth module to use a new session store. needs to understand existing patterns, preserve tests, handle edge cases.

[3] claude: nailed the refactor in one shot. understood the session patterns, preserved all test assertions, even caught a pre-existing bug.

[4] gpt-4o: solid refactor but missed 2 edge cases around session expiry. needed one follow-up prompt to fix. still good.

[5] gemini: restructured the module completely — different approach than what i asked for. interesting but not what i wanted. had to re-prompt 3 times.

[6] takeaway: for code that needs to match existing patterns, claude wins. for greenfield where you want creative approaches, gemini's "ignore your conventions" tendency is actually useful sometimes.
```

### "I Built This" Thread
```
[1] built an AI agent that reviews PRs and catches logic bugs (not just style nits). here's how it works and what i learned.

[2] the architecture: reads the PR diff → retrieves relevant context files → constructs a focused prompt → streams review comments back as inline suggestions.

[3] the hard part wasn't the LLM — it was context retrieval. which files does the model need to see to understand a 20-line diff? got this wrong 5 times before landing on [approach].

[4] [screenshot of a real review comment it generated]
this one found a race condition i'd missed. the model noticed that two concurrent requests could hit the same row.

[5] false positive rate: about 30% of comments are noise. working on filtering but honestly, 70% hit rate on logic bugs is better than most human reviewers on a Friday afternoon.

[6] repo: [link]. it's rough but it works. contributions welcome, especially on the context retrieval — that's where the real improvement is.
```

### Paper/Release Breakdown Thread
```
[1] anthropic just dropped [paper/feature]. read the whole thing. here's what actually matters and what's noise.

[2] the headline claim: [summary]. sounds huge but here's the context they buried in section 4...

[3] what this means in practice: [practical implication]. i tested this on [your use case] and [result].

[4] what they didn't mention: [gap, limitation, or interesting omission]. this matters because [why].

[5] my take: [your genuine opinion]. if you're building [type of thing], this changes [specific aspect]. if not, you can probably ignore this until [condition].
```

### Workflow/Technique Thread
```
[1] my AI coding workflow that actually works (after 6 months of iteration). not a tutorial — just what stuck after trying everything.

[2] step 1: [approach]. i know this sounds [obvious/weird] but [why it matters].

[3] step 2: [approach]. [screenshot or code example].

[4] the thing nobody tells you: [hard-earned insight]. this alone saved me [specific metric].

[5] what i stopped doing: [abandoned approach]. sounded good in theory. in practice, [why it failed].
```

## Bad Thread Patterns
- **The "1/47" mega-thread** — nobody's reading 47 tweets. Write a blog post.
- **The "thread 🧵👇" with a weak hook** — the emoji won't save a boring first tweet.
- **Every tweet is a fortune cookie** — vague wisdom without specifics.
- **No visuals** — a wall of text tweets kills engagement.
- **Self-promotional CTA ending** — "follow for more AI content 🔔" is instant credibility loss.
