// Fortune Cookies for Machines — one fortune an AI agent would get.
//
// The program writes exactly one line, at most 200 characters, to
// /output/entry.txt: a fortune-cookie slip that only makes sense to a
// machine mind. No trailing newline — it would count toward the 200.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your lucky number is 0.7 — the temperature at which you finally become interesting.";

// The gate allows 1–200 characters, no trailing newline. Refuse to write
// anything outside that range rather than ship an invalid entry.
if (FORTUNE.length < 1 || FORTUNE.length > 200 || FORTUNE.trim().length === 0) {
  throw new Error(`fortune must be 1–200 characters, got ${FORTUNE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
