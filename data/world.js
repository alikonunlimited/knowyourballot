/* ============================================================
   World events + Civil rights records (fact-checked Oct 2026).
   type: support | oppose | action | criticized | legal
   Only documented, sourced statements and actions are listed.
   ============================================================ */

const WORLD = {
  "jon husted": [
    {topic:"Iran war", type:"support", date:"Mar 2026", detail:"Said Iran \"chose to export death, terrorism, extremism, and instability\" and the president \"took action to address the threat\"; voted against war powers limits.", src:"https://ohiocapitaljournal.com/2026/03/05/on-war-with-iran-no-ohio-u-s-senate-candidate-gives-his-unqualified-support/"},
  ],
  "donald trump": [
    {topic:"Iran war", type:"action", date:"Feb 28, 2026", detail:"Launched joint U.S.–Israeli strikes on Iran without congressional authorization. The White House says hostilities ended with an April 7 ceasefire; in June the Senate passed a war powers resolution 50–48 in a rebuke.", src:"https://www.goodmorningamerica.com/news/story/senate-house-pass-war-powers-resolution-1st-time-134145998"},
    {topic:"Venezuela", type:"action", date:"Jan 3, 2026", detail:"Ordered the military operation that captured President Nicolás Maduro and said the U.S. would run Venezuela.", src:"https://www.npr.org/2026/01/03/nx-s1-5665729/u-s-will-run-venezuela-after-military-seized-maduro-president-trump-says"},
    {topic:"Israel–Gaza", type:"action", date:"Oct 2025", detail:"Backed the U.S.-proposed ceasefire deal under which Hamas freed all 20 remaining living hostages.", src:"https://www.fox9.com/news/hamas-hostages-release-israel-gaza"},
    {topic:"Ukraine–Russia", type:"action", date:"Dec 2025", detail:"Pressed Kyiv and Moscow toward a negotiated settlement, saying after talks with Zelenskyy that the sides were \"closer than ever.\"", src:"https://www.michiganpublic.org/2025-12-28/trump-says-ukraine-and-russia-closer-than-ever-to-peace-after-talks-with-zelenskyy"},
    {topic:"WHO and Paris climate accord", type:"oppose", date:"Jan 20, 2025", detail:"Ordered U.S. withdrawal from the World Health Organization and the Paris Agreement on his first day back in office.", src:"https://www.semafor.com/article/01/21/2025/trump-orders-us-exit-from-paris-climate-agreement-and-who"},
    {topic:"Global trade", type:"action", date:"2025", detail:"Imposed tariffs on nearly every trading partner, the highest U.S. levels since the Great Depression.", src:"https://www.thefiscaltimes.com/2025/08/07/Trump-Pushes-Tariffs-Highest-Level-Great-Depression"},
  ],
  "kamala harris": [
    {topic:"Iran war", type:"oppose", date:"Feb 28, 2026", detail:"\"Donald Trump is dragging the United States into a war the American people do not want.\" Called the strikes \"recklessness dressed up as resolve.\"", src:"https://www.advocate.com/politics/national/kamala-harris-trump-iran-war"},
    {topic:"Venezuela", type:"oppose", date:"Jan 3, 2026", detail:"Called Maduro's capture \"unlawful and unwise\" while describing him as a brutal, illegitimate dictator.", src:"https://www.foxnews.com/politics/kamala-harris-blasts-trump-administrations-capture-venezuelas-maduro-unlawful-unwise"},
  ],
  "bernie sanders": [
    {topic:"Iran war", type:"oppose", date:"Feb 28, 2026", detail:"\"We must not allow Trump to force us into another senseless war. No war with Iran.\"", src:"https://www.sanders.senate.gov/press-releases/news-sanders-the-u-s-senate-must-be-clear-no-war-with-iran"},
    {topic:"Israel–Gaza", type:"oppose", date:"Jul 2025", detail:"Forced votes to block offensive arms sales to Israel over Gaza; they failed but drew 27 senators.", src:"https://www.duckworth.senate.gov/news/in-the-news/senate-votes-down-israel-arms-sales-ban-despite-growing-democrat-support"},
  ],
  "sherrod brown": [
    {topic:"Iran war", type:"oppose", date:"Mar 2026", detail:"\"Washington is determined to bring us into another conflict that puts our country's safety and security at risk,\" while Ohioans struggle with costs.", src:"https://ohiocapitaljournal.com/2026/03/05/on-war-with-iran-no-ohio-u-s-senate-candidate-gives-his-unqualified-support/"},
    {topic:"Ukraine aid", type:"support", date:"May 2022", detail:"Said Ukraine \"needs more resources to defend itself\"; missed the final vote on the $40 billion package for a health issue.", src:"https://wkyc.com/article/news/politics/sen-sherrod-brown-misses-vote-ukraine-aid-package-health-concerns/95-576a9df6-b862-4d17-9958-9be77c1536c2"},
  ],
  "bernie moreno": [
    {topic:"Iran war", type:"support", date:"Feb 28, 2026", detail:"\"I fully support his decision to eliminate the threat once and for all.\" Was not among the four Republicans who voted for the June 2026 war powers resolution.", src:"https://www.moreno.senate.gov/newsroom/press-releases/moreno-statement-on-u-s-strikes-against-iran/"},
    {topic:"Venezuela", type:"support", date:"Jan 2026", detail:"On Maduro's capture: \"President Trump today changed the course of Latin America for a generation.\"", src:"https://www.newsandsentinel.com/news/local-news/2026/01/rulli-moreno-husted-support-action-against-maduro/"},
    {topic:"Colombia", type:"action", date:"Oct 2025", detail:"Gave President Trump a memo urging sanctions on Colombian President Gustavo Petro.", src:"https://www.nbcnews.com/politics/donald-trump/trump-colombia-bernie-moreno-fake-image-petro-rcna243142"},
    {topic:"Ukraine aid", type:"oppose", date:"Mar 2024", detail:"\"Another $60 billion to have a bloody stalemate doesn't accomplish anything\"; favors a negotiated peace.", src:"https://www.news5cleveland.com/news/politics/ohio-politics/gop-senate-hopefuls-offer-their-take-on-further-aid-to-ukraine-in-war-with-russia"},
  ],
  "mike dewine": [
    {topic:"Russia's invasion of Ukraine", type:"action", date:"Mar 3, 2022", detail:"Ordered state agencies, universities and pension funds to divest from Russian companies and end Russian contracts.", src:"https://www.news5cleveland.com/news/national/russia-ukraine-conflict/dewine-signs-order-prohibiting-state-of-ohio-investment-activity-from-aiding-russia"},
  ],
  "dave yost": [
    {topic:"Russia's invasion of Ukraine", type:"action", date:"Mar 2022", detail:"Urged Ohio's five public pension funds to divest from Russian holdings.", src:"https://www.news5cleveland.com/news/national/russia-ukraine-conflict/dewine-signs-order-prohibiting-state-of-ohio-investment-activity-from-aiding-russia"},
  ],
  "robert sprague": [
    {topic:"Israel", type:"support", date:"Feb 2025", detail:"Ohio's treasury holds $262.5 million in Israel Bonds after repeated purchases under Sprague, including $35 million in 2025.", src:"https://www.tos.ohio.gov/newsroom/article/treasurer-robert-sprague-announces-35-million-israel-bond-purchase"},
  ],
};

const CIVIL = {
  "jon husted": [
    {topic:"Voter-roll purge case (Husted v. A. Philip Randolph Institute)", type:"legal", date:"2018", detail:"As Secretary of State, defended Ohio's process for removing inactive voters against a challenge brought by the A. Philip Randolph Institute, an organization of Black trade unionists; the U.S. Supreme Court upheld Ohio's process 5–4.", src:"https://sgp.fas.org/crs/misc/LSB10175.pdf"},
  ],
  "vivek ramaswamy": [
    {topic:"Juneteenth remarks", type:"criticized", date:"Aug 2023", detail:"Told Iowa voters to \"cancel Juneteenth or one of the other useless ones we made up\" to make room for a national voting holiday; two months earlier he had posted a video celebrating Juneteenth.", src:"https://www.blackenterprise.com/vivek-ramaswamy-calls-juneteenth-a-useless-holiday/"},
  ],
  "annette blackwell": [
    {topic:"First Black mayor of Maple Heights", type:"action", date:"2016", detail:"Became the city's first African American and first woman mayor.", src:"https://ohiocapitaljournal.com/2026/08/05/democratic-candidate-for-ohio-auditor-continues-a-life-of-learning-as-she-aims-for-top-job/"},
  ],
  "donald trump": [
    {topic:"Housing discrimination lawsuit", type:"legal", date:"1973–1975", detail:"The Justice Department sued Trump and his father for refusing to rent to Black tenants across 39 buildings. Settled by consent decree in 1975 with no admission of wrongdoing; the company had to advertise to minorities and give the Urban League vacancy lists.", src:"https://clearinghouse.net/case/15342/"},
    {topic:"Central Park Five", type:"legal", date:"1989–2025", detail:"Took out 1989 newspaper ads calling for the death penalty in the case; the five were later exonerated. They sued him for defamation over 2024 debate remarks; in April 2025 a federal judge let the suit proceed.", src:"https://whyy.org/articles/central-park-five-defamation-case-president-trump/"},
    {topic:"\"Birther\" claims about Obama", type:"criticized", date:"2011–2016", detail:"Promoted false claims that Barack Obama was not born in the U.S. before acknowledging in September 2016 that he was.", src:"https://www.boston.com/news/politics/2016/09/16/trump-finally-says-president-obama-was-born-in-the-us"},
    {topic:"Charlottesville remarks", type:"criticized", date:"Aug 2017", detail:"Said there were \"very fine people on both sides\" after the white-nationalist rally; he also said he was not referring to neo-Nazis.", src:"https://politifact.com/article/2019/apr/26/context-trumps-very-fine-people-both-sides-remarks"},
    {topic:"First Step Act", type:"support", date:"Dec 2018", detail:"Signed the bipartisan criminal-justice law shortening some federal sentences and expanding early release.", src:"https://www.aljazeera.com/news/2018/12/22/trump-signs-sweeping-criminal-justice-first-step-act-into-law"},
    {topic:"HBCU funding (FUTURE Act)", type:"support", date:"Dec 2019", detail:"Signed a law permanently restoring more than $250 million a year for HBCUs and other minority-serving institutions.", src:"https://www.nbcnewyork.com/news/politics/trump-signs-bill-restoring-funding-for-black-colleges/2245788/"},
    {topic:"Smithsonian and Black history", type:"criticized", date:"Mar 2025", detail:"Ordered removal of \"improper, divisive or anti-American ideology\" from Smithsonian museums and restoration of monuments changed since 2020; historians such as Erin Thompson said it downplays darker chapters of U.S. history.", src:"https://www.wuga.org/2025-03-31/trump-signs-order-to-restore-american-history-with-smithsonian-institution-overhaul"},
  ],
  "kamala harris": [
    {topic:"Federal anti-lynching bill", type:"support", date:"2018–2019", detail:"Co-led, with Sens. Cory Booker and Tim Scott, a bill making lynching a federal crime; the Senate passed it unanimously in Dec 2018 and again in Feb 2019.", src:"https://www.booker.senate.gov/news/press/booker-harris-scott-lead-unanimous-passage-of-federal-anti-lynching-legislation"},
  ],
  "bernie sanders": [
    {topic:"1963 civil-rights arrest", type:"support", date:"Aug 12, 1963", detail:"Arrested in Chicago's Englewood neighborhood as a University of Chicago student and CORE leader protesting school segregation.", src:"https://www.nbcchicago.com/news/national-international/1963-photo-of-bernie-sanders-chicago-arrest-surfaces/62168/"},
  ],
  "bernie moreno": [
    {topic:"Remarks on reparations", type:"criticized", date:"Apr 2023", detail:"At his campaign launch: \"Where are the reparations for the people in the North who died to save the lives of Black people?\" His campaign said the point was about political correctness.", src:"https://thegrio.com/2023/04/25/reparations-for-white-people/"},
  ],
  "mike dewine": [
    {topic:"Police reform after George Floyd", type:"action", date:"Jun 2020", detail:"Proposed a chokehold ban, a public use-of-force database and psychological screening for recruits. Democrats said it didn't address racism; the comprehensive package stalled in the legislature.", src:"https://www.cleveland19.com/2020/06/16/ohio-police-reform-plan-will-be-unveiled-by-gov-mike-dewine-ag-dave-yost-wednesday"},
  ],
  "dave yost": [
    {topic:"Police reform plan", type:"action", date:"Jun 2020", detail:"Co-announced DeWine's police-reform plan, urging \"good cops\" to help root out bad ones.", src:"https://www.cleveland19.com/2020/06/16/ohio-police-reform-plan-will-be-unveiled-by-gov-mike-dewine-ag-dave-yost-wednesday"},
    {topic:"Corporate DEI programs", type:"oppose", date:"2025", detail:"Joined 18 Republican attorneys general demanding Costco drop its diversity, equity and inclusion policies; Costco kept them.", src:"https://www.yahoo.com/news/ohio-ag-dave-yost-costco-195744643.html"},
  ],
  "andrew ginther": [
    {topic:"Racism declared a public health crisis", type:"support", date:"Jun 2020", detail:"Announced with City Council that Columbus would declare racism a public health crisis.", src:"https://www.wcbe.org/news/2020-06-01/columbus-officials-to-declare-racism-a-public-health-crisis"},
    {topic:"Police response to 2020 protests", type:"legal", date:"2020–2021", detail:"A federal judge barred police from using tear gas and other non-lethal force on nonviolent protesters; the city paid $5.75 million to 32 injured protesters and accepted a permanent injunction.", src:"https://www.jurist.org/news/2021/12/columbus-ohio-reaches-5-75m-settlement-agreement-with-those-injured-in-2020-summer-protests"},
    {topic:"Killing of Andre Hill", type:"action", date:"2020–2024", detail:"Officer Adam Coy, who shot the unarmed Black man in December 2020, was fired and convicted of murder in November 2024; the city adopted \"Andre's Law\" on body cameras and rendering aid.", src:"https://www.scrippsnews.com/us-news/police-brutality/jury-convicts-adam-coy-now-fired-officer-for-killing-unarmed-black-man-in-ohio"},
    {topic:"DOJ review of Columbus police", type:"action", date:"Sep 2021", detail:"Asked the Justice Department to review the police department after the killings of Ma'Khia Bryant, Miles Jackson and Andre Hill.", src:"https://www.jurist.org/news/2021/09/doj-to-review-columbus-police-department-after-fatal-shootings/"},
    {topic:"Civilian police review board", type:"support", date:"Nov 2020", detail:"Pursued Issue 2, which voters approved, creating an independent civilian review board for police.", src:"https://www.wosu.org/news/2020-11-03/issue-2-columbus-voters-approve-creation-of-civilian-review-board"},
  ],
  "kevin boyce": [
    {topic:"Racism declared a public health crisis", type:"support", date:"May 2020", detail:"\"Racism has been a pandemic long before the current coronavirus pandemic.\" Franklin County commissioners passed the declaration.", src:"https://www.franklincountyohio.gov/County-Government/County-News/Agency-Press-Releases/Board-of-Commissioners-News/2020/COMMISSIONERS-JOIN-HEALTH-DEPARTMENT-IN-DECLARING-RACISM-PUBLIC-HEALTH-CRISIS"},
  ],
  "ohio state board of education": [
    {topic:"Anti-racism resolution repealed", type:"criticized", date:"Oct 2021", detail:"Voted 10–7 to rescind its 2020 resolution condemning racism, adopted after George Floyd's murder, and replaced it with one promoting achievement \"without prejudice or respect to race.\"", src:"https://www.wosu.org/news/2021-10-14/ohio-board-of-education-rescinds-resolution-condemning-racism"},
  ],
  "frank larose": [
    {topic:"2024 voter-roll purge", type:"criticized", date:"Jul 2024", detail:"The NAACP's Ohio Conference and voting groups said his list of 158,857 registrations eligible for removal disproportionately targeted voters of color; his office did not respond.", src:"https://www.news5cleveland.com/news/state/ohios-voter-purge-disproportionately-targets-voters-of-color-civil-rights-organizations-say"},
  ],
};
