/* ============================================================
   Political ads — updated weekly. Each item must have a source.
   sponsor: who paid. side: "for" (supports this official) | "against".
   ============================================================ */
const ADS_AS_OF = "October 2026";
const ADS = {
  "sherrod brown": [
    {date:"Sep 2026", sponsor:"No Going Back PAC (tied to Trump's MAGA Inc.)", side:"against", platform:"TV, digital, mail", spend:"$6.7M (Sep 10–11, per FEC)", message:"Attacks Brown on transgender rights and bank bailouts.", src:"https://gvwire.com/2026/09/21/trump-linked-pop-up-pacs-blitz-ohio-with-ads-against-brown-in-costly-senate-race/"},
    {date:"Sep 2026", sponsor:"America PAC (Elon Musk)", side:"against", platform:"TV / digital", spend:"Not disclosed in report", message:"Attacks Brown on transgender rights and bank bailouts.", src:"https://gvwire.com/2026/09/21/trump-linked-pop-up-pacs-blitz-ohio-with-ads-against-brown-in-costly-senate-race/"},
    {date:"Sep 2026", sponsor:"Americans for Prosperity Action (Koch network)", side:"against", platform:"TV / digital", spend:"Not given in report", message:"Portrays Brown as aligned with the Democratic Socialists of America.", src:"https://gvwire.com/2026/09/21/trump-linked-pop-up-pacs-blitz-ohio-with-ads-against-brown-in-costly-senate-race/"},
    {date:"Jun 2026", sponsor:"Americans for Prosperity Ohio", side:"against", platform:"TV / digital", spend:"$1.75M one-week buy", message:"Supports Jon Husted.", src:"https://spectrumnews1.com/oh/columbus/news/2026/06/05/ad-spending-ohio-senate"},
    {date:"Sep 2026", sponsor:"Ohio Flyer PAC and Buckeyes PAC (\"pop-up\" PACs)", side:"against", platform:"Not specified", spend:"$3M+ combined in one week", message:"Donors not disclosed until mid-October.", src:"https://gvwire.com/2026/09/21/trump-linked-pop-up-pacs-blitz-ohio-with-ads-against-brown-in-costly-senate-race/"},
  ],
  "jennifer brunner": [
    {date:"Oct 2020", sponsor:"Republican State Leadership Committee", side:"against", platform:"TV", spend:"Not reported", message:"Said Brunner freed a child predator; the Columbus Dispatch found the ad misleading. (Past race — included for context.)", src:"https://www.justicebrunner.com/news/campaign-ad-watch-gop-groups-attack-on-brunner-misleading-in-race-for-ohio-suprem"},
  ],
};
const RACE_AD_TOTALS = {
  "sherrod brown": {label:"Brown vs. Husted 2026 — total ad spending to date", value:"$298M (AdImpact, Sep 2026) — most of any Senate race this cycle", src:"https://gvwire.com/2026/09/21/trump-linked-pop-up-pacs-blitz-ohio-with-ads-against-brown-in-costly-senate-race/"},
};
/* Live ad libraries — built from each official's name. */
function adLibraries(c, key) {
  const q = encodeURIComponent(c.name.replace(/\b[A-Z]\.\s?/g, '').trim());
  const L = [
    {label:"Meta Ad Library (Facebook/Instagram)", url:`https://www.facebook.com/ads/library/?active_status=all&ad_type=political_and_issue_ads&country=US&q=${q}`},
    {label:"Google political ads (Google/YouTube)", url:"https://adstransparency.google.com/political?region=US"},
    {label:"FCC TV-station political files", url:"https://publicfiles.fcc.gov/"},
  ];
  if (c.level === "Federal") L.push({label:"FEC outside spending (independent expenditures)", url:"https://www.fec.gov/data/independent-expenditures/"});
  else L.push({label:"Ohio campaign finance (media buys)", url:"https://www.ohiosos.gov/campaign-finance/search/"});
  return L;
}
