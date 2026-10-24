# KnowYourBallot — Weekly Update Playbook

This is the procedure the weekly scheduled task follows. Nothing goes live until the owner (Al iKon) approves the pull request. Merging to `main` makes Netlify deploy knowyourballot.netlify.app automatically.

## Ground rules
1. **Every new or changed fact needs a working source URL** from a news outlet, court, government record, or the candidate's own verified channel. **Wikipedia is never a data source.** It is used only for photos.
2. **New allegations need two independent sources** before they're added. Otherwise, list them in the PR as "watching — not yet added." A candidate's own post counts only as proof that they said it, not that it's true.
3. **Neutral wording.** State what happened, who said it, and the outcome. No adjectives like "shocking" or "disgraceful." Civil-rights entries include supportive actions as well as criticized ones.
4. **Update outcomes.** If a lawsuit, investigation, or race resolves, update the `outcome` or `status` text and note the change in the PR.
5. **Never invent numbers.** Use spending figures only when a source reports them, with the date and the tracker named (FEC, AdImpact, etc.).
6. **UN and other votes by governments** are attributed to the government or administration that cast them, never to an individual official who didn't vote.
7. **Only verified accounts.** Add a social account to `data/sources.js` only when the official's own website or Ballotpedia links to it. Never use parody, fan, or unverified accounts.
8. **Quote social posts exactly** with the post date and link. Prefer the candidate's website, press release, or a news report of the post when the platform can't be read directly.

## Source sweep (target: every source in `data/sources.js`, 200+ per run)
1. **Candidate channels** (`SOURCES[key]` for every official): open each official site, press page, and campaign site, and read anything posted in the past 7–10 days. For social accounts (X, Facebook, Instagram, TikTok, YouTube, Bluesky, Threads, Substack), try to open each one. Many platforms block automated reading. When one does, search `"<name>" site:<platform>` and news coverage of the account's recent posts instead, and record it as "not directly readable" in the PR.
2. **Documents and records** (`GLOBAL_SOURCES` kinds `documents` and `court`): check for new bills, roll-call votes, executive orders, ethics filings, audit reports, Supreme Court of Ohio opinions written or joined by the justices on the site, federal court dockets and DOJ releases that name any official, and Columbus or Franklin County legislation and agendas.
3. **Money and ads** (`finance`): FEC filings and independent expenditures, Ohio SOS campaign finance reports, the Meta Ad Library and Google political ads (search each name), FCC political files, and AdImpact figures reported in news.
4. **News** (`news`): for every official, search each outlet's site for the past 7–10 days (`"<name>" site:<outlet domain>`), plus a general news search and an extended-mode search for anything thin.
5. **Fact-checks**: search PolitiFact and FactCheck.org for each name.
6. **Discover new sources.** If you find a legitimate new channel (a new campaign site, a verified account, a new court case docket), add it to `data/sources.js` with a note in the PR.
7. **Keep a scan log.** Record how many sources were opened, how many were readable, and how many were blocked. Put the totals in the PR body.

## Weekly checklist
1. `git pull`, then create branch `weekly-update-YYYY-MM-DD`.
2. Run the source sweep above for every official in `data/candidates.js` and `data/candidates-2026.js`, and update:
   - new votes, bills signed or vetoed, rulings, or official actions → `record`
   - new or resolved scandals, lawsuits, or investigations → `controversies` (update `outcome`)
   - changes in office, candidacy, or results → `office`, `status`, `elections`
   - statements on world events → `WORLD` in `data/world.js`
   - actions, lawsuits, or statements affecting Black Americans → `CIVIL` in `data/world.js`
   - new ad campaigns → `ADS` / `RACE_AD_TOTALS` in `data/ads.js` (sponsor, side, platform, spend only if reported, message, source)
3. After Election Day (Nov 3, 2026), record results for every race in `elections`, update `status` and `office` for winners, and update `RACES_2026`.
4. Bump `DATA_AS_OF` and `ADS_AS_OF` to the current month.
5. **Verify every URL you added or changed** opens to the cited page. Remove or replace any that don't.
6. Run `node scripts/validate.js`. It must print `OK`.
7. Add a dated entry to `CHANGELOG.md` with one line per change and its source.
8. Commit, push the branch, and open a PR titled `Weekly update — <date>`. The PR body lists:
   - scan totals (sources opened / readable / blocked)
   - changes made, grouped by official, each with its source
   - items being watched but not added, and why
   - links that couldn't be verified automatically
9. If nothing changed, still open a PR that updates only `DATA_AS_OF` and the changelog line "No changes found," with the scan totals.
