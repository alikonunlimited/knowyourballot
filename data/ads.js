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
    {date:"Sep 2026", sponsor:"Senate Leadership Fund", side:"against", platform:"TV / digital", spend:"Not reported", message:"Ads featuring Soren Aldaco on gender-transition surgery for minors. PolitiFact rated the claim Pants on Fire.", src:"https://politifact.com/factchecks/2026/oct/14/senate-leadership-fund/sherrod-brown-soren-aldaco-transition-ohio-texas/"},
    {date:"Oct 2026", sponsor:"Enough Promises Ohio (only Oct 1–14 donor: Conservative Americans PAC, $2.5M)", side:"against", platform:"Online ads, mail", spend:"At least $2M (per its campaign finance filing, CNN)", message:"Attacks Brown and promotes independent candidate Greg Levy; a mailer reads \"END THE WAR ON BLACK AMERICA\" and \"SHERROD BROWN BUILT THE SYSTEM TO LOCK US UP.\" Husted's campaign said it had no involvement; Levy's campaign denies ties.", src:"https://keyt.com/politics/cnn-us-politics/2026/10/22/conservatives-funded-efforts-to-undercut-sherrod-brown-with-black-voters-in-ohio-filing-shows/"},
    {date:"Sep 2026", sponsor:"Defend American Jobs (Fairshake crypto super PAC network)", side:"against", platform:"TV", spend:"Part of $30M Fairshake announced against Brown", message:"Attacks Brown's past votes; doesn't mention crypto.", src:"https://signalohio.org/big-crypto-behind-critical-ads-of-sherrod-brown-again-without-talking-crypto/"},
  ],
  "jennifer brunner": [
    {date:"Oct 2020", sponsor:"Republican State Leadership Committee", side:"against", platform:"TV", spend:"Not reported", message:"Said Brunner freed a child predator; the Columbus Dispatch found the ad misleading. (Past race — included for context.)", src:"https://www.justicebrunner.com/news/campaign-ad-watch-gop-groups-attack-on-brunner-misleading-in-race-for-ohio-suprem"},
  ],
  "jon husted": [
    {date:"Jun 2026", sponsor:"Americans for Prosperity Ohio", side:"for", platform:"TV / digital", spend:"$1.75M one-week buy", message:"Supports Husted.", src:"https://spectrumnews1.com/oh/columbus/news/2026/06/05/ad-spending-ohio-senate"},
    {date:"Sep 2026", sponsor:"No Going Back PAC, America PAC and other GOP-aligned super PACs", side:"for", platform:"TV, digital, mail", spend:"~$14M combined in one week (Senate Leadership Fund + 5 others)", message:"Attack Sherrod Brown to bolster Husted.", src:"https://gvwire.com/2026/09/21/trump-linked-pop-up-pacs-blitz-ohio-with-ads-against-brown-in-costly-senate-race/"},
    {date:"Sep 18, 2026", sponsor:"Sherrod Brown campaign", side:"against", platform:"Online (X)", spend:"Not reported", message:"A voter says Husted voted \"to kick 490,000 Ohioans off their healthcare.\" PolitiFact rated it Half True.", src:"https://politifact.com/factchecks/2026/oct/09/sherrod-brown/jon-husted-health-insurance-490000-ohio-senate/"},
    {date:"Oct 14 & 22, 2026", sponsor:"Sherrod Brown campaign", side:"against", platform:"TV (largest Ohio markets)", spend:"Not reported", message:"\"Who I'm For\": says Husted voted 14 times for the Iran war and is \"the face of data centers.\"", src:"https://sherrodbrown.substack.com/p/my-new-ad"},
  ],
  "vivek ramaswamy": [
    {date:"Oct 2026", sponsor:"Amy Acton campaign", side:"against", platform:"Digital", spend:"Not reported", message:"Uses Ramaswamy's own words, including that he is \"strongly in favor\" of the AI data-center boom, to call him the most pro-data-center candidate.", src:"https://www.statenews.org/government-politics/2026-10-26/candidates-for-ohio-governor-focus-on-data-centers-in-last-week-of-campaign"},
    {date:"May–Jun 2026", sponsor:"Ramaswamy campaign + V-PAC: Victors, Not Victims (super PAC)", side:"for", platform:"Broadcast TV, streaming, cable, digital, radio", spend:"Nearly $9M (May 15–June 30)", message:"Themes of reinvigorating the \"American dream.\"", src:"https://ohiocapitaljournal.com/2026/07/21/massive-spending-gap-in-ohio-governor-race-ramaswamy-drops-9m-on-ads-acton-spends-just-100k/"},
  ],
  "amy acton": [
    {date:"May–Jun 2026", sponsor:"Acton campaign + 314 Action PAC", side:"for", platform:"Digital", spend:"Nearly $100K (AdImpact)", message:"Affordability; \"You can't buy Ohio.\"", src:"https://ohiocapitaljournal.com/2026/07/21/massive-spending-gap-in-ohio-governor-race-ramaswamy-drops-9m-on-ads-acton-spends-just-100k/"},
    {date:"Oct 20, 2026", sponsor:"Ramaswamy for Ohio Governor campaign", side:"against", platform:"TV and streaming", spend:"$4M to promote it (campaign's stated plan)", message:"One-minute ad with Acton's estranged mother calling her \"a liar.\" It first spread online without a \"paid for by\" tag; the campaign later said it made the ad. From Oct 23 it switched to a 30-second version that drops the mother's claim that Acton never lived in a tent (ad tracker Medium Buying, via Raw Story).", src:"https://www.ajc.com/news/2026/10/ramaswamy-takes-responsibility-for-ad-with-amy-actons-mother-and-will-spend-millions-to-promote-it/"},
    {date:"Oct 24, 2026", sponsor:"V-PAC: Victors, Not Victims (pro-Ramaswamy super PAC)", side:"against", platform:"TV", spend:"Not reported by a named tracker", message:"Attacks Acton over investments in nine data centers it says raise energy costs.", src:"https://www.statenews.org/government-politics/2026-10-26/candidates-for-ohio-governor-focus-on-data-centers-in-last-week-of-campaign"},
  ],
  "dan hawkins": [
    {date:"Oct 17, 2026", sponsor:"Dan Hawkins campaign", side:"for", platform:"TV", spend:"About $185K on TV for his campaign so far (est., Brennan Center)", message:"\"When the Unthinkable Happens\": highlights his work leading the Franklin County special victims unit.", src:"https://www.brennancenter.org/our-work/research-reports/buying-time-2026-ohio"},
  ],
};
const RACE_AD_TOTALS = {
  "jon husted": {label:"Brown vs. Husted 2026 — total ad spending to date", value:"$431.7M spent or reserved (AdImpact, reported Oct 22, 2026) — second-most of any Senate race this cycle", src:"https://www.fox19.com/2026/10/22/ohios-us-senate-race-is-one-most-competitive-expensive-nation/"},
  "sherrod brown": {label:"Brown vs. Husted 2026 — total ad spending to date", value:"$431.7M spent or reserved (AdImpact, reported Oct 22, 2026) — second-most of any Senate race this cycle", src:"https://www.fox19.com/2026/10/22/ohios-us-senate-race-is-one-most-competitive-expensive-nation/"},
  "vivek ramaswamy": {label:"Ramaswamy vs. Acton 2026 — ad spending gap", value:"$79.2M more spent on ads for Ramaswamy than for Acton (AdImpact, via Statehouse News Bureau, Oct 26, 2026)", src:"https://www.statenews.org/government-politics/2026-10-26/candidates-for-ohio-governor-focus-on-data-centers-in-last-week-of-campaign"},
  "amy acton": {label:"Ramaswamy vs. Acton 2026 — ad spending gap", value:"$79.2M more spent on ads for Ramaswamy than for Acton (AdImpact, via Statehouse News Bureau, Oct 26, 2026)", src:"https://www.statenews.org/government-politics/2026-10-26/candidates-for-ohio-governor-focus-on-data-centers-in-last-week-of-campaign"},
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
