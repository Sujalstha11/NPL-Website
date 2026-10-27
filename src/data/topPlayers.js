// Verified season totals after completed Match 3. No later match figures.
// Source notes and scorecard name aliases: docs/data-sources.md.
export const playerStatsSnapshot = {
  season: 2026,
  reviewedLabel: '27 October 2026',
  throughMatch: 3,
  includedMatchIds: [1, 2, 3],
  sources: [
    { label: 'Batting stats', url: 'https://nplt20league.com/stats/' },
    { label: 'Match scorecard', url: 'https://www.cricnepal.com/match/lumbini-lions-vs-sudurpaschim-royals-match-1-nepal-premier-league-2026/scorecard' },
    { label: 'Bowling report', url: 'https://kathmandupost.com/cricket/2026/10/26/lumbini-bowl-out-sudurpaschim-for-87-in-npl-season-opener' },
    { label: 'Match 2 scorecard', url: 'https://www.cricnepal.com/match/biratnagar-kings-vs-chitwan-rhinos-match-2-nepal-premier-league-2026/scorecard' },
    { label: 'Match 2 first innings', url: 'https://nplt20league.com/news/malans-half-century-powers-chitwan-rhinos-to-157-3-biratnagar-kings-need-158/' },
    { label: 'Match 3 scorecard', url: 'https://www.cricnepal.com/match/karnali-yaks-vs-janakpur-bolts-match-3-nepal-premier-league-2026/scorecard' },
    { label: 'Match 3 full innings', url: 'https://livescore.sportzwiki.com/matches/karnali-yaks-vs-janakpur-bolts-99952/' },
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
  // Match 2: Chitwan and Biratnagar each made their first appearance.
  { name: 'Dawid Malan', teamId: 2, runs: 70, matches: 1 },
  { name: 'Dev Khanal', teamId: 2, runs: 12, matches: 1 },
  { name: 'Arjun Saud', teamId: 2, runs: 3, matches: 1 },
  { name: 'Ravi Bopara', teamId: 2, runs: 31, matches: 1 },
  { name: 'Dan Mousley', teamId: 2, runs: 29, matches: 1 },
  { name: 'Lokesh Bam', teamId: 1, runs: 26, matches: 1 },
  { name: 'Imran Sheikh', teamId: 1, runs: 39, matches: 1 },
  { name: 'Charith Asalanka', teamId: 1, runs: 8, matches: 1 },
  { name: 'Basir Ahamad', teamId: 1, runs: 13, matches: 1 },
  { name: 'Angelo Mathews', teamId: 1, runs: 14, matches: 1 },
  { name: 'Andre Russell', teamId: 1, runs: 33, matches: 1 },
  { name: 'Shubham Ranjane', teamId: 1, runs: 10, matches: 1 },
  { name: 'Naren Saud', teamId: 1, runs: 2, matches: 1 },
  // Match 3: first appearance for Karnali and Janakpur; extras are not batter runs.
  { name: 'Mark Watt', teamId: 4, runs: 1, matches: 1 },
  { name: 'Ariful Islam', teamId: 4, runs: 43, matches: 1 },
  { name: 'Deepak Dumre', teamId: 4, runs: 13, matches: 1 },
  { name: 'Hussain Talat', teamId: 4, runs: 3, matches: 1 },
  { name: 'Pawan Sarraf', teamId: 4, runs: 37, matches: 1 },
  { name: 'Akbar Ali', teamId: 4, runs: 1, matches: 1 },
  { name: 'Gulshan Jha', teamId: 4, runs: 12, matches: 1 },
  { name: 'Sompal Kami', teamId: 4, runs: 1, matches: 1 },
  { name: 'Nandan Yadav', teamId: 4, runs: 9, matches: 1 },
  { name: 'Yuvraj Khatri', teamId: 4, runs: 1, matches: 1 },
  { name: 'Mayan Yadav', teamId: 3, runs: 14, matches: 1 },
  { name: 'Trit Raj Das', teamId: 3, runs: 1, matches: 1 },
  { name: 'Moeen Ali', teamId: 3, runs: 19, matches: 1 },
  { name: 'Anil Kumar Sah', teamId: 3, runs: 11, matches: 1 },
  { name: 'Kusal Perera', teamId: 3, runs: 6, matches: 1 },
  { name: 'Jimmy Neesham', teamId: 3, runs: 15, matches: 1 },
  { name: 'Harmeet Singh', teamId: 3, runs: 19, matches: 1 },
  { name: 'Abhishek Tiwari', teamId: 3, runs: 20, matches: 1 },
  { name: 'Rahul Yadav', teamId: 3, runs: 1, matches: 1 },
  { name: 'Lalit Narayan Rajbanshi', teamId: 3, runs: 1, matches: 1 },
]

export const bowlingStats = [
  { name: 'Kishore Mahato', teamId: 6, wickets: 4, matches: 1 },
  { name: 'Sher Malla', teamId: 6, wickets: 3, matches: 1 },
  { name: 'Anil Kharel', teamId: 8, wickets: 2, matches: 1 },
  { name: 'Dipendra Singh Airee', teamId: 8, wickets: 1, matches: 1 },
  { name: 'Rohit Paudel', teamId: 6, wickets: 1, matches: 1 },
  { name: 'Shadley van Schalkwyk', teamId: 6, wickets: 1, matches: 1 },
  { name: 'Tilak Bhandari', teamId: 6, wickets: 1, matches: 1 },
  { name: 'Angelo Mathews', teamId: 1, wickets: 1, matches: 1 },
  { name: 'Charith Asalanka', teamId: 1, wickets: 1, matches: 1 },
  { name: 'Andre Russell', teamId: 1, wickets: 1, matches: 1 },
  { name: 'Kamal Singh Airee', teamId: 2, wickets: 4, matches: 1 },
  { name: 'Rijan Dhakal', teamId: 2, wickets: 2, matches: 1 },
  { name: 'Tom Taylor', teamId: 2, wickets: 1, matches: 1 },
  { name: 'Ranjeet Kumar', teamId: 2, wickets: 1, matches: 1 },
  { name: 'Dan Mousley', teamId: 2, wickets: 1, matches: 1 },
  { name: 'Mousom Dhakal', teamId: 2, wickets: 1, matches: 1 },
  // Two run-outs in Match 3 are not credited to bowlers.
  { name: 'Moeen Ali', teamId: 3, wickets: 2, matches: 1 },
  { name: 'Lalit Narayan Rajbanshi', teamId: 3, wickets: 1, matches: 1 },
  { name: 'Rahul Yadav', teamId: 3, wickets: 2, matches: 1 },
  { name: 'Harmeet Singh', teamId: 3, wickets: 3, matches: 1 },
  { name: 'Sompal Kami', teamId: 4, wickets: 1, matches: 1 },
  { name: 'Nandan Yadav', teamId: 4, wickets: 2, matches: 1 },
  { name: 'Hussain Talat', teamId: 4, wickets: 3, matches: 1 },
  { name: 'Unish Bikram Singh Thakuri', teamId: 4, wickets: 3, matches: 1 },
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
