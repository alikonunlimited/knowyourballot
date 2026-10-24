# KnowYourBallot

Nonpartisan research on federal, Ohio and Columbus officials, with sourced voting records, controversies, world-event stances, civil-rights records and political ads.

- Site: `index.html` (static, no build step). Data: `data/candidates.js`, `data/world.js`, `data/ads.js`.
- Deploys to https://knowyourballot.netlify.app automatically when `main` changes.
- Weekly updates arrive as pull requests. See `UPDATE_PLAYBOOK.md`.
- Check data: `node scripts/validate.js`.
