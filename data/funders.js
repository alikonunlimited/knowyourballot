/* Who pays for the ads: the groups behind 2026 Ohio election ads and their disclosed funders.
   Rules: every figure is quoted from a cited source with its date. Donor lists for national groups
   are cycle-wide (all races), not Ohio-only. "Dark money" = a nonprofit that is not required to
   disclose its donors. Updated weekly with the rest of the site. */
const FUNDERS_AS_OF = "October 2026";
const FEC = q => 'https://www.fec.gov/data/committees/?q=' + encodeURIComponent(q);
const SRC_VOTELOG = "https://votelog.org/investigations/ohio-senate-general-money";
const SRC_OCJ_Q2 = "https://www.newsfromthestates.com/article/sherrod-brown-comfortably-outraises-jon-husted-outside-groups-enter-ohios-us-senate-race";
const SRC_SIGNAL_ADS = "https://signalohio.org/heres-who-bought-political-ads-during-the-ohio-state-indiana-football-game/";
const SRC_OCJ_GOV_OCT = "https://www.newsfromthestates.com/node/432381";
const SRC_OCJ_GOV_JUL = "https://ohiocapitaljournal.com/2026/07/21/massive-spending-gap-in-ohio-governor-race-ramaswamy-drops-9m-on-ads-acton-spends-just-100k/";

/* type: campaign | party | super PAC | dark money | hybrid
   side: candidate key it helps (null when it attacks one candidate while promoting a third-party
         candidate), against: candidate key it targets
   disclosure: full | partial | none
   donors: [{name, amount, note?}] top disclosed donors as reported
   facts: plain sentences, each backed by the src list */
const FUNDERS = {
  /* ── U.S. SENATE: Brown (D) vs. Husted (R) ── */
  "brown-campaign": {
    brief: "Brown's campaign: $68.4M raised, from 135,000+ donors in one quarter alone",
    name: "Sherrod Brown for Senate (campaign)", type: "campaign", race: "U.S. Senate", side: "sherrod brown", against: "jon husted", disclosure: "full",
    facts: [
      "Raised $68.4 million and spent $64.0 million this cycle through Oct. 14, 2026, per FEC data compiled by VoteLog.",
      "In April–June 2026 it took $14.1 million in direct donations plus $3 million from an affiliated PAC, from more than 135,000 donors (nearly 70,000 first-time), per the Ohio Capital Journal.",
      "Joe Kanfer was the only person to give more than $50,000 to a Brown-affiliated committee that quarter (Ohio Capital Journal)."
    ],
    donors: [], src: [SRC_VOTELOG, SRC_OCJ_Q2, FEC("Sherrod Brown")]
  },
  "husted-campaign": {
    brief: "Husted's campaign: $19.9M raised; top givers include Jane Street executives and the Haslam family",
    name: "Jon Husted for Senate (campaign)", type: "campaign", race: "U.S. Senate", side: "jon husted", against: "sherrod brown", disclosure: "full",
    facts: [
      "Raised $19.9 million and spent $15.7 million this cycle through Oct. 14, 2026, per FEC data compiled by VoteLog.",
      "In April–June 2026 it took $3.4 million in direct donations plus $4.3 million from three affiliated PACs, per the Ohio Capital Journal."
    ],
    donors: [
      { name: "Two Jane Street Capital executives (via Husted Victory)", amount: "$637,200 combined", note: "Apr–Jun 2026" },
      { name: "Jimmy and Dee Haslam, Browns executives and Haslam family", amount: "$292,000 combined", note: "Apr–Jun 2026" },
      { name: "Utility, tech and other PACs incl. AEP, Duke Energy, Oracle, Meta", amount: "$69,750 combined", note: "Apr–Jun 2026" }
    ], src: [SRC_VOTELOG, SRC_OCJ_Q2, FEC("Jon Husted")]
  },
  "nrsc": {
    brief: "The Senate Republicans' national party committee (donors reported to the FEC)",
    name: "National Republican Senatorial Committee (NRSC)", type: "party", race: "U.S. Senate", side: "jon husted", against: "sherrod brown", disclosure: "full",
    facts: [
      "The Senate Republicans' national party committee. Party committees must report donors to the FEC and face contribution limits."
    ],
    donors: [], src: [FEC("National Republican Senatorial Committee")]
  },
  "slf": {
    brief: "Thune-aligned super PAC; top donors Elon Musk, Miriam Adelson, Stephen Schwarzman, Paul Singer",
    name: "Senate Leadership Fund (SLF PAC)", type: "super PAC", race: "U.S. Senate", side: "jon husted", against: "sherrod brown", disclosure: "partial",
    facts: [
      "The main outside group for Senate Majority Leader John Thune (Signal Ohio).",
      "Announced plans to spend $79 million backing Husted (NBC4, May 2026). Spent $80.4 million in the race through Oct. 23, per FEC data compiled by VoteLog.",
      "One Nation, its top non-individual donor, is an affiliated nonprofit that does not disclose its own donors."
    ],
    donors: [
      { name: "Elon Musk", amount: "$168,000,000", note: "cycle-wide" },
      { name: "One Nation (affiliated dark-money nonprofit)", amount: "$132,907,000", note: "cycle-wide" },
      { name: "Miriam Adelson", amount: "$30,000,000", note: "cycle-wide" },
      { name: "Stephen A. Schwarzman", amount: "$20,000,000", note: "cycle-wide" },
      { name: "Paul Singer", amount: "$14,500,000", note: "cycle-wide" }
    ], src: [SRC_VOTELOG, SRC_SIGNAL_ADS, "https://www.nbc4i.com/news/politics/democratic-pac-commits-40-million-to-boost-brown-in-ohios-u-s-senate-race/amp/"]
  },
  "no-going-back": {
    brief: "Super PAC funded by Trump's MAGA Inc. ($200M, cycle-wide)",
    name: "No Going Back PAC", type: "super PAC", race: "U.S. Senate", side: "jon husted", against: "sherrod brown", disclosure: "partial",
    facts: [
      "Spent more than $20 million against Brown and $7.6 million supporting Husted as of Oct. 14, 2026 (Legis1, from FEC filings).",
      "Its own FEC reports listed no donors as of mid-October. The New York Times and Reuters reported it is funded by MAGA Inc., President Trump's main super PAC; FEC data compiled by VoteLog later showed $200 million from MAGA Inc. (cycle-wide)."
    ],
    donors: [{ name: "MAGA Inc. (pro-Trump super PAC)", amount: "$200,000,000", note: "cycle-wide" }],
    src: ["https://legis1.com/news/no-going-back-pac-tops-159m-outside-spending", SRC_VOTELOG]
  },
  "america-pac": {
    brief: "Elon Musk's super PAC",
    name: "America PAC", type: "super PAC", race: "U.S. Senate", side: "jon husted", against: "sherrod brown", disclosure: "full",
    facts: [
      "Elon Musk's super PAC. Spent $9.4 million in the Ohio Senate race through Oct. 23 (VoteLog, FEC data).",
      "Newsweek, citing a Guardrails Action analysis, reported $7.9 million from Musk's super PAC to help Husted (Oct. 19, 2026)."
    ],
    donors: [{ name: "Elon Musk", amount: "$20,100,000", note: "cycle-wide" }],
    src: [SRC_VOTELOG, "https://newsweek.com/musk-pumps-7-million-into-ohio-to-boost-jon-husted-amid-gop-turnout-fears-12589393"]
  },
  "afp-action": {
    brief: "Koch network super PAC; funded by Koch Inc. and Stand Together",
    name: "Americans for Prosperity Action", type: "super PAC", race: "U.S. Senate", side: "jon husted", against: "sherrod brown", disclosure: "partial",
    facts: [
      "Part of the Koch political network. Spent $20.7 million in the race through Oct. 23 (VoteLog, FEC data).",
      "Stand Together is a Koch-founded nonprofit that does not disclose its donors."
    ],
    donors: [
      { name: "Koch Inc.", amount: "$40,000,000", note: "two gifts, cycle-wide" },
      { name: "Stand Together Inc. (nonprofit)", amount: "$26,000,000", note: "cycle-wide" },
      { name: "Jim C. Walton", amount: "$7,000,000", note: "cycle-wide" },
      { name: "Stand Together Chamber of Commerce", amount: "$6,500,000", note: "cycle-wide" }
    ], src: [SRC_VOTELOG, SRC_OCJ_Q2]
  },
  "ohio-flyer": {
    brief: "Pro-Husted super PAC; top donor a dark-money group that hides its donors ($1M)",
    name: "Ohio Flyer PAC", type: "super PAC", race: "U.S. Senate", side: "jon husted", against: "sherrod brown", disclosure: "partial",
    facts: [
      "Set up solely to support Husted. Spent $8.4 million: $7.3 million against Brown and $1.1 million for Husted (VoteLog, FEC data).",
      "Its largest donor, A Public Voice Inc., is a Virginia dark-money group that does not disclose its donors (Ohio Capital Journal)."
    ],
    donors: [
      { name: "A Public Voice, Inc. (dark money)", amount: "$1,000,000" },
      { name: "Lawrence S. Connor", amount: "$250,000" },
      { name: "Brian Colleran (Ohio nursing-home chain CEO)", amount: "$250,000" },
      { name: "Chevron Corporation", amount: "$200,000" },
      { name: "David Flory", amount: "$100,000" },
      { name: "Bancinsurance Corp., Robert H. Castellini, Geraldine Warner, Robert J. Kohlhepp", amount: "$50,000 each" }
    ], src: [SRC_VOTELOG, SRC_OCJ_Q2, FEC("Ohio Flyer PAC")]
  },
  "buckeyes-pac": {
    brief: "New super PAC; $2M from individuals not named in reports",
    name: "Buckeyes PAC", type: "super PAC", race: "U.S. Senate", side: "jon husted", against: "sherrod brown", disclosure: "partial",
    facts: [
      "Registered Sept. 8, 2026. Spent $2 million on TV ads against Brown focused on immigration (Legis1, from FEC filings).",
      "Reported about $2.01 million from individual donors through Oct. 14; Reuters reported it shares a treasurer with a pro-Trump super PAC.",
      "Brown's campaign asked stations to pull one ad; the PAC acknowledged the cited bill did not allow illegal voting but defended its description."
    ],
    donors: [], src: ["https://legis1.com/news/sherrod-brown-buckeyes-pac-spends-2-million", FEC("Buckeyes PAC")]
  },
  "fairshake": {
    brief: "Crypto-industry super PACs funded largely by Coinbase, Ripple and Andreessen Horowitz",
    name: "Fairshake / Defend American Jobs (crypto industry super PACs)", type: "super PAC", race: "U.S. Senate", side: "jon husted", against: "sherrod brown", disclosure: "full",
    facts: [
      "Fairshake reported a $5.2 million and a $1.95 million media buy against Brown in October 2026 and had signaled at least $30 million against him (Decrypt, from FEC filings).",
      "Its Republican-race affiliate, Defend American Jobs, spent $55.8 million in the race through Oct. 23 (VoteLog, FEC data).",
      "Decrypt reports Fairshake is funded largely by Coinbase, Ripple and Andreessen Horowitz."
    ],
    donors: [
      { name: "Fairshake (to Defend American Jobs)", amount: "$106,000,000", note: "cycle-wide" },
      { name: "Ripple Labs (to Defend American Jobs)", amount: "$250,000", note: "cycle-wide" }
    ], src: ["https://decrypt.co/381238/crypto-super-pac-fairshake-pours-millions-more-into-defeating-sherrod-brown", SRC_VOTELOG]
  },
  "enough-promises": {
    brief: "Funded entirely by Conservative Americans PAC, a Republican super PAC ($2.5M)",
    name: "Enough Promises Ohio PAC", type: "super PAC", race: "U.S. Senate", side: null, against: "sherrod brown", disclosure: "partial",
    facts: [
      "Formed Sept. 29, 2026. Spent at least $2 million on mail and online ads criticizing Brown and promoting independent Greg Levy, including mailers aimed at Black voters (CNN).",
      "Its mail vendor shares an address with a firm run by Big Dog Strategies, which advises MAGA Inc. (AP).",
      "Levy said he has no ties to the group and called the mailers deceptive; Husted's campaign said it had no involvement."
    ],
    donors: [{ name: "Conservative Americans PAC (Republican super PAC)", amount: "$2,500,000", note: "only donor, Oct. 1–14" }],
    src: ["https://www.applevalleynewsnow.com/news/politics/national-politics/conservatives-funded-efforts-to-undercut-sherrod-brown-with-black-voters-in-ohio-filing-shows/article_20dfca1d-72e7-5e85-bd61-283c304ee92c.html", "https://www.wcax.com/2026/10/12/mailers-promoting-socialist-candidate-ohios-us-senate-race-have-links-maga-super-pac-vendor/"]
  },
  "senate-majority-pac": {
    brief: "The main Democratic Senate super PAC ($64M committed to Ohio)",
    name: "Senate Majority PAC", type: "super PAC", race: "U.S. Senate", side: "sherrod brown", against: "jon husted", disclosure: "partial",
    facts: [
      "The leading Democratic Senate super PAC. Committed $64 million to the race (Ohio Capital Journal) and reserved $40 million in TV for Brown (NBC4).",
      "Spends in Ohio mainly through affiliates such as WinSenate, Duty and Country, and Defend the Vote (VoteLog, FEC data)."
    ],
    donors: [], src: [SRC_OCJ_Q2, "https://www.nbc4i.com/news/politics/democratic-pac-commits-40-million-to-boost-brown-in-ohios-u-s-senate-race/amp/", SRC_VOTELOG]
  },
  "winsenate": {
    brief: "Senate Majority PAC affiliate; biggest funder Majority Forward, a dark-money group",
    name: "WinSenate", type: "super PAC", race: "U.S. Senate", side: "sherrod brown", against: "jon husted", disclosure: "partial",
    facts: [
      "A Senate Majority PAC affiliate. Spent $62.5 million in the race through Oct. 23 (VoteLog, FEC data).",
      "Signal Ohio reports its biggest funder is Majority Forward, a dark-money group, with other money from Fred Eychaner, Reed Hastings, Coinbase and unions for plumbers and pipefitters, government employees and teachers."
    ],
    donors: [{ name: "Senate Majority PAC", amount: "$171,120,000", note: "cycle-wide" }],
    src: [SRC_VOTELOG, SRC_SIGNAL_ADS]
  },
  "lcv-victory": {
    brief: "League of Conservation Voters' super PAC (environmental group)",
    name: "LCV Victory Fund", type: "super PAC", race: "U.S. Senate", side: "sherrod brown", against: "jon husted", disclosure: "full",
    facts: ["The League of Conservation Voters' super PAC. Spent $5.3 million in the race through Oct. 23 (VoteLog, FEC data)."],
    donors: [
      { name: "League of Conservation Voters", amount: "$18,020,601", note: "cycle-wide" },
      { name: "Amos Hostetter", amount: "$600,000", note: "cycle-wide" },
      { name: "Democracy PAC", amount: "$500,000", note: "cycle-wide" }
    ], src: [SRC_VOTELOG]
  },
  "buckeye-freedom": {
    brief: "Has disclosed no donors",
    name: "Buckeye Freedom PAC", type: "super PAC", race: "U.S. Senate", side: null, against: "jon husted", disclosure: "none",
    facts: [
      "Spent about $1.6 million mainly targeting Husted and promoting Libertarian Bill Redpath (VoteLog; CNN).",
      "Had not disclosed any donors as of Oct. 22, 2026 (CNN)."
    ],
    donors: [], src: [SRC_VOTELOG, "https://www.applevalleynewsnow.com/news/politics/national-politics/conservatives-funded-efforts-to-undercut-sherrod-brown-with-black-voters-in-ohio-filing-shows/article_20dfca1d-72e7-5e85-bd61-283c304ee92c.html"]
  },

  /* ── GOVERNOR: Ramaswamy (R) vs. Acton (D) ── */
  "ramaswamy-campaign": {
    brief: "Ramaswamy's campaign; he has loaned it $41.3M of his own money",
    name: "Ramaswamy for Ohio Governor (campaign)", type: "campaign", race: "Governor", side: "vivek ramaswamy", against: "amy acton", disclosure: "full",
    facts: [
      "Ramaswamy is his campaign's largest funder: he had loaned it $41.3 million through Oct. 14, 2026 (Signal Ohio). Loans can be repaid from donor money (Ohio Capital Journal).",
      "Raised about $4 million in July, $2.6 million in August and $3 million in September from donors; about 57% of September individual money came from Ohioans (Ohio Capital Journal)."
    ],
    donors: [
      { name: "Vivek Ramaswamy (personal loans)", amount: "$41,300,000", note: "through Oct. 14" },
      { name: "American Property Casualty Insurance", amount: "$16,600", note: "Sep 2026" },
      { name: "Ohio Chamber of Commerce", amount: "$16,000", note: "Sep 2026" },
      { name: "OHCANN (cannabis trade group)", amount: "$15,000", note: "Sep 2026" }
    ], src: [SRC_SIGNAL_ADS, SRC_OCJ_GOV_OCT, "https://www.ohiosos.gov/campaign-finance/search/"]
  },
  "v-pac": {
    brief: "Pro-Ramaswamy super PAC; top donors Jeff Yass ($10M), Elon Musk ($5M), Ratmir Timashev ($5M)",
    name: "V-PAC: Victors, Not Victims", type: "super PAC", race: "Governor", side: "vivek ramaswamy", against: "amy acton", disclosure: "full",
    facts: ["A federal super PAC backing Ramaswamy. Its donors are reported to the FEC (Ohio Capital Journal, July 2026)."],
    donors: [
      { name: "Jeff Yass", amount: "$10,000,000" },
      { name: "Elon Musk", amount: "$5,000,000" },
      { name: "Ratmir Timashev", amount: "$5,000,000" },
      { name: "Bill Ackman", amount: "$1,000,000" },
      { name: "Stephen Ross", amount: "$1,000,000" }
    ], src: [SRC_OCJ_GOV_JUL, FEC("Victors Not Victims")]
  },
  "rga": {
    brief: "Republican Governors Association PAC; big donors include Miriam Adelson, Ken Griffin, Paul Singer",
    name: "RGA Right Direction PAC", type: "super PAC", race: "Governor", side: "vivek ramaswamy", against: "amy acton", disclosure: "partial",
    facts: ["Run by the Republican Governors Association; aired an anti-Acton ad in October 2026. Signal Ohio reports the RGA's biggest donors include Miriam Adelson, Ken Griffin and Paul Singer."],
    donors: [], src: [SRC_SIGNAL_ADS]
  },
  "acton-campaign": {
    brief: "Acton's campaign: out-raised Ramaswamy in donations every month since July, mostly Ohioans",
    name: "Amy Acton for Governor (campaign)", type: "campaign", race: "Governor", side: "amy acton", against: "vivek ramaswamy", disclosure: "full",
    facts: [
      "Raised about $5.8 million in July, $4 million in August and just over $6 million in September, out-raising Ramaswamy in donations each month; 63% of September individual money came from Ohioans (Ohio Capital Journal).",
      "Has no reported personal loans. Backers include the Ohio Democratic Party, EMILY's List, the PAC for America's Future, and unions for bricklayers, auto workers, teachers and firefighters ($10,000+ each)."
    ],
    donors: [{ name: "Ohio Democratic Party state candidate fund", amount: "$232,000", note: "Sep 2026, three gifts" }],
    src: [SRC_OCJ_GOV_OCT, "https://www.ohiosos.gov/campaign-finance/search/"]
  },
  "314-action": {
    brief: "Group that backs scientists and doctors for office",
    name: "314 Action Fund", type: "super PAC", race: "Governor", side: "amy acton", against: "vivek ramaswamy", disclosure: "full",
    facts: ["A group that backs scientists and doctors running for office. With Acton's campaign, it spent nearly $100,000 on digital ads May 15–June 30, 2026 (AdImpact, via Ohio Capital Journal)."],
    donors: [], src: [SRC_OCJ_GOV_JUL]
  }
};

/* Which funders paid for each fact-checked ad (keys of AD_CHECKS ids) */
const AD_FUNDERS = {
  "brown-golden-boy": ["brown-campaign"],
  "winsenate-corruption": ["winsenate", "lcv-victory"],
  "brown-data-centers": ["brown-campaign"],
  "brown-wexner": ["brown-campaign"],
  "husted-epstein-associates": ["husted-campaign"],
  "nrsc-50-years": ["nrsc"],
  "vpac-acton": ["v-pac"],
  "acton-on-ramaswamy": ["acton-campaign"],
  "ramaswamy-amys-mom": ["ramaswamy-campaign"]
};

/* Race-wide totals shown above the group list */
const RACE_MONEY = {
  "U.S. Senate": { text: "Outside groups spent $349.3 million in the Brown–Husted race through Oct. 23, 2026: $230.8 million helping Husted (or opposing Brown) and $118.5 million helping Brown (or opposing Husted), per FEC data compiled by VoteLog.", src: SRC_VOTELOG },
  "Governor": { text: "Ramaswamy had loaned his campaign $41.3 million through Oct. 14, 2026 (Signal Ohio), while Acton has out-raised him in donations every month since July (Ohio Capital Journal).", src: SRC_OCJ_GOV_OCT }
};
