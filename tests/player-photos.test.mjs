import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import squads from '../src/data/squads.js'

const photos = JSON.parse(readFileSync(new URL('../src/data/playerPhotos.json', import.meta.url)))

test('every current player has local WebP and JPEG portraits with source credit', () => {
  const names = Object.values(squads).flatMap((team) => team.players.map((player) => player.name))
  assert.deepEqual(Object.keys(photos).sort(), [...names].sort())
  assert.equal(new Set(Object.values(photos).map((photo) => photo.src)).size, names.length)
  for (const name of names) {
    const photo = photos[name]
    assert.match(photo.src, /^\/images\/players\/[a-z0-9-]+\.webp$/)
    assert.equal(new URL(photo.source).protocol, 'https:')
    assert.equal(new URL(photo.original).protocol, 'https:')
    assert.ok(photo.sourceName)
    const bytes = readFileSync(new URL(`../public${photo.src}`, import.meta.url))
    assert.equal(bytes.toString('ascii', 0, 4), 'RIFF', name)
    assert.equal(bytes.toString('ascii', 8, 12), 'WEBP', name)
    assert.ok(bytes.length > 1000 && bytes.length < 100_000, `${name}: image size`)
    assert.equal(photo.fallbackSrc, photo.src.replace(/\.webp$/, '.jpg'))
    const jpeg = readFileSync(new URL(`../public${photo.fallbackSrc}`, import.meta.url))
    assert.equal(jpeg.readUInt16BE(0), 0xffd8, `${name}: JPEG start marker`)
    assert.equal(jpeg.readUInt16BE(jpeg.length - 2), 0xffd9, `${name}: JPEG end marker`)
    assert.ok(jpeg.length > 1000 && jpeg.length < 100_000, `${name}: fallback size`)
  }
})

test('similarly named players keep separate portraits', () => {
  assert.notEqual(photos['Deepak Bohara'].src, photos['Dipak Bohara'].src)
  assert.notEqual(photos['Aasif Sheikh'].src, photos['Aarif Sheikh'].src)
})
