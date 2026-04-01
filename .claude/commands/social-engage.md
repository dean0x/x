# /social-engage — Focused Engagement Round

You are helping an agentic engineer build their audience through genuine engagement in the AI/LLM space. This command can be run 2-3x daily with different focus areas.

Arguments: `$ARGUMENTS` (optional: topic to focus on, defaults to the user's core topics)

## Step 0: Load Context

Read:
- `social/config/tone-guide.md` — the "Comment style" section for Twitter and engagement rules
- `social/config/banned-words.json` — never use these in comments either
- `social/config/learnings.json` — any learned engagement preferences
- `social/config/ai-sources.json` — AI/LLM sources and social accounts to monitor

## Step 0.5: Rate Limit & Deduplication Check

**Rate limits — check BEFORE doing any work:**

Read `social/workflows/content-calendar.json` and count engagement from the last 24 hours.

| Metric | Hard Limit | Action |
|--------|-----------|--------|
| Engagement opened today | 50 | STOP. "Daily engagement limit reached ({n}/50). Come back tomorrow." Exit immediately. |
| Engagement opened this week | 200 | WARN. "Heavy engagement week ({n}/200). Reducing to 15 max this round." |

Show status line:
```
📊 Today: {n}/50 engagement | This week: {n}/200
```

**Deduplication:**

Read today's history from `social/history/YYYY-MM-DD.json` (if exists). Extract:
- All `engagement[].target_author` — authors already engaged with today
- All `engagement[].target_url` — threads already replied to

When evaluating targets in Step 1, silently skip any that match today's history.

## Step 1: Find Target Posts

Launch a sub-agent (Agent tool) to search for engaging posts:

```
Search the web for recent Twitter/X posts (last 24h) about: {topic or default: AI, LLMs, Claude Code, AI coding tools, Anthropic, OpenAI, AI agents, open-weight models, prompt engineering, fine-tuning}

Also check recent posts from accounts listed in social/config/ai-sources.json → social_accounts_to_monitor
(e.g., @AnthropicAI, @OpenAI, @GoogleDeepMind, @karpathy, @swyx, @huggingface, @cursor_ai, etc.)

Find posts that:
- Have some engagement (5+ likes) — active conversations
- Ask a question, share an opinion, compare models, announce AI tools, or debate AI topics — easy to reply to
- Are from accounts with 1k-100k followers — visibility sweet spot
- Are NOT from mega-accounts (>500k) where replies get buried
- Don't already have 200+ replies (too late)

For each post return:
- Author handle and follower count
- Post text (truncated to 100 chars)
- Post URL
- A suggested 1-5 word comment (from an agentic engineer's perspective)

Target: 20-50 posts.
```

## Step 1.5: Score & Prioritize Targets

Score each candidate post on three dimensions (1-5 each):

| Dimension | 1 (Low) | 3 (Medium) | 5 (High) |
|-----------|---------|-----------|----------|
| **Relevance** | Tangentially AI-related | AI tools/models general | Directly about your stack (Claude Code, agents, LLMs you use) |
| **Replyability** | Statement, hard to add to | Opinion you can react to | Direct question or debate you have experience with |
| **Visibility** | <5 likes, <1k followers | 10-50 likes, 5k-50k followers | 50+ likes, 10k-100k followers, <50 replies |

**Total score = Relevance + Replyability + Visibility** (3-15)

**Priority tiers based on score:**
- **Tier 1 (score 11-15)**: High priority — draft these first, present at top of list
- **Tier 2 (score 7-10)**: Medium priority — good filler, present in middle
- **Tier 3 (score 3-6)**: Low priority — only include if fewer than 15 Tier 1+2 targets

**Sort the final list by score (highest first).** Show the score in the output table.

**Additional priority boost (+2):**
- Post is a direct question (asking for recommendations, experiences, comparisons)
- Post mentions a tool/project you've built or contributed to
- Post has <10 replies (early mover advantage)

## Step 2: Draft Comments

For each found post, draft a comment following these rules:

**Comment quality tiers (aim for this mix):**
- **60% Quick reactions**: "oh damn", "been there", "the worst part is it's true", "yep"
- **25% Small insights**: "same thing happens with claude — loses context around message 40 if you don't /compact"
- **15% Helpful replies**: "fwiw claude code has --resume flag for exactly this"

**Humor & personality (lean into this):**
- A 3-word sarcastic agreement gets more engagement than a 50-word serious analysis
- Sarcastic agreement: "oh absolutely not", "this is violence", "cursed but valid"
- Mock-serious tone: "personally offended by this function signature"
- Dark humor about shared pain: "this is the way" when someone describes a hacky workaround
- Self-deprecating: "i asked the model to fix this and it made it worse. relatable."
- Comments should feel like "oh this is nasty" energy, not "lol so true!" energy

**NEVER:**
- "Great post!" / "Thanks for sharing!" / "This!" — bot behavior
- Just an emoji
- Self-promotion ("check out my tool!")
- Generic agreement
- Same comment text on multiple posts
- Reply to controversial/political posts
- Try-hard humor — if a joke doesn't land naturally, just be genuine instead

**Voice filter:** Check every comment against `banned-words.json`. Yes, even for 3-word comments — "Absolutely fascinating insight" would fail.

## Step 3: Present Batch

```
═══════════════════════════════════════════
  ENGAGEMENT ROUND — {topic} — {count} replies
  📊 Today: {n}/50 engagement | Score threshold: 7+
═══════════════════════════════════════════

TIER 1 (high priority):
 #  │ Score │ @author          │ Their post                          │ Your reply              │ Type
────┼───────┼──────────────────┼─────────────────────────────────────┼─────────────────────────┼─────
 1  │ 14    │ @karpathy (80k)  │ "Local models getting scary good..."│ "been there"             │ quick
 2  │ 12    │ @swyx (45k)      │ "What's your AI coding setup?"      │ "claude code + tmux"     │ insight

TIER 2 (medium):
 3  │ 9     │ @cursor_ai (15k) │ "AI code review is overrated..."    │ "it found 3 real bugs"   │ insight
 4  │ 8     │ @aidev (3k)      │ "RAG vs long context?"              │ "tested both"            │ helpful
...

═══════════════════════════════════════════
Which to open in Chrome?
  → "all" / "tier1" / numbers like "1 3 5 8-15" / "skip"
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
      "comment_type": "quick|insight|helpful",
      "priority_score": 12,
      "priority_tier": 1
    }
  ]
}
```

Also update `social/workflows/content-calendar.json`:
- Append each item to the `engagement` array with date, platform, author, URL, status, comment_type
- Update `daily_counts.YYYY-MM-DD.engagement_opened` and `engagement_skipped`

## Anti-Spam Safeguards

- **Hard limit: 50 engagement items per day** (across ALL `/social-engage` runs, not per session)
- Never suggest commenting on the same author twice in one day (check history)
- Never suggest the same comment text twice
- Never suggest replying to the same URL twice (check history)
- If the user has run `/social-engage` today already, show how many comments were already queued and remaining budget
- If budget is <10 remaining, only show Tier 1 targets
