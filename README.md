# Nepal Premier League website

React and Vite website with NPL fixtures, teams, players and historical standings.

## Run locally

```sh
npm install
npm run dev
```

The existing Supabase authentication setup uses `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in your local `.env`. Do not commit credentials.

## Season data

The current snapshot was reviewed on **25 October 2026**. It includes all 32 published 2026 fixtures, eight franchise squads and recent overseas signings. Match times use Nepal time, including the revised 5:00 PM evening starts. Data is maintained locally; results and standings do not update automatically.

See [data sources and maintenance notes](docs/data-sources.md) for references, unresolved reports and how to update the snapshot. Current season players live in `src/data/squads.js`; schedules in `src/data/fixtures.js`.

## Checks

```sh
npm test
npm run build
npm run lint
```

The data tests verify round-robin completeness, valid team references, unique player assignments, playoff placeholders and timezone/countdown behavior. The existing full-repository lint has an unrelated Fast Refresh export error in AuthContext.jsx.
