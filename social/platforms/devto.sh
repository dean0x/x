#!/usr/bin/env bash
# Dev.to (Forem) API wrapper
# Requires: DEVTO_API_KEY
#
# Usage:
#   ./devto.sh publish <title> <body_markdown> <tags_csv>
#   ./devto.sh draft <title> <body_markdown> <tags_csv>
#   ./devto.sh articles [per_page]
#   ./devto.sh search <query>
#   ./devto.sh me

set -euo pipefail

API_BASE="https://dev.to/api"

check_env() {
  if [[ -z "${DEVTO_API_KEY:-}" ]]; then
    echo "Error: DEVTO_API_KEY not set" >&2
    echo "Get one at: https://dev.to/settings/extensions → Generate API Key" >&2
    exit 1
  fi
}

cmd_publish() {
  local title="$1" body="$2" tags="$3"
  check_env

  # Convert comma-separated tags to JSON array
  local tags_json
  tags_json=$(echo "$tags" | tr ',' '\n' | jq -R . | jq -s .)

  local payload
  payload=$(jq -n \
    --arg title "$title" \
    --arg body "$body" \
    --argjson tags "$tags_json" \
    '{"article": {"title": $title, "body_markdown": $body, "published": true, "tags": $tags}}')

  curl -s -X POST "${API_BASE}/articles" \
    -H "api-key: ${DEVTO_API_KEY}" \
    -H "Content-Type: application/json" \
    -d "$payload"
}

cmd_draft() {
  local title="$1" body="$2" tags="$3"
  check_env

  local tags_json
  tags_json=$(echo "$tags" | tr ',' '\n' | jq -R . | jq -s .)

  local payload
  payload=$(jq -n \
    --arg title "$title" \
    --arg body "$body" \
    --argjson tags "$tags_json" \
    '{"article": {"title": $title, "body_markdown": $body, "published": false, "tags": $tags}}')

  curl -s -X POST "${API_BASE}/articles" \
    -H "api-key: ${DEVTO_API_KEY}" \
    -H "Content-Type: application/json" \
    -d "$payload"
}

cmd_articles() {
  local per_page="${1:-10}"
  check_env

  curl -s "${API_BASE}/articles/me?per_page=${per_page}" \
    -H "api-key: ${DEVTO_API_KEY}"
}

cmd_search() {
  local query="$1"
  local encoded
  encoded=$(python3 -c "import urllib.parse; print(urllib.parse.quote('${query}'))")

  curl -s "${API_BASE}/articles?tag=${encoded}&top=7&per_page=10"
}

cmd_me() {
  check_env
  curl -s "${API_BASE}/users/me" \
    -H "api-key: ${DEVTO_API_KEY}"
}

case "${1:-help}" in
  publish)  cmd_publish "$2" "$3" "$4" ;;
  draft)    cmd_draft "$2" "$3" "$4" ;;
  articles) cmd_articles "${2:-10}" ;;
  search)   cmd_search "$2" ;;
  me)       cmd_me ;;
  help|*)
    echo "Usage: $0 <command> [args]"
    echo "Commands: publish, draft, articles, search, me"
    ;;
esac
