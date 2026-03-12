# /social-review — Self-Learning Feedback Loop

You are analyzing what the user actually published vs what was suggested, to improve future content.

Run this weekly (or whenever the user wants to calibrate the system).

## Step 1: Load Draft History

Read all files in `social/history/` from the past 7 days (or since last review).
Count total suggestions: posts drafted, engagement comments drafted.

Also read `social/config/learnings.json` for current accumulated learnings.

## Step 2: Check What Was Actually Published

Navigate to the user's profiles via Chrome to see what they actually posted:

**Twitter/X:**
- Navigate to the user's Twitter profile
- Read their recent tweets and replies from the past week
- Note: exact text, timestamps, engagement (likes/replies/retweets if visible)

**LinkedIn:**
- Navigate to the user's LinkedIn profile → Activity/Posts
- Read their recent posts from the past week

**Bluesky:**
- Navigate to the user's Bluesky profile
- Read their recent posts from the past week

**Reddit:**
- Navigate to the user's Reddit profile
- Read their recent posts and comments from the past week

**Dev.to / Medium:**
- Check if any new articles were published this week

For each platform, compile a list of what was actually posted.

## Step 3: Match and Compare

For each draft in the history:
1. **Find the match**: Does any published post match this draft? (Exact or similar text)
2. **Categorize**:
   - `posted_as_is` — draft was published with no/minimal changes
   - `posted_with_edits` — draft was published but the user modified it
   - `skipped` — draft was never published
3. **For edited posts**: identify the specific changes:
   - Words/phrases the user removed
   - Words/phrases the user added
   - Structural changes (shortened, expanded, reordered)
   - Tone shifts

## Step 4: Extract Patterns

Present findings to the user:

```
═══════════════════════════════════════════
  SOCIAL REVIEW — Week of {date}
═══════════════════════════════════════════

SUMMARY:
  Suggested: {n} posts, {n} engagement comments
  Posted as-is: {n}
  Posted with edits: {n}
  Skipped: {n}

PLATFORM USAGE:
  Twitter:  {n}/{n} posted (skip rate: {%})
  LinkedIn: {n}/{n} posted
  Bluesky:  {n}/{n} posted
  Reddit:   {n}/{n} posted

EDITS MADE (patterns I should learn):
  Words you removed: {list}
  Words you added: {list}
  You shortened {n} drafts (avg reduction: {%})
  You rewrote hooks in {n} posts

ENGAGEMENT:
  Comments opened: {n}
  Estimated posted: {n} (based on profile activity)

═══════════════════════════════════════════
```

## Step 5: Update Learnings

Update `social/config/learnings.json` with new patterns:

```json
{
  "version": 1,
  "last_review": "YYYY-MM-DD",
  "voice": {
    "words_to_avoid": ["words the user consistently removes"],
    "preferred_words": ["words the user consistently adds"],
    "preferred_openers": ["opening patterns from posts that went through unchanged"],
    "preferred_length": {
      "twitter": "avg char count of published tweets",
      "linkedin": "avg char count of published linkedin posts"
    }
  },
  "platform_skip_rates": {
    "twitter": 0.1,
    "linkedin": 0.3,
    "bluesky": 0.2,
    "reddit": 0.5,
    "medium": 0.8
  },
  "successful_patterns": ["content types/topics that got posted consistently"],
  "engagement_preferences": {
    "preferred_comment_types": ["quick", "insight"],
    "avg_comments_per_session": 25
  },
  "feedback_log": [
    {
      "date": "YYYY-MM-DD",
      "suggested_posts": 15,
      "posted_posts": 11,
      "edited_posts": 4,
      "suggested_engagement": 30,
      "estimated_posted_engagement": 22
    }
  ]
}
```

**Rules for updating learnings:**
- APPEND to `words_to_avoid` and `preferred_words` — don't overwrite previous entries
- Update `platform_skip_rates` as a running average
- Keep `feedback_log` as a growing array — it shows improvement over time
- If a word appears in `words_to_avoid` AND in `banned-words.json`, note it but don't duplicate

## Step 6: Suggest Improvements

Based on the analysis, suggest specific improvements:

```
SUGGESTIONS FOR NEXT WEEK:
  → You shortened 70% of Twitter drafts — I'll aim for {n} chars instead of {n}
  → You skipped all Medium suggestions — reducing to 1/month
  → You added "lol" to 3 posts — I'll incorporate casual humor more
  → Your best-performing hook was "TIL..." — I'll use this pattern more
```

These suggestions are informational — the actual changes are already saved to `learnings.json` and will be picked up by the next `/social` run.
