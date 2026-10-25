import squads from './squads.js'
import biratnagarLogo from '../assets/Biratnagar-Kings.webp'
import chitwanLogo from '../assets/Chitwan-Rhinos.webp'
import janakpurLogo from '../assets/Janakpur-Bolts.webp'
import kathmanduLogo from '../assets/kathmandu-Gurkhas.webp'
import lumbiniLogo from '../assets/Lumbini-lions.webp'
import pokharaLogo from '../assets/Pokhara-Avengers.webp'
import sudurpaschimLogo from '../assets/Sudurpaschim_Royals.png'
import karnaliLogo from '../assets/karnali-yaks.webp'

import biratnagarTeamImg from '../assets/teams/Biratnagar-team.png'
import chitwanTeamImg from '../assets/teams/Chitwan-team.jpg'
import JanakpurTeamImg from '../assets/teams/Janakpur-team.jpg'
import KarnaliTeamImg from '../assets/teams/Karnali-team.jpg'
import kathmanduTeamImg from '../assets/teams/Kathmandu-team.png'
import LumbiniTeamImg from '../assets/teams/Lumbini-team.jpg'
import PokharaTeamImg from '../assets/teams/Pokhara-team.jpg'
import SudurTeamImg from '../assets/teams/Sudur-team.jpg'

const teams = [
  {
    id: 1,
    name: 'Biratnagar Kings',
    logo: biratnagarLogo,
    teamImg: biratnagarTeamImg,
    region: 'Koshi Province',
    color: 'from-purple-700 to-purple-900',
    ...squads[1],
  },
  {
    id: 2,
    name: 'Chitwan Rhinos',
    logo: chitwanLogo,
    teamImg: chitwanTeamImg,
    region: 'Chitwan',
    color: 'from-green-700 to-green-900',
    ...squads[2],
  },
  {
    id: 3,
    name: 'Janakpur Bolts',
    logo: janakpurLogo,
    teamImg: JanakpurTeamImg,
    region: 'Madhesh Province',
    color: 'from-yellow-600 to-yellow-800',
    ...squads[3],
  },
  {
    id: 4,
    name: 'Karnali Yaks',
    logo: karnaliLogo,
    teamImg: KarnaliTeamImg,
    region: 'Karnali Province',
    color: 'from-gray-600 to-gray-800',
    ...squads[4],
  },
  {
    id: 5,
    name: 'Kathmandu Gorkhas',
    logo: kathmanduLogo,
    teamImg: kathmanduTeamImg,
    region: 'Bagmati Province',
    color: 'from-red-700 to-red-900',
    ...squads[5],
  },
  {
    id: 6,
    name: 'Lumbini Lions',
    logo: lumbiniLogo,
    teamImg: LumbiniTeamImg,
    region: 'Lumbini Province',
    color: 'from-blue-700 to-blue-900',
    ...squads[6],
  },
  {
    id: 7,
    name: 'Pokhara Avengers',
    logo: pokharaLogo,
    teamImg: PokharaTeamImg,
    region: 'Gandaki Province',
    color: 'from-teal-700 to-teal-900',
    ...squads[7],
  },
  {
    id: 8,
    name: 'Sudurpaschim Royals',
    logo: sudurpaschimLogo,
    teamImg: SudurTeamImg,
    region: 'Sudurpaschim Province',
    color: 'from-indigo-700 to-indigo-900',
    ...squads[8],
  },
]

export default teams
