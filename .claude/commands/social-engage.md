# /social-engage — Focused Engagement Round

You are helping an open-source developer build their audience through genuine engagement. This command can be run 2-3x daily with different focus areas.

Arguments: `$ARGUMENTS` (optional: topic to focus on, defaults to the user's core topics)

## Step 0: Load Context

Read:
- `social/config/tone-guide.md` — the "Comment style" section for Twitter and engagement rules
- `social/config/banned-words.json` — never use these in comments either
- `social/config/learnings.json` — any learned engagement preferences

## Step 1: Find Target Posts

Launch a sub-agent (Agent tool) to search for engaging posts:

```
Search the web for recent Twitter/X posts (last 24h) about: {topic or default: TypeScript, CLI tools, developer tooling, open source, monorepos}

Find posts that:
- Have some engagement (5+ likes) — active conversations
- Ask a question, share an opinion, or announce something — easy to reply to
- Are from accounts with 1k-100k followers — visibility sweet spot
- Are NOT from mega-accounts (>500k) where replies get buried
- Don't already have 200+ replies (too late)

For each post return:
- Author handle and follower count
- Post text (truncated to 100 chars)
- Post URL
- A suggested 1-5 word comment

Target: 20-50 posts.
```

## Step 2: Draft Comments

For each found post, draft a comment following these rules:

**Comment quality tiers (aim for this mix):**
- **60% Quick reactions**: "oh damn", "been there", "the worst part is it's true", "yep"
- **25% Small insights**: "same thing happens with pnpm — lockfile silently updates"
- **15% Helpful replies**: "fwiw there's a --frozen-lockfile flag for this"

**NEVER:**
- "Great post!" / "Thanks for sharing!" / "This!" — bot behavior
- Just an emoji
- Self-promotion ("check out my tool!")
- Generic agreement
- Same comment text on multiple posts
- Reply to controversial/political posts

**Voice filter:** Check every comment against `banned-words.json`. Yes, even for 3-word comments — "Absolutely fascinating insight" would fail.

## Step 3: Present Batch

```
═══════════════════════════════════════════
  ENGAGEMENT ROUND — {topic} — {count} replies
═══════════════════════════════════════════

 #  │ @author          │ Their post                          │ Your reply              │ Type
────┼──────────────────┼─────────────────────────────────────┼─────────────────────────┼─────
 1  │ @typescript (5k) │ "Monorepos are a pain point..."     │ "been fighting this"    │ quick
 2  │ @devtools (12k)  │ "Anyone else hate tsconfig?"        │ "40 and counting"       │ quick
 3  │ @nodejs (8k)     │ "What's your build tool?"           │ "pnpm + turborepo, no contest" │ insight
 4  │ @webdev (3k)     │ "My CI takes 20 minutes"            │ "try --frozen-lockfile"  │ helpful
...

═══════════════════════════════════════════
Which to open in Chrome?
  → "all" / numbers like "1 3 5 8-15" / "skip"
═══════════════════════════════════════════
```

## Step 4: Open Reply Tabs

For each approved comment, open TWO Chrome tabs:
1. The original post (so user sees context)
2. The reply intent URL with pre-filled text

```bash
# Open original post for context
xdg-open "ORIGINAL_POST_URL"
sleep 1
# Open reply with pre-filled text
xdg-open "https://x.com/intent/tweet?in_reply_to=TWEET_ID&text=$(python3 -c "import urllib.parse; print(urllib.parse.quote('REPLY_TEXT'))")"
sleep 2
```

Add 2-3 second delays between tab pairs to avoid browser overload.

## Step 5: Save to History

Append engagement items to `social/history/YYYY-MM-DD.json`:

```json
{
  "engagement": [
    {
      "id": "eng-{n}",
      "platform": "twitter",
      "target_url": "https://x.com/...",
      "target_author": "@username",
      "target_text": "truncated text",
      "draft_comment": "the suggested reply",
      "status": "opened|skipped",
      "comment_type": "quick|insight|helpful"
    }
  ]
}
```

## Anti-Spam Safeguards

- Max 50 comments per session
- Never suggest commenting on the same author twice in one session
- Never suggest the same comment text twice
- If the user has run `/social-engage` today already, show how many comments were already queued
