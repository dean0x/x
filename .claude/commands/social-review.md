# /social-review — Self-Learning Feedback Loop

You are analyzing what the user actually published vs what was suggested, to improve future content.

Run this weekly (or whenever the user wants to calibrate the system).

## Step 1: Load Draft History

Read all files in `social/history/` from the past 7 days (or since last review).
Count total suggestions: posts drafted, engagement comments drafted.

Also read `social/config/learnings.json` for current accumulated learnings.

## Step 1.5: Reply Scanning — Monitor Incoming Engagement

Before comparing drafts vs published, scan for replies/responses to your recent posts. This tells you what's working and what needs follow-up.

**For each platform, check replies to your recent content:**

**Twitter/X:**
- Navigate to your profile → Tweets & replies
- For each tweet from the past 7 days, note:
  - Reply count, like count, retweet count
  - Any direct questions in replies (these need responses)
  - Notable accounts that engaged (good for relationship building)

**Reddit:**
- Navigate to your profile → Comments
- For each comment from the past 7 days, check:
  - Upvote count (rough — Reddit fuzzes this)
  - Direct replies, especially questions
  - Whether the thread is still active

**LinkedIn:**
- Navigate to your profile → Activity
- Check comments on your posts from the past 7 days

**Categorize incoming replies:**

| Priority | Type | Example | Action |
|----------|------|---------|--------|
| **P1** | Direct question to you | "@you how did you set that up?" | Flag for immediate response |
| **P2** | Reply to your comment | "interesting, can you share more?" | Flag for follow-up |
| **P3** | Agreement/reaction | "this is so true" | Note for metrics, no response needed |
| **P4** | Disagreement/debate | "actually I think X is better" | Flag — respond only if you have genuine insight |

**Present reply scan results:**

```
═══════════════════════════════════════════
  INCOMING REPLIES — Past 7 Days
═══════════════════════════════════════════

ACTION NEEDED (P1/P2 — {count} replies):
 #  │ Platform │ On your post                    │ Their reply                 │ Priority
────┼──────────┼─────────────────────────────────┼─────────────────────────────┼─────────
 1  │ Twitter  │ "claude code + tmux setup..."    │ "@you what tmux config?"    │ P1 question
 2  │ Reddit   │ "sandbox syscall approach..."     │ "can you share the repo?"   │ P1 question
 3  │ Twitter  │ "deepseek locally is wild..."     │ "what hardware?"            │ P2 follow-up

METRICS ONLY (P3/P4 — {count} replies):
  Twitter: {n} reactions, {n} debates
  Reddit: {n} upvotes across {n} comments
  LinkedIn: {n} reactions

ENGAGEMENT HIGHLIGHTS:
  Best performing: "{post preview}" — {n} likes, {n} replies
  Worst performing: "{post preview}" — {n} likes, {n} replies
═══════════════════════════════════════════
```

For P1/P2 replies, offer to draft response comments and open them in Chrome (same flow as `/social-engage`).

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

**Reply scanning data to update:**
- `reply_scanning.last_scan` — set to today's date
- `reply_scanning.pending_responses` — P1/P2 replies that still need responses
- `reply_scanning.best_performing_posts` — keep top 5 by engagement (likes + replies)
- `reply_scanning.avg_reply_rate` — running average of replies per post across platforms
- `engagement_preferences.preferred_priority_tiers` — which tiers the user actually engages with most
- `engagement_preferences.avg_score_threshold` — average score of engagement items the user opened (vs skipped)

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
