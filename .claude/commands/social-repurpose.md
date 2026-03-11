# /social-repurpose — Cross-Platform Content Adaptation

Arguments: `$ARGUMENTS` (the content to repurpose, or "last" to use the most recent post)

You are adapting one piece of content for multiple platforms, adjusting voice, format, and length for each.

## Step 1: Get Source Content

If argument is "last": read the most recent entry from `social/workflows/content-calendar.json`.
Otherwise: use the provided text as the source content.

Identify:
- What platform was this originally written for?
- What's the core message/insight?
- What specific details are included?

## Step 2: Identify Target Platforms

Determine which platforms this content should be adapted for. Skip platforms where:
- It was already posted
- The content doesn't fit (e.g., a code tutorial doesn't suit LinkedIn)
- The cadence schedule says it's not time

Suggest target platforms to the user and let them confirm.

## Step 3: Adapt for Each Platform

For each target platform:

1. Read `social/config/tone-guide.md` for that platform's voice
2. Read the relevant template from `social/config/templates/`
3. Rewrite the content to fit:
   - **Twitter → LinkedIn**: Expand with story, add context, one-line-per-paragraph format
   - **Twitter → Bluesky**: Minor tweaks, slightly less Twitter-specific references
   - **Twitter → Reddit**: Add technical depth, remove self-promotion, lead with value
   - **LinkedIn → Twitter**: Compress to the punchline, make it punchy
   - **Any → Dev.to**: Expand into tutorial format if the content has technical substance
   - **Any → Medium**: Expand into narrative if the content has a story arc
   - **Any → HN**: Strip all adjectives, state facts only

4. Run the Voice Filter on each adaptation:
   - Check against `social/config/banned-words.json`
   - Verify tone matches the target platform
   - Ensure it doesn't read as a copy-paste of the original

## Step 4: Present All Variants

Show all adaptations side by side:

```
Source (Twitter):
---
{original}
---

→ LinkedIn adaptation:
---
{adapted}
---
Char count: {n}/3000

→ Bluesky adaptation:
---
{adapted}
---
Char count: {n}/300

→ Reddit adaptation (r/{suggested sub}):
---
Title: {title}
Body: {adapted}
---

Options: [Approve all] [Edit individually] [Skip platform]
```

## Step 5: Post Approved Variants

For each approved adaptation:
1. Post via the platform's script
2. Log to `social/workflows/content-calendar.json` with a `repurposed_from` field linking to the original

## Voice Filter

Every adaptation must independently pass the voice check:
- [ ] Zero banned words/phrases
- [ ] Matches target platform's tone (not the source platform's tone)
- [ ] Doesn't feel like a copy-paste with minor edits
- [ ] Contains platform-appropriate formatting
- [ ] Sounds native to that platform's community
