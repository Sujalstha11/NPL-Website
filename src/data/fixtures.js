import { season } from './season.js'

// Team IDs are shared with teams.js. Times reflect the October 20 revision.
// Sources and editorial decisions: docs/data-sources.md.
const leagueFixtures = [
  ['10-26', '17:00', 6, 8],
  ['10-27', '12:30', 1, 2],
  ['10-27', '17:00', 4, 3],
  ['10-28', '17:00', 7, 8],
  ['10-29', '12:30', 3, 5],
  ['10-29', '17:00', 4, 1],
  ['10-31', '12:30', 6, 2],
  ['10-31', '17:00', 8, 1],
  ['11-01', '17:00', 3, 7],
  ['11-02', '12:30', 5, 4],
  ['11-02', '17:00', 8, 2],
  ['11-03', '12:30', 1, 3],
  ['11-03', '17:00', 6, 7],
  ['11-05', '12:30', 6, 3],
  ['11-05', '17:00', 5, 1],
  ['11-06', '12:30', 8, 4],
  ['11-06', '17:00', 2, 7],
  ['11-07', '17:00', 5, 6],
  ['11-09', '12:30', 7, 4],
  ['11-09', '17:00', 2, 5],
  ['11-10', '17:00', 8, 3],
  ['11-12', '12:30', 1, 7],
  ['11-12', '17:00', 4, 6],
  ['11-13', '12:30', 5, 8],
  ['11-13', '17:00', 3, 2],
  ['11-14', '17:00', 1, 6],
  ['11-15', '12:30', 2, 4],
  ['11-15', '17:00', 7, 5],
].map(([date, time, homeId, awayId], index) => ({
  id: index + 1,
  label: `Match ${index + 1}`,
  stage: 'league',
  startsAt: `2026-${date}T${time}:00+05:45`,
  homeId,
  awayId,
  venue: season.venue,
}))

const playoffs = [
  ['11-17', 'Qualifier 1', '1st in league', '2nd in league'],
  ['11-18', 'Eliminator', '3rd in league', '4th in league'],
  ['11-19', 'Qualifier 2', 'Loser of Qualifier 1', 'Winner of Eliminator'],
  ['11-21', 'Final', 'Winner of Qualifier 1', 'Winner of Qualifier 2'],
].map(([date, label, homePlaceholder, awayPlaceholder], index) => ({
  id: index + 29,
  label,
  stage: 'playoffs',
  startsAt: `2026-${date}T17:00:00+05:45`,
  homeId: null,
  awayId: null,
  homePlaceholder,
  awayPlaceholder,
  venue: season.venue,
}))

// Verified results only; a scheduled start passing does not establish completion.
// Reviewed 27 October 2026. Sources: docs/data-sources.md.
const results = {
  1: {
    homeScore: '88/3 (9.5 overs)',
    awayScore: '87 all out (17.2 overs)',
    summary: 'Lumbini Lions won by 7 wickets (61 balls remaining)',
  },
}

const fixtures = [...leagueFixtures, ...playoffs].map((match) => ({
  ...match,
  status: results[match.id] ? 'finished' : 'scheduled',
  result: results[match.id] ?? null,
}))

export function groupFixturesByDay(matches) {
  const dateFormatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: season.timeZone, year: 'numeric', month: '2-digit', day: '2-digit',
  })
  const groups = new Map()
  for (const match of [...matches].sort((a, b) => Date.parse(a.startsAt) - Date.parse(b.startsAt))) {
    const date = dateFormatter.format(new Date(match.startsAt))
    if (!groups.has(date)) groups.set(date, { date, matches: [] })
    groups.get(date).matches.push(match)
  }
  return [...groups.values()]
}

export const openingMatch = fixtures[0]
export default fixtures
