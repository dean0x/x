#!/usr/bin/env bash
# Fetch AI/LLM news from key sources — programmatic scraping to save tokens
# Usage: ./fetch-ai-news.sh [hours_ago]
#
# Scrapes changelogs, blogs, GitHub releases, Reddit, and HN for AI-specific content.
# Outputs structured summaries that Agent 2 can use without doing expensive web searches.

set -euo pipefail

HOURS_AGO="${1:-24}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "═══════════════════════════════════════════"
echo "  AI/LLM NEWS SCAN — last ${HOURS_AGO}h"
echo "═══════════════════════════════════════════"

# --- GitHub Releases (via gh API — most reliable) ---

echo ""
echo "── GitHub Releases (AI/LLM projects) ──"

REPOS=(
  "deepseek-ai/DeepSeek-V3"
  "deepseek-ai/DeepSeek-Coder-V2"
  "ollama/ollama"
  "huggingface/transformers"
  "langchain-ai/langchain"
  "run-llama/llama_index"
  "openai/codex"
  "anthropics/anthropic-sdk-python"
  "anthropics/anthropic-sdk-typescript"
  "anthropics/claude-code"
  "vllm-project/vllm"
  "ggerganov/llama.cpp"
  "mozilla/llamafile"
  "lm-sys/FastChat"
  "meta-llama/llama"
  "google/gemma.cpp"
  "mistralai/mistral-inference"
)

# Calculate threshold timestamp
if date -v-${HOURS_AGO}H >/dev/null 2>&1; then
  SINCE=$(date -u -v-${HOURS_AGO}H +"%Y-%m-%dT%H:%M:%SZ")
else
  SINCE=$(date -u -d "${HOURS_AGO} hours ago" +"%Y-%m-%dT%H:%M:%SZ")
fi

for REPO in "${REPOS[@]}"; do
  RELEASES=$(gh api "repos/${REPO}/releases?per_page=3" --jq ".[] | select(.published_at > \"${SINCE}\") | \"  NEW: \(.tag_name) — \(.name // \"(no title)\")\n  \(.html_url)\n\"" 2>/dev/null || true)
  if [ -n "$RELEASES" ]; then
    echo "  📦 ${REPO}:"
    echo "$RELEASES"
  fi
done

echo ""

# --- Hacker News (AI/LLM topics via Algolia) ---

echo "── Hacker News (AI/LLM — top this week) ──"

HN_QUERIES=("LLM" "Claude" "GPT-5" "Gemini+AI" "DeepSeek" "AI+agent" "AI+coding" "Anthropic" "OpenAI")

for QUERY in "${HN_QUERIES[@]}"; do
  RESULTS=$(curl -s "https://hn.algolia.com/api/v1/search?query=${QUERY}&tags=story&numericFilters=points>=50&hitsPerPage=3" 2>/dev/null | \
    jq -r '.hits[] | "  [\(.points) pts] \(.title)\n  \(.url // "https://news.ycombinator.com/item?id=\(.objectID)")\n"' 2>/dev/null || true)
  if [ -n "$RESULTS" ]; then
    echo "$RESULTS"
  fi
done

echo ""

# --- Reddit (AI-specific subreddits) ---

echo "── Reddit (AI communities — hot posts) ──"

AI_SUBREDDITS=("LocalLLaMA" "MachineLearning" "ClaudeAI" "artificial" "ChatGPT")

for SUB in "${AI_SUBREDDITS[@]}"; do
  echo "  r/${SUB}:"
  curl -s "https://www.reddit.com/r/${SUB}/hot.json?limit=5" \
    -A "ai-news-scan:v1.0" 2>/dev/null | \
    jq -r '.data.children[] | .data | "    [\(.score) pts] \(.title | .[0:100])\n    https://reddit.com\(.permalink)\n"' 2>/dev/null || \
    echo "    (rate limited — try again later)"
  echo ""
done

# --- Hugging Face Daily Papers ---

echo "── Hugging Face Daily Papers ──"
curl -s "https://huggingface.co/api/daily_papers?limit=5" 2>/dev/null | \
  jq -r '.[] | "  [\(.paper.upvotes // 0) upvotes] \(.paper.title // .title)\n  https://huggingface.co/papers/\(.paper.id // .id)\n"' 2>/dev/null || \
  echo "  (could not fetch — check API)"

echo ""

# --- Dev.to (AI/LLM articles) ---

echo "── Dev.to (AI/LLM articles — recent) ──"

DEVTO_TAGS=("ai" "llm" "machinelearning" "openai" "claude")

for TAG in "${DEVTO_TAGS[@]}"; do
  RESULTS=$(curl -s "https://dev.to/api/articles?tag=${TAG}&top=1&per_page=3" 2>/dev/null | \
    jq -r '.[] | "  [\(.positive_reactions_count) reactions] \(.title)\n  https://dev.to\(.path)\n"' 2>/dev/null || true)
  if [ -n "$RESULTS" ]; then
    echo "$RESULTS"
  fi
done

echo ""

# --- Anthropic-specific (changelog check via curl) ---

echo "── Anthropic Changelog (quick check) ──"
ANTHROPIC_PAGE=$(curl -s "https://docs.anthropic.com/en/docs/claude-code/changelog" 2>/dev/null | head -c 5000 || true)
if [ -n "$ANTHROPIC_PAGE" ]; then
  echo "  Changelog page fetched (${#ANTHROPIC_PAGE} chars). Agent should check for new entries."
else
  echo "  Could not fetch changelog. Agent should web-search for recent Claude Code updates."
fi

echo ""

# --- OpenAI changelog (quick check) ---

echo "── OpenAI Changelog (quick check) ──"
OPENAI_PAGE=$(curl -s "https://platform.openai.com/docs/changelog" 2>/dev/null | head -c 5000 || true)
if [ -n "$OPENAI_PAGE" ]; then
  echo "  Changelog page fetched (${#OPENAI_PAGE} chars). Agent should check for new entries."
else
  echo "  Could not fetch changelog. Agent should web-search for recent OpenAI updates."
fi

echo ""

echo "═══════════════════════════════════════════"
echo "  Scan complete. Feed this to Agent 2 for"
echo "  trend analysis and reactive post ideas."
echo "═══════════════════════════════════════════"
