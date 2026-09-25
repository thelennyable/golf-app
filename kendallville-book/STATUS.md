# Kendallville, Indiana — book status

## Session 25 Sep 2026 (afternoon): WRITING
- MEASURED: this session is a cloud container (claude.ai/code, attached to the golf-app repo). There is no device bridge to
  the PC: no computer-use / device server is connected, and nothing is mounted (/mnt/user-data/working is empty).
  C:\Users\hp\nostalgia-book cannot be reached from here.
- MEASURED: all research output is in Google Drive, folder kendallville-in (INDEX.tsv, QUEUE.md, dumps/, subjects/<slug>/).
  Writing needs no browser and no PC, so the book runs from Drive.
- Output goes to Drive (kendallville-in/chapters, /evaluations, /verification) and to git branch
  claude/kendallville-book-8dthzo, folder kendallville-book/ (backup copy only).
- Drive connector limit: it creates files and cannot overwrite them. Corrected versions would land beside the originals.
  For that reason chapters are uploaded only once, after verification.

- MEASURED: the environment network policy denies direct fetches of kpcnews.com, wane.com, kendallvillein.gov,
  hitefuneralhome.com, en.wikipedia.org (proxy CONNECT 403). WebSearch still works, so web checks rest on search snippets.
  Fix (Lenny): environment settings > Network access, add those domains or pick a broader level.

## Method
Per subject: evaluator (reach from INDEX.tsv as measured by research, texture from reading) -> writer -> independent
verifier subagent (book-verification-pass, cut-only repairs) -> Drive upload.

## Queue (INDEX.tsv, COLLECTED, by comment volume)
Cycle 1: bixler, main-street-stores, old-school, working-plants, teachers
Cycle 2: drive-in-stands, neighborhood-groceries, ice-cream-parlors, grade-schools, supermarkets
Cycle 3: mccray, restaurants, jims-pizza, movies, v-and-a
Cycle 4: burger-chef, christmas, gas-stations, youth-center, mccray-hospital
Cycle 5: barbers, taverns, tornado-1992, cruising, shooks

## Chapters (written and verified)
Cycle 1 (all PASS, independent verifier, cut-only repairs):
1. One Last Walk-Thru (old school) 1,099 w, 34 claims, 11 cuts
2. We Lived at the Lake (Bixler) 1,020 w, 55 claims, 16 cuts
3. Walking Uptown (Main Street stores) 968 w, 49 claims, 17 cuts
4. Don't Say Yes and Mean No (teachers) 777 w, 41 claims, 24 cuts
5. The Kendallville Foundries (working-plants) 1,085 w, 42 claims, 14 cuts. Drive copy is named kendallville-smelled-like-money.md (title was cut; Drive cannot rename from here).
Lessons: writers embellished (brief now bans invented texture); single-comment title phrase fails dosage (brief now requires 3+).
Gaps: Main Street dump holds only Penney's/Klinkenberg's/Connie's; Sears, Sellick's, Allison's, Diehl's, Val's unharvested. Foundries dump has no Kraft, Flint & Walling, potato-chip threads (in POOL.tsv).
- Carry-over: the supermarkets dump's Publix Corners postcard thread is about the Publix Corners CAFE (US 6 and SR 3),
  not a grocery. It goes to the restaurants chapter (cycle 3): its writer must read dumps/supermarkets.txt thread 3 too.
- Gap: grade-schools dump is all North Side; South Side, Wayne Center, Riley threads unharvested (in POOL.tsv).
- Carry-over: ice-cream-parlors dump thread 'hope chests' (Atz Furniture, Berhalter's, Clark's cedar chests for graduating girls) is off-topic there; possible passage in a Main Street chapter.
- Supermarkets (Harman's IGA) verified at 553 words: short. Candidate to merge with neighborhood-groceries at structure time, or harvest more (A&P/Kroger/IGA posts in POOL.tsv).
