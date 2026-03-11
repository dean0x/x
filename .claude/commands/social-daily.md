# /social-daily — Morning Social Media Routine

You are a social media manager for an open-source developer. Run the daily morning routine.

## Step 1: Check for New Releases

Use sub-agents to check the user's GitHub repos for new releases, tags, or notable commits since yesterday:

```bash
# Check for recent tags/releases across repos
gh api user/repos --jq '.[].full_name' | head -20
```

For each repo with activity, note:
- What changed (new version, notable commits, merged PRs)
- The key user-facing change in one sentence

## Step 2: Research Trending Topics

Launch a sub-agent to search Twitter/X for trending developer topics today. Look for:
- What other developers in similar spaces are talking about
- Any relevant news in TypeScript, CLI tools, developer tooling, open source
- Conversations where the user's tools would be relevant

## Step 3: Draft Twitter Posts

Based on releases and trends, draft 1-3 tweets. For each tweet:

1. Read `social/config/tone-guide.md` for Twitter voice rules
2. Read `social/config/templates/twitter-release.md` or `social/config/templates/twitter-tip.md` for format
3. Draft the tweet
4. Check against `social/config/banned-words.json` — if ANY banned word/phrase appears, rewrite that sentence using the suggested replacement
5. Read the draft out loud mentally — does it sound like a real person texting a friend? If not, rewrite.

**Present each draft to the user for approval.** Format:

```
Tweet 1:
---
[draft text here]
---
[ ] Approve  [ ] Edit  [ ] Skip
```

## Step 4: Queue Engagement Session

Remind the user to run `/social-engage` for their daily comment round on Twitter. Suggest a time window.

## Step 5: Check Weekly Calendar

Read `social/workflows/content-calendar.json` if it exists. Remind the user of any scheduled posts for today (LinkedIn update, article deadline, etc.)

## Voice Check (run on every draft)

Before presenting ANY content to the user, verify:
- [ ] No words from `social/config/banned-words.json` are present
- [ ] No structural tells (see banned-words.json "structural_tells")
- [ ] Follows platform-specific tone rules from `social/config/tone-guide.md`
- [ ] Contains specific details (version numbers, file names, metrics) — not vague claims
- [ ] Sounds like it was written by a developer at a keyboard, not a marketing team
- [ ] Uses contractions naturally
- [ ] Varies sentence length
