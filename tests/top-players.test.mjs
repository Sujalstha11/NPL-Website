import test from 'node:test'
import assert from 'node:assert/strict'
import squads from '../src/data/squads.js'
import fixtures from '../src/data/fixtures.js'
import { battingStats, bowlingStats, playerStatsSnapshot, rankPlayers, topRunScorers, topWicketTakers } from '../src/data/topPlayers.js'

test('stats use verified player identities and only completed matches in the snapshot', () => {
  // Confirmed Match 2 participants absent from the earlier squad-directory snapshot.
  const additionalMatchPlayers = new Map([['Dawid Malan', 2], ['Dan Mousley', 2], ['Tom Taylor', 2]])
  for (const rows of [battingStats, bowlingStats]) {
    assert.equal(new Set(rows.map((row) => row.name)).size, rows.length)
    for (const row of rows) {
      assert.ok(squads[row.teamId].players.some((player) => player.name === row.name) || additionalMatchPlayers.get(row.name) === row.teamId, row.name)
      const completed = fixtures.filter((match) => playerStatsSnapshot.includedMatchIds.includes(match.id) && match.status === 'finished' && [match.homeId, match.awayId].includes(row.teamId))
      assert.ok(row.matches > 0 && row.matches <= completed.length)
    }
  }
  assert.equal(battingStats.reduce((sum, row) => sum + row.runs, 0), 452)
  assert.equal(bowlingStats.reduce((sum, row) => sum + row.wickets, 0), 26)
  assert.deepEqual(playerStatsSnapshot.includedMatchIds, [1, 2])
  assert.equal(playerStatsSnapshot.throughMatch, 2)
  assert.ok([...battingStats, ...bowlingStats].every((row) => ![3, 4].includes(row.teamId)), 'No Match 3 team statistics')
})

test('leaderboards include ten scorers and wicket-takers through Match 2', () => {
  assert.equal(topRunScorers.length, 10)
  assert.equal(topRunScorers[0].name, 'Dawid Malan')
  assert.equal(topRunScorers[0].runs, 70)
  assert.equal(topWicketTakers.length, 10)
  assert.equal(topWicketTakers[0].name, 'Kamal Singh Airee')
  assert.equal(topWicketTakers[0].wickets, 4)
  assert.deepEqual(topWicketTakers.filter((row) => row.rank === 1).map((row) => row.name), ['Kamal Singh Airee', 'Kishore Mahato'])
  assert.ok(topWicketTakers.every((row) => row.wickets > 0))
})

test('ranking sorts totals, shares tied ranks, caps at ten, and preserves input', () => {
  const input = [
    { name: 'Zero', runs: 0 }, { name: 'Zed', runs: 8 },
    { name: 'Amy', runs: 8 }, { name: 'Leader', runs: 20 }, { name: 'Last', runs: 1 },
  ]
  const original = structuredClone(input)
  assert.deepEqual(rankPlayers(input, 'runs').map(({ name, rank }) => [name, rank]), [
    ['Leader', 1], ['Amy', 2], ['Zed', 2], ['Last', 4],
  ])
  assert.deepEqual(input, original)
  assert.equal(rankPlayers(Array.from({ length: 15 }, (_, i) => ({ name: `Player ${i}`, runs: i + 1 })), 'runs').length, 10)
  assert.deepEqual(rankPlayers([], 'wickets'), [])
})
