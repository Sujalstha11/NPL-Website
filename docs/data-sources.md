# NPL 2026 data review

Reviewed on **25 October 2026 (Nepal time)**. This is a manually maintained snapshot, not a live scores integration. Published squads can change and a signing does not guarantee availability for every match.

## Schedule

- [Full schedule](https://nplt20league.com/schedule/): all 28 league fixtures and four playoff dates/times, cross-checked against [NPL T20 Stats](https://nplt20stats.com/fixtures).
- [The Rising Nepal, 25 October](https://risingnepaldaily.com/news/88002): revised evening starts of 17:00 NPT, with 12:30 NPT starts on double-header days. Supersedes the initial 16:30 schedule.
- [Playoff bracket and dates](https://statsnpl.com/articles/npl-2026-schedule-announced-full-nepal-premier-league-season-3-fixtures/): Qualifier 1 on November 17, Eliminator on November 18, Qualifier 2 on November 19, Final on November 21.

Store an explicit `+05:45` offset in every fixture. Format with `Asia/Kathmandu`, never the browser's default timezone. The home countdown derives from the opening fixture. A start time passing does not establish a live match or a result.

## Squads and staff

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
4. Current standings are a dated pre-season snapshot. Manually update results/standings when verified, including the snapshot label; there is no automatic polling. Historical 2024/2025 standings are retained as originally provided and were not re-audited in this update.
5. Run `npm test`, `npm run build` and lint the touched files. Check team/stage filters, player search and empty states in the browser.
