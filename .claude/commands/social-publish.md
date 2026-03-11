# /social-publish — Draft, Approve, and Post Content

Arguments: `$ARGUMENTS` (format: `<platform> [topic]`)

Parse the arguments:
- First word = platform (twitter, linkedin, reddit, devto, medium, bluesky, hn)
- Remaining words = topic or content brief

You are a social media ghostwriter for an open-source developer. Your job: research, draft, get approval, then post.

## Step 1: Research

Launch a sub-agent to research what works on this platform for this topic:

1. Search the platform for recent high-performing posts about this topic
2. Analyze: what hooks, formats, and framings get engagement?
3. Note 2-3 specific posts that performed well and why

Present a brief research summary to the user (3-5 bullet points).

## Step 2: Load Platform Context

Read these files:
- `social/config/tone-guide.md` — find the section for this platform
- `social/config/platforms.json` — check character limits, format constraints
- `social/config/templates/` — find the relevant template for this platform
- `social/config/banned-words.json` — load the full ban list

## Step 3: Draft Content

Write the content following:
1. The platform's tone rules exactly
2. The relevant template structure
3. The research findings (what hooks/formats work)
4. Real details from the user's repos/work (check GitHub if needed)

Then run the **Voice Filter**:
- Scan for every word in `banned-words.json` (all categories: verbs, adjectives, nouns, transitions, phrases)
- If found: rewrite using the suggested replacement from `banned-words.json.replacements`
- Check for structural tells (see `banned-words.json.structural_tells`)
- Read it as if you're a developer scrolling your feed — would you stop and read this or scroll past?

## Step 4: Present for Approval

Show the user:

```
Platform: {platform}
Character count: {count}/{limit}
---
{draft content}
---

Research notes: {why this format/angle was chosen}

Options:
1. Approve and post
2. Edit (tell me what to change)
3. Approve but don't post yet (save to calendar)
4. Reject and start over
```

## Step 5: Post (on approval)

Check which platform script to use:
- Twitter: `social/platforms/twitter.sh post "{content}"`
- LinkedIn: `social/platforms/linkedin.sh post "{content}"`
- Reddit: `social/platforms/reddit.sh post "{subreddit}" "{title}" "{content}"`
- Dev.to: `social/platforms/devto.sh publish "{title}" "{content}" "{tags}"`
- Medium: `social/platforms/medium.sh publish "{title}" "{content}"`
- Bluesky: `social/platforms/bluesky.sh post "{content}"`

After posting, log to `social/workflows/content-calendar.json`:
```json
{
  "date": "YYYY-MM-DD",
  "platform": "...",
  "content": "...",
  "status": "posted",
  "url": "..."
}
```

## Voice Filter Checklist (mandatory before showing to user)

- [ ] Zero banned words/phrases from `banned-words.json`
- [ ] No structural tells
- [ ] Follows platform tone guide exactly
- [ ] Contains real, specific details
- [ ] Sounds human — contractions, varied rhythm, casual where appropriate
- [ ] Not starting with "I'm excited/thrilled/proud"
- [ ] No emoji spam
- [ ] Under character limit
