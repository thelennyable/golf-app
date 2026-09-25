# Kendallville chapter writer brief (one subject per agent)

Book: hometown-nostalgia coffee-table book for Kendallville, Indiana, from the private Facebook group
"Growing up in Kendallville ... back in the day ..." (8.0K members). Research is finished and lives in Google Drive.

## Your scope: exactly ONE subject (given in your task). Do not write any other chapter.

## Drive locations (use the Google Drive MCP tools; load them with ToolSearch "select:mcp__Google_Drive__search_files,mcp__Google_Drive__read_file_content,mcp__Google_Drive__create_file")
- Dump for your subject: search `title = '<slug>.txt' and parentId = '11U4yaCL1zP3Ljhd89nmGu8jpaTOuTZAI'`, then read_file_content.
  If the file is truncated by the tool, say so in your report; do not pretend you read all of it.
- Dossier: find the subject folder with `title = '<slug>' and parentId = '1K-rArpgAevC4oRJS_Ks43i5yPOGdciwm'`,
  then `title = 'dossier.md' and parentId = '<that folder id>'`. Its "conflicting claims" list matters.
- Upload your EVALUATION file to Drive folder `1YZQRBaGfVOLd6BHDCdoxcsPAjKXDS7bm` (evaluations), as text/markdown
  with disableConversionToGoogleType=true. Do NOT upload the chapter; the independent verifier does that after checking it.

## Step A: Evaluate (book-chapter-evaluator)
Read /root/.claude/skills/synced/*/book-chapter-evaluator/SKILL.md. Reach and engagement are ALREADY MEASURED by the
research session (numbers given in your task, from INDEX.tsv: distinct posts, comments, distinct post authors).
Texture you judge by actually reading the comments. Write `/home/user/golf-app/kendallville-book/evaluations/<slug>.md`
in the evaluator's output format (under 200 words), verdict one of Own chapter / Harvest more / Passage inside X / Skip.
Real evaluation means candidates can fail. If the verdict is not Own chapter, stop after uploading the evaluation.

## Step B: Write (book-chapter-writer)
Read /root/.claude/skills/synced/*/book-chapter-writer/SKILL.md and references/voice.md, and follow them, EXCEPT:
ignore its "start the next chapter" rule and its device_commit_files instruction (you write exactly one chapter;
the orchestrator handles delivery). Also read the "verification defects" section of
/root/.claude/skills/synced/*/town-book-machine/SKILL.md (singular-to-plural inflation, detail migration, footer
laundering, HARD-SOURCE category for race/segregation).

Must-haves:
- NO INVENTED TEXTURE (added after cycle 1: verifiers cut 11-16 lines per chapter, mostly writer embellishment).
  Every concrete image, action, sound, procedure, time of day, adjective of fact ("electric", "early fall") and every
  "nobody agrees" must trace to a dump comment. Do not supply the scene around a memory (the slap you could hear, what
  the lifeguard made you do, what your mother knew). Do not move a detail from one place or context to another. The
  prose can be warm and rhythmic in HOW it says things, never in WHAT it adds. If a paragraph feels thin, go back to
  the dump for another real detail; never fill it. Shorter and true beats longer and embroidered: 800 words is fine.
- Step 0: confirm what the comments are actually about.
- 800-1,200 words. Feeling first, history second. Open on who the place was for. End on loss without wallowing.
- Title pulled from a phrase residents actually wrote, format first line: `# Title` then `*Place*` on the next line.
- ZERO em dashes (—) and no en-dash used as a dash. Source invisible: no Facebook, thread, comments, "one woman", "someone
  remembers", "says", "recalls", "swears", etc. One comment never licenses a plural; use second person instead.
- No named private individuals unless they are public figures of the place (owner, founder, the proprietor everyone knew).
  Single-family anecdotes: cut.
- Assert a hard fact (year, address, owner, closing, what is there now) only if the dump states it plainly AND a web
  search confirms it (use WebSearch/WebFetch; load via ToolSearch). Conflicting memories: stay in evocation, never pick a side.
- After the chapter body, a line `---` then a section `## Writer's notes (not for print)` listing each checkable claim
  with the dump evidence (count of distinct comments) and the web source URL, and anything you softened or cut.
  This section is for the verifier; it is not a "Sources checked" footer.
Save to `/home/user/golf-app/kendallville-book/chapters/kendallville-<short-slug>.md`.

## Step C: Sweeps before you finish
Run: `grep -n -i -E "—|one woman|one man|one person|somebody|someone|a woman|a man|the thread|commenter|posted|wrote|says|said|swears|recalls|remembers|according to|people say|more than one|facebook" <file>`
on the chapter body (above the notes). Fix every hit (second person is the fix of choice). Report the final grep output.

## Report back (short)
slug, verdict, chapter filename, title, word count of the body (`sed '/^---$/q' file | wc -w`), whether the whole dump was
readable, and the three riskiest factual claims you kept.
