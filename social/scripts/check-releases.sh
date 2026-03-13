#!/usr/bin/env bash
# Check GitHub repos for new releases/tags since last check
# Usage: ./check-releases.sh [hours_ago]
#
# Requires: gh CLI authenticated

set -euo pipefail

HOURS_AGO="${1:-24}"
SINCE=$(date -u -d "${HOURS_AGO} hours ago" +%Y-%m-%dT%H:%M:%SZ 2>/dev/null || \
        date -u -v-${HOURS_AGO}H +%Y-%m-%dT%H:%M:%SZ)

echo "Checking for releases since ${SINCE}..."
echo "═══════════════════════════════════════"

# Get user's repos
repos=$(gh api user/repos --paginate --jq '.[].full_name' 2>/dev/null)

if [[ -z "$repos" ]]; then
  echo "No repos found. Make sure 'gh' is authenticated."
  exit 1
fi

found=0

while IFS= read -r repo; do
  # Check releases
  releases=$(gh api "repos/${repo}/releases?per_page=5" --jq \
    ".[] | select(.created_at > \"${SINCE}\") | {tag: .tag_name, name: .name, url: .html_url}" 2>/dev/null || echo "")

  if [[ -n "$releases" ]]; then
    echo ""
    echo "📦 ${repo}"
    echo "$releases" | jq -r '"  Release: \(.tag) — \(.name)\n  URL: \(.url)"'
    found=$((found + 1))
  fi

  # Check tags (some repos use tags without releases)
  tags=$(gh api "repos/${repo}/tags?per_page=5" --jq '.[].name' 2>/dev/null | head -3)

done <<< "$repos"

echo ""
echo "═══════════════════════════════════════"
if [[ $found -eq 0 ]]; then
  echo "No new releases in the last ${HOURS_AGO} hours."
else
  echo "Found activity in ${found} repo(s)."
fi
