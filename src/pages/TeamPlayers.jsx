import { useParams, Link } from 'react-router-dom'
import teams from '../data/teams'


const roleIcon = {
  Batter: '🏏',
  Bowler: '🔴',
  'All-rounder': '⭐',
  Wicketkeeper: '🧤',
}

function TeamPlayers() {
  const { id } = useParams()
  const team = teams.find((t) => t.id === Number(id))

  if (!team) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <p>Team not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white p-8">
      <Link to="/teams" className="text-white hover:underline mb-6 inline-block">
        ← Back to Teams
      </Link>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Side card - team photo */}
        <div className="md:col-span-1">
  <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 sticky top-8">
    <img src={team.teamImg} alt={team.name} className="w-full h-[500px] object-cover" />
    <div className="bg-white/5 p-6 flex items-center gap-4">
      {team.logo && (
        <img src={team.logo} alt={team.name} className="w-14 h-14 object-contain" />
      )}
        <div>
         <h1 className="text-xl font-bold text-white">{team.name}</h1>
          <p className="text-sm text-slate-400">{team.region}</p>
        </div>
      </div>
    </div>
  </div>

        {/* Player list */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">Players</h2>
          <ul className="grid grid-cols-2 gap-3">
            {team.players.map((player, index) => (
              <li
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 flex items-center gap-3"
              >
                <span className="text-xl">{roleIcon[player.role] || '👤'}</span>
                <div>
                  <p className="text-slate-200 font-medium">{player.name}</p>
                  <p className="text-xs text-slate-400">{player.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TeamPlayers