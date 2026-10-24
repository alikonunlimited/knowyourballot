/* Social "Ad Translator" videos (30–45 s, vertical 1080x1920).
   Every claim, finding and verdict below is condensed from data/adchecks.js and data/funders.js;
   each claim's `ref` points to [AD_CHECKS id, claim index]; the build pulls the rater and source from
   there and stops if the verdict here doesn't match. Quips are light jokes about ads in general, never about a candidate's character.
   Sensitive ads (e.g. "Amy's Mom", Epstein claims) are intentionally left out of this playful format. */
const SITE = 'knowyourballot.netlify.app';

const VIDEOS = [
  {
    id: 'senate-ads-translated',
    race: 'U.S. Senate',
    kicker: 'Ohio Senate · Brown vs. Husted',
    kind: 'translate',
    title: 'Ohio Senate ads, translated',
    claims: [
      { sponsor: 'Sherrod Brown campaign', ad: 'Golden Boy',
        says: 'FirstEnergy spent at least $3.5 million to help Husted’s campaign.',
        record: 'About $1M went to a dark-money group that funded a super PAC backing him, and $2.5M to an RGA-linked group backing the DeWine–Husted ticket. Not his own campaign.',
        ref: ['brown-golden-boy', 0], verdict: 'Misleading',
        quip: 'The money is real. The route it took is not what the ad implies.' },
      { sponsor: 'NRSC · approved by Jon Husted', ad: '50 Years',
        says: 'During Brown’s 50 years in office, prices rose faster than paychecks.',
        record: 'Federal labor data shows weekly earnings outpaced prices from 1975 to 2025. And he wasn’t in office all 50 of those years.',
        ref: ['nrsc-50-years', 1], verdict: 'Misleading',
        quip: 'Paychecks would like a word.' },
      { sponsor: 'Sherrod Brown campaign', ad: 'Data centers',
        says: 'Husted led the push for data centers and gave billions in tax breaks.',
        record: 'He championed data centers and defended the tax breaks. A state board formally approved them.',
        ref: ['brown-data-centers', 0], verdict: 'Mostly accurate',
        quip: 'Rare sighting: an ad that mostly checks out.' },
      { sponsor: 'NRSC · approved by Jon Husted', ad: '50 Years',
        says: 'Brown became a politician in 1975, when Husted was 7.',
        record: 'True. Brown was elected to the Ohio House in 1975, at age 22.',
        ref: ['nrsc-50-years', 0], verdict: 'Accurate',
        quip: 'Plot twist: this one is just true.' }
    ]
  },
  {
    id: 'governor-ads-translated',
    race: 'Governor',
    kicker: 'Ohio Governor · Ramaswamy vs. Acton',
    kind: 'translate',
    title: 'Ohio governor ads, translated',
    claims: [
      { sponsor: 'V-PAC · pro-Ramaswamy super PAC', ad: 'V-PAC attack on Acton',
        says: 'Amy Acton praised socialist mayor Zohran Mamdani.',
        record: 'The ad’s own source doesn’t mention her. In the interview, the interviewer said Mamdani’s name. Acton never did.',
        ref: ['vpac-acton', 4], verdict: 'False',
        quip: 'Being asked about someone is not the same as praising them.' },
      { sponsor: 'Amy Acton campaign', ad: 'Acton attack on Ramaswamy',
        says: 'His company “charged sick kids $3 million.”',
        record: 'It’s Rethymic, a one-time treatment for babies born without a thymus, listed at $2.7 million before insurance.',
        ref: ['acton-on-ramaswamy', 2], verdict: 'Missing context',
        quip: 'The price is real. The villain music is optional.' },
      { sponsor: 'V-PAC · pro-Ramaswamy super PAC', ad: 'V-PAC attack on Acton',
        says: 'She missed COVID training after tripping on a dog gate.',
        record: 'She did trip and miss a training. But it was a CDC communications course, months before the pandemic.',
        ref: ['vpac-acton', 1], verdict: 'Missing context',
        quip: 'The dog gate has been cleared of all charges.' },
      { sponsor: 'Amy Acton campaign', ad: 'Acton attack on Ramaswamy',
        says: 'Ramaswamy said: “We are making money… that’s what’s most important.”',
        record: 'It’s a paraphrase from a 2023 Forbes story recalling a 2011 conversation. Ramaswamy denies saying it.',
        ref: ['acton-on-ramaswamy', 3], verdict: 'False',
        quip: 'Those quotation marks are doing a lot of work.' }
    ]
  },
  {
    id: 'ad-names-decoded',
    race: 'U.S. Senate',
    kicker: 'Ohio Senate · Follow the money',
    kind: 'money',
    title: 'Ad group names, decoded',
    items: [
      { name: 'Ohio Flyer PAC', funder: 'ohio-flyer', soundsLike: 'A Dayton air show.',
        actually: 'A super PAC set up to back Jon Husted. Its top donor ($1M) is a dark-money group that doesn’t disclose its own donors.',
        tag: 'Some donors hidden', tone: 'partial' },
      { name: 'WinSenate', funder: 'winsenate', soundsLike: 'A game show.',
        actually: 'Backs Sherrod Brown. An arm of Senate Majority PAC; its biggest funder is Majority Forward, a dark-money group.',
        tag: 'Some donors hidden', tone: 'partial' },
      { name: 'No Going Back PAC', funder: 'no-going-back', soundsLike: 'A breakup song.',
        actually: 'Spent $20M+ against Brown. Its filings listed no donors as of mid-October; the NYT and Reuters report it’s funded by Trump’s super PAC, MAGA Inc.',
        tag: 'Some donors hidden', tone: 'partial' },
      { name: 'Buckeye Freedom PAC', funder: 'buckeye-freedom', soundsLike: 'A tailgate.',
        actually: 'Spent about $1.6M attacking Husted and promoting the Libertarian candidate. Donors disclosed so far: none.',
        tag: 'No donors disclosed', tone: 'none' },
      { name: 'Enough Promises Ohio', funder: 'enough-promises', soundsLike: 'A progressive grassroots group.',
        actually: 'Its mailers attack Brown and promote an independent. Its only donor Oct. 1–14: a Republican super PAC ($2.5M). The independent says he has no ties to it.',
        tag: 'Donor: GOP super PAC', tone: 'partial' }
    ]
  }
];
module.exports = { VIDEOS, SITE };
