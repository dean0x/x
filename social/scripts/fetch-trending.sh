#!/usr/bin/env bash
# Fetch trending developer topics for content ideas
# Usage: ./fetch-trending.sh [topic]
#
# Checks HN, Dev.to, and Reddit for trending developer content.

set -euo pipefail

TOPIC="${1:-typescript}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PLATFORMS_DIR="${SCRIPT_DIR}/../platforms"

echo "Fetching trending content for: ${TOPIC}"
echo "═══════════════════════════════════════════"

# Hacker News (via Algolia — no auth needed)
echo ""
echo "── Hacker News (top this week) ──"
curl -s "https://hn.algolia.com/api/v1/search?query=${TOPIC}&tags=story&numericFilters=points>=20&hitsPerPage=5" | \
  jq -r '.hits[] | "  [\(.points) pts] \(.title)\n  \(.url // "no url")\n"'

# Dev.to (no auth needed for public search)
echo "── Dev.to (top recent) ──"
curl -s "https://dev.to/api/articles?tag=${TOPIC}&top=7&per_page=5" | \
  jq -r '.[] | "  [\(.positive_reactions_count) reactions] \(.title)\n  https://dev.to\(.path)\n"'

# Reddit (no auth needed for public search)
echo "── Reddit r/programming (recent) ──"
curl -s "https://www.reddit.com/r/programming/search.json?q=${TOPIC}&sort=top&t=week&limit=5" \
  -A "social-automation:v1.0" | \
  jq -r '.data.children[] | .data | "  [\(.score) pts] \(.title)\n  https://reddit.com\(.permalink)\n"' 2>/dev/null || \
  echo "  (Reddit rate limit — try again in a minute)"

echo "═══════════════════════════════════════════"
echo "Use these for content ideas with /social-publish or /social-research"
