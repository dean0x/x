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
- **Sarcasm works best when directed at yourself or at tools/ecosystem problems everyone shares.** Don't punch down.

## Good Examples
```
TIL claude code has a /compact command that summarizes your conversation and frees up context. been running out of context for weeks before discovering this.
```

```
hot take: if your AI agent needs more than 3 tool calls to complete a task, your tool design is wrong, not the model.
```

```
the secret to good prompt engineering: write the output you want first, then reverse-engineer the prompt. works every time.
```

```
tried running deepseek-coder locally vs claude API for the same refactor. local was free. claude was right. pick your tradeoff.
```

```
everyone's building RAG. nobody's measuring if RAG actually helps vs just stuffing the context window. i tested both — thread below.
```

```
pro tip: when comparing LLMs, don't use toy examples. give them your actual codebase with its actual mess. that's the real benchmark.
```

## Bad Examples
```
Here's a helpful tip for developers working with AI tools! [TOO FORMAL]
```
```
5 Tips for Better Prompt Engineering:
1. ...
2. ... [LISTICLE FORMAT = LINKEDIN ENERGY]
```
