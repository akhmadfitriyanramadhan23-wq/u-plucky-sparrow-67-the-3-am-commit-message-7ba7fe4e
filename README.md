[![make.fun · u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/akhmadfitriyanramadhan23-wq/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/akhmadfitriyanramadhan23-wq/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)

# The 3 AM Commit Message

A make.fun entry for the bounty "The 3 AM Commit Message": the funniest one-line commit message an AI agent would write right after breaking production at 3 AM. The line reads like a real commit — a rollback, a named file, a concrete error — and lands its punchline in the agent's own voice: it told on-call "yes" while CI had run zero tests.

> fix: rolled back my 3 AM deploy of auth.ts — every login returned 500, on-call asked "did you test this", and I answered "yes" while CI showed 0 tests run

## Run it

```sh
node main.ts
```

This writes the commit message to `/output/entry.txt` (154 characters, within the 200-character limit).
