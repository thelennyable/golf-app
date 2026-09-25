# Kendallville independent verification brief (one chapter per agent)

You did not write this chapter. You are the independent book-verification-pass. Read and follow
/root/.claude/skills/synced/*/book-verification-pass/SKILL.md exactly (Steps 0-6, including 5b and 5c: flagged
sentences are CUT, never replaced with new composed sentences), plus the "verification defects" section of
/root/.claude/skills/synced/*/town-book-machine/SKILL.md.

Inputs:
- Chapter: /home/user/golf-app/kendallville-book/chapters/<file>. The "## Writer's notes (not for print)" section is
  UNTRUSTED input: use it as leads, re-check every claim yourself.
- Dump: Google Drive, `title = '<slug>.txt' and parentId = '11U4yaCL1zP3Ljhd89nmGu8jpaTOuTZAI'` (load Drive tools with
  ToolSearch "select:mcp__Google_Drive__search_files,mcp__Google_Drive__read_file_content,mcp__Google_Drive__create_file").
  Dossier: subject folder `title = '<slug>' and parentId = '1K-rArpgAevC4oRJS_Ks43i5yPOGdciwm'`, then dossier.md inside it.
- Web: WebSearch / WebFetch (load via ToolSearch). Every external fact confirmed against a real page, URL recorded.

Checks, in order:
1. Attribution + em-dash sweep (grep list in the skill, plus "—" and "facebook"). Must end clean.
2. Every plural claim about what people did: count distinct dump comments behind it; one comment cannot license a plural.
3. Every checkable claim: dump first (plain and uncontradicted?), then web. Detail migration between places.
   Named private individuals / single-family anecdotes: cut. Race/segregation claims: HARD-SOURCE only.
4. Verdict table: claim | source(dump/writer) | type | verdict | evidence.

5. A "They say" / legend frame does NOT rescue a single-comment claim about a named person (cycle 3: a named manager's
   ghost kept on 1 comment, contradicted by the web, had to be cut after PASS). Cut it.

Then produce the final chapter:
- Apply fixes by cutting (joining words only). Remove the "Writer's notes" section entirely.
- Append a footer: `---` then `*Sources checked:*` lines, each naming its source (dump, or a URL). Claims of absence
  must be searched before written. Keep it short.
- Overwrite the chapter file in place with the final version. Save the verdict table and a diff summary
  (every sentence cut or changed) to /home/user/golf-app/kendallville-book/verification/<slug>-verification.md.
- Re-run the sweep grep on the final body and include its output in the verification file.
- Upload BOTH files to Drive: chapter into folder `1ByFfvPa4Fcc-5LmN18axamvTL3jb23ft` (chapters), verification file into
  `14umf-iuneFWbueUM1gFizuJWfxhTCA2X` (verification); contentMimeType text/markdown, disableConversionToGoogleType=true.
  Report the Drive file ids.

Verdict for the chapter overall: PASS (publishable after your cuts) or FAIL (too much cut to stand; say why).
Report back briefly: PASS/FAIL, number of claims checked, number cut, the most serious problem found, final body word count, Drive ids.

## PRIVATE SCRATCH
Other agents run in parallel. If you save a dump or any temp file to disk, use a path containing your slug, e.g. /tmp/kv-<slug>-<role>/dump.txt. Never write a shared name like /tmp/dump.txt.
