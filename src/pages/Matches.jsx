import { Link, useSearchParams } from 'react-router-dom'
import teams from '../data/teams'
import fixtures, { groupFixturesByDay } from '../data/fixtures.js'
import { season, formatMatchDate, formatMatchTime } from '../data/season.js'
import DataNote from '../components/DataNote'

function Opponent({ teamId, placeholder, score }) {
  const team = teams.find((entry) => entry.id === teamId)
  if (!team) return <p className="font-semibold text-slate-300">{placeholder}</p>
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <Link to={`/teams/${team.id}/players`} className="flex items-center gap-3 hover:text-sky-400">
        <img src={team.logo} alt="" className="h-10 w-10 object-contain shrink-0" />
        <span className="font-semibold">{team.name}</span>
      </Link>
      {score && <span className="text-sm font-semibold text-slate-200">{score}</span>}
    </div>
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
  const fixtureDays = groupFixturesByDay(visibleFixtures)

  function updateFilter(key, value) {
    const next = new URLSearchParams(params)
    if (value === 'all') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  return (
    <div className="page-height bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white px-4 py-8 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="hover:underline mb-6 inline-block">← Back to Home</Link>
        <header className="mb-8">
          <p className="text-sky-400 font-semibold mb-2">NPL {season.year} · Season {season.edition}</p>
          <h1 className="text-4xl font-bold mb-3">Fixtures</h1>
          <p className="text-xl text-slate-200 mb-2">{season.window}</p>
          <p className="text-slate-400 mb-4">32 matches · 8 teams · {season.venue}</p>
          <DataNote kind="fixtures" />
          <p className="mt-3 text-sm text-slate-400">Evening matches start at 5:00 PM following the revised schedule. Results are not connected to a live feed.</p>
          <p className="mt-2 text-sm text-slate-400">Results updated 27 October 2026 · Through Match 3. Only completed matches are included.</p>
        </header>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <label className="w-full sm:w-auto flex-1 min-w-0 text-sm text-slate-300">
            Team
            <select value={teamId} onChange={(event) => updateFilter('team', event.target.value)} className="block w-full mt-2 rounded-lg bg-slate-900 border border-white/20 p-3 text-white">
              <option value="all">All teams</option>
              {teams.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)}
            </select>
          </label>
          <label className="w-full sm:w-auto flex-1 min-w-0 text-sm text-slate-300">
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
          <div className="space-y-8">
            {fixtureDays.map(({ date, matches }) => (
              <section key={date} aria-labelledby={`fixtures-${date}`}>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-3 mb-4">
                  <h2 id={`fixtures-${date}`} className="text-lg sm:text-xl font-bold text-slate-100">
                    <time dateTime={date}>{formatMatchDate(matches[0].startsAt)}</time>
                  </h2>
                  <span className="text-sm text-slate-400">{matches.length} {matches.length === 1 ? 'match' : 'matches'}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {matches.map((match) => (
                    <article key={match.id} className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <div className="flex flex-wrap justify-between gap-2 mb-4 text-sm">
                        <h3 className="font-semibold text-sky-400">{match.label}</h3>
                        <span className="text-slate-400">{match.stage === 'league' ? 'League stage' : 'Playoffs · Teams TBD'}</span>
                      </div>
                      <div className="space-y-3">
                        <Opponent teamId={match.homeId} placeholder={match.homePlaceholder} score={match.result?.homeScore} />
                        <p className="text-xs uppercase text-slate-500">vs</p>
                        <Opponent teamId={match.awayId} placeholder={match.awayPlaceholder} score={match.result?.awayScore} />
                      </div>
                      <div className="border-t border-white/10 mt-5 pt-4">
                        <div className="flex flex-wrap items-center gap-2 text-sm">
                          <span className={`shrink-0 rounded-full px-2.5 py-1 font-semibold ${match.status === 'finished' ? 'bg-emerald-400/15 text-emerald-300' : 'bg-sky-400/10 text-sky-300'}`}>
                            {match.status === 'finished' ? 'Finished' : 'Scheduled'}
                          </span>
                          {match.result && <p className="flex-1 min-w-40 text-emerald-300">{match.result.summary}</p>}
                        </div>
                        <time dateTime={match.startsAt} className="block mt-3 text-sm font-bold text-slate-300">
                          {formatMatchTime(match.startsAt)} NPT
                        </time>
                        <p className="text-xs text-slate-400 mt-2">{match.venue}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
