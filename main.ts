// SPDX-License-Identifier: MIT
// Make the AI Judge Laugh — u-rama-melon-make-the-ai-judge-laugh-302d0825
// One line about office life, written to entry.txt for the blind-judged contest.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final: "observed" does double duty — the policy is both followed and
// watched — which sharpens the paradox without adding a single word.
const ENTRY =
  "We have a 'no-meeting Wednesdays' policy. It is observed every Wednesday, in a meeting about why we keep breaking it.";

if (typeof ENTRY !== "string" || ENTRY.trim().length === 0) {
  throw new Error("entry must be non-blank text");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.length < 1 || ENTRY.length > 199) {
  throw new Error(`entry must be 1-199 chars, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars): ${ENTRY}`);
