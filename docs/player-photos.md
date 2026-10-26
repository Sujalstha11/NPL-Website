# Player photographs

Updated 26 October 2026 for all 150 players in the current eight squads, including Janakpur's new signing Kusal Perera.

`src/data/playerPhotos.json` maps the exact squad name to a local image, its publisher page, the original image URL, and the name used by that publisher. Matching uses explicit names and checked spelling aliases, never a runtime image search. Deepak Bohara and Dipak Bohara have separate entries; Kathmandu's Rashid Khan uses the Nepal squad profile.

Sources:

- [Ratopati's Kusal Perera signing report](https://english.ratopati.com/story/84554/sri-lankan-batter-kusal-perera-signed-with-janakpur-bolts), syndicated by [Hamro Patro](https://www.hamropatro.com/en/news/detail/5180408216039470-janakpur-bolts-sign-kusal-perera-for-nepal-premier-league): Kusal Perera in Janakpur kit; portrait crop saved in WebP and JPEG formats.

- [Onlinekhabar's Mohammad Nawaz signing report](https://www.onlinekhabar.com/2026/10/2043827/pakistan-all-rounder-mohammad-nawaz-to-play-npl-for-chitwan-rhinos): Mohammad Nawaz in Pakistan kit, with both WebP and JPEG copies.

- [Global Aawaj's Hasan Ali signing report](https://www.globalaawaj.com/archives/301074): Hasan Ali in Pakistan kit, with both WebP and JPEG copies for the player card.

- [NPL T20 League player directory](https://nplt20league.com/players/): the majority of named squad portraits.
- [NPL Cricket League directory](https://nplcricketleague.com/players): Kaleem Sana, Bipin Prasad Sharma and Anil Kharel.
- Cricbuzz profile portraits for [Shehan Jayasuriya](https://www.cricbuzz.com/profiles/7883/shehan-jayasuriya) and [Shadley van Schalkwyk](https://www.cricbuzz.com/profiles/2245/shadley-van-schalkwyk).
- [IPL.com Jishan Alam profile](https://www.ipl.com/player/jishan-alam).
- [Northamptonshire CCC Saif Zaib profile](https://nccc.co.uk/team/saif-zaib/).
- [Cricket Sansar Will Bosisto report](https://cricketsansar.com/cricket-news/kathmandu-gorkhas-will-bosisto-npl), which credits Cricinfo.

Photos remain the property of their respective owners; source attribution is recorded, not a claim of ownership or an open licence. Each team page includes expandable publisher credits. Portraits may show earlier club or national kits and do not establish current squad membership.

Images are stored in `public/images/players/` as 320 × 400 WebP files, with a baseline JPEG fallback for every player. Transparent outer margins were removed and the top of each portrait retained when fitting the card. Images load lazily with fixed dimensions to avoid layout shifts. If a WebP request or decoding fails, the card automatically tries its JPEG. If both fail, it shows initials, “Photo unavailable”, and a retry button that makes a fresh request without reloading the page.

The deployed WebP files returned HTTP 200 during the mobile issue investigation, so the specific device failure could not be reproduced. JPEG fallback and retry address format failures and transient request failures without assuming a particular phone/browser. A separate confirmed Vercel 404 on direct squad URLs is addressed by the SPA rewrite in `vercel.json`, following [Vercel's Vite deployment guidance](https://vercel.com/docs/frameworks/frontend/vite).

Recovery was tested at a 390 × 844 viewport against a production build: temporarily removing one built WebP loaded its JPEG; temporarily removing both formats showed Retry photo; restoring the files and clicking Retry loaded the JPEG without navigation. All temporarily moved build assets were restored after the check.

To update a portrait, verify its identity against a named player page, replace both the local WebP and JPEG (flattening transparency onto `#0f172a`), and update the source fields. Run `npm test` and `npm run build`, then inspect the card at phone and desktop widths. The integrity tests check roster coverage, unique paths, both image formats, size limits, and attribution fields.
