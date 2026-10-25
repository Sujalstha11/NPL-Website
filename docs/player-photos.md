# Player photographs

Added 25 October 2026 for all 147 players in the current eight squads.

`src/data/playerPhotos.json` maps the exact squad name to a local image, its publisher page, the original image URL, and the name used by that publisher. Matching uses explicit names and checked spelling aliases, never a runtime image search. Deepak Bohara and Dipak Bohara have separate entries; Kathmandu's Rashid Khan uses the Nepal squad profile.

Sources:

- [NPL T20 League player directory](https://nplt20league.com/players/): the majority of named squad portraits.
- [NPL Cricket League directory](https://nplcricketleague.com/players): Kaleem Sana, Bipin Prasad Sharma and Anil Kharel.
- Cricbuzz profile portraits for [Shehan Jayasuriya](https://www.cricbuzz.com/profiles/7883/shehan-jayasuriya) and [Shadley van Schalkwyk](https://www.cricbuzz.com/profiles/2245/shadley-van-schalkwyk).
- [IPL.com Jishan Alam profile](https://www.ipl.com/player/jishan-alam).
- [Northamptonshire CCC Saif Zaib profile](https://nccc.co.uk/team/saif-zaib/).
- [Cricket Sansar Will Bosisto report](https://cricketsansar.com/cricket-news/kathmandu-gorkhas-will-bosisto-npl), which credits Cricinfo.

Photos remain the property of their respective owners; source attribution is recorded, not a claim of ownership or an open licence. Each team page includes expandable publisher credits. Portraits may show earlier club or national kits and do not establish current squad membership.

Images are stored in `public/images/players/` as 320 × 400 WebP files. Transparent outer margins were removed and the top of each portrait retained when fitting the card. Images load lazily with fixed dimensions to avoid layout shifts. A failed image displays the player's initials and an explicit “Photo unavailable” label.

To update a portrait, verify its identity against a named player page, replace the local WebP, and update the source fields. Run `npm test` and `npm run build`, then inspect the card at phone and desktop widths. The integrity tests check roster coverage, unique paths, image signatures, size limits, and attribution fields.
