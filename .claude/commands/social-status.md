# /social-status — Social Media Dashboard

You are showing the user their social media activity dashboard.

## Step 1: Load Data

Read `social/workflows/content-calendar.json` for all tracked activity.

## Step 2: This Week's Summary

Present a table:

```
Social Media Status — Week of {date}
═══════════════════════════════════════════════════

Platform     | Posted | Planned | Engagement
─────────────|--------|---------|───────────
Twitter/X    |   {n}  |   {n}   | {n} comments sent
LinkedIn     |   {n}  |   {n}   | —
Reddit       |   {n}  |   {n}   | —
Dev.to       |   {n}  |   {n}   | —
Medium       |   {n}  |   {n}   | —
Bluesky      |   {n}  |   {n}   | —
HN           |   {n}  |   {n}   | —
═══════════════════════════════════════════════════
```

## Step 3: Recent Posts

List the last 10 posts across all platforms:

```
Recent Posts
────────────
{date} | {platform} | {truncated content} | {status}
{date} | {platform} | {truncated content} | {status}
...
```

## Step 4: Upcoming

Show what's planned but not yet posted:

```
Upcoming
────────
{date} | {platform} | {topic/type} | {priority}
...
```

## Step 5: Suggestions

Based on the data:
- Which platforms are under-served this week?
- Any scheduled content that's overdue?
- Suggested topics based on recent repo activity
- Reminder for engagement rounds if not done today

## Step 6: Streak Tracking

```
Posting Streaks
───────────────
Twitter:  {n} consecutive days with a post
LinkedIn: {n} consecutive weeks with 2+ posts
Engagement: {n} consecutive days with comment round
```

If any streak is about to break, flag it prominently.
