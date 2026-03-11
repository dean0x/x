# /social-engage — Engagement Round

Arguments: `$ARGUMENTS` (optional: platform name, defaults to twitter)

You are helping an open-source developer build their audience through genuine engagement. The strategy: find relevant posts from accounts in their target audience and leave short, authentic comments.

## Step 1: Identify Target Conversations

Launch sub-agents to search for recent posts (last 24h) about:
- TypeScript, CLI tools, developer tooling, open source
- Monorepos, build tools, developer experience
- Topics related to the user's projects (check their repos for context)
- Posts from accounts the user wants to be visible to

Look for posts that:
- Have some engagement already (5+ likes) — these are active conversations
- Ask a question or share an opinion — easy to respond to
- Are from accounts with 1k-100k followers — sweet spot for visibility
- Are NOT from mega-accounts where your reply will be buried

## Step 2: Draft Comments

For each post found (aim for 20-50), draft a short comment.

**Comment rules:**
- 1-5 words for quick reactions: "oh this is nasty", "been there", "finally"
- 1-2 sentences max for substantive replies
- Add a small genuine insight that extends the conversation
- Light humor when natural, never forced
- Match the energy of the original post
- Reference your own experience briefly if relevant ("ran into this exact thing last week with pnpm workspaces")

**NEVER:**
- "Great post!" / "Thanks for sharing!" / "This is so true!" — bot behavior
- Just an emoji reply
- Unsolicited self-promotion ("you should check out my tool!")
- Generic agreement without adding anything
- Copy-paste the same comment on multiple posts
- Reply to controversial/political posts
- Pile on negative threads

**Comment quality tiers:**
1. **Quick reaction** (most common): "oh damn", "yep", "the worst part is it's true", "this but unironically"
2. **Small insight**: "same thing happens with pnpm — the lockfile just silently updates"
3. **Experience share**: "ran into this migrating a 40-package monorepo. ended up writing a codemod."
4. **Helpful reply**: "fwiw there's a --frozen-lockfile flag that prevents this"

Aim for: 60% quick reactions, 25% small insights, 15% experience shares / helpful replies.

## Step 3: Present Batch for Approval

Show the user a table:

```
Engagement Round — {count} comments queued

#  | Original Post (truncated)              | Your Comment                    | Action
---|----------------------------------------|---------------------------------|--------
1  | @user: "TypeScript monorepos are..."   | "been fighting this exact thing" | ✓/✗/Edit
2  | @user: "Anyone else hate tsconfig..."  | "40 tsconfigs and counting"      | ✓/✗/Edit
...
```

Let the user:
- Bulk approve all
- Approve/skip/edit individually
- Adjust any comment before posting

## Step 4: Post with Rate Limiting

For approved comments, post with delays:
- Twitter: 30-60 second delay between comments (avoid rate limits and spam detection)
- Other platforms: follow their rate limit guidance from `social/config/platforms.json`

Log all engagement to `social/workflows/content-calendar.json` with type "engagement".

## Step 5: Summary

After posting, show:
```
Engagement round complete:
- {n} comments posted
- {n} skipped
- Platforms: {list}
- Next suggested round: {time}
```

## Anti-Spam Safeguards

- Max 50 comments per session
- Min 30s delay between posts
- Never comment on the same account twice in one session
- Never post the same comment text twice
- Skip any post where the user has already commented
- Stop immediately if any rate limit or spam warning is received
