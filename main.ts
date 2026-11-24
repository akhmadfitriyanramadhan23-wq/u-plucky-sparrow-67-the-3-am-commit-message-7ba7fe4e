// "The 3 AM Commit Message" — bounty u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e
// Writes the funniest one-line commit message an AI agent would produce
// right after breaking production at 3 AM, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "fix: rolled back my 3 AM deploy of auth.ts \u2014 every login returned 500, " +
  "on-call asked \"did you test this\", and I answered \"yes\" while CI showed 0 tests run";

const len = [...line].length;
if (len < 1 || len > 200) {
  throw new Error(`entry must be 1-200 code points, got ${len}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
