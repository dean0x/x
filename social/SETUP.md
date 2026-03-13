# Social Media Automation — Setup Guide

## Quick Start

1. Make sure Claude Code has access to Chrome (via Chrome extension)
2. Run `/social` each morning — it handles everything
3. Run `/social-engage` 1-2x daily for engagement rounds
4. Run `/social-review` weekly to teach the system your voice

No API keys needed. Everything works through Chrome tabs with pre-filled content.

## How It Works

1. **`/social`** — the daily orchestrator. Spawns 3 parallel sub-agents (release detection, trend research, engagement targets), drafts content, presents a batch for approval, and opens Chrome tabs with pre-filled content for each approved item.

2. **`/social-engage`** — focused engagement round. Finds 20-50 relevant posts, drafts short comments, opens reply tabs in Chrome.

3. **`/social-review`** — self-learning. Navigates your profiles via Chrome, reads what you actually posted, compares against suggestions, and updates `learnings.json` so future drafts improve.

## Available Commands

| Command | What it does | When to run |
|---------|-------------|-------------|
| `/social` | Full morning routine: research, draft, approve, open tabs | Once daily |
| `/social-engage [topic]` | Engagement round: find posts, draft comments, open reply tabs | 1-3x daily |
| `/social-review` | Self-learning: compare drafts vs published, update preferences | Weekly |

## Posting Cadence

| Platform | Frequency | Content |
|----------|-----------|---------|
| Twitter/X | 1-2/day + 20-50 comments | Releases, tips, hot takes |
| LinkedIn | 2 updates + 1 thought piece/week | Stories, lessons, insights |
| Reddit | 1-2/week | Technical posts, launches |
| Dev.to | 1-2/month | Tutorials, how-I-built |
| Medium | 1/month | Long-form narrative |
| Bluesky | Mirror best tweets | Same as Twitter, adapted |
| HN | Notable releases only | Show HN submissions |

## Platform Delivery

| Platform | Method | Pre-fill? |
|----------|--------|-----------|
| Twitter/X | Intent URL opens compose | Yes — text pre-filled |
| Bluesky | Intent URL opens compose | Yes — text pre-filled |
| Reddit | Submit URL opens form | Yes — title + body pre-filled |
| Dev.to | Prefill URL opens editor | Yes — full markdown + tags |
| LinkedIn | Chrome navigate + paste | No — paste manually |
| Medium | Chrome navigate + paste | No — paste manually |
| HN | Chrome navigate | No — submit manually |

## Self-Learning Loop

```
/social drafts content → saved to social/history/YYYY-MM-DD.json
        ↓
User publishes (or skips) via Chrome tabs
        ↓
/social-review reads your profiles, compares against drafts
        ↓
Updates social/config/learnings.json (words to avoid, preferred patterns, skip rates)
        ↓
Next /social run reads learnings → better drafts
```

## File Structure

```
.claude/commands/
├── social.md               ← Daily orchestrator (the main command)
├── social-engage.md        ← Engagement round
└── social-review.md        ← Self-learning feedback

social/
├── SETUP.md                ← You are here
├── config/
│   ├── banned-words.json   ← 300+ AI words to never use
│   ├── tone-guide.md       ← Voice rules per platform
│   ├── platforms.json      ← Platform URLs, cadence, char limits
│   ├── learnings.json      ← Accumulated preferences (grows over time)
│   └── templates/          ← Post templates per platform/type
├── platforms/
│   └── open-tab.sh         ← Opens Chrome tabs with pre-filled content
├── history/                ← Draft history (for self-learning comparison)
├── workflows/
│   └── content-calendar.json
└── scripts/
    ├── check-releases.sh   ← Detect new GitHub releases
    └── fetch-trending.sh   ← Fetch trending dev topics
```
