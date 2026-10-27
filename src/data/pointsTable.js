import teams from './teams'
import champion2024Img from '../assets/champions-2024.webp'
import champion2025Img from '../assets/champions-2025.webp'

const findTeam = (name) => teams.find((t) => t.name === name || (t.id === 5 && name === 'Kathmandu Gurkhas'))

const pointsTable = {
  2026: {
    champion: null,
    bannerImg: null,
    snapshotLabel: 'After Match 3 · Updated 27 October 2026 · Completed matches only; results are not live.',
    // October 26 opener: Lumbini 88/3 (9.5), Sudurpaschim 87 all out (17.2).
    // NRR uses the full 20 overs for the all-out innings: 88 / (59 / 6) - 87 / 20.
    // Match 2: Chitwan 157/3 vs Biratnagar 149 all out; NRR = 157/20 - 149/20 = 0.400.
    // Match 3: Karnali 132/9 vs Janakpur 113 all out; NRR = 132/20 - 113/20 = 0.950.
    // Result and standings sources: docs/data-sources.md.
    standings: [
      { name: 'Lumbini Lions', played: 1, won: 1, lost: 0, nrr: 4.599, points: 2 },
      { name: 'Biratnagar Kings', played: 1, won: 0, lost: 1, nrr: -0.400, points: 0 },
      { name: 'Chitwan Rhinos', played: 1, won: 1, lost: 0, nrr: 0.400, points: 2 },
      { name: 'Janakpur Bolts', played: 1, won: 0, lost: 1, nrr: -0.950, points: 0 },
      { name: 'Karnali Yaks', played: 1, won: 1, lost: 0, nrr: 0.950, points: 2 },
      { name: 'Kathmandu Gorkhas', played: 0, won: 0, lost: 0, nrr: 0, points: 0 },
      { name: 'Pokhara Avengers', played: 0, won: 0, lost: 0, nrr: 0, points: 0 },
      { name: 'Sudurpaschim Royals', played: 1, won: 0, lost: 1, nrr: -4.599, points: 0 },
    ].map((row) => ({ ...row, id: findTeam(row.name)?.id, logo: findTeam(row.name)?.logo })),
  },

  2025: {
    champion: findTeam('Lumbini Lions'),
    bannerImg: champion2025Img,
    standings: [
      { name: 'Sudurpaschim Royals', played: 7, won: 6, lost: 1, nrr: 0.832, points: 12 },
      { name: 'Biratnagar Kings', played: 7, won: 5, lost: 2, nrr: 0.680, points: 10 },
      { name: 'Kathmandu Gurkhas', played: 7, won: 5, lost: 2, nrr: 0.537, points: 10 },
      { name: 'Lumbini Lions', played: 7, won: 4, lost: 3, nrr: -0.394, points: 8 },
      { name: 'Pokhara Avengers', played: 7, won: 3, lost: 4, nrr: -0.179, points: 6 },
      { name: 'Karnali Yaks', played: 7, won: 2, lost: 5, nrr: -0.356, points: 4 },
      { name: 'Chitwan Rhinos', played: 7, won: 2, lost: 5, nrr: -0.611, points: 4 },
      { name: 'Janakpur Bolts', played: 7, won: 1, lost: 6, nrr: -0.443, points: 2 },
    ].map((row) => ({ ...row, id: findTeam(row.name)?.id, logo: findTeam(row.name)?.logo })),
  },

  2024: {
    champion: findTeam('Janakpur Bolts'),
    bannerImg: champion2024Img,
    standings: [
      { name: 'Sudurpaschim Royals', played: 7, won: 6, lost: 1, nrr: 2.087, points: 12 },
      { name: 'Janakpur Bolts', played: 7, won: 5, lost: 2, nrr: 0.164, points: 10 },
      { name: 'Chitwan Rhinos', played: 7, won: 4, lost: 3, nrr: 0.634, points: 8 },
      { name: 'Karnali Yaks', played: 7, won: 4, lost: 3, nrr: -0.184, points: 8 },
      { name: 'Kathmandu Gurkhas', played: 7, won: 4, lost: 3, nrr: -0.321, points: 8 },
      { name: 'Biratnagar Kings', played: 7, won: 2, lost: 5, nrr: -0.703, points: 4 },
      { name: 'Pokhara Avengers', played: 7, won: 2, lost: 5, nrr: -1.332, points: 4 },
      { name: 'Lumbini Lions', played: 7, won: 1, lost: 6, nrr: -0.498, points: 2 },
    ].map((row) => ({ ...row, id: findTeam(row.name)?.id, logo: findTeam(row.name)?.logo })),
  },
}

export default pointsTable
