import test from 'node:test'
import assert from 'node:assert/strict'
import squads from '../src/data/squads.js'
import fixtures from '../src/data/fixtures.js'
import { battingStats, bowlingStats, playerStatsSnapshot, rankPlayers, topRunScorers, topWicketTakers } from '../src/data/topPlayers.js'

test('stats use current squad identities and only completed matches in the snapshot', () => {
  for (const rows of [battingStats, bowlingStats]) {
    assert.equal(new Set(rows.map((row) => row.name)).size, rows.length)
    for (const row of rows) {
      assert.ok(squads[row.teamId].players.some((player) => player.name === row.name), row.name)
      const completed = fixtures.filter((match) => match.id <= playerStatsSnapshot.throughMatch && match.status === 'finished' && [match.homeId, match.awayId].includes(row.teamId))
      assert.ok(row.matches > 0 && row.matches <= completed.length)
    }
  }
  assert.equal(battingStats.reduce((sum, row) => sum + row.runs, 0), 162)
  assert.equal(bowlingStats.reduce((sum, row) => sum + row.wickets, 0), 13)
})

test('leaderboards include ten scorers and only the seven actual wicket-takers', () => {
  assert.equal(topRunScorers.length, 10)
  assert.equal(topRunScorers[0].name, "D'Arcy Short")
  assert.equal(topRunScorers[0].runs, 40)
  assert.equal(topWicketTakers.length, 7)
  assert.equal(topWicketTakers[0].name, 'Kishore Mahato')
  assert.equal(topWicketTakers[0].wickets, 4)
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
