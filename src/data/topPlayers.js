// Verified season totals after Match 1. Source notes: docs/data-sources.md.
export const playerStatsSnapshot = {
  season: 2026,
  reviewedLabel: '27 October 2026',
  throughMatch: 1,
  sources: [
    { label: 'Batting stats', url: 'https://nplt20league.com/stats/' },
    { label: 'Match scorecard', url: 'https://www.cricnepal.com/match/lumbini-lions-vs-sudurpaschim-royals-match-1-nepal-premier-league-2026/scorecard' },
    { label: 'Bowling report', url: 'https://kathmandupost.com/cricket/2026/10/26/lumbini-bowl-out-sudurpaschim-for-87-in-npl-season-opener' },
  ],
}

export const battingStats = [
  { name: "D'Arcy Short", teamId: 6, runs: 40, matches: 1 },
  { name: 'Aasif Sheikh', teamId: 6, runs: 32, matches: 1 },
  { name: 'Dipendra Singh Airee', teamId: 8, runs: 27, matches: 1 },
  { name: 'Anil Kharel', teamId: 8, runs: 15, matches: 1 },
  { name: 'Saif Zaib', teamId: 8, runs: 13, matches: 1 },
  { name: 'Binod Bhandari', teamId: 8, runs: 9, matches: 1 },
  { name: 'Ishan Pandey', teamId: 8, runs: 7, matches: 1 },
  { name: 'Niroshan Dickwella', teamId: 6, runs: 7, matches: 1 },
  { name: 'Rohit Paudel', teamId: 6, runs: 5, matches: 1 },
  { name: 'Abinash Bohara', teamId: 8, runs: 3, matches: 1 },
  { name: 'Brandon McMullen', teamId: 8, runs: 2, matches: 1 },
  { name: 'Shamim Hossain', teamId: 6, runs: 1, matches: 1 },
  { name: 'Sherfane Rutherford', teamId: 8, runs: 1, matches: 1 },
]

export const bowlingStats = [
  { name: 'Kishore Mahato', teamId: 6, wickets: 4, matches: 1 },
  { name: 'Sher Malla', teamId: 6, wickets: 3, matches: 1 },
  { name: 'Anil Kharel', teamId: 8, wickets: 2, matches: 1 },
  { name: 'Dipendra Singh Airee', teamId: 8, wickets: 1, matches: 1 },
  { name: 'Rohit Paudel', teamId: 6, wickets: 1, matches: 1 },
  { name: 'Shadley van Schalkwyk', teamId: 6, wickets: 1, matches: 1 },
  { name: 'Tilak Bhandari', teamId: 6, wickets: 1, matches: 1 },
]

// Equal totals share a rank, ordered alphabetically for a stable top-ten display.
export function rankPlayers(players, metric) {
  const sorted = players.filter((player) => player[metric] > 0)
    .sort((a, b) => b[metric] - a[metric] || a.name.localeCompare(b.name, 'en'))
    .slice(0, 10)
  let rank = 0
  return sorted.map((player, index) => {
    if (!index || player[metric] !== sorted[index - 1][metric]) rank = index + 1
    return { ...player, rank }
  })
}

export const topRunScorers = rankPlayers(battingStats, 'runs')
export const topWicketTakers = rankPlayers(bowlingStats, 'wickets')
