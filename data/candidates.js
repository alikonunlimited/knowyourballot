/* ============================================================
   KnowYourBallot candidate data — fact-checked October 2026.
   Every item carries `src` (a working news / official / court URL).
   Wikipedia is used ONLY for photos (see WIKI_TITLES), never as a source.
   Severity: high = conviction, liability or indictment;
             mid  = official investigation, lawsuit or settlement;
             low  = public criticism or dispute.
   ============================================================ */
const DATA_AS_OF = "October 2026";
const CANDIDATES = {

  "donald trump": {
    name: "Donald J. Trump", initials: "DT", party: "R", partyLabel: "Republican",
    level: "Federal", state: "National", office: "47th President of the United States",
    since: "Jan 20, 2025",
    status: "Not on the 2026 ballot. Term ends January 20, 2029.",
    born: "1946-06-14", birthplace: "Queens, New York City",
    education: "B.S. Economics, Wharton School, University of Pennsylvania (1968)",
    bio: "Real-estate developer and television personality who won the presidency in 2016, lost re-election in 2020, and won again in 2024 — the second president, after Grover Cleveland, to serve non-consecutive terms. His second term has been defined by sweeping tariffs, cuts to the federal workforce, and the One Big Beautiful Bill Act.",
    elections: [
      {year:"2024", race:"President", result:"won", detail:"312–226 electoral votes; 49.8% of the popular vote to Kamala Harris's 48.3%", src:"https://www.archives.gov/electoral-college/2024"},
      {year:"2020", race:"President", result:"lost", detail:"232–306 electoral votes; 46.8% to Joe Biden's 51.3%", src:"https://www.archives.gov/electoral-college/2020"},
      {year:"2016", race:"President", result:"won", detail:"304–227 electoral votes; lost popular vote 46.1% to Hillary Clinton's 48.2%", src:"https://www.archives.gov/electoral-college/2016"},
    ],
    record: [
      {name:"One Big Beautiful Bill Act", stance:"signed", date:"Jul 4, 2025", detail:"Signed the GOP's signature tax-and-spending law at a July 4 White House ceremony.", src:"https://www.axios.com/2025/07/04/trump-signs-big-beautiful-bill-tax-spending-budget"},
      {name:"Broad import tariffs", stance:"action", date:"2025", detail:"Imposed tariffs on imports from nearly every trading partner, pushing U.S. tariff levels to their highest since the Great Depression.", src:"https://www.thefiscaltimes.com/2025/08/07/Trump-Pushes-Tariffs-Highest-Level-Great-Depression"},
    ],
    controversies: [
      {title:"Felony conviction — NY hush-money case", date:"2024–2025", sev:"high", body:"A Manhattan jury convicted him in May 2024 on 34 felony counts of falsifying business records.", outcome:"Sentenced Jan 10, 2025 to an unconditional discharge (no jail, fine or probation); conviction stands.", src:"https://abc7.com/15786139/"},
      {title:"Civil fraud case — Trump Organization", date:"2024–2025", sev:"high", body:"A New York judge found him liable for inflating his net worth and ordered a penalty of roughly $355 million plus interest.", outcome:"Aug 21, 2025: appeals court upheld the fraud liability but threw out the monetary penalty as excessive.", src:"https://www.pbs.org/newshour/politics/trumps-massive-civil-fraud-penalty-for-exaggerating-financial-statements-is-thrown-out-by-appeals-court"},
      {title:"E. Jean Carroll verdicts", date:"2023–2025", sev:"high", body:"Juries found him liable for sexual abuse and defamation, awarding $5 million and $83.3 million.", outcome:"Both verdicts upheld on appeal. The Supreme Court declined to hear his appeal of the $5 million verdict (Jun 29, 2026) and denied rehearing (Aug 17, 2026); his request that it review the $83.3 million award was pending as of October 2026.", src:"https://www.scotusblog.com/cases/trump-v-carroll/"},
      {title:"Two impeachments", date:"2019–2021", sev:"mid", body:"Impeached by the House in Dec 2019 (abuse of power, obstruction of Congress) and Jan 2021 (incitement of insurrection).", outcome:"Acquitted by the Senate both times; in 2021, 57 senators (including 7 Republicans) voted to convict, short of the 67 needed.", src:"https://www.senate.gov/about/powers-procedures/impeachment/impeachment-list.htm"},
      {title:"Federal 2020-election case dismissed", date:"2023–2024", sev:"mid", body:"Indicted by Special Counsel Jack Smith over efforts to overturn the 2020 election.", outcome:"Dismissed Nov 25, 2024 at Smith's request after Trump won the election, citing DOJ policy against prosecuting a sitting president.", src:"https://www.axios.com/2024/11/25/jack-smith-trump-dc-case-dismissed"},
      {title:"Georgia election case dropped", date:"2023–2025", sev:"mid", body:"Indicted in Fulton County in Aug 2023 on racketeering and related charges.", outcome:"Dropped Nov 26, 2025 by the replacement prosecutor.", src:"https://www.knkx.org/2025-11-26/the-georgia-election-interference-case-against-trump-and-others-has-been-dropped"},
      {title:"Trump Foundation misuse", date:"2019", sev:"mid", body:"New York's attorney general sued over misuse of the charity's funds; the foundation dissolved in 2018.", outcome:"Nov 2019: judge ordered Trump to pay $2 million to charities.", src:"https://www.boston.com/news/politics/2019/11/07/judge-orders-trump-to-pay-2-million-for-charity-foundation-misuse/"},
      {title:"Trump University fraud suits", date:"2016", sev:"mid", body:"Former students and New York's attorney general sued alleging fraud.", outcome:"Settled for $25 million in November 2016.", src:"https://www.fox9.com/news/trump-university-lawsuits-settled-for-25-million"},
    ],
    career: [
      {year:"1971", event:"Takes over family real-estate business", detail:"Renamed The Trump Organization"},
      {year:"2004", event:"Hosts NBC's The Apprentice", detail:"Through 2015"},
      {year:"2017", event:"Inaugurated 45th President", detail:"Served 2017–2021"},
      {year:"2021", event:"Leaves office after losing 2020 election", detail:""},
      {year:"2025", event:"Inaugurated 47th President", detail:"Jan 20, 2025"},
    ],
    money: {
      note: "Presidential campaign filings are public at the FEC.",
      figures: [],
      filings: [{label:"FEC candidate filings", url:"https://www.fec.gov/data/candidate/P80001571/"}]
    },
    endorsements: [],
    links: [
      {label:"White House", url:"https://www.whitehouse.gov"},
      {label:"Ballotpedia", url:"https://ballotpedia.org/Donald_Trump"},
      {label:"FEC filings", url:"https://www.fec.gov/data/candidate/P80001571/"},
    ]
  },

  "kamala harris": {
    name: "Kamala D. Harris", initials: "KH", party: "D", partyLabel: "Democrat",
    level: "Federal", state: "California", office: "Former Vice President of the United States (2021–2025)",
    since: "Left office Jan 20, 2025",
    status: "Not on the 2026 ballot. Declined to run for California governor in 2026. Campaigning for Democrats in Georgia, Mississippi, Nevada, New Hampshire and Wisconsin before the midterms; asked in October 2026 about running for president in 2028, she said, \"I haven't decided yet\" (Reuters).",
    born: "1964-10-20", birthplace: "Oakland, California",
    education: "B.A., Howard University (1986); J.D., UC Hastings College of the Law (1989)",
    bio: "Former San Francisco district attorney, California attorney general and U.S. senator who served as the 49th vice president under Joe Biden. She became the Democratic presidential nominee in July 2024 after Biden withdrew and lost to Donald Trump. Since leaving office she published the campaign memoir 107 Days.",
    elections: [
      {year:"2024", race:"President", result:"lost", detail:"226–312 electoral votes; 48.3% of the popular vote to Trump's 49.8%", src:"https://www.archives.gov/electoral-college/2024"},
      {year:"2020", race:"Vice President (with Biden)", result:"won", detail:"306–232 electoral votes", src:"https://www.archives.gov/electoral-college/2020"},
      {year:"2016", race:"U.S. Senate, California", result:"won", detail:"62% over fellow Democrat Loretta Sanchez", src:"https://ballotpedia.org/Kamala_Harris"},
      {year:"2014", race:"California Attorney General", result:"won", detail:"Re-elected over Republican Ronald Gold", src:"https://ballotpedia.org/Kamala_Harris"},
      {year:"2010", race:"California Attorney General", result:"won", detail:"46.0% to Republican Steve Cooley's 45.5%", src:"https://ballotpedia.org/Kamala_Harris"},
    ],
    record: [
      {name:"Tie-breaking votes as Vice President", stance:"action", date:"2021–2025", detail:"Cast 33 tie-breaking votes — more than any vice president in history.", src:"https://www.senate.gov/legislative/TieVotes.htm"},
      {name:"American Rescue Plan Act (2021)", stance:"for", date:"2021", detail:"Her tie-breaking votes advanced the $1.9 trillion COVID relief law, which no Senate Republican supported.", src:"https://www.senate.gov/legislative/TieVotes.htm"},
      {name:"Inflation Reduction Act (2022)", stance:"for", date:"Aug 2022", detail:"Broke a 50–50 tie to pass the climate, health-care and tax law.", src:"https://www.senate.gov/legislative/TieVotes.htm"},
    ],
    controversies: [
      {title:"Prosecutorial record", date:"2004–2016", sev:"low", body:"Critics on the left said her record as DA and attorney general was harsher than her 'progressive prosecutor' label, including defending convictions in contested cases.", outcome:"A recurring issue in her 2019 and 2024 campaigns; no legal findings.", src:"https://www.axios.com/2024/08/03/kamala-harris-prosecutor-district-attorney-record"},
    ],
    career: [
      {year:"1990", event:"Deputy District Attorney, Alameda County", detail:""},
      {year:"2004", event:"San Francisco District Attorney", detail:"Elected 2003 with 56%"},
      {year:"2011", event:"California Attorney General", detail:"2011–2017"},
      {year:"2017", event:"U.S. Senator, California", detail:"2017–2021"},
      {year:"2021", event:"49th Vice President", detail:"2021–2025"},
      {year:"2024", event:"Democratic presidential nominee", detail:"Lost to Donald Trump"},
      {year:"2025", event:"Publishes 107 Days; rules out 2026 governor run", detail:"", },
    ],
    money: {
      note: "Campaign filings are public at the FEC.",
      figures: [],
      filings: [{label:"FEC candidate filings", url:"https://www.fec.gov/data/candidate/P00009423/"}]
    },
    endorsements: [],
    links: [
      {label:"Ballotpedia", url:"https://ballotpedia.org/Kamala_Harris"},
      {label:"Won't run for governor (PBS)", url:"https://www.pbs.org/newshour/politics/former-vice-president-harris-will-not-run-for-california-governor-in-2026"},
      {label:"FEC filings", url:"https://www.fec.gov/data/candidate/P00009423/"},
    ]
  },

  "bernie sanders": {
    name: "Bernie Sanders", initials: "BS", party: "I", partyLabel: "Independent (caucuses with Democrats)",
    level: "Federal", state: "Vermont", office: "U.S. Senator, Vermont",
    since: "Jan 3, 2007",
    status: "Not on the 2026 ballot. Re-elected in 2024; term ends January 2031.",
    born: "1941-09-08", birthplace: "Brooklyn, New York City",
    education: "B.A. Political Science, University of Chicago (1964)",
    bio: "The longest-serving independent in congressional history. Mayor of Burlington in the 1980s, Vermont's lone House member for 16 years, and a senator since 2007. Finished second in the 2016 and 2020 Democratic presidential primaries. Since 2025 he has led the \"Fighting Oligarchy\" rallies against the Trump administration and is ranking member of the Senate HELP Committee.",
    elections: [
      {year:"2024", race:"U.S. Senate, Vermont", result:"won", detail:"Re-elected to a fourth term", src:"https://ballotpedia.org/Bernie_Sanders"},
      {year:"2018", race:"U.S. Senate, Vermont", result:"won", detail:"67% over Lawrence Zupan", src:"https://ballotpedia.org/Bernie_Sanders"},
      {year:"2012", race:"U.S. Senate, Vermont", result:"won", detail:"71% over John MacGovern", src:"https://ballotpedia.org/Bernie_Sanders"},
      {year:"2020", race:"Democratic presidential primary", result:"lost", detail:"Finished second to Joe Biden", src:"https://ballotpedia.org/Bernie_Sanders"},
      {year:"2016", race:"Democratic presidential primary", result:"lost", detail:"Won 23 contests and about 46% of pledged delegates; finished second to Hillary Clinton", src:"https://ballotpedia.org/Bernie_Sanders"},
      {year:"1981", race:"Mayor of Burlington", result:"won", detail:"Won by 10 votes after a recount", src:"https://ballotpedia.org/Bernie_Sanders"},
    ],
    record: [
      {name:"Bill to ban artificial superintelligence", stance:"for", date:"Oct 2026", detail:"Introduced legislation with Rep. Greg Casar to create a federal body overseeing advanced AI, pause advanced AI development until it can ensure the technology is safe, and ban artificial superintelligence.", src:"https://www.sanders.senate.gov/op-eds/dont-let-big-tech-dictate-humanitys-future/"},
      {name:"Iraq War authorization (2002)", stance:"against", date:"Oct 2002", detail:"Voted no in the House.", src:"https://clerk.house.gov/evs/2002/roll455.xml"},
      {name:"USA PATRIOT Act (2001)", stance:"against", date:"Oct 2001", detail:"Voted no; the bill passed the House 357–66.", src:"https://clerk.house.gov/evs/2001/roll398.xml"},
      {name:"Gun-maker liability shield — PLCAA (2005)", stance:"for", date:"Oct 2005", detail:"Voted yes; he later said he would vote to repeal it.", src:"https://clerk.house.gov/evs/2005/roll534.xml"},
      {name:"Inflation Reduction Act (2022)", stance:"for", date:"Aug 2022", detail:"Voted yes while calling it a modest first step.", src:"https://www.senate.gov/legislative/LIS/roll_call_votes/vote1172/vote_117_2_00325.htm"},
      {name:"Resolutions to block arms sales to Israel", stance:"for", date:"Jul 2025", detail:"Sponsored the resolutions; they failed, but drew support from 27 senators, a majority of the Democratic caucus.", src:"https://www.duckworth.senate.gov/news/in-the-news/senate-votes-down-israel-arms-sales-ban-despite-growing-democrat-support"},
      {name:"\"Fighting Oligarchy\" rallies", stance:"action", date:"2025", detail:"Drew record crowds on a national tour opposing the Trump administration and Elon Musk.", src:"https://www.wfae.org/politics/2025-03-22/bernie-sanders-is-drawing-record-crowds-as-he-pushes-democrats-to-fight-oligarchy"},
    ],
    controversies: [],
    career: [
      {year:"1981", event:"Mayor of Burlington, Vermont", detail:"1981–1989"},
      {year:"1991", event:"U.S. House, Vermont at-large", detail:"1991–2007"},
      {year:"2007", event:"U.S. Senator", detail:"Re-elected 2012, 2018, 2024"},
      {year:"2013", event:"Chair, Veterans' Affairs Committee", detail:"2013–2015"},
      {year:"2021", event:"Chair, Budget Committee", detail:"2021–2023"},
      {year:"2023", event:"Chair, HELP Committee", detail:"2023–2025; ranking member since 2025"},
    ],
    money: {
      note: "Senate campaign filings are public at the FEC.",
      figures: [],
      filings: [{label:"FEC candidate search", url:"https://www.fec.gov/data/candidates/?q=Bernie%20Sanders"}]
    },
    endorsements: [],
    links: [
      {label:"Senate office", url:"https://www.sanders.senate.gov"},
      {label:"Ballotpedia", url:"https://ballotpedia.org/Bernie_Sanders"},
      {label:"FEC filings", url:"https://www.fec.gov/data/candidates/?q=Bernie%20Sanders"},
    ]
  },

  "mike dewine": {
    name: "Mike DeWine", initials: "MD", party: "R", partyLabel: "Republican",
    level: "State", state: "Ohio", office: "70th Governor of Ohio",
    since: "Jan 14, 2019",
    status: "Term-limited; leaves office January 2027. The Nov 3, 2026 governor's race is Vivek Ramaswamy (R) vs. Amy Acton (D).",
    born: "1947-01-05", birthplace: "Springfield, Ohio",
    education: "B.S. Education, Miami University (1969); J.D., Ohio Northern University (1972)",
    bio: "A fixture of Ohio politics for five decades: Greene County prosecutor, state senator, congressman, lieutenant governor, two-term U.S. senator and attorney general before becoming governor. He drew national attention for early COVID-19 restrictions, signed Ohio's 2019 six-week abortion ban, vetoed a 2023 ban on gender-affirming care for minors (overridden), and in June 2026 called for abolishing the death penalty.",
    elections: [
      {year:"2022", race:"Governor", result:"won", detail:"62.4% over Nan Whaley (37.4%); won primary with 48.1%", src:"https://www.ohiosos.gov/elections/election-results-and-data/2022-official-election-results/"},
      {year:"2018", race:"Governor", result:"won", detail:"50.4% over Richard Cordray (46.7%)", src:"https://www.ohiosos.gov/elections/election-results-and-data/2018-official-elections-results/"},
      {year:"2006", race:"U.S. Senate", result:"lost", detail:"Lost re-election to Sherrod Brown, 43.8% to 56.2%", src:"https://ballotpedia.org/Mike_DeWine"},
    ],
    record: [
      {name:"Called for Ramaswamy ad to come down", stance:"action", date:"Oct 22, 2026", detail:"Said the Ramaswamy campaign ad featuring Amy Acton's estranged mother is \"deeply, deeply, deeply troubling\" and \"needs to come down,\" while keeping his endorsement: \"I endorse the whole ticket.\"", src:"https://www.news5cleveland.com/news/politics/ohio-politics/just-wrong-ohio-gov-mike-dewine-tells-ramaswamy-to-immediately-take-down-controversial-ad"},
      {name:"Domestic violence programs", stance:"action", date:"Oct 22, 2026", detail:"Announced $1 million in one-time grants for Ohio's 55 domestic violence shelters ($18,000 each) and new grant programs for police ballistic shields, lethality-assessment training and victim-advocate co-responders.", src:"https://governor.ohio.gov/media/news-and-media/governor-dewine-announces-new-programs-to-support-domestic-violence-survivors-law-enforcement"},
      {name:"Executive Order 2026-05D (dyed diesel)", stance:"action", date:"Oct 21, 2026", detail:"Temporarily allowed dyed diesel on public highways, following a federal order deferring certain diesel tax payments.", src:"https://www.wsaz.com/2026/10/21/governor-dewine-signs-executive-order-use-dyed-diesel-public-highways/"},
      {name:"Rural health awards", stance:"action", date:"Oct 16, 2026", detail:"Announced $92 million in federal Rural Health Transformation Program awards, including $30.3 million for maternal care and $30.3 million split among 22 rural hospitals.", src:"https://governor.ohio.gov/media/news-and-media/governor-dewine-announces-92-million-to-expand-access-to-quality-healthcare-in-rural-ohio"},
      {name:"Six-week abortion ban (\"Heartbeat Bill\")", stance:"signed", date:"Apr 11, 2019", detail:"Banned abortion once cardiac activity is detected, with no exceptions for rape or incest.", src:"https://www.npr.org/2019/04/11/712455980/a-bill-banning-most-abortions-becomes-law-in-ohio"},
      {name:"House Bill 6 (nuclear/coal bailout)", stance:"signed", date:"Jul 2019", detail:"Signed the energy bill later found to have been passed through a FirstEnergy bribery scheme.", src:"https://www.news5cleveland.com/news/politics/ohio-politics/new-texts-show-firstenergy-allegedly-working-with-gov-dewine-to-pass-house-bill-6"},
      {name:"Gun proposals after Dayton shooting", stance:"action", date:"Aug 2019", detail:"Proposed a 17-point plan including a red-flag law; the legislature did not pass it.", src:"https://www.npr.org/2019/08/06/748805187/ohio-governor-proposes-new-gun-control-laws-marking-shift-from-past-gop-leadersh"},
      {name:"HB 68 — gender-affirming care ban for minors", stance:"against", date:"Dec 2023", detail:"Vetoed the bill; the legislature overrode his veto in January 2024.", src:"https://www.wvxu.org/2024-01-10/ohio-house-votes-to-override-veto-of-gender-affirming-care-ban"},
      {name:"Calls to abolish the death penalty", stance:"action", date:"Jun 16, 2026", detail:"Said Ohio should abolish capital punishment because it is not a deterrent; no executions have taken place during his tenure.", src:"https://www.news4jax.com/news/national/2026/06/16/republican-gov-mike-dewine-says-ohio-should-abolish-the-death-penalty-saying-it-is-not-a-deterrent/"},
    ],
    controversies: [
      {title:"FirstEnergy / House Bill 6 texts", date:"2019–2024", sev:"mid", body:"Texts released in 2024 showed FirstEnergy executives describing working with DeWine's team to pass HB 6, the law at the center of Ohio's largest bribery scandal.", outcome:"DeWine has not been charged; former House Speaker Larry Householder was convicted in the scheme.", src:"https://www.news5cleveland.com/news/politics/ohio-politics/new-texts-show-firstenergy-allegedly-working-with-gov-dewine-to-pass-house-bill-6"},
      {title:"COVID-19 restrictions", date:"2020–2022", sev:"low", body:"Early shutdown orders earned national praise and a GOP backlash.", outcome:"Survived a 2022 primary challenge with 48.1% and won the general election by 25 points.", src:"https://www.washingtonpost.com/national/coronavirus-ohio-dewine-outbreak/2020/03/16/9bde6b1e-67b2-11ea-9923-57073adce27c_story.html"},
    ],
    career: [
      {year:"1977", event:"Greene County Prosecutor", detail:"1977–1981"},
      {year:"1983", event:"U.S. House, Ohio's 7th District", detail:"1983–1991"},
      {year:"1991", event:"Lieutenant Governor of Ohio", detail:"Under George Voinovich, 1991–1994"},
      {year:"1995", event:"U.S. Senator from Ohio", detail:"1995–2007"},
      {year:"2011", event:"Ohio Attorney General", detail:"2011–2019"},
      {year:"2019", event:"Governor of Ohio", detail:"Re-elected 2022"},
    ],
    money: {
      note: "State campaign finance reports are searchable at the Ohio Secretary of State.",
      figures: [],
      filings: [{label:"Ohio SOS campaign finance search", url:"https://www.ohiosos.gov/campaign-finance/search/"}]
    },
    endorsements: [],
    links: [
      {label:"Governor's office", url:"https://governor.ohio.gov"},
      {label:"Ballotpedia", url:"https://ballotpedia.org/Mike_DeWine"},
      {label:"Ohio campaign finance", url:"https://www.ohiosos.gov/campaign-finance/search/"},
    ]
  },

  "andrew ginther": {
    name: "Andrew J. Ginther", initials: "AG", party: "D", partyLabel: "Democrat",
    level: "Local", state: "Ohio", office: "Mayor of Columbus",
    since: "Jan 1, 2016",
    status: "Not on the 2026 ballot. Seeking a fourth term in November 2027; Council President Shannon Hardin announced a challenge on Aug 20, 2026.",
    born: "1975-04-27", birthplace: "Columbus, Ohio",
    education: "B.A. Political Science, Earlham College (1997)",
    bio: "Columbus's 53rd mayor, now in his third term. Previously a Columbus school board member and the youngest City Council president in the city's history. Served as president of the U.S. Conference of Mayors in 2024–2025. His tenure includes new local gun rules, a 2021 climate plan, and the July 2024 ransomware attack on city systems. In 2026 he has clashed publicly with Council President Shannon Hardin over storm repairs and the city budget.",
    elections: [
      {year:"2023", race:"Mayor of Columbus", result:"won", detail:"64% over independent Joe Motil", src:"https://ballotpedia.org/Andrew_Ginther"},
      {year:"2019", race:"Mayor of Columbus", result:"won", detail:"Re-elected unopposed", src:"https://ballotpedia.org/Andrew_Ginther"},
      {year:"2015", race:"Mayor of Columbus", result:"won", detail:"59% over Republican Zach Scott", src:"https://ballotpedia.org/Andrew_Ginther"},
    ],
    record: [
      {name:"Local gun regulations", stance:"for", date:"Dec 2022", detail:"Proposed and won council approval for a ban on magazines over 30 rounds, safe-storage penalties and a straw-purchase ban.", src:"https://www.wosu.org/politics-government/2022-12-06/columbus-city-council-approves-new-gun-rules"},
      {name:"Climate Action Plan", stance:"action", date:"2021", detail:"Targets a 45% emissions cut by 2030 and carbon neutrality by 2050.", src:"https://www.nbc4i.com/news/local-news/columbus/columbus-climate-change-plan-aims-for-carbon-neutral-city-by-2050/"},
      {name:"2025 city budget", stance:"action", date:"Nov 2024", detail:"Proposed a $1.23 billion general fund with $774 million for neighborhood safety.", src:"https://abc6onyourside.com/news/local/mayor-ginther-proposes-123-billion-budget-focusing-neighborhood-safety-city-columbus-central-ohio-november-2024"},
    ],
    controversies: [
      {title:"Call to judge in bus-station case", date:"2023–2024", sev:"mid", body:"Franklin County Judge Stephanie Mingo said Ginther called her while the city sought to close a west-side Greyhound/Barons station; she recused. A special prosecutor reviewed whether charges were warranted.", outcome:"Dec 18, 2024: special prosecutor found no crime was committed; no charges filed.", src:"https://www.wosu.org/politics-government/2024-12-18/no-criminal-charges-for-columbus-mayor-andrew-ginther-over-phone-call-to-judge-about-bus-station-1"},
      {title:"$195K settlement over campaign work", date:"2024", sev:"mid", body:"A former mayor's-office assistant said she was required to do work for Ginther's 2023 re-election campaign.", outcome:"The city paid a $195,000 settlement; no admission of wrongdoing reported.", src:"https://ohiocapitaljournal.com/2024/10/04/ex-columbus-employee-gets-195k-settlement-after-claim-she-was-required-to-do-ginther-campaign-work/"},
      {title:"July 2024 city ransomware attack", date:"2024", sev:"mid", body:"Personal data of hundreds of thousands of residents was posted to the dark web. The city sued a security researcher who publicized the scope of the breach.", outcome:"Class-action lawsuits were filed against the city; the mayor said most stolen data was unusable.", src:"https://www.cnbc.com/2024/09/15/dark-web-expert-warned-us-hometown-about-big-hack-the-city-is-suing.html"},
      {title:"Redflex bribery probe", date:"2015", sev:"low", body:"A federal probe into red-light camera vendor Redflex surfaced during his first mayoral race; a Redflex executive was convicted of bribery.", outcome:"Ginther was never named in court documents and said he was not a target.", src:"https://www.wosu.org/news/2015-06-22/ginther-im-not-a-target-of-a-redflex-investigation"},
    ],
    career: [
      {year:"2001", event:"Columbus Board of Education", detail:"2001–2007"},
      {year:"2007", event:"Columbus City Council", detail:"Appointed Feb 2007, then elected"},
      {year:"2011", event:"City Council President", detail:"Youngest in city history; 2011–2015"},
      {year:"2016", event:"Mayor of Columbus", detail:"Re-elected 2019 and 2023"},
      {year:"2024", event:"President, U.S. Conference of Mayors", detail:"2024–2025"},
    ],
    money: {
      note: "Columbus city campaign reports are filed with the Franklin County Board of Elections.",
      figures: [],
      filings: [{label:"Franklin County campaign finance", url:"https://vote.franklincountyohio.gov/candidates/campaign-finance"}]
    },
    endorsements: [],
    links: [
      {label:"Ballotpedia", url:"https://ballotpedia.org/Andrew_Ginther"},
      {label:"Ginther vs. Hardin (ABC6, Oct 2026)", url:"https://abc6onyourside.com/news/local/ginther-hardin-spar-over-storm-repairs-as-2027-columbus-mayoral-race-takes-shape"},
      {label:"Franklin County campaign finance", url:"https://vote.franklincountyohio.gov/candidates/campaign-finance"},
    ]
  },

  "shannon hardin": {
    name: "Shannon G. Hardin", initials: "SH", party: "D", partyLabel: "Democrat",
    level: "Local", state: "Ohio", office: "President, Columbus City Council (District 9)",
    since: "Council 2014; President since Jan 2018",
    status: "Not on the 2026 ballot. Announced Aug 20, 2026 that he is running for mayor of Columbus in 2027 against Andrew Ginther (WOSU).",
    born: "1987-04-07", birthplace: "Columbus, Ohio",
    education: "B.A., Morehouse College",
    bio: "Columbus native who worked for Mayor Michael B. Coleman before being appointed to City Council in 2014. Became council president in 2018, the first openly gay person in the role. He helped develop the LinkUS transit plan, whose COTA levy voters approved in November 2024. In 2026 he has publicly challenged Mayor Ginther over storm repairs and city finances.",
    elections: [
      {year:"2023", race:"Columbus City Council, District 9", result:"won", detail:"Unopposed", src:"https://ballotpedia.org/Shannon_Hardin"},
      {year:"2021", race:"Columbus City Council", result:"won", detail:"Re-elected", src:"https://ballotpedia.org/Shannon_Hardin"},
      {year:"2017", race:"Columbus City Council", result:"won", detail:"Re-elected", src:"https://ballotpedia.org/Shannon_Hardin"},
      {year:"2015", race:"Columbus City Council", result:"won", detail:"70% over Republican Ashley Wnek", src:"https://ballotpedia.org/Shannon_Hardin"},
    ],
    record: [
      {name:"Police and fire overtime review", stance:"for", date:"Oct 19, 2026", detail:"Council unanimously passed legislation requiring the city auditor to provide 10 years of police and fire overtime data before 2027 budget decisions; overtime is projected to run at least $23 million over budget this year. Hardin: \"This is just about accountability.\"", src:"https://abc6onyourside.com/on-your-side/columbus-councilmembers-pass-legislation-related-to-police-and-fire-overtime-underbudget-costs-administration-firefighters-officers-mayor-andrew-ginther-council-president-shannon-hardin"},
      {name:"LinkUS transit levy", stance:"for", date:"Nov 2024", detail:"Helped develop the bus-rapid-transit plan; voters approved the COTA levy.", src:"https://ballotpedia.org/Shannon_Hardin"},
      {name:"Barack Center storm repairs", stance:"action", date:"Oct 2026", detail:"Led council approval of $2.5M in emergency repairs and accused the mayor of mismanaging city finances.", src:"https://abc6onyourside.com/news/local/ginther-hardin-spar-over-storm-repairs-as-2027-columbus-mayoral-race-takes-shape"},
    ],
    controversies: [],
    career: [
      {year:"2014", event:"Appointed to Columbus City Council", detail:"Oct 7, 2014"},
      {year:"2015", event:"Elected to Council", detail:"70%"},
      {year:"2018", event:"Council President", detail:"First openly gay council president"},
      {year:"2024", event:"APTA Distinguished Service Award", detail:"For LinkUS transit work"},
    ],
    money: {
      note: "Columbus city campaign reports are filed with the Franklin County Board of Elections.",
      figures: [],
      filings: [{label:"Franklin County campaign finance", url:"https://vote.franklincountyohio.gov/candidates/campaign-finance"}]
    },
    endorsements: [],
    links: [
      {label:"City Council profile", url:"https://www.columbus.gov/Government/City-Council/Councilmembers/President-Shannon-G.-Hardin"},
      {label:"Ballotpedia", url:"https://ballotpedia.org/Shannon_Hardin"},
      {label:"Named council president (WOSU)", url:"https://wosu.org/news/2018-01-03/shannon-hardin-named-columbus-city-council-president"},
      {label:"First openly gay president (WCBE)", url:"https://www.wcbe.org/news/2018-01-03/hardin-becomes-city-councils-first-openly-gay-president"},
    ]
  },

  "kevin boyce": {
    name: "Kevin L. Boyce", initials: "KB", party: "D", partyLabel: "Democrat",
    level: "Local", state: "Ohio", office: "Franklin County Commissioner",
    since: "Jan 3, 2017",
    status: "Not on the 2026 ballot. Re-elected unopposed in 2024.",
    born: "1971-10-05", birthplace: "Columbus, Ohio",
    education: "B.A. Political Science, University of Toledo (1995); M.P.A., Central Michigan University (2004)",
    bio: "Long-time Columbus Democrat who served on City Council, was appointed Ohio Treasurer in 2009 (losing the 2010 election to Josh Mandel), then served in the Ohio House before joining the Franklin County Board of Commissioners in 2017. His treasurer tenure drew scrutiny after his former deputy, Amer Ahmad, was convicted in a bribery scheme.",
    elections: [
      {year:"2024", race:"Franklin County Commissioner", result:"won", detail:"Unopposed", src:"https://ballotpedia.org/Kevin_Boyce"},
      {year:"2020", race:"Franklin County Commissioner", result:"won", detail:"64.8% over Andrew Littler (R)", src:"https://ballotpedia.org/Kevin_Boyce"},
      {year:"2016", race:"Franklin County Commissioner", result:"won", detail:"58.7% over Terry Boyd (R); beat incumbent Paula Brooks in primary", src:"https://www.wosu.org/news/2016-03-16/franklin-county-commission-challenger-pushes-out-incumbent"},
      {year:"2010", race:"Ohio Treasurer", result:"lost", detail:"40.2% to Josh Mandel (R) 54.9%", src:"https://ballotpedia.org/Kevin_Boyce"},
    ],
    record: [],
    controversies: [
      {title:"Former deputy convicted of bribery", date:"2013–2014", sev:"mid", body:"Amer Ahmad, Boyce's deputy treasurer, was indicted on bribery and fraud charges tied to state contracts; Boyce had recommended him for Chicago comptroller while receiving federal subpoenas about him.", outcome:"Ahmad pleaded guilty, fled to Pakistan, was sentenced to 15 years in absentia (Dec 2014) and was extradited in 2015 to serve it. Boyce was not charged.", src:"https://www.justice.gov/usao-sdoh/pr/former-ohio-deputy-treasurer-extradited-pakistan-serve-15-year-sentence-bribery"},
      {title:"KeyBank contract and fundraiser", date:"2009", sev:"low", body:"His treasurer's office awarded KeyBank a check-processing contract about a week before KeyBank lobbyists hosted a $500-a-head fundraiser for him.", outcome:"His office said the contract was competitively bid and unrelated to donations.", src:"https://www.toledoblade.com/State/2009/07/29/KeyBank-wins-state-job-hosts-big-fund-raiser.html"},
    ],
    career: [
      {year:"2000", event:"Columbus City Council", detail:"2000–2009"},
      {year:"2009", event:"Ohio Treasurer (appointed)", detail:"2009–2011"},
      {year:"2012", event:"Ohio House, 25th District", detail:"2012–2016"},
      {year:"2017", event:"Franklin County Commissioner", detail:"Re-elected 2020, 2024"},
    ],
    money: {
      note: "County campaign reports are filed with the Franklin County Board of Elections.",
      figures: [],
      filings: [{label:"Franklin County campaign finance", url:"https://vote.franklincountyohio.gov/candidates/campaign-finance"}]
    },
    endorsements: [],
    links: [
      {label:"County commissioners", url:"https://www.franklincountyohio.gov/County-Government/Meet-Your-Commissioners"},
      {label:"Ballotpedia", url:"https://ballotpedia.org/Kevin_Boyce"},
    ]
  },

  "ohio state board of education": {
    name: "Ohio State Board of Education", initials: "BE", party: "I", partyLabel: "Nonpartisan board",
    level: "State", state: "Ohio", office: "State Board of Education — becoming a 7-member appointed board",
    since: "",
    status: "No board seats on the 2026 ballot. The 2025 state budget (HB 96) eliminates all 11 elected seats as current terms end; HB 455 (effective Oct 9, 2026) sets the appointed board at seven members.",
    born: null, birthplace: "", education: "",
    bio: "Historically a 19-member board — 11 elected by district and 8 appointed by the governor. A 2023 budget law (HB 33) moved most of its powers to the new governor-controlled Department of Education and Workforce. The 2025 budget (HB 96) goes further: it phases out every elected seat and shrinks the board to five gubernatorial appointees (raised to seven by HB 455 in 2026) representing rural, suburban and urban districts, community schools and private schools.",
    elections: [],
    record: [
      {name:"HB 455 — appointed board set at seven", stance:"action", date:"Oct 9, 2026 (effective)", detail:"Raises the appointed board from five to seven members, all named by the governor with Senate consent; seats vacant on Jan 1, 2027 must be filled by that date.", src:"https://codes.ohio.gov/assets/laws/revised-code/authenticated/33/3301/3301.01/10-9-2026/3301.01-10-9-2026.pdf"},
      {name:"HB 33 — powers moved to governor's agency", stance:"action", date:"Jul 2023", detail:"Most board duties transferred to the Department of Education and Workforce.", src:"https://www.news5cleveland.com/news/state/overhaul-of-ohios-k-12-education-system-is-unconstitutional-new-lawsuit-says"},
      {name:"HB 96 — elected seats eliminated", stance:"action", date:"Jul 2025", detail:"Ends all 11 elected seats and cuts appointees from 8 to 5; DeWine did not veto these provisions.", src:"https://www.ohioschoolboards.org/node/727075"},
    ],
    controversies: [
      {title:"Board members sue over 2023 takeover", date:"2023", sev:"mid", body:"Seven elected board members sued the state and Gov. DeWine, arguing the HB 33 overhaul was unconstitutional and was added to the budget in violation of Ohio's single-subject rule.", outcome:"Filed Sept 2023; the changes took effect.", src:"https://www.news5cleveland.com/news/state/overhaul-of-ohios-k-12-education-system-is-unconstitutional-new-lawsuit-says"},
    ],
    career: [
      {year:"2023", event:"HB 33 transfers powers", detail:"Board loses most authority"},
      {year:"2025", event:"HB 96 eliminates elected seats", detail:"Board shrinking to 5 appointees"},
      {year:"2026", event:"HB 455 takes effect", detail:"Appointed board set at 7 members"},
    ],
    money: { note: "", figures: [], filings: [] },
    endorsements: [],
    links: [
      {label:"Board members", url:"https://sboe.ohio.gov/about-us/board-members/02-board-members"},
      {label:"Ballotpedia", url:"https://ballotpedia.org/Ohio_State_Board_of_Education"},
      {label:"Elected seats eliminated (13abc)", url:"https://www.13abc.com/2025/06/26/plan-eliminate-elected-members-state-board-education-heads-ohio-governor/"},
    ]
  },

  "sherrod brown": {
    name: "Sherrod Brown", initials: "SB", party: "D", partyLabel: "Democrat",
    level: "Federal", state: "Ohio", office: "Former U.S. Senator, Ohio (2007–2025)",
    since: "",
    status: "ON THE 2026 BALLOT: Democratic nominee in the U.S. Senate special election vs. Sen. Jon Husted (R), Nov 3, 2026.",
    born: "1952-11-09", birthplace: "Mansfield, Ohio",
    education: "B.A., Yale University (1974); M.A. and M.P.A., Ohio State University",
    bio: "Former Ohio secretary of state, congressman and three-term senator who chaired the Senate Banking Committee from 2021 to 2025. Lost his 2024 re-election bid to Bernie Moreno. Launched the Dignity of Work Institute in 2025 and in August 2025 announced a comeback run for the Senate seat now held by appointed Sen. Jon Husted.",
    elections: [
      {year:"2026", race:"U.S. Senate special — Democratic primary", result:"won", detail:"Won the May 5, 2026 primary; faces Jon Husted Nov 3", src:"https://www.vorys.com/publication-ohio-2026-primary-election-recap"},
      {year:"2024", race:"U.S. Senate", result:"lost", detail:"46.5% to Bernie Moreno's 50.1%", src:"https://www.ohiosos.gov/elections/election-results-and-data/2024-official-election-results/"},
      {year:"2018", race:"U.S. Senate", result:"won", detail:"53.4% over Jim Renacci", src:"https://ballotpedia.org/Sherrod_Brown"},
      {year:"2012", race:"U.S. Senate", result:"won", detail:"50.7% over Josh Mandel", src:"https://ballotpedia.org/Sherrod_Brown"},
      {year:"2006", race:"U.S. Senate", result:"won", detail:"56.2% over incumbent Mike DeWine", src:"https://ballotpedia.org/Sherrod_Brown"},
    ],
    record: [
      {name:"Iraq War authorization (2002)", stance:"against", date:"Oct 2002", detail:"Voted no in the House.", src:"https://clerk.house.gov/evs/2002/roll455.xml"},
      {name:"USA PATRIOT Act (2001)", stance:"against", date:"Oct 2001", detail:"Voted no in the House.", src:"https://clerk.house.gov/evs/2001/roll398.xml"},
      {name:"Inflation Reduction Act (2022)", stance:"for", date:"Aug 2022", detail:"Voted yes.", src:"https://www.senate.gov/legislative/LIS/roll_call_votes/vote1172/vote_117_2_00325.htm"},
    ],
    controversies: [
      {title:"Late property taxes and credits", date:"2023", sev:"low", body:"NBC News reported he paid Cleveland property taxes late seven times and claimed owner-occupancy credits on homes in two counties.", outcome:"He paid the bills, repaid Franklin County and said he would stop claiming the credit.", src:"https://www.nbcnews.com/politics/congress/sen-sherrod-brown-received-extra-property-tax-credit-rcna82048"},
    ],
    career: [
      {year:"1975", event:"Ohio House of Representatives", detail:"1975–1983"},
      {year:"1983", event:"Ohio Secretary of State", detail:"1983–1991"},
      {year:"1993", event:"U.S. House, Ohio's 13th District", detail:"1993–2007"},
      {year:"2007", event:"U.S. Senator", detail:"2007–2025; Banking Chair 2021–2025"},
      {year:"2025", event:"Announces 2026 Senate comeback", detail:"Aug 18, 2025"},
    ],
    money: {
      note: "Senate campaign filings are public at the FEC.",
      figures: [],
      filings: [{label:"FEC candidate search", url:"https://www.fec.gov/data/candidates/?q=Sherrod%20Brown"}]
    },
    endorsements: [],
    links: [
      {label:"Ballotpedia", url:"https://ballotpedia.org/Sherrod_Brown"},
      {label:"Comeback launch (Politico)", url:"https://www.politico.com/news/2025/08/18/sherrod-brown-ohio-senate-campaign-launch-2026-00513314"},
      {label:"FEC filings", url:"https://www.fec.gov/data/candidates/?q=Sherrod%20Brown"},
    ]
  },

  "bernie moreno": {
    name: "Bernie Moreno", initials: "BM", party: "R", partyLabel: "Republican",
    level: "Federal", state: "Ohio", office: "U.S. Senator, Ohio (senior senator)",
    since: "Jan 3, 2025",
    status: "Not on the 2026 ballot. Term ends January 2031.",
    born: "1967-02-14", birthplace: "Bogotá, Colombia",
    education: "B.B.A., University of Michigan",
    bio: "Colombian-born car dealer who built a chain of Ohio dealerships before entering politics. Backed by Donald Trump, he won the 2024 GOP primary and unseated Sherrod Brown, helped by more than $40 million in crypto-industry spending. He serves on the Banking, Budget, Commerce and Homeland Security committees.",
    elections: [
      {year:"2024", race:"U.S. Senate", result:"won", detail:"50.1% to Sherrod Brown's 46.5%", src:"https://www.ohiosos.gov/elections/election-results-and-data/2024-official-election-results/"},
      {year:"2024", race:"U.S. Senate — GOP primary", result:"won", detail:"50.5% over Matt Dolan (32.9%) and Frank LaRose (16.7%)", src:"https://ballotpedia.org/Bernie_Moreno"},
    ],
    record: [
      {name:"RECLAIM Act (data-center incentives)", stance:"for", date:"Oct 15, 2026", detail:"Introduced a bill placing a 100% federal excise tax on state or local grants and tax breaks that large tech companies use for data centers, and barring federal subsidies for them: \"Taxpayers will not subsidize data centers, period.\"", src:"https://www.moreno.senate.gov/newsroom/press-releases/new-moreno-bill-targets-incentives-for-data-centers-with-one-hundred-percent-federal-tax/"},
      {name:"Exclusive Citizenship Act (S.3283)", stance:"for", date:"Dec 2025", detail:"Introduced a bill requiring dual citizens to renounce their other citizenship.", src:"https://www.congress.gov/bill/119th-congress/senate-bill/3283"},
      {name:"Chillicothe paper mill closure delay", stance:"action", date:"Apr 2025", detail:"Negotiated a one-year pause in the mill's closure with H.I.G. Capital.", src:"https://abc6onyourside.com/news/local/chillicothe-paper-mill-closure-paused-senator-bernie-moreno-intervention-pixelle-specialty-solutions-ohio-hig-capital"},
    ],
    controversies: [
      {title:"Dealership wage-theft and discrimination suits", date:"2023–2024", sev:"mid", body:"His dealerships settled more than a dozen wage-theft suits; a judge rebuked him for shredding documents potentially related to one case.", outcome:"Settled, including over $400,000 to two former employees.", src:"https://www.businessinsider.com/bernie-moreno-ohio-shredded-documents-employee-massachusetts-lawsuit-2024-1"},
      {title:"Adult-website account", date:"2024", sev:"low", body:"AP reported a 2008 adult-website profile created with his email address.", outcome:"His lawyer said a former intern created it as a prank; no further findings.", src:"https://apnews.com/article/ohio-senate-election-2024-bernie-moreno-09e34f6331708c192c89d7c1727c2458"},
      {title:"MBA claim in bio", date:"2024", sev:"low", body:"A Cleveland Foundation bio and an application said he held an MBA; he does not.", outcome:"Campaign blamed a staff mistake.", src:"https://ohiocapitaljournal.com/2024/09/11/ohio-us-senate-candidate-bernie-moreno-doesnt-hold-an-mba-but-bio-and-application-claimed-he-does/"},
      {title:"AI-generated images in Colombia memo", date:"2025", sev:"low", body:"Gave President Trump a memo urging sanctions on Colombian President Gustavo Petro that included AI-generated images of Petro and Nicolás Maduro in prison uniforms.", outcome:"No formal action.", src:"https://www.nbcnews.com/politics/donald-trump/trump-colombia-bernie-moreno-fake-image-petro-rcna243142"},
    ],
    career: [
      {year:"2005", event:"Buys first Ohio dealership", detail:"North Olmsted Mercedes-Benz"},
      {year:"2019", event:"Sells 7 franchises for blockchain venture", detail:"Ownum"},
      {year:"2021", event:"First Senate bid", detail:"Dropped out Feb 2022"},
      {year:"2025", event:"U.S. Senator", detail:"Senior senator after JD Vance became VP"},
    ],
    money: {
      note: "Senate campaign filings are public at the FEC.",
      figures: [{label:"Crypto-industry spending backing his 2024 race", value:"$40M+", src:"https://www.wired.com/story/sec-is-giving-up-biggest-crypto-lawsuits/"}],
      filings: [{label:"FEC candidate search", url:"https://www.fec.gov/data/candidates/?q=Bernie%20Moreno"}]
    },
    endorsements: [{name:"Donald Trump", detail:"Endorsed Dec 2023 ahead of the GOP primary", src:"https://www.13abc.com/2023/12/20/cleveland-businessman-bernie-moreno-lands-trump-endorsement-ohios-us-senate-gop-primary"}],
    links: [
      {label:"Senate office", url:"https://www.moreno.senate.gov"},
      {label:"Ballotpedia", url:"https://ballotpedia.org/Bernie_Moreno"},
      {label:"FEC filings", url:"https://www.fec.gov/data/candidates/?q=Bernie%20Moreno"},
    ]
  },

  "dave yost": {
    name: "Dave Yost", initials: "DY", party: "R", partyLabel: "Republican",
    level: "State", state: "Ohio", office: "Former Ohio Attorney General (2019–2026)",
    since: "Resigned Jun 7, 2026",
    status: "Not on the 2026 ballot. Dropped his governor bid in May 2025; resigned as AG in June 2026 to join Alliance Defending Freedom. Andy Wilson is interim AG.",
    born: "1956-12-22", birthplace: "",
    education: "B.A. Journalism, Ohio State University; J.D., Capital University Law School",
    bio: "Former Columbus Citizen-Journal reporter who became Delaware County auditor and prosecutor, two-term state auditor and Ohio's 51st attorney general. As AG he sued to stop HB 6 nuclear-bailout fees, sued Norfolk Southern over East Palestine, and brought state charges in the HB 6 bribery case. He ran for governor in 2025 but withdrew after the state GOP endorsed Vivek Ramaswamy, then resigned in June 2026.",
    elections: [
      {year:"2022", race:"Attorney General", result:"won", detail:"60.1% over Jeffrey Crossman", src:"https://www.ohiosos.gov/elections/election-results-and-data/2022-official-election-results/"},
      {year:"2018", race:"Attorney General", result:"won", detail:"52.2% over Steve Dettelbach", src:"https://www.ohiosos.gov/elections/election-results-and-data/2018-official-elections-results/"},
      {year:"2014", race:"Auditor of State", result:"won", detail:"57.0% over John Patrick Carney", src:"https://ballotpedia.org/Dave_Yost"},
      {year:"2010", race:"Auditor of State", result:"won", detail:"50.2% over David Pepper", src:"https://ballotpedia.org/Dave_Yost"},
    ],
    record: [
      {name:"Lawsuit to block HB 6 bailout fees", stance:"action", date:"Sep 2020", detail:"Sued to stop the nuclear-bailout charges on customer bills.", src:"https://www.ohioattorneygeneral.gov/Media/News-Releases/September-2021/AG-Yost-Has-Spent-Past-Year-Eradicating-Corrupt-HB"},
      {name:"Norfolk Southern lawsuit", stance:"action", date:"2023", detail:"Filed a 58-count civil suit over the East Palestine derailment.", src:"https://ohiocapitaljournal.com/briefs/ohio-attorney-general-yost-sues-norfolk-southern-over-east-palestine-train-derailment/"},
      {name:"Six-week abortion ban", stance:"for", date:"Jun 2022", detail:"Moved to lift the injunction on the ban after Dobbs.", src:"https://www.news5cleveland.com/news/politics/ohio-politics/ohio-ag-files-motion-to-dissolve-injunction-on-six-week-abortion-ban-bill"},
      {name:"Nitrogen-gas executions", stance:"for", date:"2024", detail:"Backed adding nitrogen gas as an execution method.", src:"https://www.clickondetroit.com/news/national/2024/01/30/ohio-could-begin-nitrogen-gas-executions-under-bill-backed-by-states-republican-attorney-general/"},
    ],
    controversies: [
      {title:"Questioned 10-year-old rape victim report", date:"Jul 2022", sev:"low", body:"Said it was \"more likely that this is a fabrication\" that a 10-year-old Ohio rape victim traveled to Indiana for an abortion.", outcome:"The report was confirmed and a suspect arrested the next day; he rejected calls to resign.", src:"https://web.archive.org/web/20220713224420/https://www.washingtonpost.com/politics/2022/07/13/abortion-girl-rape-victim-arrest-ohio/"},
      {title:"HB 6 trial texts", date:"2023", sev:"low", body:"Texts in the HB 6 corruption trial showed a lobbyist saying Yost privately viewed the bailout as a bad bill but didn't oppose it publicly because of FirstEnergy support.", outcome:"No allegation of wrongdoing. He later gave a $10,000 contribution traced to FirstEnergy-linked money to charity, and in 2024 declined to explain his role, citing pending cases.", src:"https://ohiocapitaljournal.com/2023/02/03/corruption-trial-texts-oh-ag-yost-didnt-speak-out-against-bailout-because-of-utility-support/"},
    ],
    career: [
      {year:"1999", event:"Delaware County Auditor", detail:"Appointed"},
      {year:"2003", event:"Delaware County Prosecutor", detail:""},
      {year:"2011", event:"Ohio Auditor of State", detail:"2011–2019"},
      {year:"2019", event:"Ohio Attorney General", detail:"2019–2026"},
      {year:"2025", event:"Runs for governor, then withdraws", detail:"Jan–May 2025"},
      {year:"2026", event:"Resigns as AG", detail:"Effective Jun 7, 2026"},
    ],
    money: {
      note: "State campaign finance reports are searchable at the Ohio Secretary of State.",
      figures: [],
      filings: [{label:"Ohio SOS campaign finance search", url:"https://www.ohiosos.gov/campaign-finance/search/"}]
    },
    endorsements: [],
    links: [
      {label:"Ballotpedia", url:"https://ballotpedia.org/Dave_Yost"},
      {label:"Drops governor bid (WOUB)", url:"https://woub.org/2025/05/16/dave-yost-suspends-run-republican-nomination-ohio-governor/"},
      {label:"Resignation (WHIZ)", url:"https://www.whiznews.com/gov-mike-dewine-accepts-resignation-from-attorney-general-dave-yost/"},
    ]
  },

  "sharon kennedy": {
    name: "Sharon L. Kennedy", initials: "SK", party: "R", partyLabel: "Republican",
    level: "State", cat: "judicial", state: "Ohio", office: "Chief Justice, Supreme Court of Ohio",
    since: "Jan 1, 2023",
    status: "Not on the 2026 ballot. Chief justice term runs through 2028.",
    born: "1962-03-15", birthplace: "Hamilton County, Ohio",
    education: "B.A., University of Cincinnati School of Social Work (1984); J.D., University of Cincinnati College of Law (1991)",
    bio: "Former Hamilton, Ohio police officer who became a Butler County domestic-relations judge, then joined the Ohio Supreme Court in 2012. Elected chief justice in 2022 over Democrat Jennifer Brunner, she leads a 6–1 Republican court. A Federalist Society member since 2012.",
    elections: [
      {year:"2022", race:"Chief Justice", result:"won", detail:"56.1% over Jennifer Brunner (43.9%)", src:"https://www.wvxu.org/2022-11-08/sharon-kennedy-wins-race-for-ohio-supreme-court-chief-justice-gop-justices-win-re-election-bids"},
      {year:"2012", race:"Ohio Supreme Court", result:"won", detail:"57.0% over incumbent Democrat Yvette McGee Brown", src:"https://ballotpedia.org/Sharon_Kennedy"},
    ],
    record: [
      {name:"State v. Dowell", stance:"ruling", date:"Oct 21, 2026", detail:"Wrote the 6–1 majority holding that a person who resists an emergency mental-health commitment can be charged with obstructing official business even without proof of an illegal act; Justice Brunner dissented.", src:"https://www.courtnewsohio.gov/cases/2026/SCO/1021/251103_251210.asp"},
    ],
    controversies: [
      {title:"Redistricting remarks to GOP group", date:"Mar 2022", sev:"low", body:"While redistricting cases were pending, told a Republican audience that redistricting was \"the fight of our life\" and criticized parties to the cases, prompting ethics questions.", outcome:"No disciplinary action reported.", src:"https://spectrumnews1.com/oh/columbus/news/2022/03/15/legal-analyst-discusses-ohio-justice-kennedy-s-redistricting-comments"},
    ],
    career: [
      {year:"1985", event:"Police officer, Hamilton, Ohio", detail:"1985–1989"},
      {year:"1999", event:"Butler County Common Pleas Judge", detail:"Domestic Relations, 1999–2012"},
      {year:"2012", event:"Ohio Supreme Court Justice", detail:"2012–2022"},
      {year:"2023", event:"Chief Justice", detail:"Elected 2022"},
    ],
    money: {
      note: "Judicial campaign reports are searchable at the Ohio Secretary of State.",
      figures: [],
      filings: [{label:"Ohio SOS campaign finance search", url:"https://www.ohiosos.gov/campaign-finance/search/"}]
    },
    endorsements: [],
    links: [
      {label:"Ballotpedia", url:"https://ballotpedia.org/Sharon_Kennedy"},
      {label:"Supreme Court of Ohio", url:"https://www.supremecourt.ohio.gov"},
    ]
  },

  "jennifer brunner": {
    name: "Jennifer Brunner", initials: "JB", party: "D", partyLabel: "Democrat",
    level: "State", cat: "judicial", state: "Ohio", office: "Justice, Supreme Court of Ohio",
    since: "Jan 2, 2021",
    status: "ON THE 2026 BALLOT: Brunner (D) vs. Colleen O'Donnell (R), Nov 3, 2026. She is the only Democrat on the court and the only statewide-elected Democrat in Ohio.",
    born: "1957-02-05", birthplace: "Springfield, Ohio",
    education: "B.A., Miami University (1978); J.D., Capital University Law School (1982)",
    bio: "Election lawyer who served as Ohio Secretary of State from 2007 to 2011, then as a Tenth District appeals judge before winning a Supreme Court seat in 2020. Lost the 2022 chief justice race to Sharon Kennedy. She sued to remove party labels from Ohio Supreme Court ballots, arguing they conflict with judicial ethics rules; a federal judge ruled against her in October 2026.",
    elections: [
      {year:"2026", race:"Ohio Supreme Court", result:"pending", detail:"Faces Republican Colleen O'Donnell, who won a four-way GOP primary with 32%", src:"https://www.vorys.com/publication-ohio-2026-primary-election-recap"},
      {year:"2022", race:"Chief Justice", result:"lost", detail:"43.9% to Sharon Kennedy's 56.1%", src:"https://www.wvxu.org/2022-11-08/sharon-kennedy-wins-race-for-ohio-supreme-court-chief-justice-gop-justices-win-re-election-bids"},
      {year:"2020", race:"Ohio Supreme Court", result:"won", detail:"55.3% over incumbent Judith French", src:"https://ballotpedia.org/Jennifer_Brunner"},
      {year:"2010", race:"U.S. Senate — Democratic primary", result:"lost", detail:"45% to Lee Fisher's 55%", src:"https://ballotpedia.org/Jennifer_Brunner"},
      {year:"2006", race:"Ohio Secretary of State", result:"won", detail:"55.0% over Greg Hartmann", src:"https://ballotpedia.org/Jennifer_Brunner"},
    ],
    record: [
      {name:"Lawsuit against judicial party labels", stance:"action", date:"Nov 2023 – Oct 2026", detail:"Sued to remove party labels from Supreme Court and appeals court ballots under the 2021 law. On Oct 14, 2026, U.S. District Judge Benita Pearson ruled for the state, finding Brunner had not shown the law violates the First or Fifth Amendments or equal protection.", src:"https://www.wfmj.com/news/local-news/judge-rejects-bid-to-take-political-party-tags-off-ohio-judicial-ballots/article_b47f437f-17ce-4fb4-b948-6169eb5ed743.html"},
      {name:"State v. Dowell (dissent)", stance:"ruling", date:"Oct 21, 2026", detail:"Lone dissent from the 6–1 ruling that resisting an emergency mental-health commitment can be charged as obstructing official business.", src:"https://www.courtnewsohio.gov/cases/2026/SCO/1021/251103_251210.asp"},
    ],
    controversies: [
      {title:"2008 election rulings as Secretary of State", date:"2008", sev:"low", body:"Republicans challenged her handling of voter-registration mismatches and absentee ballots.", outcome:"The U.S. Supreme Court sided with her on registration mismatches; courts upheld her absentee-ballot order.", src:"https://ballotpedia.org/Jennifer_Brunner"},
    ],
    career: [
      {year:"2000", event:"Franklin County Common Pleas Judge", detail:"2000–2005"},
      {year:"2007", event:"Ohio Secretary of State", detail:"2007–2011"},
      {year:"2015", event:"Tenth District Court of Appeals", detail:"2015–2020"},
      {year:"2021", event:"Ohio Supreme Court Justice", detail:"Elected 2020"},
    ],
    money: {
      note: "Judicial campaign reports are searchable at the Ohio Secretary of State.",
      figures: [],
      filings: [{label:"Ohio SOS campaign finance search", url:"https://www.ohiosos.gov/campaign-finance/search/"}]
    },
    endorsements: [],
    links: [
      {label:"Ballotpedia", url:"https://ballotpedia.org/Jennifer_Brunner"},
      {label:"Party-label lawsuit (WOSU)", url:"https://www.wosu.org/politics-government/2023-11-08/ohio-supreme-court-justice-sues-to-remove-partisan-labels-from-judicial-races"},
      {label:"2026 primary recap (Vorys)", url:"https://www.vorys.com/publication-ohio-2026-primary-election-recap"},
    ]
  },

  "pat fischer": {
    name: "Pat Fischer", initials: "PF", party: "R", partyLabel: "Republican",
    level: "State", cat: "judicial", state: "Ohio", office: "Justice, Supreme Court of Ohio",
    since: "Jan 1, 2017",
    status: "Not on the 2026 ballot. Dropped his bid to challenge Brunner in August 2025 after the GOP screening panel passed him over. Current term runs through 2028.",
    born: "1957-12-30", birthplace: "Covington, Kentucky",
    education: "Harvard University (undergraduate and law degrees)",
    bio: "Cincinnati lawyer and former president of both the Cincinnati and Ohio State bar associations who served on the First District Court of Appeals before joining the Supreme Court in 2017. He launched a 2026 bid for Jennifer Brunner's seat in May 2025, then withdrew in August 2025 when a state GOP panel recommended a different candidate.",
    elections: [
      {year:"2022", race:"Ohio Supreme Court", result:"won", detail:"56.9% over Democrat Terri Jamison", src:"https://ballotpedia.org/Pat_Fischer"},
      {year:"2016", race:"Ohio Supreme Court", result:"won", detail:"50.3% over Democrat John P. O'Donnell", src:"https://ballotpedia.org/Pat_Fischer"},
    ],
    record: [
      {name:"Upheld Ohio's death penalty law", stance:"ruling", date:"Apr 2018", detail:"Joined the majority rejecting a challenge to Ohio's capital sentencing law.", src:"https://www.wcpo.com/news/state/state-ohio/ohio-supreme-court-rejects-challenge-to-states-death-penalty-law"},
    ],
    controversies: [
      {title:"Bid to unseat a colleague", date:"2025", sev:"low", body:"Announced a run against fellow Justice Jennifer Brunner rather than for his own seat, an unusual move criticized as partisan.", outcome:"Withdrew in August 2025 after the GOP screening panel recommended Ron Lewis.", src:"https://signalakron.org/fischer-drops-out-of-2026-ohio-supreme-court-election/"},
    ],
    career: [
      {year:"2006", event:"President, Cincinnati Bar Association", detail:"2006–2007"},
      {year:"2010", event:"First District Court of Appeals", detail:"2010–2016"},
      {year:"2012", event:"President, Ohio State Bar Association", detail:"2012–2013"},
      {year:"2017", event:"Ohio Supreme Court Justice", detail:"Re-elected 2022"},
      {year:"2025", event:"Launches, then drops, 2026 bid vs. Brunner", detail:"May–Aug 2025"},
    ],
    money: {
      note: "Judicial campaign reports are searchable at the Ohio Secretary of State.",
      figures: [],
      filings: [{label:"Ohio SOS campaign finance search", url:"https://www.ohiosos.gov/campaign-finance/search/"}]
    },
    endorsements: [],
    links: [
      {label:"Supreme Court bio", url:"https://www.supremecourt.ohio.gov/courts/judicial-system/supreme-court-of-ohio/justices-overview/patrick-fischer/"},
      {label:"Ballotpedia", url:"https://ballotpedia.org/Pat_Fischer"},
      {label:"Drops out (Signal Akron)", url:"https://signalakron.org/fischer-drops-out-of-2026-ohio-supreme-court-election/"},
    ]
  },

  "keith faber": {
    name: "Keith Faber", initials: "KF", party: "R", partyLabel: "Republican",
    level: "State", state: "Ohio", office: "Ohio Auditor of State",
    since: "Jan 2019",
    status: "ON THE 2026 BALLOT: Republican nominee for Attorney General vs. John Kulewicz (D), Nov 3, 2026. Term-limited as Auditor.",
    born: "1966-01-19", birthplace: "Troy, Missouri",
    education: "B.A., Oakland University; J.D., Ohio State University",
    bio: "Celina attorney who served in the Ohio House and Senate, including four years as Senate President (2013–2016), before winning election as state auditor in 2018. Term-limited as auditor, he won the 2026 Republican nomination for attorney general. In June 2026 he publicly opposed Gov. DeWine's call to abolish the death penalty.",
    elections: [
      {year:"2026", race:"Attorney General — GOP primary", result:"won", detail:"Faces Democrat John Kulewicz Nov 3", src:"https://www.vorys.com/publication-ohio-2026-primary-election-recap"},
      {year:"2022", race:"Auditor of State", result:"won", detail:"58.8% over Tyler Sappington", src:"https://www.ohiosos.gov/elections/election-results-and-data/2022-official-election-results/"},
      {year:"2018", race:"Auditor of State", result:"won", detail:"49.7% over Zack Space (46.3%)", src:"https://www.ohiosos.gov/elections/election-results-and-data/2018-official-elections-results/"},
    ],
    record: [
      {name:"Attorney general debate positions", stance:"action", date:"Oct 19, 2026", detail:"At the Youngstown State debate: \"I support capital punishment,\" saying it must be carried out fairly and transparently while it is law; said the FirstEnergy prosecution will go forward at the January retrial.", src:"https://www.tribtoday.com/news/local-news/2026/10/attorney-general-candidates-debate-on-ysu-campus/"},
      {name:"Flock camera safeguards", stance:"action", date:"Oct 2026", detail:"Proposes treating Flock license-plate camera databases like other police databases, with defined penalties for misuse, and requiring a warrant to use them to track a suspect.", src:"https://www.daytondailynews.com/local/election-2026-ohio-auditor-columbus-area-councilman-vie-to-become-state-attorney-general/article_49d4f813-92ca-5e79-a224-9aef91b5d95d.html"},
      {name:"Ohio Medicaid performance audit", stance:"action", date:"Oct 15, 2026", detail:"His office's audit of the Department of Medicaid's Next Generation initiative found no current strategic or operational plans and more than $145 million in unplanned expenses in a sample of contracts.", src:"https://highlandcountypress.com/news/audit-nonexistent-strategic-planning-culture-compliance-hampering-improvements-ohio-department"},
      {name:"Opposes abolishing the death penalty", stance:"against", date:"Jun 2026", detail:"Rejected Gov. DeWine's call to end capital punishment.", src:"https://www.dailysignal.com/2026/06/19/dewines-stance-death-penalty/"},
    ],
    controversies: [
      {title:"Tax-delinquency penalties", date:"2018", sev:"low", body:"An AP investigation found Faber and his businesses incurred property-tax delinquency penalties from 2008 to 2015 — after his campaign attacked his opponent over late taxes.", outcome:"His bookkeeper took responsibility; he won the race.", src:"https://www.wcpo.com/news/government/elections-local/tax-penalty-questions-swirl-in-race-for-ohio-auditor"},
    ],
    career: [
      {year:"2001", event:"Ohio House, 84th District", detail:"2001–2007"},
      {year:"2007", event:"Ohio Senate, 12th District", detail:"2007–2016"},
      {year:"2013", event:"Ohio Senate President", detail:"2013–2016"},
      {year:"2017", event:"Returns to Ohio House", detail:"2017–2018"},
      {year:"2019", event:"Ohio Auditor of State", detail:"Re-elected 2022"},
    ],
    money: {
      note: "State campaign finance reports are searchable at the Ohio Secretary of State.",
      figures: [],
      filings: [{label:"Ohio SOS campaign finance search", url:"https://www.ohiosos.gov/campaign-finance/search/"}]
    },
    endorsements: [],
    links: [
      {label:"Auditor's office", url:"https://ohioauditor.gov"},
      {label:"Ballotpedia", url:"https://ballotpedia.org/Keith_Faber"},
      {label:"AG run announced (Dispatch)", url:"https://www.dispatch.com/story/news/politics/state/2025/01/27/republican-keith-faber-ohio-attorney-general/77969170007/"},
    ]
  },

  "robert sprague": {
    name: "Robert Sprague", initials: "RS", party: "R", partyLabel: "Republican",
    level: "State", state: "Ohio", office: "Ohio Treasurer of State",
    since: "Jan 2019",
    status: "ON THE 2026 BALLOT: Republican nominee for Secretary of State vs. Allison Russo (D), Nov 3, 2026. Term-limited as Treasurer.",
    born: "1973-04-18", birthplace: "Findlay, Ohio",
    education: "B.S. Mechanical Engineering, Duke University; MBA, UNC Chapel Hill",
    bio: "Former Findlay city treasurer and auditor who served in the Ohio House from 2011 to 2018 before being elected state treasurer. Launched OhioCrypto.com, letting businesses pay some taxes in cryptocurrency (suspended after a 2019 AG opinion), and has opposed ESG investing. Briefly ran for governor in 2025 before switching to the Secretary of State race and endorsing Vivek Ramaswamy.",
    elections: [
      {year:"2026", race:"Secretary of State — GOP primary", result:"won", detail:"Defeated Marcell Strbich; faces Democrat Allison Russo Nov 3", src:"https://www.vorys.com/publication-ohio-2026-primary-election-recap"},
      {year:"2022", race:"Treasurer of State", result:"won", detail:"58.6% over Scott Schertzer", src:"https://ballotpedia.org/Robert_Sprague"},
      {year:"2018", race:"Treasurer of State", result:"won", detail:"53.3% over Rob Richardson", src:"https://ballotpedia.org/Robert_Sprague"},
    ],
    record: [
      {name:"Secretary of State platform", stance:"action", date:"Oct 20, 2026", detail:"Proposes photo ID for mail ballots, citizenship checks at registration, ending drop boxes and a new office division to help voters get ID; supports State Issue 3 (voter photo ID amendment).", src:"https://signalohio.org/ohio-secretary-of-state-candidate-robert-sprague-wants-upfront-citizenship-checks-when-registering-november-election-2026/"},
      {name:"Comments on SB 5 and the 2020 election", stance:"action", date:"Oct 20, 2026", detail:"Called his 2011 vote for Senate Bill 5, the collective-bargaining law voters repealed, \"a mistake.\" Asked whether Joe Biden won in 2020, he first said \"I don't know what happened,\" then: \"Yes. I guess Joe Biden rightfully won.\"", src:"https://signalohio.org/ohio-secretary-of-state-candidate-robert-sprague-wants-upfront-citizenship-checks-when-registering-november-election-2026/"},
      {name:"OhioCrypto.com", stance:"action", date:"2018", detail:"Let businesses pay certain state taxes in cryptocurrency; suspended after a 2019 AG opinion said it needed Board of Deposit approval.", src:"https://ballotpedia.org/Robert_Sprague"},
      {name:"Anti-ESG letters to asset managers", stance:"action", date:"2023", detail:"Joined 21 state financial officers questioning asset managers' ESG practices.", src:"https://ballotpedia.org/States_send_letters_and_questionnaires_inquiring_about_ESG_at_firms_%282023%29"},
    ],
    controversies: [
      {title:"Double-taxation lawsuit", date:"2021–2022", sev:"low", body:"Community Legal Aid sued Sprague and the tax commissioner over withheld municipal income taxes.", outcome:"Dismissed by the Ohio Supreme Court in 2022.", src:"https://www.cleveland.com/news/2022/10/ohio-supreme-court-dismisses-lawsuit-claiming-the-state-illegally-double-taxes-some-residents.html"},
    ],
    career: [
      {year:"2011", event:"Ohio House, 83rd District", detail:"2011–2018"},
      {year:"2019", event:"Ohio Treasurer of State", detail:"Re-elected 2022"},
      {year:"2025", event:"Switches from governor to SOS race", detail:"Feb 5, 2025"},
    ],
    money: {
      note: "State campaign finance reports are searchable at the Ohio Secretary of State.",
      figures: [],
      filings: [{label:"Ohio SOS campaign finance search", url:"https://www.ohiosos.gov/campaign-finance/search/"}]
    },
    endorsements: [],
    links: [
      {label:"Treasurer's office", url:"https://www.tos.ohio.gov"},
      {label:"Ballotpedia", url:"https://ballotpedia.org/Robert_Sprague"},
      {label:"Enters SOS race (Ohio Capital Journal)", url:"https://ohiocapitaljournal.com/briefs/ohio-republican-treasurer-robert-sprague-enters-2026-gop-primary-for-secretary-of-state/"},
    ]
  },

  "frank larose": {
    name: "Frank LaRose", initials: "FL", party: "R", partyLabel: "Republican",
    level: "State", state: "Ohio", office: "Ohio Secretary of State",
    since: "Jan 2019",
    status: "ON THE 2026 BALLOT: Republican nominee for Auditor of State vs. Annette Blackwell (D), Nov 3, 2026. Term-limited as Secretary of State.",
    born: "1979-04-18", birthplace: "Akron, Ohio",
    education: "B.S., Ohio State University",
    bio: "Army Special Forces (Green Beret) veteran with a Bronze Star from Iraq, who served in the Ohio Senate from 2011 to 2018 before becoming Ohio's chief elections officer. He championed the failed August 2023 Issue 1 to raise the threshold for constitutional amendments, finished third in the 2024 GOP Senate primary, and in 2025 referred more than 1,000 alleged voter-fraud cases to the Justice Department.",
    elections: [
      {year:"2026", race:"Auditor of State — GOP primary", result:"won", detail:"Faces Democrat Annette Blackwell Nov 3", src:"https://www.vorys.com/publication-ohio-2026-primary-election-recap"},
      {year:"2024", race:"U.S. Senate — GOP primary", result:"lost", detail:"Third with 16.7%, behind Bernie Moreno and Matt Dolan", src:"https://ballotpedia.org/Frank_LaRose"},
      {year:"2022", race:"Secretary of State", result:"won", detail:"59.3% over Chelsea Clark", src:"https://www.ohiosos.gov/elections/election-results-and-data/2022-official-election-results/"},
      {year:"2018", race:"Secretary of State", result:"won", detail:"About 51% over Kathleen Clyde", src:"https://www.ohiosos.gov/elections/election-results-and-data/2018-official-elections-results/"},
    ],
    record: [
      {name:"Response to threat mailed to his office", stance:"action", date:"Oct 14, 2026", detail:"Postal inspectors intercepted a mailing with a white powdery substance addressed to his office; the FBI is handling it. He told county boards to stay alert and said, \"Voters can have absolute confidence that the election process remains safe and secure.\"", src:"https://www.ohiosos.gov/office/media-center/categories/press-releases/2026-10-14a"},
      {name:"August 2023 Issue 1 (60% threshold)", stance:"for", date:"Aug 2023", detail:"Campaigned for raising the vote needed to amend the constitution to 60%; voters rejected it in the August 2023 special election.", src:"https://news.ballotpedia.org/2023/08/09/ohio-voters-defeat-issue-1-in-special-election/"},
      {name:"Voter-fraud referrals to DOJ", stance:"action", date:"Nov 2025", detail:"Sent more than 1,000 alleged cases to the Trump Justice Department; many involved registration mismatches or clerical errors. Ohio's crime-statistics dashboard (Oct 2026) shows no more than 16 felony convictions (nine for illegal voting, seven for illegal registration) from the 1,200+ cases he has referred since 2019, out of more than 35 million ballots cast; the attorney general's office says the data may be incomplete (Ohio Capital Journal, Oct 26, 2026).", src:"https://ohiocapitaljournal.com/2025/11/06/ohio-secretary-of-state-sends-voter-fraud-allegations-to-trump-justice-department/"},
      {name:"Proof-of-citizenship to register", stance:"for", date:"Nov 2025", detail:"Endorsed a bill requiring documentary proof of citizenship.", src:"https://ohiocapitaljournal.com/2025/11/05/ohio-secretary-of-state-endorses-proof-of-citizenship-elections-bill-warns-rollout-will-take-time/"},
    ],
    controversies: [
      {title:"2019 voter purge list errors", date:"2019", sev:"mid", body:"About 40,000 of roughly 235,000 registrations slated for removal were found to be in error after outside groups reviewed the list.", outcome:"Those voters were kept on the rolls.", src:"https://www.nytimes.com/2019/10/14/us/politics/ohio-voter-purge.html"},
      {title:"Issue 1 ballot language (2024)", date:"2024", sev:"mid", body:"As Ballot Board chair, LaRose oversaw summary language for the 2024 redistricting amendment that backers called misleading, and they sued.", outcome:"The Ohio Supreme Court ordered minor changes but let most of the wording stand; the amendment failed in November 2024.", src:"https://www.wvxu.org/2024-09-16/ohio-supreme-court-lets-stand-most-of-ballot-board-language-on-issue-1-in-lawsuit-over-wording"},
    ],
    career: [
      {year:"1998", event:"U.S. Army; later Green Beret", detail:"Bronze Star, Iraq"},
      {year:"2011", event:"Ohio Senate, 27th District", detail:"2011–2018"},
      {year:"2019", event:"Ohio Secretary of State", detail:"Re-elected 2022"},
      {year:"2024", event:"U.S. Senate primary", detail:"Third place"},
      {year:"2025", event:"Announces run for Auditor", detail:"Feb 6, 2025"},
    ],
    money: {
      note: "State campaign finance reports are searchable at the Ohio Secretary of State.",
      figures: [],
      filings: [{label:"Ohio SOS campaign finance search", url:"https://www.ohiosos.gov/campaign-finance/search/"}]
    },
    endorsements: [],
    links: [
      {label:"Secretary of State", url:"https://www.ohiosos.gov"},
      {label:"Ballotpedia", url:"https://ballotpedia.org/Frank_LaRose"},
      {label:"Auditor run (News 5)", url:"https://news5cleveland.com/news/state/ohio-elections-chief-frank-larose-will-run-for-state-auditor-in-2026"},
    ]
  },
};
