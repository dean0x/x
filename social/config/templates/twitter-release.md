# Twitter Release Announcement Template

## Structure
One tweet, optionally followed by a reply with details.

## Format
```
{project} {version} is out.

{one-line change description}

{link}
```

## Rules
- No emoji spam. One emoji max, and only if it fits naturally.
- State what changed, not that you're excited about it.
- If the change is visual, attach a screenshot or gif instead of describing it.
- Version number is optional — skip it if the change matters more than the number.
- **Humor rule:** For minor releases, lean into understatement or self-deprecation. For major releases, let the numbers do the talking with a dry aside.

## Good Examples
```
shipped a new agent workflow — it reads your PR diff, writes review comments, and catches actual logic bugs. not style nits. actual bugs.

github.com/...
```

```
new: the CLI now uses claude to auto-generate commit messages from your staged diff. tried it for a week. it's better than what i write manually. which is concerning.
```

```
v0.3 — added streaming support. watching an LLM think through your code refactor in real-time is weirdly hypnotic.
```

```
shipped RAG over your codebase. you can ask "where does auth happen" and it actually finds it. took 3 weeks to get retrieval right. the LLM part was the easy part.
```

```
new release: context window management so your agent doesn't forget what file it's editing by message 40. low bar but we cleared it.
```

## Bad Examples
```
🚀 Excited to announce v2.3 of Mars! This release brings groundbreaking improvements... [TOO CORPORATE]
```
```
Just pushed a new version! Check it out! 🔥🔥🔥 [EMPTY, NO INFO]
```
