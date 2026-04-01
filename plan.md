# Social Media Automation System — Implementation Plan

## Architecture (inspired by DevFlow's plugin system)

Like DevFlow uses plugins + skills + agent teams, this system uses:
- **Claude Code custom commands** (`.claude/commands/*.md`) — the user-facing interface
- **Platform adapters** (`social/platforms/`) — shell scripts wrapping each platform's API
- **Workflow engine** (`social/workflows/`) — orchestration logic
- **Content intelligence** (`social/config/`) — tone rules, banned AI words, templates
- **Research agents** — sub-agents that analyze trending content before drafting

## Directory Structure

```
.claude/
  commands/
    social-daily.md          # /social-daily — Morning routine: check repos, draft tweets, queue engagement
    social-publish.md        # /social-publish — Draft + approve + post content to a specific platform
    social-engage.md         # /social-engage — Find and comment on relevant posts (Twitter focus)
    social-weekly.md         # /social-weekly — Weekly planning: LinkedIn thought piece + Medium/Dev.to article
    social-research.md       # /social-research — Research trending topics, competitor posts, what's working
    social-status.md         # /social-status — Dashboard of what was posted, engagement metrics
    social-repurpose.md      # /social-repurpose — Turn one piece of content into multi-platform variants

social/
  config/
    platforms.json           # Platform configs: API endpoints, rate limits, posting cadence
    tone-guide.md            # Voice/tone rules per platform
    banned-words.json        # 300+ AI-overused words/phrases to never use
    templates/
      twitter-release.md     # Template: announcing a new release on Twitter
      twitter-tip.md         # Template: sharing a dev tip
      linkedin-update.md     # Template: project update for LinkedIn
      linkedin-thought.md    # Template: thought leadership post
      reddit-launch.md       # Template: subreddit launch post
      devto-article.md       # Template: Dev.to technical article
      medium-article.md      # Template: Medium long-form
      hn-launch.md           # Template: Hacker News Show HN post
      bluesky-post.md        # Template: Bluesky post
  platforms/
    twitter.sh               # X/Twitter API wrapper (post, reply, search, like)
    linkedin.sh              # LinkedIn Posts API wrapper
    reddit.sh                # Reddit API wrapper (PRAW-based)
    devto.sh                 # Dev.to API wrapper (simple REST)
    medium.sh                # Medium API wrapper
    bluesky.sh               # Bluesky/AT Protocol wrapper (free, no key needed)
    hackernews.sh            # HN submission helper
  workflows/
    daily-release.md         # Workflow: detect new releases → draft announcements → approve → post
    engagement-round.md      # Workflow: find 20-50 relevant posts → draft comments → approve → post
    weekly-plan.md           # Workflow: plan week's content calendar
    content-calendar.json    # Tracking: what's scheduled, what's posted
  scripts/
    check-releases.sh        # Check GitHub repos for new releases/tags since last run
    fetch-trending.sh        # Fetch trending topics from each platform
    post-tracker.sh          # Log posted content, timestamps, engagement
```

## Command Details

### `/social-daily` — Morning Routine
1. Sub-agent checks GitHub repos for new releases/commits since yesterday
2. Sub-agent researches trending developer topics on Twitter
3. Drafts 1-3 tweets about releases/work done
4. Presents drafts for approval (edit/approve/reject each)
5. On approval, posts via platform adapter
6. Queues engagement session (see `/social-engage`)

### `/social-publish <platform> [topic]` — Create + Post
1. Research sub-agent finds top-performing recent posts on that platform about the topic
2. Analyzes patterns (hooks, structure, length, hashtags)
3. Drafts content following platform-specific tone guide
4. Runs through banned-words filter (strips AI-sounding language)
5. Presents for approval with diff view
6. Posts via platform adapter on approval

### `/social-engage` — Engagement Round (Twitter focus)
1. Sub-agent searches for relevant posts from target accounts/topics
2. Presents a batch of 20-50 posts to comment on
3. For each: drafts a short (1-5 word), witty/relevant comment
4. User bulk-approves, edits, or skips each
5. Posts approved comments with rate-limiting delays
6. Logs engagement for tracking

### `/social-weekly` — Weekly Planning
1. Reviews what was posted this week and engagement metrics
2. Plans next week's content calendar:
   - Twitter: 1-2 posts/day (releases, tips, thoughts)
   - LinkedIn: 2 updates + 1 thought piece
   - Dev.to/Medium: 1 article (alternating)
   - Reddit: 1-2 relevant posts
   - Bluesky: mirror key Twitter posts
   - HN: 1 Show HN if there's a notable release
3. Drafts the thought leadership LinkedIn post
4. Queues everything in content-calendar.json

### `/social-research <topic>` — Deep Research
1. Searches Twitter, LinkedIn, Reddit, HN for top posts on topic
2. Analyzes what hooks, formats, and framings performed best
3. Returns a brief with: top 5 posts, why they worked, suggested angles
4. Feeds into `/social-publish` as context

### `/social-status` — Dashboard
1. Reads content-calendar.json and post-tracker logs
2. Shows: posts this week by platform, engagement rates, best performers
3. Suggests adjustments to strategy

### `/social-repurpose` — Cross-Platform Adaptation
1. Takes a piece of content (tweet, article, etc.)
2. Adapts it for each target platform (tone, length, format)
3. Presents all variants for approval
4. Posts approved variants

## Content Intelligence

### Banned Words System (`banned-words.json`)
300+ words/phrases that flag content as AI-generated:
- **Transitions**: Furthermore, Moreover, Additionally, Indeed, Subsequently
- **Adjectives**: Robust, Comprehensive, Pivotal, Cutting-edge, Seamless, Innovative
- **Verbs**: Delve, Leverage, Harness, Navigate, Foster, Spearhead, Embark
- **Phrases**: "It's important to note", "In today's ever-evolving", "At the forefront of", "Unlock the potential", "Pave the way", "Game-changer", "Deep dive"
- **Structural tells**: Starting with "I" then a feeling, excessive em dashes, "Let's" openings, hedging phrases

### Tone Guide Per Platform (`tone-guide.md`)
- **Twitter/X**: Casual, punchy, opinionated. Short sentences. Hot takes welcome. Use "lol", "ngl", "tbh". No hashtags unless ironic.
- **LinkedIn**: Professional but human. First-person stories. Concrete numbers. Line breaks between sentences (LinkedIn formatting). No buzzwords.
- **Reddit**: Community-first. Understated, self-deprecating. Never self-promote without providing value first. Answer questions in comments.
- **Dev.to**: Tutorial-style. Code examples. Practical. "Here's how I solved X" framing.
- **Medium**: Long-form narrative. Personal angle on technical topic. Strong opening hook.
- **Bluesky**: Similar to early Twitter. Genuine, nerdy, less performative.
- **HN**: Ultra-concise title. Technical substance. No hype words. Show don't tell.

## Posting Cadence

| Platform | Frequency | Best Times | Content Type |
|----------|-----------|------------|--------------|
| Twitter/X | 1-2 posts/day + 20-50 comments | 9-11am, 2-4pm ET | Releases, tips, hot takes, threads |
| LinkedIn | 2 updates + 1 thought piece/week | Tue-Thu 8-10am | Project updates, lessons learned, career insights |
| Reddit | 1-2/week | Varies by sub | Show-off posts, Ask/Answer, launch announcements |
| Dev.to | 1-2/month | Weekday mornings | Tutorials, how-I-built-X, tool comparisons |
| Medium | 1/month | Weekday mornings | Long-form technical narrative |
| Bluesky | Mirror key tweets | Same as Twitter | Same as Twitter, adapted |
| HN | When notable release | 9-11am ET weekdays | Show HN, technical deep dives |

## Platform API Notes

| Platform | API | Auth | Free Tier Limits |
|----------|-----|------|-----------------|
| Twitter/X | v2 REST API | OAuth 2.0 | Free: 1,500 tweets/mo write. Basic ($100/mo): 3,000 tweets + 10,000 reads |
| LinkedIn | Posts API (v2) | OAuth 2.0 | Free with app registration, 2-month token refresh |
| Reddit | Reddit API | OAuth 2.0 | 100 requests/min with PRAW |
| Dev.to | Forem API | API Key | Generous, no hard limits |
| Medium | REST API | Integration token | Write-only, limited |
| Bluesky | AT Protocol | Username/password | Completely free, no registration needed |
| HN | No write API | N/A | Manual or via Algolia for reads |

## Implementation Order

1. **Phase 1 — Foundation**: config files (banned-words, tone-guide, platforms, templates)
2. **Phase 2 — Commands**: All 7 slash commands as `.claude/commands/*.md`
3. **Phase 3 — Platform Scripts**: Shell scripts for each platform API
4. **Phase 4 — Workflows**: Workflow definitions linking commands + platforms
5. **Phase 5 — Tracking**: Content calendar + post tracker
