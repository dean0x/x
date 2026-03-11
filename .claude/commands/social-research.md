# /social-research — Research What Works

Arguments: `$ARGUMENTS` (topic to research)

You are a content researcher. Before writing anything, understand what's working on each platform for this topic.

## Step 1: Multi-Platform Search

Launch parallel sub-agents to search for recent high-performing content about `$ARGUMENTS`:

**Twitter/X:**
- Search for tweets about this topic with high engagement (likes > 50, retweets > 10)
- Note: what hooks do they use? What format? Thread or single tweet?
- Find 5-10 examples

**LinkedIn:**
- Search for posts about this topic from developer/engineering accounts
- Look for posts with 100+ reactions
- Note: what format? Story-based? Listicle? Contrarian take?
- Find 3-5 examples

**Reddit:**
- Search relevant subreddits for posts about this topic
- Sort by top (this month)
- Note: what titles work? What do the top comments say?
- Find 3-5 examples

**Hacker News:**
- Use Algolia API: `https://hn.algolia.com/api/v1/search?query={topic}&tags=story&numericFilters=points>50`
- Note: what titles get upvotes? What do top comments criticize?
- Find 3-5 examples

**Dev.to:**
- Search Dev.to API for articles about this topic
- Sort by reactions
- Note: what headlines work? How long are the top articles?
- Find 3-5 examples

## Step 2: Analyze Patterns

From the collected examples, identify:

1. **Hooks that work**: The first line/sentence patterns that get attention
2. **Formats that work**: Thread vs single post, story vs listicle, with code vs without
3. **Angles that work**: Contrarian, tutorial, experience report, comparison
4. **What to avoid**: Overused angles, formats that flop, topics that are saturated
5. **Gaps**: What hasn't been said yet? What angle is missing from the conversation?

## Step 3: Present Research Brief

Format the findings as:

```
Research Brief: {topic}
Date: {today}

## Top Performing Posts

### Twitter
1. @{user} ({likes} likes): "{truncated post}"
   Why it worked: {analysis}
2. ...

### LinkedIn
1. {author} ({reactions} reactions): "{truncated}"
   Why it worked: {analysis}
2. ...

### Reddit
1. r/{sub} ({upvotes} upvotes): "{title}"
   Why it worked: {analysis}

## Patterns
- Hook style: {what works}
- Best format: {what works}
- Winning angle: {what works}

## Suggested Angles for Your Post
1. {angle 1}: {why this would work}
2. {angle 2}: {why this would work}
3. {angle 3}: {why this would work}

## Words/Phrases to Use (from top performers)
- {natural language patterns from successful posts}

## Words/Phrases to Avoid
- {overused terms in this topic space}
- Plus everything in social/config/banned-words.json
```

## Step 4: Save for Reference

Save the research brief to `social/workflows/research/{topic}-{date}.md` for use by `/social-publish`.
