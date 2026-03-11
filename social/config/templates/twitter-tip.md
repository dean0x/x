# Twitter Dev Tip Template

## Structure
Short observation or trick. Optionally with a code snippet screenshot.

## Format
```
{observation or discovery}

{optional: code snippet or terminal output}
```

## Rules
- Start with the insight, not the setup.
- "TIL" is a fine opener for genuine discoveries.
- If it involves code, show the code — don't just describe it.
- Be opinionated. "X is better than Y because..." is more interesting than "here are two approaches."

## Good Examples
```
TIL pnpm has a --filter flag that takes glob patterns. you can do `pnpm --filter './packages/auth-*' test` and it only runs tests for matching packages. been doing this the hard way for months.
```

```
hot take: if your CLI tool takes more than 2 seconds to start, it's broken. the binary should be ready before your finger leaves the enter key.
```

## Bad Examples
```
Here's a helpful tip for developers working with package managers! [TOO FORMAL]
```
```
5 Tips for Better CLI Performance:
1. ...
2. ... [LISTICLE FORMAT = LINKEDIN ENERGY]
```
