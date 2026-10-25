import { Link, useSearchParams } from 'react-router-dom'
import teams from '../data/teams'
import fixtures from '../data/fixtures.js'
import { season, formatMatchDate, formatMatchTime } from '../data/season.js'
import DataNote from '../components/DataNote'

function Opponent({ teamId, placeholder }) {
  const team = teams.find((entry) => entry.id === teamId)
  if (!team) return <p className="font-semibold text-slate-300">{placeholder}</p>
  return (
    <Link to={`/teams/${team.id}/players`} className="flex items-center gap-3 hover:text-sky-400">
      <img src={team.logo} alt="" className="h-10 w-10 object-contain shrink-0" />
      <span className="font-semibold">{team.name}</span>
    </Link>
  )
}

export default function Matches() {
  const [params, setParams] = useSearchParams()
  const teamId = teams.some((team) => String(team.id) === params.get('team')) ? params.get('team') : 'all'
  const stage = ['league', 'playoffs'].includes(params.get('stage')) ? params.get('stage') : 'all'
  const visibleFixtures = fixtures.filter((match) =>
    (stage === 'all' || match.stage === stage) &&
    (teamId === 'all' || match.homeId === Number(teamId) || match.awayId === Number(teamId))
  )

  function updateFilter(key, value) {
    const next = new URLSearchParams(params)
    if (value === 'all') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white px-4 py-8 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="hover:underline mb-6 inline-block">← Back to Home</Link>
        <header className="mb-8">
          <p className="text-sky-400 font-semibold mb-2">NPL {season.year} · Season {season.edition}</p>
          <h1 className="text-4xl font-bold mb-3">Fixtures</h1>
          <p className="text-xl text-slate-200 mb-2">{season.window}</p>
          <p className="text-slate-400 mb-4">32 matches · 8 teams · {season.venue}</p>
          <DataNote kind="fixtures" />
          <p className="mt-3 text-sm text-slate-400">Evening matches start at 5:00 PM following the revised schedule. Results are not connected to a live feed.</p>
        </header>

        <div className="flex flex-wrap gap-4 mb-6">
          <label className="flex-1 min-w-52 text-sm text-slate-300">
            Team
            <select value={teamId} onChange={(event) => updateFilter('team', event.target.value)} className="block w-full mt-2 rounded-lg bg-slate-900 border border-white/20 p-3 text-white">
              <option value="all">All teams</option>
              {teams.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)}
            </select>
          </label>
          <label className="flex-1 min-w-52 text-sm text-slate-300">
            Stage
            <select value={stage} onChange={(event) => updateFilter('stage', event.target.value)} className="block w-full mt-2 rounded-lg bg-slate-900 border border-white/20 p-3 text-white">
              <option value="all">All stages</option>
              <option value="league">League stage</option>
              <option value="playoffs">Playoffs</option>
            </select>
          </label>
        </div>

        <p className="text-sm text-slate-400 mb-4" aria-live="polite">Showing {visibleFixtures.length} of {fixtures.length} fixtures</p>
        {teamId !== 'all' && <p className="text-sm text-slate-400 mb-4">Playoff teams will be decided by the league standings. Select “All teams” to see the playoff schedule.</p>}
        {visibleFixtures.length === 0 ? (
          <div className="border border-white/10 rounded-xl bg-white/5 p-8 text-center">
            <p>No fixtures match these filters. Playoff participants are still to be decided.</p>
            <button onClick={() => setParams({})} className="mt-4 text-sky-400 underline">Show all fixtures</button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {visibleFixtures.map((match) => (
              <article key={match.id} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex flex-wrap justify-between gap-2 mb-4 text-sm">
                  <h2 className="font-semibold text-sky-400">{match.label}</h2>
                  <span className="text-slate-400">{match.stage === 'league' ? 'League stage' : 'Playoffs · Teams TBD'}</span>
                </div>
                <div className="space-y-3">
                  <Opponent teamId={match.homeId} placeholder={match.homePlaceholder} />
                  <p className="text-xs uppercase text-slate-500">vs</p>
                  <Opponent teamId={match.awayId} placeholder={match.awayPlaceholder} />
                </div>
                <div className="border-t border-white/10 mt-5 pt-4">
                  <time dateTime={match.startsAt} className="flex flex-wrap justify-between gap-2 text-sm">
                    <span className="text-slate-300">{formatMatchDate(match.startsAt)}</span>
                    <span className="font-bold text-emerald-400">{formatMatchTime(match.startsAt)} NPT</span>
                  </time>
                  <p className="text-xs text-slate-400 mt-2">{match.venue}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
