/* ============================================================
   AD CHECK — election ads, claim by claim (fact-checked Oct 2026).
   Source of truth for the YouTube scripts/graphics (youtube/) and the
   site's Ad Check links. Verdicts come from professional fact-checkers;
   where a fact-checker reported evidence without a formal label, the label
   is KnowYourBallot's and says so in `rater`.
   Verdict scale: Accurate | Mostly accurate | Missing context | Misleading | False | Opinion | Unverifiable
   ============================================================ */
const AD_CHECKS = [
  {
    id: "brown-golden-boy", race: "U.S. Senate", title: "\"Golden Boy\"",
    sponsor: "Sherrod Brown campaign", supports: "sherrod brown", about: ["jon husted"],
    date: "Aug–Sep 2026", platform: "TV and streaming (30s and 15s versions)",
    adLink: {label:"Ad details & transcript (AdImpact)", url:"https://platform.adimpact.com/viewer/d84f7c70-0a34-4af6-9831-06a364c483d9"},
    summary: "Ties Jon Husted to FirstEnergy's House Bill 6 bribery scandal.",
    claims: [
      {claim:"FirstEnergy spent at least $3.5 million to help Husted's campaign.", verdict:"Misleading", finding:"About $1 million went to a dark-money group that funded a super PAC backing Husted's 2017–18 governor bid, and $2.5 million went to a Republican Governors Association–linked group backing the DeWine–Husted ticket — not to Husted's own campaign.", rater:"ABC6 and FactCheck.org", src:"https://www.factcheck.org/2026/09/ohio-democratic-ads-connect-husted-to-bribery-scandal-despite-no-charges-of-wrongdoing/"},
      {claim:"Husted was FirstEnergy's \"golden boy.\"", verdict:"Missing context", finding:"The phrase came from a FirstEnergy lobbyist, Neil Clark, in 2020. Husted has never been charged or accused of wrongdoing in the scandal.", rater:"ABC6", src:"https://abc6onyourside.com/news/election/fact-check-how-truthful-sherrod-brown-jon-husted-campaign-ads-politics-political-midterm-midterms-senate-senator-race-contest-republican-gop-democrat-ohio"},
      {claim:"Husted \"led the charge\" for the bailout.", verdict:"Missing context", finding:"Husted supported House Bill 6 and was in contact with FirstEnergy executives before it passed. A law professor told FactCheck.org the trial evidence showed no \"smoking gun\" on Husted.", rater:"FactCheck.org", src:"https://www.factcheck.org/2026/09/ohio-democratic-ads-connect-husted-to-bribery-scandal-despite-no-charges-of-wrongdoing/"},
      {claim:"Your electric bill went up 61% / the bailout cost you thousands.", verdict:"Missing context", finding:"Ohio bills did rise sharply (the average is up about 67% since 2016), but experts say the increase can't be blamed entirely on House Bill 6; data-center demand and other factors played a role, and most of the nuclear subsidy was repealed in 2021.", rater:"ABC6 and FactCheck.org", src:"https://www.factcheck.org/2026/09/ohio-democratic-ads-connect-husted-to-bribery-scandal-despite-no-charges-of-wrongdoing/"},
    ],
    bottomLine: "The individual facts are mostly real, but the ad lines them up to suggest Husted was part of the bribery scheme. He has not been charged with or accused of any wrongdoing.",
    youtube: {short:"", full:""},
  },
  {
    id: "winsenate-corruption", race: "U.S. Senate", title: "\"Corruption Scheme\"",
    sponsor: "WinSenate and LCV Victory Fund (Democratic-aligned outside groups)", supports: "sherrod brown", about: ["jon husted"],
    date: "Aug–Sep 2026", platform: "TV",
    adLink: {label:"Ad details & transcript (AdImpact)", url:"https://platform.adimpact.com/viewer/dd920b96-86b4-4f93-8d38-11a768d7fd2b"},
    summary: "Says Husted is \"at the center\" of the largest corruption scheme in Ohio history.",
    claims: [
      {claim:"FirstEnergy made a \"secret million dollar payment\" to help Husted's campaign.", verdict:"Mostly accurate", finding:"FirstEnergy gave $1 million to the dark-money group Freedom Frontier in 2017, which then gave over $1 million to a super PAC backing Husted's governor bid. Husted's campaign said it had no affiliation with the group.", rater:"KnowYourBallot, from FactCheck.org and AP reporting", src:"https://www.wcbe.org/wcbe-news/2024-04-10/firstenergy-made-secret-1-million-payment-in-2017-to-support-husted-campaign-in-ohio"},
      {claim:"Husted is \"at the center\" of the scheme.", verdict:"Misleading", finding:"Husted has not been charged with or accused of wrongdoing. He testified as a defense witness, not a defendant, in the FirstEnergy executives' trial.", rater:"FactCheck.org", src:"https://www.factcheck.org/2026/09/ohio-democratic-ads-connect-husted-to-bribery-scandal-despite-no-charges-of-wrongdoing/"},
    ],
    bottomLine: "The $1 million payment is real; the ad overstates Husted's role in the crime.",
    youtube: {short:"", full:""},
  },
  {
    id: "brown-data-centers", race: "U.S. Senate", title: "Data centers",
    sponsor: "Sherrod Brown campaign", supports: "sherrod brown", about: ["jon husted"],
    date: "Sep 2026", platform: "Facebook / TV",
    adLink: {label:"PolitiFact review (includes ad link)", url:"https://politifact.com/factchecks/2026/sep/23/sherrod-brown/jon-husted-pushed-for-data-centers-and-tax-incentives-in-ohio-as-sherrod-brown-ads-say/"},
    summary: "Says Husted \"led the push to bring data centers to Ohio and gave billions of tax dollars to make it happen.\"",
    claims: [
      {claim:"Husted led the push for data centers and gave billions in tax breaks.", verdict:"Mostly accurate", finding:"As lieutenant governor, Husted publicly championed data centers and defended incentives like the tax exemption for Google's New Albany site. The exemptions were formally approved by the Ohio Tax Credit Authority, not by Husted alone. PolitiFact rated it Mostly True.", rater:"PolitiFact (Mostly True)", src:"https://politifact.com/factchecks/2026/sep/23/sherrod-brown/jon-husted-pushed-for-data-centers-and-tax-incentives-in-ohio-as-sherrod-brown-ads-say/"},
    ],
    bottomLine: "Largely accurate. Husted promoted the policy; a state board signed off on the tax breaks.",
    youtube: {short:"", full:""},
  },
  {
    id: "brown-wexner", race: "U.S. Senate", title: "Wexner donations",
    sponsor: "Sherrod Brown campaign", supports: "sherrod brown", about: ["jon husted"],
    date: "May 28, 2026", platform: "Facebook",
    adLink: {label:"PolitiFact review", url:"https://politifact.com/article/2026/jun/08/epstein-ohio-senate-husted-brown-donations/"},
    summary: "Says Husted took $116,892 from Les Wexner, a longtime Jeffrey Epstein associate.",
    claims: [
      {claim:"Husted took $116,892 from Les Wexner (2001–2025).", verdict:"Missing context", finding:"Wexner did donate to Husted, but $36,992 of that went to the 2018 DeWine–Husted ticket rather than Husted alone, and Husted's campaign later gave $34,300 to an anti-trafficking charity.", rater:"PolitiFact", src:"https://politifact.com/article/2026/jun/08/epstein-ohio-senate-husted-brown-donations/"},
    ],
    bottomLine: "The donations are real; the ad leaves out how the total was counted and the money Husted gave away.",
    youtube: {short:"", full:""},
  },
  {
    id: "husted-epstein-associates", race: "U.S. Senate", title: "\"Epstein associates\"",
    sponsor: "Jon Husted campaign", supports: "jon husted", about: ["sherrod brown"],
    date: "May 27, 2026", platform: "YouTube",
    adLink: {label:"PolitiFact review", url:"https://politifact.com/article/2026/jun/08/epstein-ohio-senate-husted-brown-donations/"},
    summary: "Says Sherrod Brown took \"more than $124,000\" from \"Epstein associates.\"",
    claims: [
      {claim:"Brown took more than $124,000 from Epstein associates.", verdict:"Misleading", finding:"Husted's own data showed $111,833 from about a dozen people named in the Epstein files; the higher total included donors such as Abigail Wexner and Reid Hoffman. Most had social ties to Epstein but no clear link to his crimes.", rater:"PolitiFact", src:"https://politifact.com/article/2026/jun/08/epstein-ohio-senate-husted-brown-donations/"},
    ],
    bottomLine: "The figure is inflated, and \"Epstein associates\" lumps in people with no connection to his crimes.",
    youtube: {short:"", full:""},
  },
  {
    id: "nrsc-50-years", race: "U.S. Senate", title: "\"50 years\"",
    sponsor: "National Republican Senatorial Committee (approved by Jon Husted)", supports: "jon husted", about: ["sherrod brown"],
    date: "Oct 2026", platform: "TV",
    adLink: {label:"ABC6 fact check", url:"https://abc6onyourside.com/news/election/fact-check-how-truthful-sherrod-brown-jon-husted-campaign-ads-politics-political-midterm-midterms-senate-senator-race-contest-republican-gop-democrat-ohio"},
    summary: "Husted contrasts his life with Brown's decades in office and ties Brown to inflation and benefits for immigrants.",
    claims: [
      {claim:"Brown became a politician in 1975, when Husted was 7.", verdict:"Accurate", finding:"Brown was elected to the Ohio House in 1975 at age 22.", rater:"ABC6", src:"https://abc6onyourside.com/news/election/fact-check-how-truthful-sherrod-brown-jon-husted-campaign-ads-politics-political-midterm-midterms-senate-senator-race-contest-republican-gop-democrat-ohio"},
      {claim:"During Brown's 50 years in office, prices rose faster than paychecks.", verdict:"Misleading", finding:"Bureau of Labor Statistics data shows average weekly earnings outpaced prices from 1975 to 2025. Brown also was not in office for all 50 of those years.", rater:"KnowYourBallot, from ABC6 reporting", src:"https://abc6onyourside.com/news/election/fact-check-how-truthful-sherrod-brown-jon-husted-campaign-ads-politics-political-midterm-midterms-senate-senator-race-contest-republican-gop-democrat-ohio"},
      {claim:"Brown backed the Biden-Harris agenda and inflation skyrocketed.", verdict:"Missing context", finding:"Brown voted with Biden 98% of the time, but the ad ignores pandemic-era causes of inflation; he voted for the Inflation Reduction Act after inflation peaked, and Wharton found its inflation effect negligible.", rater:"KnowYourBallot, from ABC6 reporting", src:"https://abc6onyourside.com/news/election/fact-check-how-truthful-sherrod-brown-jon-husted-campaign-ads-politics-political-midterm-midterms-senate-senator-race-contest-republican-gop-democrat-ohio"},
      {claim:"Brown voted to give taxpayer-funded benefits to \"illegals.\"", verdict:"False", finding:"The votes cited did not make people in the country illegally eligible for those benefits. PolitiFact rated Husted's similar claim False in August.", rater:"PolitiFact (False) and ABC6", src:"https://politifact.com/factchecks/2026/aug/25/jon-husted/sherrod-brown-immigration-ohio-senate/"},
    ],
    bottomLine: "One accurate biographical line; the economic and immigration claims are misleading or false.",
    youtube: {short:"", full:""},
  },
  {
    id: "vpac-acton", race: "Governor", title: "V-PAC attack on Acton",
    sponsor: "V-PAC: Victors, Not Victims (pro-Ramaswamy super PAC)", supports: "vivek ramaswamy", about: ["amy acton"],
    date: "Oct 2026", platform: "TV / digital",
    adLink: {label:"ABC6 fact check", url:"https://abc6onyourside.com/news/election/super-pac-omits-key-context-claims-vivek-ramaswamy-amy-acton-ohio-governor-race-gubernatorial-politics-government-november-nov-3-2026-midterms-covid-dog-gate-drug-seniors"},
    summary: "Questions Amy Acton's medical record, COVID preparation, a 2019 police call, and her views.",
    claims: [
      {claim:"Her medical knowledge was rated \"insufficient.\"", verdict:"Missing context", finding:"The rating came from a single evaluator during her 1994 internship, not the state medical board; later reviews rated her knowledge \"excellent.\"", rater:"KnowYourBallot, from ABC6 reporting", src:"https://abc6onyourside.com/news/election/super-pac-omits-key-context-claims-vivek-ramaswamy-amy-acton-ohio-governor-race-gubernatorial-politics-government-november-nov-3-2026-midterms-covid-dog-gate-drug-seniors"},
      {claim:"She missed COVID training after tripping on a dog gate.", verdict:"Missing context", finding:"She did miss a training after tripping — but it was a CDC health-communications course months before the pandemic, not COVID medical training.", rater:"KnowYourBallot, from ABC6 reporting", src:"https://abc6onyourside.com/news/election/super-pac-omits-key-context-claims-vivek-ramaswamy-amy-acton-ohio-governor-race-gubernatorial-politics-government-november-nov-3-2026-midterms-covid-dog-gate-drug-seniors"},
      {claim:"Police found her drinking while on prescription drugs.", verdict:"Missing context", finding:"In a 2019 police call, the prescription was for migraines and officers' report noted she was not intoxicated.", rater:"KnowYourBallot, from ABC6 reporting", src:"https://abc6onyourside.com/news/election/super-pac-omits-key-context-claims-vivek-ramaswamy-amy-acton-ohio-governor-race-gubernatorial-politics-government-november-nov-3-2026-midterms-covid-dog-gate-drug-seniors"},
      {claim:"She said undocumented immigrants \"had a right to be here.\"", verdict:"Missing context", finding:"She was responding to employers calling ICE during a labor organizing drive, and in the same conversation said the state needs safe borders.", rater:"KnowYourBallot, from ABC6 reporting", src:"https://abc6onyourside.com/news/election/super-pac-omits-key-context-claims-vivek-ramaswamy-amy-acton-ohio-governor-race-gubernatorial-politics-government-november-nov-3-2026-midterms-covid-dog-gate-drug-seniors"},
      {claim:"She praised socialist mayor Zohran Mamdani.", verdict:"False", finding:"The source the ad cites does not mention Acton. In the interview in question, the interviewer raised Mamdani's name; Acton never said it.", rater:"KnowYourBallot, from ABC6 reporting", src:"https://abc6onyourside.com/news/election/super-pac-omits-key-context-claims-vivek-ramaswamy-amy-acton-ohio-governor-race-gubernatorial-politics-government-november-nov-3-2026-midterms-covid-dog-gate-drug-seniors"},
    ],
    bottomLine: "Four claims leave out context that changes their meaning; the Mamdani claim isn't supported by its own source.",
    youtube: {short:"", full:""},
  },
  {
    id: "acton-on-ramaswamy", race: "Governor", title: "Acton attack on Ramaswamy",
    sponsor: "Amy Acton campaign", supports: "amy acton", about: ["vivek ramaswamy"],
    date: "Oct 2026", platform: "TV / digital",
    adLink: {label:"ABC6 fact check", url:"https://abc6onyourside.com/news/election/super-pac-omits-key-context-claims-vivek-ramaswamy-amy-acton-ohio-governor-race-gubernatorial-politics-government-november-nov-3-2026-midterms-covid-dog-gate-drug-seniors"},
    summary: "Attacks Vivek Ramaswamy's biotech record.",
    claims: [
      {claim:"Ramaswamy \"made billions preying on our most vulnerable.\"", verdict:"Opinion", finding:"\"Preying\" is a characterization, and the ad gives no evidence for the \"billions\" figure. The business practices described were legal.", rater:"KnowYourBallot, from ABC6 reporting", src:"https://abc6onyourside.com/news/election/super-pac-omits-key-context-claims-vivek-ramaswamy-amy-acton-ohio-governor-race-gubernatorial-politics-government-november-nov-3-2026-midterms-covid-dog-gate-drug-seniors"},
      {claim:"He pushed an Alzheimer's drug he \"knew didn't work.\"", verdict:"Missing context", finding:"His company bought the drug after it failed four trials and it then failed a fifth. It was never approved or marketed to patients; ABC6 said the company more likely pitched it to investors as promising.", rater:"KnowYourBallot, from ABC6 reporting", src:"https://abc6onyourside.com/news/election/super-pac-omits-key-context-claims-vivek-ramaswamy-amy-acton-ohio-governor-race-gubernatorial-politics-government-november-nov-3-2026-midterms-covid-dog-gate-drug-seniors"},
      {claim:"His company \"charged sick kids $3 million.\"", verdict:"Missing context", finding:"This refers to Rethymic, a one-time treatment for babies born without a thymus, listed at $2.7 million before insurance.", rater:"KnowYourBallot, from ABC6 reporting", src:"https://abc6onyourside.com/news/election/super-pac-omits-key-context-claims-vivek-ramaswamy-amy-acton-ohio-governor-race-gubernatorial-politics-government-november-nov-3-2026-midterms-covid-dog-gate-drug-seniors"},
      {claim:"Quote: \"We are making money... that's what's most important.\"", verdict:"False", finding:"The line is a paraphrase from a 2023 Forbes article recalling a scientist's memory of a 2011 conversation. Ramaswamy denies saying it.", rater:"KnowYourBallot, from ABC6 reporting", src:"https://abc6onyourside.com/news/election/super-pac-omits-key-context-claims-vivek-ramaswamy-amy-acton-ohio-governor-race-gubernatorial-politics-government-november-nov-3-2026-midterms-covid-dog-gate-drug-seniors"},
    ],
    bottomLine: "Built on real business history, but the ad overstates it and presents a disputed paraphrase as a direct quote.",
    youtube: {short:"", full:""},
  },
  {
    id: "ramaswamy-amys-mom", race: "Governor", title: "\"Amy's Mom\"",
    sponsor: "Ramaswamy for Ohio Governor campaign", supports: "vivek ramaswamy", about: ["amy acton"],
    date: "Oct 19–20, 2026", platform: "TV / social",
    adLink: {label:"Ad details & transcript (AdImpact)", url:"https://platform.adimpact.com/viewer/1a44104b-1b74-4dbb-aaf2-a8e8db3de5d0"},
    summary: "Acton's estranged mother, Donna Arthur, says her daughter lies about her past, including growing up in a tent.",
    claims: [
      {claim:"Acton \"lies about her past.\"", verdict:"False", finding:"Court records, contemporaneous news reports and Acton's brother corroborate key parts of her account. Her stepfather was charged with rape in 1978, indicted, and left Ohio before trial.", rater:"13abc Truth Test (False); FactCheck.org", src:"https://www.factcheck.org/2026/10/controversial-ohio-ad-calls-acton-a-liar-but-records-back-her-account-of-childhood/"},
      {claim:"Acton's story about living in a tent is untrue.", verdict:"False", finding:"A 1982 sheriff's report quotes a campground manager confirming her stepfather lived there, and his 1978 arrest paperwork lists the campground as his address.", rater:"13abc Truth Test (False)", src:"https://www.13abc.com/2026/10/23/truth-test-controversial-ramaswamy-campaign-ad-featuring-actons-mom/"},
    ],
    bottomLine: "Public records support Acton's account. Republicans including Gov. DeWine and Sen. Husted criticized the ad; Trump and VP Vance defended it.",
    youtube: {short:"", full:""},
  },
];
const AD_CHECK_RACES = ["U.S. Senate", "Governor"];
const YOUTUBE_CHANNEL = ""; // set to the KnowYourBallot channel URL once created
