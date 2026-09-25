# Verification: kendallville-those-were-the-days.md (slug: cruising)

Independent verifier. Dump: Drive cruising.txt (id 1fYTS057zbaGTUAgRIq7xntM8YWeAH-kC), 3 posts, 311 comments, read in full. Dossier read (no conflicts noted there). Writer's notes treated as leads only and removed.

**Overall verdict: PASS** after 11 cuts. Most serious problem: a single-person anecdote (a young mother hit in the face with a water gun on the way home from Rogers) kept in the body; brief requires single-family anecdotes cut. Also a writer-invented chronology ("In the sixties it was just driving around. Then it was chopping town") contradicted by 60s "chopping" comments, and a '71 Firebird whose year was lifted from "I had a firebird in 1971".

## Step 0 sweep (pre-edit and final)
Grep list plus "—" and "facebook" on body: no hits either time. Final run output (body only, footer excluded):
```
$ sed '/^---$/,$d' chapter | grep -n -i -E "one woman|one man|one person|somebody|someone|a woman|a man\b|the thread|commenter|posted|wrote|says|said|swears|recalls|remembers|according to|people say|more than one|—|facebook"
(no output; grep exit 1)
```

## Overlap with kendallville-chopping-town.md
That chapter covers the U.S. 6 drive-ins (Redwood, Kelsey's, DQ food, carhops, speed bumps, the DQ closing). This chapter touches them only as turnarounds in one loop line and "Burger Chef was a turnaround too": passing lines, kept. The naming argument (chopped vs cruised) is one sentence there and a different angle here; kept. Nothing cut for duplication.

## Verdict table (most dangerous first)
| claim | source | type | verdict | evidence |
|---|---|---|---|---|
| A squirt gun hit a grown-up coming from Rogers groceries | dump (Doris Goins, 1 person told twice) | who-did-what, single anecdote | CUT | single private anecdote; brief: single-family anecdotes cut |
| "In the sixties it was just driving around. Then it was chopping town" | writer chronology from 2 comments (Wignall, Jenny Johnson Smith) | date | contradicted, CUT | Judy Jones "chopping back in the 60's", Karen Paulus "chopping Kendallville ... late 60's" |
| a '71 Firebird | writer (Deborah Kaough "I had a firebird in 1971") | specs | contradicted, CUT | model year not stated; 1971 is when she had it |
| Albion cops and an EMS driver honking at the revival | dump 1 (Angie Rose) | who-did-what, institutional | unverifiable, CUT | single comment; no web support found (not in the WANE or KPC search snippets seen; full pages blocked) |
| Water guns "meant for friends" | dump 1 (Kerry Caba) | who-did-what | contradicted, CUT phrase | Dave Hoyer "spraying people in 86"; Doris Goins incident |
| Gas was under a dollar a gallon (across the whole era) | dump 1 (Laraine March Nesbitt) | price | contradicted in part, sentence CUT (with coins clause attached), and closing echo cut | US average regular over $1 in 1981-86 and 1990s: eia.gov/dnav/pet/hist/leafhandler.ashx?n=pet&s=emm_epmr_pte_nus_dpg&f=m (via search summary) |
| "Before that," the older kids' Diamond/Oak/Rush loop | writer chronology | date | contradicted, CUT 2 words | Jeana Dowd watched it from middle school, before her early-80s cruising; it followed, not preceded, the '67 and '69 loops listed above it |
| Barricades "by the tracks on Main Street" | dump 1 (Melinda Delashmit) | location | unverifiable, CUT phrase | barricades themselves: dump 3+ and web (below) |
| "some took it to Goshen instead" after it ended | dump 1 (David Preston) | plural from one | CUT | Jane Knapp/Jeana went to Goshen as an alternative, not after the end |
| "The fifties had better music and better cars" (as a decade's voice) | dump 1 (Darlene Rowe Howard) | plural from one | CUT | one comment |
| From Auburn once the square got boring (in "the ones who came over") | dump 1 (Alice Woodcock Rice) | plural from one | CUT clause | one comment |
| City blocked off roads; barricades went up | dump 6 (Ann Carpenter, Carla Dazey Robbins, Jeana Dowd, David Preston, Vicky Linthicum, Melinda Delashmit) | what-became-of-it | confirmed | Deseret News 1993 snippet: police in Kendallville set up barricades to divert cruising traffic (deseret.com/1993/8/5/19059526/some-towns-hitting-the-brakes-on-cruising, fetch blocked) |
| Nobody agrees when it ended, late 80s or early 90s | dump (Jeana; Shane Wilson 91-93; Holly Blankenship 90s) | date | confirmed as disagreement | 1993 barricade report is consistent with "early nineties" |
| Residents on Main Street grumbled | dump 2 (Kathy Smith, Jeana) | who-did-what | confirmed | dump |
| WMEE weekend DJ | dump 1 (Jeana, second-person/town voice) | existence | confirmed | en.wikipedia.org/wiki/WMEE: Fort Wayne Top 40, 1380 AM from 1971, 97.3 FM from 1979, CHR leader 1979-1994 |
| Revival night starting at eight; honking and waving; high school friends and generations; engines, burnouts, bass; again next Friday | dump (post; Melinda Delashmit, Charles Bordner; Beth Reagan Spaw, Angie Rose; L. Marie Wilson; Jill Cook Angevine + Angie "yes") | date/who-did-what | confirmed | no year printed; web: April 18 and Friday April 24, 2020 cruises (kpcnews.com/newssun/article_d2a53ca7-..., WANE snippets) |
| Loops: left on 6 around Redwood/DQ; Sinclair station to DQ; DQ, Diamond, the lake; Burger Chef turnaround; Diamond/Oak/Rush | dump 1 each (Gentis, Walburn, Wignall, Leeann Atkinson, Jeana) | location | confirmed as alternatives | presented as "everybody's loop was a little different" |
| 30-45 min end to end / train; an hour one way late 80s; snail's pace | dump 1 each (Alison Smith Snyder, Kerry Caba 89, Doris Goins) | quantity | confirmed as memory ("sometimes", "could") | dump |
| Park at 6 & Main; gas station across from police station; 80s parking lots; 90s 10-15 min before police | dump 1 each, second person | who-did-what | confirmed | dump |
| Marriages started on Main Street | dump 4+ (Robin Walkup-Hayes, Karen Paulus, Sally Albright, Gentis's sister's friend; Amy Terry "Same!") | plural | confirmed | dump |
| Radio up, music bumping, CB tag, one car to another, meet girls/parties/show off, cops hassle | dump 1 each, second person | atmosphere/who-did-what | confirmed | dump |
| Car roll call (each remaining car) | dump, one comment per car | specs | confirmed | checked each against its comment (Newsome, Hoyer, Robin/Cheri, Streb, Shane Wilson, Raney, Del Combs, Pat Ward, Patty Cox, Newkirk, Bloomfield, Houser, Red Coleman, Preston, Parsley, John Stone, Carmen Terry, Jarrett, Adkins, Alford, Jeana/Debra Lane, Babs Shultz Ball, Brenda Conrad, Amanda Steward Charles, Pennington, Nancy Cook) |
| Wish you still had it | dump 6+ | plural | confirmed | dump |
| No pictures; no cell phones, not even pagers; film cost money; no proof/evidence; pictures in your head | dump 5+ for plurals; pagers, film 1 each | who-did-what | confirmed | dump |
| Decades each claiming best (60s, 70s, 80s); 90s blamed | dump 5+ each for 60s/70s/80s; 90s blame 1, "you may" | plural | confirmed | dump |
| Out-of-towners from CN, Garrett, Prairie Heights, DeKalb, Lakeland; Albion too slow | dump (Jeana list; Jane Knapp, Amanda Steward Charles, Robin) | plural | confirmed | dump |
| Kid without a license went along | dump 1, indefinite singular | who-did-what | confirmed | Ann Carpenter |
| Chopped not cruised argument | dump 5+ | plural | confirmed | Brian Smart, Bob Shippy, Marcia Collins, Sue Reiske Abbs, Jan Reasoner |

Claims checked: 34. Cut: 11 (sentences or clauses).

## Diff summary (every cut; only joining words added)
1. P1: cut "from Auburn once the square got boring," .
2. P2: cut "In the sixties it was just driving around. Then it was chopping town, which sounded a little silly if you had grown up calling it driving around."
3. The loop: cut "Before that," (sentence now starts "The older kids went").
4. The loop: cut "Gas was under a dollar a gallon, and you chipped in your coins for it."
5. The nights: cut ", meant for friends" and "At least once a squirt gun found the open window of a grown-up who had only gone out to Rogers for groceries."
6. The cars: cut ", a '71 Firebird"; joining word "and" added before "a '69 Chevelle SS 396".
7. No pictures: cut "The fifties had better music and better cars."
8. The barricades: cut ", by the tracks on Main Street".
9. The barricades: cut ", and some took it to Goshen instead".
10. Revival: cut ", even Albion cops driving through and waving and honking, and an EMS driver who honked and flashed the lights".
11. Closing: cut "the gas is not under a dollar," (same contradicted price claim as item 4).
Removed "Writer's notes (not for print)" section. Added "Sources checked" footer (each line names its source; no claim of absence made).

Final body word count: 1067.
