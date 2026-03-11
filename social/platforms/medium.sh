#!/usr/bin/env bash
# Medium API wrapper
# Requires: MEDIUM_TOKEN
#
# Usage:
#   ./medium.sh publish <title> <content_html> [tags_csv]
#   ./medium.sh draft <title> <content_html> [tags_csv]
#   ./medium.sh me
#
# Note: Medium's API is write-only and fairly limited.
# Content format is HTML or Markdown.

set -euo pipefail

API_BASE="https://api.medium.com/v1"

check_env() {
  if [[ -z "${MEDIUM_TOKEN:-}" ]]; then
    echo "Error: MEDIUM_TOKEN not set" >&2
    echo "Get one at: https://medium.com/me/settings/security → Integration tokens" >&2
    exit 1
  fi
}

get_user_id() {
  check_env
  curl -s "${API_BASE}/me" \
    -H "Authorization: Bearer ${MEDIUM_TOKEN}" | jq -r '.data.id'
}

cmd_me() {
  check_env
  curl -s "${API_BASE}/me" \
    -H "Authorization: Bearer ${MEDIUM_TOKEN}"
}

cmd_publish() {
  local title="$1" content="$2" tags="${3:-}"
  check_env

  local user_id
  user_id=$(get_user_id)

  local tags_json="[]"
  if [[ -n "$tags" ]]; then
    tags_json=$(echo "$tags" | tr ',' '\n' | jq -R . | jq -s .)
  fi

  local payload
  payload=$(jq -n \
    --arg title "$title" \
    --arg content "$content" \
    --argjson tags "$tags_json" \
    '{
      "title": $title,
      "contentFormat": "markdown",
      "content": $content,
      "tags": $tags,
      "publishStatus": "public"
    }')

  curl -s -X POST "${API_BASE}/users/${user_id}/posts" \
    -H "Authorization: Bearer ${MEDIUM_TOKEN}" \
    -H "Content-Type: application/json" \
    -d "$payload"
}

cmd_draft() {
  local title="$1" content="$2" tags="${3:-}"
  check_env

  local user_id
  user_id=$(get_user_id)

  local tags_json="[]"
  if [[ -n "$tags" ]]; then
    tags_json=$(echo "$tags" | tr ',' '\n' | jq -R . | jq -s .)
  fi

  local payload
  payload=$(jq -n \
    --arg title "$title" \
    --arg content "$content" \
    --argjson tags "$tags_json" \
    '{
      "title": $title,
      "contentFormat": "markdown",
      "content": $content,
      "tags": $tags,
      "publishStatus": "draft"
    }')

  curl -s -X POST "${API_BASE}/users/${user_id}/posts" \
    -H "Authorization: Bearer ${MEDIUM_TOKEN}" \
    -H "Content-Type: application/json" \
    -d "$payload"
}

case "${1:-help}" in
  publish) cmd_publish "$2" "$3" "${4:-}" ;;
  draft)   cmd_draft "$2" "$3" "${4:-}" ;;
  me)      cmd_me ;;
  help|*)
    echo "Usage: $0 <command> [args]"
    echo "Commands: publish, draft, me"
    ;;
esac
