# Engagement Round Workflow

## Trigger
Run by `/social-engage`, recommended daily.

## Goal
Build visibility by leaving genuine, short comments on relevant posts. Target: 20-50 comments per session.

## Process

### 1. Find Target Posts
Search for posts about:
- Topics matching the user's projects (TypeScript, CLI, monorepos, developer tools)
- Posts from accounts in the target audience (1k-100k followers)
- Active conversations (5+ existing replies/likes)
- Posts from the last 24 hours

### 2. Filter
Skip posts that are:
- From accounts the user has already commented on today
- Controversial/political
- From mega-accounts (>500k followers) where replies get buried
- Already have 200+ replies (too late, comment will be invisible)

### 3. Categorize and Draft
For each post, categorize the appropriate response type:

**Quick reaction (60% of comments):**
- Funny one-liner or reaction
- Shows you read the post but doesn't require a long reply
- Examples: "oh damn", "been there", "this but unironically"

**Small insight (25% of comments):**
- One sentence that adds something to the conversation
- References your experience without being self-promotional
- Example: "same thing happens with pnpm — the lockfile silently updates"

**Helpful reply (15% of comments):**
- Genuinely useful information
- Could reference your own project IF directly relevant
- Example: "fwiw you can use --frozen-lockfile to prevent this"

### 4. Rate Limiting
- Twitter: 30-60 second delay between comments
- Reddit: 2-5 minute delay between comments
- Bluesky: 15-30 second delay between comments
- Never exceed platform rate limits from `social/config/platforms.json`

### 5. Logging
Log each comment to `content-calendar.json` with:
- Timestamp
- Platform
- Original post URL
- Comment text
- Comment type (quick/insight/helpful)
