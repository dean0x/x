# Daily Release Detection Workflow

## Trigger
Run by `/social-daily` every morning.

## Steps

### 1. Detect New Releases
```bash
# Check all user's repos for tags created in the last 24h
gh api user/repos --jq '.[].full_name' | while read repo; do
  gh api "repos/${repo}/releases?per_page=5" --jq \
    '.[] | select(.created_at > (now - 86400 | todate)) | {repo: "'$repo'", tag: .tag_name, name: .name, body: .body}'
done
```

### 2. Check Recent Commits (if no releases)
```bash
# Fall back to checking for notable commits
gh api user/repos --jq '.[].full_name' | while read repo; do
  gh api "repos/${repo}/commits?since=$(date -u -d '1 day ago' +%Y-%m-%dT%H:%M:%SZ)&per_page=5" --jq \
    '.[] | {repo: "'$repo'", sha: .sha[:7], message: .commit.message, date: .commit.author.date}'
done
```

### 3. Draft Announcements
For each detected release/notable commit:
1. Extract the key user-facing change
2. Draft a tweet following `social/config/templates/twitter-release.md`
3. Run voice filter
4. Queue for approval

### 4. Cross-Platform Check
If the release is notable (new minor/major version):
- Also draft a LinkedIn update
- Check if a Bluesky mirror is warranted
- If it's a major release, suggest a Reddit post and HN submission
