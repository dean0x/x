#!/usr/bin/env bash
# LinkedIn Posts API wrapper
# Requires: LINKEDIN_ACCESS_TOKEN
#
# Usage:
#   ./linkedin.sh post "Post text here"
#   ./linkedin.sh me
#   ./linkedin.sh posts [count]
#
# Setup:
#   1. Create app at https://www.linkedin.com/developers/apps/new
#   2. Enable "Share on LinkedIn" product
#   3. Generate OAuth token with scopes: openid, profile, w_member_social
#   4. Token expires every 2 months — refresh manually or automate

set -euo pipefail

API_BASE="https://api.linkedin.com"
API_VERSION="202501"

check_env() {
  if [[ -z "${LINKEDIN_ACCESS_TOKEN:-}" ]]; then
    echo "Error: LINKEDIN_ACCESS_TOKEN not set" >&2
    echo "Get one at: https://www.linkedin.com/developers/apps" >&2
    exit 1
  fi
}

cmd_me() {
  check_env
  curl -s "${API_BASE}/v2/userinfo" \
    -H "Authorization: Bearer ${LINKEDIN_ACCESS_TOKEN}"
}

get_person_urn() {
  local sub
  sub=$(cmd_me | jq -r '.sub')
  echo "urn:li:person:${sub}"
}

cmd_post() {
  local text="$1"
  check_env

  if [[ ${#text} -gt 3000 ]]; then
    echo "Error: Post exceeds 3000 characters (${#text})" >&2
    exit 1
  fi

  local author
  author=$(get_person_urn)

  local payload
  payload=$(jq -n \
    --arg author "$author" \
    --arg text "$text" \
    '{
      "author": $author,
      "lifecycleState": "PUBLISHED",
      "visibility": "PUBLIC",
      "commentary": $text,
      "distribution": {
        "feedDistribution": "MAIN_FEED"
      }
    }')

  curl -s -X POST "${API_BASE}/rest/posts" \
    -H "Authorization: Bearer ${LINKEDIN_ACCESS_TOKEN}" \
    -H "Content-Type: application/json" \
    -H "LinkedIn-Version: ${API_VERSION}" \
    -H "X-Restli-Protocol-Version: 2.0.0" \
    -d "$payload"
}

cmd_posts() {
  local count="${1:-10}"
  check_env

  local author
  author=$(get_person_urn)
  local encoded_author
  encoded_author=$(python3 -c "import urllib.parse; print(urllib.parse.quote('${author}'))")

  curl -s "${API_BASE}/rest/posts?author=${encoded_author}&q=author&count=${count}" \
    -H "Authorization: Bearer ${LINKEDIN_ACCESS_TOKEN}" \
    -H "LinkedIn-Version: ${API_VERSION}" \
    -H "X-Restli-Protocol-Version: 2.0.0"
}

case "${1:-help}" in
  post)  cmd_post "$2" ;;
  me)    cmd_me ;;
  posts) cmd_posts "${2:-10}" ;;
  help|*)
    echo "Usage: $0 <command> [args]"
    echo "Commands: post, me, posts"
    ;;
esac
