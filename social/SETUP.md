# Social Media Automation — Setup Guide

## Quick Start

1. Set up API credentials (see below)
2. Run `/social-weekly` to plan your first week
3. Run `/social-daily` each morning
4. Run `/social-engage` 1-2x daily for engagement rounds

## API Credentials

Create a `.env` file (gitignored) with your credentials:

```bash
# Twitter/X — https://developer.twitter.com/en/portal
# Free tier: 1,500 tweets/mo. Basic ($100/mo): 3,000 tweets + 10,000 reads.
TWITTER_API_KEY=
TWITTER_API_SECRET=
TWITTER_ACCESS_TOKEN=
TWITTER_ACCESS_SECRET=
TWITTER_BEARER_TOKEN=

# LinkedIn — https://www.linkedin.com/developers/apps
# Free. Token expires every 2 months.
LINKEDIN_CLIENT_ID=
LINKEDIN_CLIENT_SECRET=
LINKEDIN_ACCESS_TOKEN=

# Reddit — https://www.reddit.com/prefs/apps
# Create a "script" type app. Free.
REDDIT_CLIENT_ID=
REDDIT_CLIENT_SECRET=
REDDIT_USERNAME=
REDDIT_PASSWORD=

# Dev.to — https://dev.to/settings/extensions
# Generate API Key. Free.
DEVTO_API_KEY=

# Medium — https://medium.com/me/settings/security
# Integration tokens section. Free.
MEDIUM_TOKEN=

# Bluesky — https://bsky.app/settings/app-passwords
# Create an app password. Completely free, no registration.
BLUESKY_HANDLE=         # e.g., yourname.bsky.social
BLUESKY_APP_PASSWORD=
```

Load it before running commands:
```bash
source .env
# or
export $(cat .env | grep -v '^#' | xargs)
```

## Available Commands

| Command | What it does |
|---------|-------------|
| `/social-daily` | Morning routine: check releases, draft tweets, queue engagement |
| `/social-publish <platform> [topic]` | Research + draft + approve + post to a platform |
| `/social-engage [platform]` | Find relevant posts and draft comments (default: twitter) |
| `/social-weekly` | Plan the week's content calendar |
| `/social-research <topic>` | Research what's working on each platform for a topic |
| `/social-status` | Dashboard of activity and upcoming posts |
| `/social-repurpose [content or "last"]` | Adapt content for multiple platforms |

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

## File Structure

```
social/
├── SETUP.md                  ← You are here
├── config/
│   ├── banned-words.json     ← 300+ AI words to never use
│   ├── tone-guide.md         ← Voice rules per platform
│   ├── platforms.json        ← API endpoints, rate limits, cadence
│   └── templates/            ← Post templates per platform/type
├── platforms/                ← API shell scripts
│   ├── twitter.sh
│   ├── linkedin.sh
│   ├── reddit.sh
│   ├── devto.sh
│   ├── medium.sh
│   ├── bluesky.sh
│   └── hackernews.sh
├── workflows/
│   ├── content-calendar.json ← Tracking: planned + posted content
│   ├── daily-release.md      ← Release detection workflow
│   ├── engagement-round.md   ← Comment engagement workflow
│   ├── weekly-plan.md        ← Weekly planning workflow
│   └── research/             ← Saved research briefs
└── scripts/
    ├── check-releases.sh     ← Detect new GitHub releases
    ├── fetch-trending.sh     ← Fetch trending dev topics
    └── post-tracker.sh       ← Log posts to calendar
```
