/* ============================================================
   2026 ballot challengers & open-seat candidates — fact-checked Oct 2026.
   Same rules as candidates.js: every item has a working source; no Wikipedia.
   Merged into CANDIDATES at load.
   ============================================================ */
const MONEY_STATE = { note: "State campaign finance reports are searchable at the Ohio Secretary of State.", figures: [], filings: [{label:"Ohio SOS campaign finance search", url:"https://www.ohiosos.gov/campaign-finance/search/"}] };
const MONEY_FED = (q) => ({ note: "Senate campaign filings are public at the FEC.", figures: [], filings: [{label:"FEC candidate search", url:`https://www.fec.gov/data/candidates/?q=${q}`}] });

Object.assign(CANDIDATES, {

  "jon husted": {
    name: "Jon Husted", initials: "JH", party: "R", partyLabel: "Republican",
    level: "Federal", state: "Ohio", office: "U.S. Senator, Ohio (appointed)",
    since: "Jan 21, 2025",
    status: "ON THE 2026 BALLOT: Republican nominee in the U.S. Senate special election vs. Sherrod Brown (D), Nov 3, 2026.",
    born: "1967-08-25", birthplace: "Royal Oak, Michigan (raised in Montpelier, Ohio)",
    education: "Bachelor's and master's degrees, University of Dayton",
    bio: "Former Ohio House Speaker, state senator, two-term Secretary of State and Lieutenant Governor under Mike DeWine. DeWine appointed him in January 2025 to the Senate seat JD Vance left to become vice president. He is running to finish that term against former Sen. Sherrod Brown in what AdImpact reports is the most expensive Senate race of the 2026 cycle.",
    elections: [
      {year:"2026", race:"U.S. Senate special — GOP primary", result:"won", detail:"Won the nomination; faces Sherrod Brown Nov 3", src:"https://www.vorys.com/publication-ohio-2026-primary-election-recap"},
      {year:"2014", race:"Ohio Secretary of State", result:"won", detail:"59.8% over Nina Turner (35.5%)", src:"https://ballotpedia.org/Jon_Husted"},
      {year:"2010", race:"Ohio Secretary of State", result:"won", detail:"53.7% over Maryellen O'Shaughnessy", src:"https://ballotpedia.org/Jon_Husted"},
    ],
    record: [
      {name:"Southbound cartel inspections bill (S.1138)", stance:"for", date:"Oct 14, 2026", detail:"Joined the bipartisan Hassan–Lankford bill requiring inspection of at least 10% of vehicles headed into Mexico and adding Homeland Security Investigations agents to counter gun, cash and drug smuggling.", src:"https://www.husted.senate.gov/media/press-releases/husted-joins-bill-to-disrupt-cartel-operations-prevent-flow-of-deadly-drugs-into-the-u-s/"},
      {name:"Ramaswamy ad featuring Acton's mother", stance:"action", date:"Oct 21, 2026", detail:"Said he would not have run the ad.", src:"https://www.statenews.org/government-politics/2026-10-21/what-effect-will-ramaswamys-controversial-ad-have-on-the-campaign-for-ohio-governor"},
      {name:"Repeal of Biden-era appliance efficiency rule", stance:"for", date:"2025", detail:"Sponsored the Congressional Review Act resolution, which became his first bill signed into law (May 2025).", src:"https://spectrumnews1.com/oh/columbus/news/2025/05/15/husted-appliance-law-energy-efficiency"},
      {name:"Iran war powers resolutions", stance:"against", date:"2026", detail:"Voted against resolutions requiring congressional approval to continue the Iran war.", src:"https://ohiocapitaljournal.com/2026/03/05/on-war-with-iran-no-ohio-u-s-senate-candidate-gives-his-unqualified-support/"},
    ],
    controversies: [
      {title:"FirstEnergy's $1M dark-money payment", date:"2017 (revealed 2024)", sev:"mid", body:"FirstEnergy secretly gave $1 million to the nonprofit Freedom Frontier, which funded a super PAC backing Husted's 2018 governor bid, at the start of the HB 6 bribery scheme.", outcome:"His spokeswoman said he had no affiliation with the group. Neither Husted nor DeWine has been accused of wrongdoing.", src:"https://www.wcbe.org/wcbe-news/2024-04-10/firstenergy-made-secret-1-million-payment-in-2017-to-support-husted-campaign-in-ohio"},
      {title:"Testimony in FirstEnergy executives' trial", date:"Mar 2026", sev:"low", body:"Testified as a defense witness that he dined with the two executives in 2018 while gathering information on candidates for the state's utility-regulator post.", outcome:"Not accused of wrongdoing. The March 2026 trial ended in a mistrial; the two former executives were reindicted in June 2026 and face a retrial in January.", src:"https://www.cbsnews.com/pittsburgh/news/bribery-investigation-ohio-firstenergy-jones-dowling-reindicted/"},
    ],
    career: [
      {year:"2001", event:"Ohio House of Representatives", detail:"Speaker 2005–2009"},
      {year:"2009", event:"Ohio Senate", detail:"2009–2011"},
      {year:"2011", event:"Ohio Secretary of State", detail:"2011–2019"},
      {year:"2019", event:"Lieutenant Governor", detail:"Under Mike DeWine, 2019–2025"},
      {year:"2025", event:"Appointed U.S. Senator", detail:"Replacing JD Vance"},
    ],
    money: MONEY_FED("Jon%20Husted"),
    endorsements: [],
    links: [
      {label:"Senate office", url:"https://www.husted.senate.gov/"},
      {label:"Ballotpedia", url:"https://ballotpedia.org/Jon_Husted"},
    ],
    opponents: ["sherrod brown"],
  },

  "vivek ramaswamy": {
    name: "Vivek Ramaswamy", initials: "VR", party: "R", partyLabel: "Republican",
    level: "State", state: "Ohio", office: "Candidate for Governor of Ohio",
    since: "",
    status: "ON THE 2026 BALLOT: Republican nominee for Governor vs. Amy Acton (D), Nov 3, 2026. Running mate: Senate President Rob McColley.",
    born: "1985-08-09", birthplace: "Cincinnati, Ohio",
    education: "B.A. Biology, Harvard (2007); J.D., Yale Law School (2013)",
    bio: "Cincinnati-born biotech entrepreneur who founded Roivant Sciences and co-founded Strive Asset Management, an anti-ESG investment firm. Ran for the 2024 GOP presidential nomination, finishing fourth in Iowa before endorsing Trump, and was briefly named co-lead of the Department of Government Efficiency before leaving to run for governor. Endorsed by Donald Trump, the Ohio Republican Party and Gov. DeWine.",
    elections: [
      {year:"2026", race:"Governor — GOP primary", result:"won", detail:"Over 82% (unofficial); faces Amy Acton Nov 3", src:"https://www.wyso.org/2026-05-05/vivek-ramaswamy-scores-big-win-in-gop-primary-for-governor-will-face-amy-acton-this-fall"},
      {year:"2024", race:"Republican presidential primary", result:"lost", detail:"Withdrew on Jan 15, 2024, after the Iowa caucuses, and endorsed Trump", src:"https://ballotpedia.org/Vivek_Ramaswamy"},
    ],
    record: [
      {name:"Tax plan", stance:"action", date:"Oct 21, 2026", detail:"Proposes eliminating the state income tax and capital gains tax, starting in 2027, and rolling property tax bills back to 2021 levels with a cap on future growth.", src:"https://www.wosu.org/2026-10-21/2026-race-for-ohio-governor-the-candidates-on-tax-policies-theyd-put-in-place"},
      {name:"Data centers", stance:"action", date:"Oct 2026", detail:"Opposes property-tax breaks for data centers and says they should supply their own power and cover neighbors' electricity costs; said he would sell his data-center-related investments if elected.", src:"https://www.statenews.org/government-politics/2026-10-26/candidates-for-ohio-governor-focus-on-data-centers-in-last-week-of-campaign"},
    ],
    controversies: [
      {title:"Ad featuring Acton's estranged mother", date:"Oct 2026", sev:"low", body:"His campaign took responsibility for an ad in which Amy Acton's estranged mother calls her a liar. FactCheck.org and 13abc found records support key parts of Acton's account. Gov. DeWine said it should come down; Sen. Husted, Sec. of State LaRose and Auditor Faber said they would not have run it. Protesters appeared at GOP bus-tour stops on Oct 23.", outcome:"He said he will not pull the ad and that it \"had nothing, nothing to do with childhood abuse\"; from Oct 23 the campaign ran a 30-second version.", src:"https://ohiocapitaljournal.com/2026/10/25/ramaswamy-tries-to-reframe-controversial-ad-claiming-it-wasnt-about-child-sex-abuse-amid-protests/"},
      {title:"Complaint over campaign credit-card reporting", date:"2026", sev:"mid", body:"State Sen. Kent Smith (D) filed a complaint after the campaign reported more than $500,000 in credit-card expenses without the required itemized details.", outcome:"Sept 16, 2026: the Secretary of State's Election Integrity Unit found \"no violation\" after the campaign revised its reports to itemize the charges; Smith says problems remain and has not appealed.", src:"https://ohiocapitaljournal.com/2026/10/07/ohio-election-integrity-unit-finds-no-violation-with-ramaswamys-campaign-credit-card-reporting/"},
      {title:"Called Jan. 6 an \"inside job\"", date:"Dec 2023", sev:"low", body:"Said at a presidential debate that \"Jan. 6 now does look like it was an inside job.\"", outcome:"PolitiFact rated the claim Pants on Fire.", src:"https://api.politifact.com/factchecks/2023/dec/07/vivek-ramaswamy/vivek-ramaswamy-said-jan-6-was-an-inside-job-at-al/"},
      {title:"Bodyguard arrested on drug charges", date:"Jan 2026", sev:"low", body:"An employee of the firm guarding his family was charged with fentanyl and methamphetamine trafficking.", outcome:"The campaign fired the security firm; no wrongdoing by Ramaswamy was alleged.", src:"https://www.wyso.org/2026-01-16/vivek-ramaswamy-fires-security-firm-after-bodyguard-was-arrested-for-drug-trafficking"},
    ],
    career: [
      {year:"2014", event:"Founds Roivant Sciences", detail:"CEO until 2021"},
      {year:"2022", event:"Co-founds Strive Asset Management", detail:"Left in 2023"},
      {year:"2023", event:"Runs for president", detail:"Withdrew Jan 2024"},
      {year:"2025", event:"Launches governor campaign", detail:"Feb 24, 2025"},
    ],
    money: {
      note: "State campaign finance reports are searchable at the Ohio Secretary of State.",
      figures: [{label:"Top donors to pro-Ramaswamy super PAC V-PAC", value:"Jeff Yass $10M · Elon Musk $5M · Ratmir Timashev $5M", src:"https://ohiocapitaljournal.com/2026/07/21/massive-spending-gap-in-ohio-governor-race-ramaswamy-drops-9m-on-ads-acton-spends-just-100k/"}],
      filings: [{label:"Ohio SOS campaign finance search", url:"https://www.ohiosos.gov/campaign-finance/search/"}]
    },
    endorsements: [
      {name:"Donald Trump", detail:"Endorsed three times, including on primary night", src:"https://www.wyso.org/2026-05-05/vivek-ramaswamy-scores-big-win-in-gop-primary-for-governor-will-face-amy-acton-this-fall"},
      {name:"Ohio Republican Party", detail:"Endorsed May 9, 2025, a year before the primary", src:"https://spectrumnews1.com/oh/columbus/news/2025/05/09/vivek-ramaswamy-republican-party-s-endorsement"},
      {name:"Gov. Mike DeWine", detail:"Endorsed Jan 7, 2026", src:"https://spectrumnews1.com/oh/columbus/news/2026/01/07/gov--dewine-endorses-vivek-ramaswamy-for-governor"},
    ],
    links: [
      {label:"Ballotpedia", url:"https://ballotpedia.org/Vivek_Ramaswamy"},
    ],
    opponents: ["amy acton"],
  },

  "amy acton": {
    name: "Amy Acton", initials: "AA", party: "D", partyLabel: "Democrat",
    level: "State", state: "Ohio", office: "Candidate for Governor of Ohio",
    since: "",
    status: "ON THE 2026 BALLOT: Democratic nominee for Governor vs. Vivek Ramaswamy (R), Nov 3, 2026. Running mate: David Pepper.",
    born: "1966-02-16", birthplace: "Youngstown, Ohio",
    education: "B.S., Youngstown State University; M.D., Northeast Ohio Medical University (1990); M.P.H., Ohio State University",
    bio: "Physician and public-health official who, as Gov. DeWine's Director of Health, led Ohio's early COVID-19 response in 2020 — the first woman in that job. She resigned in June 2020 amid legislative efforts to curb her authority and protests at her home. Her campaign centers on health-care costs, Medicaid and affordability.",
    elections: [
      {year:"2026", race:"Governor — Democratic primary", result:"won", detail:"Unopposed; faces Vivek Ramaswamy Nov 3", src:"https://www.wyso.org/2026-05-05/vivek-ramaswamy-scores-big-win-in-gop-primary-for-governor-will-face-amy-acton-this-fall"},
    ],
    record: [
      {name:"Tax and property-tax plan", stance:"action", date:"Oct 21, 2026", detail:"Proposes a \"working families' tax cut\" (an earned income tax credit and child tax credits up to $1,000 for incomes up to $85,000), a $50,000 income cap for the homestead exemption, rebates of up to $1,000 when property taxes rise more than 4%, and full funding of the Fair School Funding Plan.", src:"https://www.wosu.org/2026-10-21/2026-race-for-ohio-governor-the-candidates-on-tax-policies-theyd-put-in-place"},
      {name:"Data-center moratorium", stance:"action", date:"Jul 2026", detail:"Called for a conditional moratorium on new data centers until they pay their own taxes, provide their own energy and meet labor, environmental and community-agreement conditions; it would need legislation.", src:"https://www.statenews.org/government-politics/2026-10-26/candidates-for-ohio-governor-focus-on-data-centers-in-last-week-of-campaign"},
      {name:"Ohio Department of Health director", stance:"action", date:"2019–2020", detail:"Signed Ohio's early COVID-19 public-health orders, including school closures and gathering limits; resigned June 11, 2020.", src:"https://abcnews.com/US/amy-acton-ohios-embattled-health-director-resigns-amid/story?id=71202353"},
      {name:"Health-care cost platform", stance:"action", date:"Feb 2026", detail:"Campaign plan focused on lowering health-care costs.", src:"https://ohiocapitaljournal.com/2026/02/12/ohio-democratic-governor-candidate-amy-acton-makes-pitch-for-addressing-health-care-costs/"},
    ],
    controversies: [
      {title:"COVID-19 orders challenged in court", date:"2020", sev:"mid", body:"Thirty-five gyms sued over her closure order; a Lake County judge blocked penalties for gyms following safety rules.", outcome:"Dismissed as moot after she signed an order letting gyms reopen.", src:"https://www.news-herald.com/news/ohio-officials-appealing-grant-of-preliminary-injunction-in-gym-lawsuit/article_4a6b0938-bf99-11ea-9a5d-df9add5394bd.html"},
    ],
    career: [
      {year:"2019", event:"Director, Ohio Department of Health", detail:"First woman in the role"},
      {year:"2020", event:"Resigns as health director", detail:"June 11, 2020"},
      {year:"2025", event:"Launches governor campaign", detail:"Jan 7, 2025"},
    ],
    money: {
      note: "State campaign finance reports are searchable at the Ohio Secretary of State.",
      figures: [],
      filings: [{label:"Ohio SOS campaign finance search", url:"https://www.ohiosos.gov/campaign-finance/search/"}]
    },
    endorsements: [
      {name:"Columbus Dispatch editorial board", detail:"Endorsed Acton (Oct 2026)", src:"https://www.axios.com/local/columbus/2026/10/21/vivek-ramaswamy-amy-acton-ad-mother-reaction"},
    ],
    links: [
      {label:"Campaign launch (Statehouse News)", url:"https://www.statenews.org/government-politics/2025-01-07/amy-acton-former-odh-director-to-run-for-ohio-governor-as-a-democrat"},
      {label:"Ballotpedia", url:"https://ballotpedia.org/Amy_Acton"},
    ],
    opponents: ["vivek ramaswamy"],
  },

  "john kulewicz": {
    name: "John J. Kulewicz", initials: "JK", party: "D", partyLabel: "Democrat",
    level: "State", state: "Ohio", office: "Upper Arlington City Council; candidate for Ohio Attorney General",
    since: "",
    status: "ON THE 2026 BALLOT: Democratic nominee for Attorney General vs. Keith Faber (R), Nov 3, 2026.",
    born: null, birthplace: "",
    education: "B.A. American History, Ohio State University; J.D., Yale Law School",
    bio: "Retired after 44 years as a litigation and appeals partner at Columbus law firm Vorys, Sater, Seymour and Pease, where he argued cases at the U.S. and Ohio Supreme Courts. Elected to Upper Arlington City Council in 2019. His campaign stresses fair electric rates, consumer-fraud enforcement and wage-theft protection.",
    elections: [
      {year:"2026", race:"Attorney General — Democratic primary", result:"won", detail:"63.1% over Elliot Forhan (36.9%)", src:"https://ballotpedia.org/John_Kulewicz"},
    ],
    record: [
      {name:"Attorney general debate positions", stance:"action", date:"Oct 19, 2026", detail:"At the Youngstown State debate, said a warrant should be required to search Flock camera records more than 48 hours old, that the death penalty should be reserved for the most severe offenses, and that he would proceed with the FirstEnergy retrial.", src:"https://www.tribtoday.com/news/local-news/2026/10/attorney-general-candidates-debate-on-ysu-campus/"},
      {name:"Price-gouging and false-claims laws", stance:"action", date:"Oct 2026", detail:"Proposes working with the legislature on a price-gouging ban, noting Ohio is one of few states without one, and says a state false claims law is \"urgently\" needed.", src:"https://www.daytondailynews.com/local/election-2026-ohio-auditor-columbus-area-councilman-vie-to-become-state-attorney-general/article_49d4f813-92ca-5e79-a224-9aef91b5d95d.html"},
      {name:"Campaign priorities", stance:"action", date:"2026", detail:"Fair electric rates, fighting consumer fraud and protecting workers from wage theft.", src:"https://www.wfmj.com/news/political/kulewicz-projected-to-win-democratic-primary-for-oh-attorney-general/article_f61c29ab-ce8a-4880-a71d-69aea84af29a.html"},
    ],
    controversies: [],
    career: [
      {year:"1980", event:"Joins Vorys, Sater, Seymour and Pease", detail:"Partner; retired 2024"},
      {year:"2019", event:"Upper Arlington City Council", detail:"Re-elected 2023"},
      {year:"2025", event:"Announces AG campaign", detail:"Sept 2025"},
    ],
    money: MONEY_STATE, endorsements: [],
    links: [
      {label:"Ballotpedia", url:"https://ballotpedia.org/John_Kulewicz"},
      {label:"Joins AG race (Salem News)", url:"https://www.salemnews.net/news/local-news/2025/09/upper-arlington-dem-joins-ag-race/"},
    ],
    opponents: ["keith faber"],
  },

  "allison russo": {
    name: "Allison Russo", initials: "AR", party: "D", partyLabel: "Democrat",
    level: "State", state: "Ohio", office: "State Representative, Ohio House District 7",
    since: "Jan 2019",
    status: "ON THE 2026 BALLOT: Democratic nominee for Secretary of State vs. Robert Sprague (R), Nov 3, 2026.",
    born: "1976-10-15", birthplace: "",
    education: "B.S., Mississippi University for Women; M.P.H. (epidemiology), University of Alabama at Birmingham; Ph.D. health policy, George Washington University",
    bio: "Health-policy researcher who has served in the Ohio House since 2019 and led House Democrats as Minority Leader from 2022 to 2025. Sat on the Ohio Redistricting Commission, where she voted for the 2023 legislative maps. Lost a 2021 special election for Congress before winning the 2026 Democratic nomination for Secretary of State.",
    elections: [
      {year:"2026", race:"Secretary of State — Democratic primary", result:"won", detail:"67.4% over Bryan Hambley", src:"https://ballotpedia.org/Allison_Russo"},
      {year:"2021", race:"U.S. House, Ohio 15th (special)", result:"lost", detail:"41.7% to Mike Carey's 58.3%", src:"https://ohiocapitaljournal.com/2021/11/02/republican-mike-carey-wins-oh-15-special-election/"},
      {year:"2018", race:"Ohio House, District 24", result:"won", detail:"57% over Erik Yassenoff", src:"https://ballotpedia.org/Allison_Russo"},
    ],
    record: [
      {name:"Secretary of State platform", stance:"action", date:"Oct 20, 2026", detail:"Opposes State Issue 3 because it would lock a narrow list of IDs into the constitution; supports more than one ballot drop box per county; says \"I have no issue with voter ID or even photo ID\" but objects to rules that exclude groups of voters.", src:"https://signalohio.org/ohio-secretary-of-state-candidate-allison-russo-wants-more-voter-drop-boxes-november-election-2026/"},
      {name:"2023 legislative maps", stance:"for", date:"Sep 2023", detail:"Joined Republicans on the Redistricting Commission in unanimously approving new maps, calling it \"the best of two bad options.\"", src:"https://signalohio.org/ohio-democratic-secretary-of-state-candidate-allison-russo-criticized-for-past-vote-on-gop-map/"},
      {name:"Speaker vote", stance:"action", date:"Jan 2023", detail:"Backed moderate Republican Jason Stephens for Speaker along with House Democrats.", src:"https://ohiocapitaljournal.com/2023/01/04/moderate-republican-jason-stephens-snatches-ohio-house-speaker-position-in-surprise-upset/"},
    ],
    controversies: [
      {title:"Caucus employment lawsuit", date:"2025", sev:"mid", body:"A former House Democratic Caucus attorney filed a federal complaint alleging gender discrimination and retaliation.", outcome:"Pending.", src:"https://www.cleveland.com/news/2025/01/former-ohio-house-democrats-attorney-alleges-gender-discrimination-retaliation-in-federal-complaint.html"},
    ],
    career: [
      {year:"2019", event:"Ohio House of Representatives", detail:"District 24, then District 7"},
      {year:"2022", event:"House Minority Leader", detail:"Jan 2022 – Jun 2025"},
      {year:"2025", event:"Announces Secretary of State run", detail:"Aug 2025"},
    ],
    money: MONEY_STATE, endorsements: [],
    links: [
      {label:"Ohio House profile", url:"https://ohiohouse.gov/members/c-allison-russo/biography"},
      {label:"Ballotpedia", url:"https://ballotpedia.org/Allison_Russo"},
    ],
    opponents: ["robert sprague"],
  },

  "annette blackwell": {
    name: "Annette Blackwell", initials: "AB", party: "D", partyLabel: "Democrat",
    level: "State", state: "Ohio", office: "Mayor of Maple Heights; candidate for Ohio Auditor",
    since: "Mayor since 2016",
    status: "ON THE 2026 BALLOT: Democratic nominee for Auditor of State vs. Frank LaRose (R), Nov 3, 2026.",
    born: null, birthplace: "",
    education: "Bachelor's degree, Ursuline College",
    bio: "Maple Heights' first Black and first woman mayor, in office since 2016. Before that she spent years as a property-tax analyst and worked at KeyBank and University Hospitals. She led the city out of state fiscal emergency; it has since received clean-audit awards from the Auditor's office.",
    elections: [
      {year:"2026", race:"Auditor of State — Democratic primary", result:"won", detail:"Unopposed; faces Frank LaRose Nov 3", src:"https://ballotpedia.org/Annette_Blackwell"},
    ],
    record: [
      {name:"Maple Heights fiscal recovery", stance:"action", date:"2016–2026", detail:"Led the city's fiscal recovery plan after a state fiscal emergency; the city most recently received a clean-audit award in February 2026.", src:"https://ohiocapitaljournal.com/2026/08/05/democratic-candidate-for-ohio-auditor-continues-a-life-of-learning-as-she-aims-for-top-job/"},
    ],
    controversies: [],
    career: [
      {year:"2016", event:"Mayor of Maple Heights", detail:"First Black and first woman mayor"},
      {year:"2026", event:"Democratic nominee for Auditor", detail:""},
    ],
    money: MONEY_STATE, endorsements: [],
    links: [
      {label:"Ballotpedia", url:"https://ballotpedia.org/Annette_Blackwell"},
      {label:"Profile (Ohio Capital Journal)", url:"https://ohiocapitaljournal.com/2026/08/05/democratic-candidate-for-ohio-auditor-continues-a-life-of-learning-as-she-aims-for-top-job/"},
    ],
    opponents: ["frank larose"],
  },

  "jay edwards": {
    name: "Jay Edwards", initials: "JE", party: "R", partyLabel: "Republican",
    level: "State", state: "Ohio", office: "Former State Representative; candidate for Ohio Treasurer",
    since: "",
    status: "ON THE 2026 BALLOT: Republican nominee for Treasurer vs. Seth Walsh (D), Nov 3, 2026 (open seat).",
    born: null, birthplace: "Nelsonville, Ohio",
    education: "B.A. Mathematics, Ohio University",
    bio: "Former realtor and property investor from Nelsonville who represented Ohio House District 94 from 2017 to 2024 and chaired the House Finance Committee in 2023–2024. Backed by Vice President JD Vance, he narrowly won the 2026 GOP primary for Treasurer over state Sen. Kristina Roegner.",
    elections: [
      {year:"2026", race:"Treasurer — GOP primary", result:"won", detail:"53.1% over Kristina Roegner (46.9%)", src:"https://ballotpedia.org/Jay_Edwards"},
      {year:"2022", race:"Ohio House, District 94", result:"won", detail:"60.4% over Tanya Conrath", src:"https://ballotpedia.org/Jay_Edwards"},
      {year:"2016", race:"Ohio House, District 94", result:"won", detail:"57.8% over Sarah Grace", src:"https://ballotpedia.org/Jay_Edwards"},
    ],
    record: [
      {name:"Browns stadium unclaimed funds", stance:"against", date:"Sep–Oct 2026", detail:"Has voiced opposition to using $600 million in unclaimed funds for a Browns stadium. His campaign received $15,000 each from Browns owners Jimmy and Dee Haslam; he says the donations don't affect his views.", src:"https://www.daytondailynews.com/local/former-gop-lawmaker-cincy-councilman-compete-for-ohio-treasurer-election-2026/article_52510efe-5bea-57e8-8910-534371cd62bd.html"},
      {name:"Vote on expelling Speaker Larry Householder", stance:"against", date:"Jun 2021", detail:"Was one of 21 House Republicans who voted against expelling the indicted former speaker; the House expelled him 75–21.", src:"https://ohiocapitaljournal.com/2021/06/16/nearly-a-year-after-a-racketeering-indictment-ohio-house-expels-householder/"},
      {name:"Chair, House Finance Committee", stance:"action", date:"2023–2024", detail:"Led the committee that writes the state budget.", src:"https://ballotpedia.org/Jay_Edwards"},
      {name:"Unclaimed funds for sports stadiums", stance:"action", date:"2026", detail:"Said the money \"could have been spent a better way\" but he isn't opposed to such projects if the state can afford them.", src:"https://ohiocapitaljournal.com/?p=38743"},
    ],
    controversies: [],
    career: [
      {year:"2017", event:"Ohio House, District 94", detail:"2017–2024 (term-limited)"},
      {year:"2023", event:"House Finance Committee chair", detail:"2023–2024"},
    ],
    money: MONEY_STATE,
    endorsements: [{name:"JD Vance", detail:"Endorsed in the GOP primary", src:"https://ohiocapitaljournal.com/?p=38743"}],
    links: [{label:"Ballotpedia", url:"https://ballotpedia.org/Jay_Edwards"}],
    opponents: ["seth walsh"],
  },

  "seth walsh": {
    name: "Seth Walsh", initials: "SW", party: "D", partyLabel: "Democrat",
    level: "Local", state: "Ohio", office: "Cincinnati City Council; candidate for Ohio Treasurer",
    since: "Council since late 2022",
    status: "ON THE 2026 BALLOT: Democratic nominee for Treasurer vs. Jay Edwards (R), Nov 3, 2026 (open seat).",
    born: null, birthplace: "",
    education: "",
    bio: "Cincinnati City Council member, appointed in 2022 and elected in 2023 and 2025. Previously CEO of the College Hill Community Urban Redevelopment Corporation, which he says had a $2 million-plus operating budget and over $30 million in assets. Lost a 2016 race for Hamilton County Treasurer.",
    elections: [
      {year:"2026", race:"Treasurer — Democratic primary", result:"won", detail:"Unopposed; faces Jay Edwards Nov 3", src:"https://ballotpedia.org/Seth_Walsh"},
      {year:"2025", race:"Cincinnati City Council", result:"won", detail:"Re-elected (7.2%, top-nine at-large)", src:"https://ballotpedia.org/Seth_Walsh"},
      {year:"2023", race:"Cincinnati City Council", result:"won", detail:"9.0%, top-nine at-large", src:"https://ballotpedia.org/Seth_Walsh"},
    ],
    record: [
      {name:"Browns stadium unclaimed funds", stance:"against", date:"Sep–Oct 2026", detail:"Says the treasurer should join the lawsuit over using unclaimed funds for a Browns stadium (\"that's real peoples' money\") and called Edwards' acceptance of Haslam donations suspicious.", src:"https://www.daytondailynews.com/local/former-gop-lawmaker-cincy-councilman-compete-for-ohio-treasurer-election-2026/article_52510efe-5bea-57e8-8910-534371cd62bd.html"},
    ],
    controversies: [],
    career: [
      {year:"2022", event:"Appointed to Cincinnati City Council", detail:"Replacing Greg Landsman"},
      {year:"2026", event:"Democratic nominee for Treasurer", detail:""},
    ],
    money: MONEY_STATE, endorsements: [],
    links: [
      {label:"Running for Treasurer (WYSO)", url:"https://www.wyso.org/2026-01-07/council-seth-walsh-running-ohio-treasurer"},
      {label:"Ballotpedia", url:"https://ballotpedia.org/Seth_Walsh"},
    ],
    opponents: ["jay edwards"],
  },

  "colleen o'donnell": {
    name: "Colleen O'Donnell", initials: "CO", party: "R", partyLabel: "Republican",
    level: "State", cat: "judicial", state: "Ohio", office: "Former Franklin County Common Pleas Judge; candidate for Ohio Supreme Court",
    since: "",
    status: "ON THE 2026 BALLOT: Republican nominee for Ohio Supreme Court vs. Justice Jennifer Brunner (D), Nov 3, 2026.",
    born: null, birthplace: "",
    education: "B.A. Political Science, Miami University (2003); J.D., Case Western Reserve University (2006)",
    bio: "Served as a Franklin County Common Pleas judge from 2013 to 2023 after work as a federal law clerk, an assistant attorney general in consumer protection and a Columbus litigator. Lost bids for the Tenth District Court of Appeals in 2020 and re-election in 2022, then won a four-way 2026 GOP primary for the Supreme Court seat held by Jennifer Brunner.",
    elections: [
      {year:"2026", race:"Ohio Supreme Court — GOP primary", result:"won", detail:"Won four-way primary over Andrew King, Jill Flagg Lanzinger and Ronald Lewis", src:"https://www.vorys.com/publication-ohio-2026-primary-election-recap"},
      {year:"2022", race:"Franklin County Common Pleas", result:"lost", detail:"44.8% to Andria Noble", src:"https://ballotpedia.org/Colleen_O%27Donnell"},
      {year:"2020", race:"Tenth District Court of Appeals", result:"lost", detail:"48.5% to Michael Mentel", src:"https://ballotpedia.org/Colleen_O%27Donnell"},
      {year:"2014", race:"Franklin County Common Pleas", result:"won", detail:"57.1% over Monica Hawkins", src:"https://ballotpedia.org/Colleen_O%27Donnell"},
    ],
    record: [],
    controversies: [
      {title:"Judicial-ethics finding over use of \"judge\" title", date:"Apr 2026", sev:"low", body:"A three-judge panel found she violated judicial campaign conduct rules by sharing an Ohio Value Voters endorsement that repeatedly called her \"Judge O'Donnell,\" although she left the bench in January 2023.", outcome:"Apr 21, 2026: the panel recommended no sanction, calling the violation technical; the case was closed (Board of Professional Conduct No. 2026-006). Her campaign said there was \"nothing to this.\"", src:"https://news.bloomberglaw.com/litigation/ohio-justice-candidate-violated-ethics-rules-wont-be-punished"},
    ],
    career: [
      {year:"2013", event:"Franklin County Common Pleas Judge", detail:"2013–2023"},
      {year:"2026", event:"GOP nominee for Ohio Supreme Court", detail:""},
    ],
    money: MONEY_STATE, endorsements: [
      {name:"Ohio Chamber of Commerce PAC, Ohio Business Roundtable, NFIB-Ohio, Ohio Manufacturers' Association, Ohio Farm Bureau", detail:"Endorsed Aug 18, 2026", src:"https://wysu.org/ohio-news/2026-08-18/business-groups-again-endorse-republicans-for-ohio-supreme-court-but-say-its-not-partisan"},
    ],
    links: [{label:"Ballotpedia", url:"https://ballotpedia.org/Colleen_O%27Donnell"}],
    opponents: ["jennifer brunner"],
  },

  "dan hawkins": {
    name: "Dan Hawkins", initials: "DH", party: "R", partyLabel: "Republican",
    level: "State", cat: "judicial", state: "Ohio", office: "Justice, Supreme Court of Ohio",
    since: "Dec 10, 2024",
    status: "ON THE 2026 BALLOT: Hawkins (R) vs. Marilyn Zayas (D) for a full term on the Ohio Supreme Court, Nov 3, 2026.",
    born: null, birthplace: "",
    education: "B.S. Criminal Justice, Bowling Green State University (1998); J.D., Ohio State University (2001)",
    bio: "Former Franklin County assistant prosecutor, municipal judge and Common Pleas judge who won a 2024 special election for the Ohio Supreme Court and took office in December 2024. His current term ends Dec 31, 2026.",
    elections: [
      {year:"2026", race:"Ohio Supreme Court — GOP primary", result:"won", detail:"Unopposed; faces Marilyn Zayas Nov 3", src:"https://www.vorys.com/publication-ohio-2026-primary-election-recap"},
      {year:"2024", race:"Ohio Supreme Court (special)", result:"won", detail:"55.0% over Lisa Forbes (45.0%)", src:"https://ballotpedia.org/Dan_Hawkins_(Ohio)"},
      {year:"2018", race:"Franklin County Common Pleas", result:"won", detail:"50.3% over Carl Aveni", src:"https://ballotpedia.org/Dan_Hawkins_(Ohio)"},
    ],
    record: [], controversies: [],
    career: [
      {year:"2001", event:"Franklin County Prosecutor's Office", detail:""},
      {year:"2019", event:"Franklin County Common Pleas Judge", detail:"Elected 2018"},
      {year:"2024", event:"Ohio Supreme Court Justice", detail:"Took office Dec 10, 2024"},
    ],
    money: MONEY_STATE, endorsements: [
      {name:"Ohio Chamber of Commerce PAC, Ohio Business Roundtable, NFIB-Ohio, Ohio Manufacturers' Association, Ohio Farm Bureau", detail:"Endorsed Aug 18, 2026", src:"https://wysu.org/ohio-news/2026-08-18/business-groups-again-endorse-republicans-for-ohio-supreme-court-but-say-its-not-partisan"},
    ],
    links: [{label:"Ballotpedia", url:"https://ballotpedia.org/Dan_Hawkins_(Ohio)"}],
    opponents: ["marilyn zayas"],
  },

  "marilyn zayas": {
    name: "Marilyn Zayas", initials: "MZ", party: "D", partyLabel: "Democrat",
    level: "State", cat: "judicial", state: "Ohio", office: "Judge, Ohio First District Court of Appeals",
    since: "Nov 2016",
    status: "ON THE 2026 BALLOT: Zayas (D) vs. Justice Dan Hawkins (R) for the Ohio Supreme Court, Nov 3, 2026.",
    born: null, birthplace: "",
    education: "B.A., City College of New York (1987); J.D., University of Cincinnati College of Law (1997)",
    bio: "Cincinnati appeals judge since 2016 who previously worked as an IT manager at Procter & Gamble and spent nearly 20 years in private law practice. She has served as a visiting judge on the Ohio Supreme Court and sits on its Ethics, Professionalism and Diversity Committee. She lost a 2022 Supreme Court race to Justice Pat DeWine.",
    elections: [
      {year:"2026", race:"Ohio Supreme Court — Democratic primary", result:"won", detail:"Unopposed; faces Dan Hawkins Nov 3", src:"https://ballotpedia.org/Marilyn_Zayas"},
      {year:"2024", race:"First District Court of Appeals", result:"won", detail:"56.2% over Stacy Lefton", src:"https://ballotpedia.org/Marilyn_Zayas"},
      {year:"2022", race:"Ohio Supreme Court", result:"lost", detail:"43.7% to Pat DeWine (56.3%)", src:"https://ballotpedia.org/Marilyn_Zayas"},
      {year:"2016", race:"First District Court of Appeals", result:"won", detail:"50.6% over incumbent Peter Stautberg", src:"https://ballotpedia.org/Marilyn_Zayas"},
    ],
    record: [], controversies: [],
    career: [
      {year:"2016", event:"First District Court of Appeals", detail:"Re-elected 2018, 2024"},
      {year:"2022", event:"Runs for Ohio Supreme Court", detail:"Lost to Pat DeWine"},
    ],
    money: MONEY_STATE, endorsements: [],
    links: [
      {label:"Ballotpedia", url:"https://ballotpedia.org/Marilyn_Zayas"},
      {label:"2022 candidate profile (WCPO)", url:"https://www.wcpo.com/news/government/state-government/ohio-state-government-news/governor-dewines-son-appeals-court-judge-run-for-ohio-supreme-court-talk-about-integrity"},
    ],
    opponents: ["dan hawkins"],
  },
});

/* Head-to-head races on the Nov 3, 2026 ballot */
const RACES_2026 = [
  {race:"U.S. Senate (special)", a:"jon husted", b:"sherrod brown"},
  {race:"Governor", a:"vivek ramaswamy", b:"amy acton"},
  {race:"Attorney General", a:"keith faber", b:"john kulewicz"},
  {race:"Secretary of State", a:"robert sprague", b:"allison russo"},
  {race:"Auditor of State", a:"frank larose", b:"annette blackwell"},
  {race:"Treasurer", a:"jay edwards", b:"seth walsh"},
  {race:"Ohio Supreme Court", a:"colleen o'donnell", b:"jennifer brunner"},
  {race:"Ohio Supreme Court", a:"dan hawkins", b:"marilyn zayas"},
];
const OPPONENT_PAIRS = RACES_2026.reduce((m,r)=>{ (m[r.a]=m[r.a]||[]).push(r.b); (m[r.b]=m[r.b]||[]).push(r.a); return m; }, {});
