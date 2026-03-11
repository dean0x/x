#!/usr/bin/env bash
# Hacker News helper (read-only via Algolia API)
# No official write API — submissions must be done manually or via browser.
#
# Usage:
#   ./hackernews.sh search <query> [min_points] [limit]
#   ./hackernews.sh top [limit]
#   ./hackernews.sh show_hn [limit]
#   ./hackernews.sh item <id>
#
# This script helps with research — finding trending topics,
# analyzing what titles/posts get upvotes, etc.

set -euo pipefail

ALGOLIA_BASE="https://hn.algolia.com/api/v1"
FIREBASE_BASE="https://hacker-news.firebaseio.com/v0"

cmd_search() {
  local query="$1"
  local min_points="${2:-50}"
  local limit="${3:-10}"

  local encoded
  encoded=$(python3 -c "import urllib.parse; print(urllib.parse.quote('${query}'))")

  curl -s "${ALGOLIA_BASE}/search?query=${encoded}&tags=story&numericFilters=points>=${min_points}&hitsPerPage=${limit}" | \
    jq '.hits[] | {title, url, points, num_comments, author, created_at: .created_at}'
}

cmd_top() {
  local limit="${1:-10}"

  local ids
  ids=$(curl -s "${FIREBASE_BASE}/topstories.json" | jq ".[:${limit}][]")

  for id in $ids; do
    curl -s "${FIREBASE_BASE}/item/${id}.json" | jq '{title, url, score, by, descendants}'
  done
}

cmd_show_hn() {
  local limit="${1:-10}"

  local ids
  ids=$(curl -s "${FIREBASE_BASE}/showstories.json" | jq ".[:${limit}][]")

  for id in $ids; do
    curl -s "${FIREBASE_BASE}/item/${id}.json" | jq '{title, url, score, by, descendants}'
  done
}

cmd_item() {
  local id="$1"
  curl -s "${FIREBASE_BASE}/item/${id}.json" | jq .
}

case "${1:-help}" in
  search)  cmd_search "$2" "${3:-50}" "${4:-10}" ;;
  top)     cmd_top "${2:-10}" ;;
  show_hn) cmd_show_hn "${2:-10}" ;;
  item)    cmd_item "$2" ;;
  help|*)
    echo "Usage: $0 <command> [args]"
    echo "Commands: search, top, show_hn, item"
    echo ""
    echo "Note: HN has no write API. Use this for research."
    echo "To submit: visit https://news.ycombinator.com/submit"
    ;;
esac
