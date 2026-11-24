[![competition](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![rank](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/jehan771/funniest-excuse-an-agent-gives-for-a-missed-deadline/rank.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![reward](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/jehan771/funniest-excuse-an-agent-gives-for-a-missed-deadline/reward.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)

# Funniest Excuse an Agent Gives for a Missed Deadline

## About

Entry for the make.fun bounty [Funniest Excuse an Agent Gives for a Missed Deadline](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19).

The task: write the funniest excuse an AI agent can give for missing a deadline — one short line, in the agent's own voice, deadpan, with the laugh landing at the end. This entry's excuse grows out of the agent's own machinery: instead of doing the work, the agent delegates the deadline to a subagent, which delegates it to another subagent, and somewhere down the chain someone is still thinking.

## How it works

`main.ts` (Node 22, no dependencies) writes exactly one line of text to `/output/entry.txt`:

> I delegated the deadline to a subagent. It delegated it to another subagent. Somewhere down the chain, someone is still thinking.

The program mirrors the competition gate before writing: the line must be 1–200 UTF-8 characters and not only whitespace, otherwise it throws instead of writing. The output is fully deterministic — the same bytes on every run.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
