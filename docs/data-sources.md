# NPL 2026 data review

Base snapshot reviewed on **25 October 2026 (Nepal time)**; latest squad addition reviewed **26 October 2026**. This is a manually maintained snapshot, not a live scores integration. Published squads can change and a signing does not guarantee availability for every match.

## Schedule

- [Full schedule](https://nplt20league.com/schedule/): all 28 league fixtures and four playoff dates/times, cross-checked against [NPL T20 Stats](https://nplt20stats.com/fixtures).
- [The Rising Nepal, 25 October](https://risingnepaldaily.com/news/88002): revised evening starts of 17:00 NPT, with 12:30 NPT starts on double-header days. Supersedes the initial 16:30 schedule.
- [Playoff bracket and dates](https://statsnpl.com/articles/npl-2026-schedule-announced-full-nepal-premier-league-season-3-fixtures/): Qualifier 1 on November 17, Eliminator on November 18, Qualifier 2 on November 19, Final on November 21.

Store an explicit `+05:45` offset in every fixture. Format with `Asia/Kathmandu`, never the browser's default timezone. The home countdown derives from the opening fixture. A start time passing does not establish a live match or a result.

The fixtures page groups matches by Nepal calendar date, after applying team/stage filters. Results reviewed **27 October 2026**, through **Match 2 only**. Both completed cards show scores and winning margins. Explicit results in `src/data/fixtures.js` determine the Finished label. Match 3 is ongoing and expressly excluded from this update: no score, result, points, NRR or player figures from it are imported. Later fixtures retain their existing schedule entries. Keep the page's result-review label current when adding results.

## Points table

Standings updated **27 October 2026 (Nepal time)** after Match 2 only. Lumbini and Chitwan each have one win and two points; Sudurpaschim and Biratnagar each have one loss and zero points. The other four teams have no completed games in this snapshot. Match 1: Lumbini 88/3 (9.5) beat Sudurpaschim 87 all out (17.2) by seven wickets. Match 2: Chitwan 157/3 (20) beat Biratnagar 149 all out (19.3) by eight runs.

- [Cricnepal final Match 2 scorecard](https://www.cricnepal.com/match/biratnagar-kings-vs-chitwan-rhinos-match-2-nepal-premier-league-2026/scorecard) and [Kathmandu Post final report](https://kathmandupost.com/sports/2026/10/27/chitwan-rhinos-defeat-biratnagar-kings-by-eight-runs): final scores and margin. Chitwan NRR is `157/20 - 149/20 = +0.400`; Biratnagar is −0.400. Use the full 20 overs for Biratnagar's all-out innings, not 19.3.

- [NPLT20League match results](https://nplt20league.com/matches/2026/) and [Arthasarokar match results](https://npl.arthasarokar.com/matches): opening match scores and result.
- [Arthasarokar points table](https://npl.arthasarokar.com/points-table): Lumbini's +4.599 NRR, also reported in the [opening match report](https://nplcricketleague.com/news/lumbini-lions-vs-sudurpaschim-royals-highlights-npl-2026).
- NRR cross-check: `88 / (59 / 6) - 87 / 20 = 4.5991525…`; 9.5 overs means 59 balls, and an all-out innings uses its full 20-over allocation. Sudurpaschim's NRR is the negative, −4.599. These are independent coverage sites, not an official league feed.

The points page shows rankings and its own update label. Fixture and squad review dates remain specific to their earlier reviews; this update does not claim later matches have been checked.

## Top players

The `/top-players` page is a **2026 season snapshot through Match 2**, reviewed **27 October 2026 (Nepal time)**. Maintain totals and review metadata in `src/data/topPlayers.js`; the included match IDs are explicitly `[1, 2]`. Only players with positive runs or wickets are eligible; display at most ten per leaderboard. Equal totals share competition ranks, with alphabetical ordering within ties. There are now 26 positive run scorers and 16 wicket-takers; each leaderboard displays ten. Malan leads with 70 runs; Kamal Singh Airee and Kishore Mahato share first place with four wickets each. No ongoing Match 3 figures are used.

- Match 2 first innings: [NPLT20League innings report](https://nplt20league.com/news/malans-half-century-powers-chitwan-rhinos-to-157-3-biratnagar-kings-need-158/) supplies all five batting totals and the three Biratnagar wicket-takers. Use Ravi Bopara's 31, supported by that innings report and score summary, rather than the conflicting 32 in Nepal News.
- Match 2 second innings: the final Cricnepal scorecard above supplies Biratnagar runs and Chitwan wickets. Normalize `Kamal Airee`, `Shyam Dhakal`, `Narendra Saud` and `Rupesh Singh` to existing squad names. Rijan Dhakal's two wickets are corroborated by [Nepal News](https://english.nepalnews.com/s/sports/chitwan-rhinos-beat-biratnagar-kings-by-8-runs-in-npl/); the Post's “Roman Dhakal” is not used as a new player identity.
- Dawid Malan, Dan Mousley and Tom Taylor are verified Match 2 participants absent from the older squad-directory snapshot. Include their match statistics without treating that old directory as a complete playing XI. A leader without a credited portrait uses the team logo. This result update does not re-audit squads.
- Audit totals: 452 batter runs (162 from Match 1, 290 from Match 2, excluding extras) and 26 bowler wickets (13 per match).

- [NPLT20League batting statistics](https://nplt20league.com/stats/): season runs for all 13 players with positive totals. The first ten are shown. This independent site's search-indexed stats contain the completed opener even when its initial page render is empty.
- [Cricnepal scorecard](https://www.cricnepal.com/match/lumbini-lions-vs-sudurpaschim-royals-match-1-nepal-premier-league-2026/scorecard): cross-checks Lumbini batting totals and Sudurpaschim wickets (Anil Kharel 2, Dipendra Singh Airee 1).
- [Kathmandu Post first-innings report](https://kathmandupost.com/cricket/2026/10/26/lumbini-bowl-out-sudurpaschim-for-87-in-npl-season-opener): Kishore Mahato 4, Sher Malla 3, Shadley van Schalkwyk 1, Tilak Bhandari 1, Rohit Paudel 1; cross-checks Sudurpaschim batting contributions. Bowling runs conceded and overs conflict across publishers, so the page shows confirmed wicket totals without economy or best-figures statistics.
- Use the existing squad spellings `Kishore Mahato`, `Abinash Bohara` and `D'Arcy Short` to preserve portrait and team identity. Leader portraits reuse the existing credited local assets.

## Squads and staff

- [Kusal Perera joins Janakpur Bolts, Ratopati, October 26](https://english.ratopati.com/story/84554/sri-lankan-batter-kusal-perera-signed-with-janakpur-bolts), available through [Hamro Patro's syndicated report](https://www.hamropatro.com/en/news/detail/5180408216039470-janakpur-bolts-sign-kusal-perera-for-nepal-premier-league): Sri Lankan left-handed batter added to Janakpur's overseas group. His [Cricbuzz profile](https://www.cricbuzz.com/profiles/8116/kusal-perera) identifies him as a wicketkeeper-batter; the site's existing role vocabulary uses `Wicketkeeper`. Janakpur now lists 19 players and six overseas signings. This targeted addition does not constitute a fresh review of fixtures or results.

- [Mohammad Nawaz joins Chitwan Rhinos, Onlinekhabar, October 25](https://www.onlinekhabar.com/2026/10/2043827/pakistan-all-rounder-mohammad-nawaz-to-play-npl-for-chitwan-rhinos): reports the franchise's social-media announcement of the Pakistan all-rounder, a left-handed batter and left-arm spinner. Added as an overseas signing, bringing the listed squad to 20 and announced overseas players to seven. The report does not identify a departing or replaced player, so existing signings remain listed; this is not a claim that all seven are simultaneously eligible for selection.

- [Hasan Ali joins Chitwan Rhinos, Global Aawaj, October 25](https://www.globalaawaj.com/archives/301074): reports the franchise's announcement of Pakistan fast bowler Hasan Ali. Added as a sixth overseas signing, bringing Chitwan's listed squad to 19. Bowling style and national identity cross-checked against his [Pakistan Cricket Board profile](https://www.pcb.com.pk/player/hasan-ali-25739.html). The franchise's website squad directory had not yet included this latest signing when checked.

- [Gorkha Sports squad directory, reviewed October 23](https://gorkhasports.com/npl-2026/squads): retained and auction player names across all eight franchises. Its overseas lists are incomplete; supplement with the newer reports below.
- [Nepal Cric team directory](https://nepalcric.com/): cross-check domestic player roles and team assignments on the individual 2026 team pages. Do not copy its old match times or 2025 Chitwan roster.
- [The Kathmandu Post, October 25](https://kathmandupost.com/sports/2026/10/25/npl-returns-with-bigger-ambitions-and-global-recognition): overseas additions including Miller, Jayasuriya, Hunain Shah, Rutherford, Shamim Hossain, and the retained D'Arcy Short.
- [Harmeet Singh appointed Janakpur captain](https://nplt20league.com/news/harmeet-singh-named-captain-of-janakpur-bolts-for-npl-2026/): replaces old Anil Sah captaincy data.
- [Misbah-ul-Haq replaces Jagat Tamata](https://ekantipur.com/sports/2026/10/16/en/179214727866049091.html): Sudurpaschim head coach.
- [Dhammika Prasad retained](https://nplcricketleague.com/news/dhammika-prasad-biratnagar-kings-head-coach-npl-season-3): Biratnagar coaching confirmation.
- [Tinu Yohannan retained](https://english.ratopati.com/story/82432/tinu-yohannan-reappointed-as-head-coach-of-lumbini-lions): Lumbini coaching confirmation.
- [Karnali continuity report, October 24](https://english.onlinekhabar.com/karnali-yaks-bank-on-continuity.html): retained Mark Watt; Akbar Ali, Ariful Islam, Hussain Talat and Sahibzada Farhan; Gyanendra Malla described as moving to cricket director.
- [Kathmandu preview, October 24](https://english.onlinekhabar.com/warner-kathmandu-gorkha.html): domestic auction additions, coach Monty Desai and Will Bosisto's transfer from Karnali.
- [Smit Patel signing, October 24 briefing](https://english.nepalnews.com/s/main-left/nepal-news-evening-briefing-saturday-october-24-2026/).
- [Sam Heazlett signing, October 25](https://english.onlinekhabar.com/sam-heazlett-to-play-for-kathmandu-gorkhas-in-npl.html).
- [Fabian Allen signing, October 25](https://english.nepalnews.com/s/sports/sudurpaschim-royals-sign-west-indies-all-rounder-fabian-allen-for-npl/).
- [Bangladesh signings, October 23](https://www.agamirsomoy.com/en/sports/qpp3oam99h2d): Jishan Alam, Ariful Islam and Shamim Hossain cross-check.
- [2026 season reference](https://en.wikipedia.org/wiki/2026_Nepal_Premier_League): secondary cross-check of squad names, staff, wicketkeepers and season dates; not used alone to validate disputed signings.

Only player names, roles, assignments and other factual fields are transcribed; descriptions are original. No news text is copied. Player portrait provenance is recorded in [player photo notes](player-photos.md). Existing team photos are labelled as archive images because they may show previous squads.

## Unresolved reports

- Gyanendra Malla is still listed as head coach on older directories and the franchise site. The newer October 24 report says cricket director. Display the director role, explain the discrepancy, and leave the head coach unconfirmed until clarified.
- Some lists include Haider Ali at Sudurpaschim; [October 24 reporting](https://www.nplt20.tech/news/sherfane-rutherford-sudurpaschim-royals-npl-2026) says the signing was not confirmed. Do not add him as a confirmed squad member.
- Prajwal Thapa appears in some Biratnagar auction directories but not the cross-checked core squad lists. Tek Raj Thalal appears in one Sudurpaschim listing. Neither is added without corroboration.
- Use Ayub Chand, corroborated by multiple auction lists, rather than the single-directory spelling Ayush Chand. Use full Aaditya Mahata rather than the old incomplete “Mahata”.
- Keep similarly named **Deepak Bohara (Chitwan)** and **Dipak Bohara (Sudurpaschim)** distinct. They are separate players.
- Roles that are missing or conflicting without sufficient corroboration use `null` and display “Role to be confirmed”. They are not assigned invented roles.

## Maintenance

1. Review dated franchise/CAN announcements and reliable current reports. The official CAN site returned 403 during this review; the NPL official site did not expose readable text through the research tool. Sources above are labelled by publisher, not claimed to be official league feeds.
2. Update `src/data/squads.js` for current players and staff; `teams.js` owns stable team IDs, regions and existing artwork. Preserve team IDs so fixtures and routes keep working.
3. Update `src/data/fixtures.js` for schedule revisions. Resolve playoff participants only once qualification is known. Update `season.js` review date and this source log together.
4. Current standings are a dated snapshot after Match 2. Manually update `src/data/pointsTable.js` when results are verified, including its snapshot label; there is no automatic polling. Historical 2024/2025 standings are retained as originally provided and were not re-audited in this update.
5. Run `npm test`, `npm run build` and lint the touched files. Check team/stage filters, player search and empty states in the browser.
