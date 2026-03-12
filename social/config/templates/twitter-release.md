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
mars v2.3 — rewrote the resolver. 3x faster on repos with 50+ packages.

github.com/...
```

```
new in skim: --watch mode. it re-transforms on save so you don't have to re-run the command every time.
```

```
shipped a thing. mino now generates container configs from your package.json. no more writing Dockerfiles by hand for node projects.
```

```
mars v2.3 — rewrote the parser. deleted 4000 lines and it got faster. funny how that works.
```

```
shipped container auto-detection in mino. it reads your package.json and generates a Dockerfile. yes i know, terrifying. but it works.
```

```
silo v1.2 is out. the main feature is it no longer crashes when you have more than 50 keys. low bar but we cleared it.
```

## Bad Examples
```
🚀 Excited to announce v2.3 of Mars! This release brings groundbreaking improvements... [TOO CORPORATE]
```
```
Just pushed a new version! Check it out! 🔥🔥🔥 [EMPTY, NO INFO]
```
