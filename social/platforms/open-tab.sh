#!/usr/bin/env bash
# Open a Chrome tab with pre-filled social media content
#
# Usage:
#   ./open-tab.sh twitter "Tweet text here"
#   ./open-tab.sh bluesky "Post text here"
#   ./open-tab.sh reddit "subreddit" "Title" "Body text"
#   ./open-tab.sh devto "Title" "Body markdown" "tag1,tag2"
#   ./open-tab.sh twitter-reply "tweet_url" "tweet_id" "Reply text"
#   ./open-tab.sh linkedin
#   ./open-tab.sh medium
#
# For LinkedIn and Medium: just opens the compose page.
# Content should be pasted via Chrome or copied from terminal.

set -euo pipefail

urlencode() {
  python3 -c "import urllib.parse; print(urllib.parse.quote('''$1''', safe=''))"
}

case "${1:-help}" in
  twitter)
    text="$2"
    encoded=$(urlencode "$text")
    xdg-open "https://x.com/intent/tweet?text=${encoded}" 2>/dev/null
    echo "Opened Twitter compose with pre-filled text (${#text}/280 chars)"
    ;;

  twitter-reply)
    tweet_url="$2"
    tweet_id="$3"
    text="$4"
    encoded=$(urlencode "$text")
    xdg-open "$tweet_url" 2>/dev/null
    sleep 1
    xdg-open "https://x.com/intent/tweet?in_reply_to=${tweet_id}&text=${encoded}" 2>/dev/null
    echo "Opened original tweet + reply compose"
    ;;

  bluesky)
    text="$2"
    encoded=$(urlencode "$text")
    xdg-open "https://bsky.app/intent/compose?text=${encoded}" 2>/dev/null
    echo "Opened Bluesky compose with pre-filled text (${#text}/300 chars)"
    ;;

  reddit)
    subreddit="$2"
    title="$3"
    body="$4"
    encoded_title=$(urlencode "$title")
    encoded_body=$(urlencode "$body")
    xdg-open "https://www.reddit.com/r/${subreddit}/submit?title=${encoded_title}&text=${encoded_body}" 2>/dev/null
    echo "Opened Reddit submit for r/${subreddit}"
    ;;

  devto)
    title="$2"
    body="$3"
    tags="${4:-}"
    frontmatter="---
title: ${title}
published: false
tags: ${tags}
---

${body}"
    encoded=$(urlencode "$frontmatter")
    xdg-open "https://dev.to/new?prefill=${encoded}" 2>/dev/null
    echo "Opened Dev.to editor with pre-filled article (draft mode)"
    ;;

  linkedin)
    xdg-open "https://www.linkedin.com/feed/" 2>/dev/null
    echo "Opened LinkedIn feed — paste your content into a new post"
    ;;

  medium)
    xdg-open "https://medium.com/new-story" 2>/dev/null
    echo "Opened Medium new story — paste your content"
    ;;

  help|*)
    echo "Usage: $0 <platform> [args...]"
    echo ""
    echo "Platforms:"
    echo "  twitter <text>                        Open tweet compose"
    echo "  twitter-reply <url> <id> <text>       Open reply compose"
    echo "  bluesky <text>                        Open Bluesky compose"
    echo "  reddit <subreddit> <title> <body>     Open Reddit submit"
    echo "  devto <title> <body> [tags]           Open Dev.to editor"
    echo "  linkedin                              Open LinkedIn feed"
    echo "  medium                                Open Medium editor"
    ;;
esac
