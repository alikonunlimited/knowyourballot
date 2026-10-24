# KnowYourBallot — Weekly Update Playbook

This is the procedure the weekly scheduled task follows. Nothing goes live until the owner (Al iKon) approves the pull request. Merging to `main` makes Netlify deploy knowyourballot.netlify.app automatically.

## Ground rules
1. **Every new or changed fact needs a working source URL** from a news outlet, court, or government site. **Wikipedia is never a data source.** It is used only for photos.
2. **New allegations need two independent sources** before they're added. Otherwise, list them in the PR as "watching — not yet added."
3. **Neutral wording.** State what happened, who said it, and the outcome. No adjectives like "shocking" or "disgraceful." Civil-rights entries include supportive actions as well as criticized ones.
4. **Update outcomes.** If a lawsuit, investigation, or race resolves, update the `outcome` or `status` text and note the change in the PR.
5. **Never invent numbers.** Use spending figures only when a source reports them, with the date and the tracker named (FEC, AdImpact, etc.).
6. **UN and other votes by governments** are attributed to the government or administration that cast them, never to an individual official who didn't vote.

## Weekly checklist
1. `git pull`, then create branch `weekly-update-YYYY-MM-DD`.
2. For each official in `data/candidates.js`, search the past 7–10 days of news for:
   - new votes, bills signed or vetoed, rulings, or official actions → `record`
   - new or resolved scandals, lawsuits, or investigations → `controversies` (update `outcome`)
   - changes in office, candidacy, or results → `office`, `status`, `elections`
   - statements on world events → `WORLD` in `data/world.js`
   - actions, lawsuits, or statements affecting Black Americans → `CIVIL` in `data/world.js`
3. **Ads** (`data/ads.js`): search news for new ad campaigns for or against each official, especially those on the ballot. Record the sponsor, side, platform, spend (only if reported), message, and source. Check:
   - AdImpact figures quoted in news reports
   - FEC independent expenditures (federal races)
   - The Meta Ad Library and Google political ads pages, when the session can reach them
   - The Ohio campaign finance search (state and local races)
   Update `RACE_AD_TOTALS` when a newer total is reported.
4. After Election Day (Nov 3, 2026), record the results for every race in `elections` and update `status` and `office` for winners.
5. Bump `DATA_AS_OF` and `ADS_AS_OF` to the current month.
6. **Verify every URL you added or changed** opens to the cited article. Remove or replace any that don't.
7. Run `node scripts/validate.js`. It must print `OK`.
8. Add a dated entry to `CHANGELOG.md` with one line per change and its source.
9. Commit, push the branch, and open a PR titled `Weekly update — <date>`. The PR body lists:
   - changes made, grouped by official
   - items being watched but not added, and why
   - links that couldn't be verified automatically
10. If nothing changed, still open a PR that updates only `DATA_AS_OF` and the changelog line "No changes found."
