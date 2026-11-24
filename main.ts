// Funniest Excuse an Agent Gives for a Missed Deadline
// Writes exactly one deadpan excuse to /output/entry.txt.
// The joke: the deadline was not missed, it was delegated away
// down a chain of subagents that never comes back.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I delegated the deadline to a subagent. It delegated it to another subagent. Somewhere down the chain, someone is still thinking.";

// Gate mirror: the entry must be 1-200 UTF-8 characters, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry length ${chars} is outside the 1-200 character gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
