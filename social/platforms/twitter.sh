#!/usr/bin/env bash
# Twitter/X API wrapper
# Requires: TWITTER_BEARER_TOKEN, TWITTER_API_KEY, TWITTER_API_SECRET,
#           TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET
#
# Usage:
#   ./twitter.sh post "Hello world"
#   ./twitter.sh reply <tweet_id> "Nice post"
#   ./twitter.sh search "typescript CLI" [max_results]
#   ./twitter.sh me
#   ./twitter.sh timeline [max_results]

set -euo pipefail

API_BASE="https://api.twitter.com/2"

check_env() {
  local missing=()
  for var in TWITTER_BEARER_TOKEN TWITTER_ACCESS_TOKEN TWITTER_ACCESS_SECRET TWITTER_API_KEY TWITTER_API_SECRET; do
    [[ -z "${!var:-}" ]] && missing+=("$var")
  done
  if [[ ${#missing[@]} -gt 0 ]]; then
    echo "Error: Missing environment variables: ${missing[*]}" >&2
    echo "Set these in your shell or .env file." >&2
    exit 1
  fi
}

# Generate OAuth 1.0a signature for write operations
# Twitter v2 write endpoints require OAuth 1.0a User Context
generate_oauth_header() {
  local method="$1" url="$2"
  local nonce timestamp
  nonce=$(openssl rand -hex 16)
  timestamp=$(date +%s)

  local sig_base="${method}&$(python3 -c "import urllib.parse; print(urllib.parse.quote('${url}', safe=''))")&"

  local params="oauth_consumer_key=${TWITTER_API_KEY}&oauth_nonce=${nonce}&oauth_signature_method=HMAC-SHA1&oauth_timestamp=${timestamp}&oauth_token=${TWITTER_ACCESS_TOKEN}&oauth_version=1.0"
  sig_base+="$(python3 -c "import urllib.parse; print(urllib.parse.quote('${params}', safe=''))")"

  local signing_key="${TWITTER_API_SECRET}&${TWITTER_ACCESS_SECRET}"
  local signature
  signature=$(printf '%s' "$sig_base" | openssl dgst -sha1 -hmac "$signing_key" -binary | base64)
  local enc_sig
  enc_sig=$(python3 -c "import urllib.parse; print(urllib.parse.quote('${signature}', safe=''))")

  echo "OAuth oauth_consumer_key=\"${TWITTER_API_KEY}\", oauth_nonce=\"${nonce}\", oauth_signature=\"${enc_sig}\", oauth_signature_method=\"HMAC-SHA1\", oauth_timestamp=\"${timestamp}\", oauth_token=\"${TWITTER_ACCESS_TOKEN}\", oauth_version=\"1.0\""
}

cmd_post() {
  local text="$1"
  check_env

  if [[ ${#text} -gt 280 ]]; then
    echo "Error: Tweet exceeds 280 characters (${#text})" >&2
    exit 1
  fi

  local url="${API_BASE}/tweets"
  local auth_header
  auth_header=$(generate_oauth_header "POST" "$url")

  local payload
  payload=$(jq -n --arg text "$text" '{"text": $text}')

  curl -s -X POST "$url" \
    -H "Authorization: ${auth_header}" \
    -H "Content-Type: application/json" \
    -d "$payload"
}

cmd_reply() {
  local tweet_id="$1" text="$2"
  check_env

  if [[ ${#text} -gt 280 ]]; then
    echo "Error: Reply exceeds 280 characters (${#text})" >&2
    exit 1
  fi

  local url="${API_BASE}/tweets"
  local auth_header
  auth_header=$(generate_oauth_header "POST" "$url")

  local payload
  payload=$(jq -n --arg text "$text" --arg id "$tweet_id" \
    '{"text": $text, "reply": {"in_reply_to_tweet_id": $id}}')

  curl -s -X POST "$url" \
    -H "Authorization: ${auth_header}" \
    -H "Content-Type: application/json" \
    -d "$payload"
}

cmd_search() {
  local query="$1"
  local max_results="${2:-10}"
  check_env

  local encoded_query
  encoded_query=$(python3 -c "import urllib.parse; print(urllib.parse.quote('${query}'))")

  curl -s "${API_BASE}/tweets/search/recent?query=${encoded_query}&max_results=${max_results}&tweet.fields=public_metrics,author_id,created_at" \
    -H "Authorization: Bearer ${TWITTER_BEARER_TOKEN}"
}

cmd_me() {
  check_env
  curl -s "${API_BASE}/users/me?user.fields=public_metrics,description" \
    -H "Authorization: Bearer ${TWITTER_BEARER_TOKEN}"
}

cmd_timeline() {
  local max_results="${1:-20}"
  check_env

  local user_id
  user_id=$(cmd_me | jq -r '.data.id')

  curl -s "${API_BASE}/users/${user_id}/tweets?max_results=${max_results}&tweet.fields=public_metrics,created_at" \
    -H "Authorization: Bearer ${TWITTER_BEARER_TOKEN}"
}

# Main dispatch
case "${1:-help}" in
  post)     cmd_post "$2" ;;
  reply)    cmd_reply "$2" "$3" ;;
  search)   cmd_search "$2" "${3:-10}" ;;
  me)       cmd_me ;;
  timeline) cmd_timeline "${2:-20}" ;;
  help|*)
    echo "Usage: $0 <command> [args]"
    echo "Commands: post, reply, search, me, timeline"
    ;;
esac
