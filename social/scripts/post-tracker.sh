#!/usr/bin/env bash
# Log a post to the content calendar
# Usage: ./post-tracker.sh <platform> <type> <content> [url]
#
# This is called by slash commands after posting.

set -euo pipefail

CALENDAR_FILE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/../workflows/content-calendar.json"

PLATFORM="$1"
TYPE="$2"          # post, engagement, article
CONTENT="$3"
URL="${4:-}"

DATE=$(date -u +%Y-%m-%d)
TIMESTAMP=$(date -u +%Y-%m-%dT%H:%M:%SZ)

# Ensure calendar file exists
if [[ ! -f "$CALENDAR_FILE" ]]; then
  echo '{"posts":[],"engagement":[],"weekly_plans":[]}' > "$CALENDAR_FILE"
fi

# Add entry
if [[ "$TYPE" == "engagement" ]]; then
  jq --arg ts "$TIMESTAMP" --arg p "$PLATFORM" --arg c "$CONTENT" --arg u "$URL" \
    '.engagement += [{"timestamp": $ts, "platform": $p, "comment": $c, "target_url": $u}]' \
    "$CALENDAR_FILE" > "${CALENDAR_FILE}.tmp" && mv "${CALENDAR_FILE}.tmp" "$CALENDAR_FILE"
else
  jq --arg d "$DATE" --arg ts "$TIMESTAMP" --arg p "$PLATFORM" --arg t "$TYPE" --arg c "$CONTENT" --arg u "$URL" \
    '.posts += [{"date": $d, "timestamp": $ts, "platform": $p, "type": $t, "content": $c, "url": $u, "status": "posted"}]' \
    "$CALENDAR_FILE" > "${CALENDAR_FILE}.tmp" && mv "${CALENDAR_FILE}.tmp" "$CALENDAR_FILE"
fi

echo "Logged: ${PLATFORM} ${TYPE} at ${TIMESTAMP}"
