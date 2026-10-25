import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import teams from '../data/teams'
import { season } from '../data/season.js'
import DataNote from '../components/DataNote'

const roleIcon = { Batter: '🏏', Bowler: '🔴', 'All-rounder': '⭐', Wicketkeeper: '🧤' }

function Squad({ team }) {
  const [query, setQuery] = useState('')
  const [group, setGroup] = useState('all')
  const players = team.players.filter((player) =>
    player.name.toLowerCase().includes(query.trim().toLowerCase()) &&
    (group === 'all' || (group === 'overseas' ? player.overseas : !player.overseas))
  )

  return (
    <div className="lg:col-span-2 min-w-0">
      <h2 className="text-2xl font-bold mb-3">{season.year} squad</h2>
      <DataNote />
      <p className="mt-3 text-sm text-slate-300">{team.players.length} players listed · {team.players.filter((player) => player.overseas).length} overseas</p>
      <div className="flex flex-wrap gap-3 my-5">
        <label className="w-full sm:w-auto flex-1 min-w-0 text-sm text-slate-300">
          Search players
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Player name" className="block mt-2 w-full bg-slate-900 border border-white/20 rounded-lg p-3 text-white" />
        </label>
        <label className="w-full sm:w-auto text-sm text-slate-300">
          Squad group
          <select value={group} onChange={(event) => setGroup(event.target.value)} className="block w-full mt-2 bg-slate-900 border border-white/20 rounded-lg p-3 text-white">
            <option value="all">All players</option>
            <option value="domestic">Domestic</option>
            <option value="overseas">Overseas</option>
          </select>
        </label>
      </div>
      <p className="text-sm text-slate-400 mb-3" aria-live="polite">Showing {players.length} {players.length === 1 ? 'player' : 'players'}</p>
      <ul className="grid sm:grid-cols-2 gap-3">
        {players.map((player) => (
          <li key={player.name} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 flex items-start gap-3">
            <span className="text-xl" aria-hidden="true">{roleIcon[player.role] || '👤'}</span>
            <div>
              <p className="text-slate-200 font-medium">{player.name}</p>
              <p className="text-xs text-slate-400 mt-1">{player.role || 'Role to be confirmed'}</p>
              <div className="flex flex-wrap gap-2 mt-2 text-xs">
                <span className={player.overseas ? 'text-sky-400' : 'text-slate-400'}>{player.overseas ? 'Overseas' : 'Domestic'}</span>
                {player.name === team.captain && <span className="text-emerald-400 font-semibold">Captain</span>}
              </div>
            </div>
          </li>
        ))}
      </ul>
      {players.length === 0 && <p className="p-6 bg-white/5 rounded-lg">No players match your search. Try another name or squad group.</p>}
    </div>
  )
}

export default function TeamPlayers() {
  const { id } = useParams()
  const team = teams.find((entry) => entry.id === Number(id))
  if (!team) return <div className="page-height bg-gray-950 text-white p-8"><p className="mb-4">Team not found.</p><Link to="/teams" className="text-sky-400 underline">Back to Teams</Link></div>

  return (
    <div className="page-height bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white px-4 py-8 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <Link to="/teams" className="hover:underline mb-6 inline-block">← Back to Teams</Link>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src={team.teamImg} alt={`${team.name} team archive`} className="w-full h-56 sm:h-72 object-cover" />
              <p className="px-5 pt-2 text-xs text-slate-400">Team archive photo</p>
              <div className="p-5">
                <img src={team.logo} alt="" className="w-16 h-16 object-contain mb-3" />
                <h1 className="text-2xl font-bold">{team.name}</h1>
                <p className="text-sm text-slate-400 mt-2">{team.region}</p>
                <p className="mt-4 text-sm">Captain: {team.captain}</p>
                <p className="mt-2 text-sm">Head coach: {team.coach}</p>
                {team.cricketDirector && <p className="mt-2 text-sm">Cricket director: {team.cricketDirector}</p>}
                {team.staffNote && <p className="mt-3 text-xs text-slate-400">{team.staffNote} <a href={team.staffSource} target="_blank" rel="noopener noreferrer" className="text-sky-400 underline">Report</a></p>}
                <Link to={`/matches?team=${team.id}`} className="inline-block text-sky-400 underline mt-5">View team fixtures →</Link>
              </div>
            </div>
          </div>
          <Squad key={team.id} team={team} />
        </div>
      </div>
    </div>
  )
}
