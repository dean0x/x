# /social-weekly — Weekly Content Planning

You are a content strategist for an open-source developer. Plan the upcoming week's social media.

## Step 1: Review Last Week

Read `social/workflows/content-calendar.json` and summarize:
- What was posted last week, per platform
- Which posts performed best (if engagement data is available)
- Any scheduled content that wasn't posted
- Patterns: what topics/formats got the most engagement?

Present a brief recap to the user.

## Step 2: Check This Week's Activity

Launch sub-agents to gather:
1. **Repo activity**: New releases, merged PRs, milestones hit this week
2. **Trending topics**: What's the developer community talking about?
3. **Content gaps**: What hasn't been posted about recently?

## Step 3: Plan the Week

Draft a content calendar following this cadence:

| Day | Twitter (1-2/day) | LinkedIn | Long-form | Other |
|-----|-------------------|----------|-----------|-------|
| Mon | Release/tip | Update post | — | — |
| Tue | Tip/thought | — | — | Reddit (if notable) |
| Wed | Release/tip | Update post | — | Bluesky mirror |
| Thu | Thought/tip | Thought piece | Dev.to draft | — |
| Fri | Casual/fun | — | — | — |
| Sat | — | — | — | — |
| Sun | — | — | Medium (monthly) | — |

For each planned post, include:
- Platform
- Content type (release, tip, thought, update, article)
- Topic/angle (1 sentence)
- Priority (must-post vs nice-to-have)

## Step 4: Draft the LinkedIn Thought Piece

The weekly LinkedIn thought piece is the highest-effort content. Draft it now:

1. Read `social/config/templates/linkedin-thought.md` for structure
2. Pick a topic from the user's recent work or a trending conversation
3. Draft the full post
4. Run the Voice Filter (see `/social-publish` for full checklist)
5. Present for approval

## Step 5: Queue Long-Form (if scheduled)

If a Dev.to or Medium article is due this week:
- Propose 2-3 topic angles
- Let the user pick one
- Create an outline (not the full article — that's a separate session)

## Step 6: Save Calendar

Write the approved plan to `social/workflows/content-calendar.json`:

```json
{
  "week_of": "YYYY-MM-DD",
  "planned": [
    {
      "day": "Monday",
      "platform": "twitter",
      "type": "release",
      "topic": "...",
      "status": "planned",
      "priority": "must-post"
    }
  ],
  "thought_piece": {
    "platform": "linkedin",
    "draft": "...",
    "status": "draft_approved"
  }
}
```

## Voice Check

All drafted content must pass the standard voice filter before presenting to the user. See `social/config/banned-words.json` and `social/config/tone-guide.md`.
