import test from 'node:test'
import assert from 'node:assert/strict'
import fixtures, { openingMatch } from '../src/data/fixtures.js'
import squads from '../src/data/squads.js'
import { formatMatchDate, formatMatchTime, getTimeLeft } from '../src/data/season.js'

test('league schedule covers every pair exactly once and seven matches per team', () => {
  const league = fixtures.filter((match) => match.stage === 'league')
  assert.equal(fixtures.length, 32)
  assert.equal(league.length, 28)
  assert.equal(new Set(fixtures.map((match) => match.id)).size, 32)
  const pairings = new Set()
  for (const match of league) {
    assert.ok(squads[match.homeId] && squads[match.awayId])
    assert.notEqual(match.homeId, match.awayId)
    pairings.add([match.homeId, match.awayId].sort().join('-'))
  }
  assert.equal(pairings.size, 28)
  for (const id of Object.keys(squads).map(Number)) {
    assert.equal(league.filter((match) => match.homeId === id || match.awayId === id).length, 7)
  }
})

test('fixtures are chronological, use revised Nepal times, and never double-book the venue', () => {
  assert.equal(new Set(fixtures.map((match) => match.startsAt)).size, 32)
  fixtures.forEach((match, index) => {
    assert.match(match.startsAt, /^2026-\d{2}-\d{2}T(12:30|17:00):00\+05:45$/)
    assert.ok(Number.isFinite(Date.parse(match.startsAt)))
    if (index) assert.ok(Date.parse(match.startsAt) > Date.parse(fixtures[index - 1].startsAt))
  })
  assert.equal(openingMatch.startsAt, '2026-10-26T17:00:00+05:45')
  assert.deepEqual([openingMatch.homeId, openingMatch.awayId], [6, 8])
})

test('playoffs retain bracket placeholders rather than invented participants', () => {
  const playoffs = fixtures.filter((match) => match.stage === 'playoffs')
  assert.deepEqual(playoffs.map((match) => match.label), ['Qualifier 1', 'Eliminator', 'Qualifier 2', 'Final'])
  assert.deepEqual(playoffs.map((match) => match.startsAt.slice(0, 10)), ['2026-11-17', '2026-11-18', '2026-11-19', '2026-11-21'])
  playoffs.forEach((match) => {
    assert.equal(match.homeId, null)
    assert.equal(match.awayId, null)
    assert.ok(match.homePlaceholder && match.awayPlaceholder)
  })
})

test('captains belong to their squads and no player appears for two teams', () => {
  assert.equal(Object.keys(squads).length, 8)
  const seen = new Set()
  const roles = [null, 'Batter', 'Bowler', 'Wicketkeeper', 'All-rounder']
  for (const squad of Object.values(squads)) {
    assert.ok(squad.players.some((player) => player.name === squad.captain))
    for (const player of squad.players) {
      const key = player.name.toLowerCase().replace(/[^a-z]/g, '')
      assert.ok(!seen.has(key), `Duplicate squad player: ${player.name}`)
      seen.add(key)
      assert.ok(roles.includes(player.role))
      assert.equal(typeof player.overseas, 'boolean')
    }
  }
})

test('countdown and display use Nepal time, even when the device timezone differs', () => {
  assert.equal(formatMatchTime('2026-10-26T11:15:00Z'), '5:00 PM')
  assert.equal(formatMatchDate('2026-10-25T20:00:00Z'), 'Mon, 26 Oct 2026')
  const kickoff = Date.parse(openingMatch.startsAt)
  assert.deepEqual(getTimeLeft(openingMatch.startsAt, kickoff - 90061000), {
    days: 1, hours: 1, minutes: 1, seconds: 1, started: false,
  })
  for (const now of [kickoff, kickoff + 86400000]) {
    assert.deepEqual(getTimeLeft(openingMatch.startsAt, now), {
      days: 0, hours: 0, minutes: 0, seconds: 0, started: true,
    })
  }
})
