#!/usr/bin/env bash
# Reddit API wrapper
# Requires: REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, REDDIT_USERNAME, REDDIT_PASSWORD
#
# Usage:
#   ./reddit.sh post <subreddit> <title> <text>
#   ./reddit.sh comment <thing_id> <text>
#   ./reddit.sh search <subreddit> <query> [sort] [limit]
#   ./reddit.sh hot <subreddit> [limit]
#   ./reddit.sh me

set -euo pipefail

API_BASE="https://oauth.reddit.com"
USER_AGENT="social-automation:v1.0 (by /u/${REDDIT_USERNAME:-unknown})"

check_env() {
  local missing=()
  for var in REDDIT_CLIENT_ID REDDIT_CLIENT_SECRET REDDIT_USERNAME REDDIT_PASSWORD; do
    [[ -z "${!var:-}" ]] && missing+=("$var")
  done
  if [[ ${#missing[@]} -gt 0 ]]; then
    echo "Error: Missing environment variables: ${missing[*]}" >&2
    exit 1
  fi
}

# Get OAuth access token (short-lived, refreshed per session)
get_token() {
  check_env
  local response
  response=$(curl -s -X POST "https://www.reddit.com/api/v1/access_token" \
    -u "${REDDIT_CLIENT_ID}:${REDDIT_CLIENT_SECRET}" \
    -A "$USER_AGENT" \
    -d "grant_type=password&username=${REDDIT_USERNAME}&password=${REDDIT_PASSWORD}")

  echo "$response" | jq -r '.access_token'
}

cmd_post() {
  local subreddit="$1" title="$2" text="$3"
  local token
  token=$(get_token)

  curl -s -X POST "${API_BASE}/api/submit" \
    -H "Authorization: Bearer ${token}" \
    -A "$USER_AGENT" \
    -d "sr=${subreddit}&kind=self&title=$(python3 -c "import urllib.parse; print(urllib.parse.quote('${title}'))")&text=$(python3 -c "import urllib.parse; print(urllib.parse.quote('${text}'))")"
}

cmd_comment() {
  local thing_id="$1" text="$2"
  local token
  token=$(get_token)

  curl -s -X POST "${API_BASE}/api/comment" \
    -H "Authorization: Bearer ${token}" \
    -A "$USER_AGENT" \
    -d "thing_id=${thing_id}&text=$(python3 -c "import urllib.parse; print(urllib.parse.quote('${text}'))")"
}

cmd_search() {
  local subreddit="$1" query="$2"
  local sort="${3:-relevance}" limit="${4:-10}"
  local token
  token=$(get_token)

  local encoded_query
  encoded_query=$(python3 -c "import urllib.parse; print(urllib.parse.quote('${query}'))")

  curl -s "${API_BASE}/r/${subreddit}/search?q=${encoded_query}&sort=${sort}&limit=${limit}&restrict_sr=on&type=link" \
    -H "Authorization: Bearer ${token}" \
    -A "$USER_AGENT"
}

cmd_hot() {
  local subreddit="$1" limit="${2:-10}"
  local token
  token=$(get_token)

  curl -s "${API_BASE}/r/${subreddit}/hot?limit=${limit}" \
    -H "Authorization: Bearer ${token}" \
    -A "$USER_AGENT"
}

cmd_me() {
  local token
  token=$(get_token)

  curl -s "${API_BASE}/api/v1/me" \
    -H "Authorization: Bearer ${token}" \
    -A "$USER_AGENT"
}

case "${1:-help}" in
  post)    cmd_post "$2" "$3" "$4" ;;
  comment) cmd_comment "$2" "$3" ;;
  search)  cmd_search "$2" "$3" "${4:-relevance}" "${5:-10}" ;;
  hot)     cmd_hot "$2" "${3:-10}" ;;
  me)      cmd_me ;;
  help|*)
    echo "Usage: $0 <command> [args]"
    echo "Commands: post, comment, search, hot, me"
    ;;
esac
