#!/usr/bin/env bash
# Bluesky (AT Protocol) API wrapper
# Requires: BLUESKY_HANDLE, BLUESKY_APP_PASSWORD
#
# Usage:
#   ./bluesky.sh post "Hello from the AT Protocol"
#   ./bluesky.sh reply <uri> <cid> "Reply text"
#   ./bluesky.sh search <query> [limit]
#   ./bluesky.sh timeline [limit]
#   ./bluesky.sh me
#
# No API key registration needed. Completely free.
# Create an app password at: https://bsky.app/settings/app-passwords

set -euo pipefail

API_BASE="https://bsky.social/xrpc"

check_env() {
  local missing=()
  for var in BLUESKY_HANDLE BLUESKY_APP_PASSWORD; do
    [[ -z "${!var:-}" ]] && missing+=("$var")
  done
  if [[ ${#missing[@]} -gt 0 ]]; then
    echo "Error: Missing environment variables: ${missing[*]}" >&2
    echo "Set BLUESKY_HANDLE (e.g., user.bsky.social) and BLUESKY_APP_PASSWORD" >&2
    echo "Create app password at: https://bsky.app/settings/app-passwords" >&2
    exit 1
  fi
}

# Create authenticated session, return access token
create_session() {
  check_env
  local response
  response=$(curl -s -X POST "${API_BASE}/com.atproto.server.createSession" \
    -H "Content-Type: application/json" \
    -d "{\"identifier\": \"${BLUESKY_HANDLE}\", \"password\": \"${BLUESKY_APP_PASSWORD}\"}")

  local token
  token=$(echo "$response" | jq -r '.accessJwt // empty')
  if [[ -z "$token" ]]; then
    echo "Error: Authentication failed" >&2
    echo "$response" | jq . >&2
    exit 1
  fi
  echo "$token"
}

get_did() {
  check_env
  local response
  response=$(curl -s -X POST "${API_BASE}/com.atproto.server.createSession" \
    -H "Content-Type: application/json" \
    -d "{\"identifier\": \"${BLUESKY_HANDLE}\", \"password\": \"${BLUESKY_APP_PASSWORD}\"}")
  echo "$response" | jq -r '.did'
}

cmd_post() {
  local text="$1"

  if [[ ${#text} -gt 300 ]]; then
    echo "Error: Post exceeds 300 characters (${#text})" >&2
    exit 1
  fi

  local token did now
  token=$(create_session)
  did=$(get_did)
  now=$(date -u +"%Y-%m-%dT%H:%M:%S.000Z")

  local payload
  payload=$(jq -n \
    --arg did "$did" \
    --arg text "$text" \
    --arg now "$now" \
    '{
      "repo": $did,
      "collection": "app.bsky.feed.post",
      "record": {
        "$type": "app.bsky.feed.post",
        "text": $text,
        "createdAt": $now
      }
    }')

  curl -s -X POST "${API_BASE}/com.atproto.repo.createRecord" \
    -H "Authorization: Bearer ${token}" \
    -H "Content-Type: application/json" \
    -d "$payload"
}

cmd_reply() {
  local parent_uri="$1" parent_cid="$2" text="$3"

  if [[ ${#text} -gt 300 ]]; then
    echo "Error: Reply exceeds 300 characters (${#text})" >&2
    exit 1
  fi

  local token did now
  token=$(create_session)
  did=$(get_did)
  now=$(date -u +"%Y-%m-%dT%H:%M:%S.000Z")

  local payload
  payload=$(jq -n \
    --arg did "$did" \
    --arg text "$text" \
    --arg now "$now" \
    --arg uri "$parent_uri" \
    --arg cid "$parent_cid" \
    '{
      "repo": $did,
      "collection": "app.bsky.feed.post",
      "record": {
        "$type": "app.bsky.feed.post",
        "text": $text,
        "createdAt": $now,
        "reply": {
          "root": {"uri": $uri, "cid": $cid},
          "parent": {"uri": $uri, "cid": $cid}
        }
      }
    }')

  curl -s -X POST "${API_BASE}/com.atproto.repo.createRecord" \
    -H "Authorization: Bearer ${token}" \
    -H "Content-Type: application/json" \
    -d "$payload"
}

cmd_search() {
  local query="$1" limit="${2:-10}"
  local token
  token=$(create_session)

  local encoded
  encoded=$(python3 -c "import urllib.parse; print(urllib.parse.quote('${query}'))")

  curl -s "${API_BASE}/app.bsky.feed.searchPosts?q=${encoded}&limit=${limit}" \
    -H "Authorization: Bearer ${token}"
}

cmd_timeline() {
  local limit="${1:-20}"
  local token
  token=$(create_session)

  curl -s "${API_BASE}/app.bsky.feed.getTimeline?limit=${limit}" \
    -H "Authorization: Bearer ${token}"
}

cmd_me() {
  local token
  token=$(create_session)

  curl -s "${API_BASE}/app.bsky.actor.getProfile?actor=${BLUESKY_HANDLE}" \
    -H "Authorization: Bearer ${token}"
}

case "${1:-help}" in
  post)     cmd_post "$2" ;;
  reply)    cmd_reply "$2" "$3" "$4" ;;
  search)   cmd_search "$2" "${3:-10}" ;;
  timeline) cmd_timeline "${2:-20}" ;;
  me)       cmd_me ;;
  help|*)
    echo "Usage: $0 <command> [args]"
    echo "Commands: post, reply, search, timeline, me"
    ;;
esac
