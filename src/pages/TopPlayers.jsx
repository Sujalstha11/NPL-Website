import { Link } from 'react-router-dom'
import teams from '../data/teams'
import PlayerPortrait from '../components/PlayerPortrait'
import playerPhotos from '../data/playerPhotos.json'
import { playerStatsSnapshot, topRunScorers, topWicketTakers } from '../data/topPlayers.js'

function Leaderboard({ title, metric, players }) {
  const leader = players[0]
  const isBatting = metric === 'runs'
  const accent = isBatting ? 'text-sky-300' : 'text-emerald-300'
  const headingId = `top-${metric}`

  return (
    <section aria-labelledby={headingId} className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className={`p-5 sm:p-6 border-b border-white/10 ${isBatting ? 'bg-sky-400/5' : 'bg-emerald-400/5'}`}>
        <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${accent}`}>{isBatting ? 'Batting' : 'Bowling'}</p>
        <h2 id={headingId} className="text-xl sm:text-2xl font-bold">{title}</h2>
        {leader && (
          <div className="flex items-center gap-4 mt-5">
            <div className="w-16 sm:w-20 shrink-0 rounded-xl overflow-hidden border border-white/10">
              {playerPhotos[leader.name] ? <PlayerPortrait name={leader.name} /> : (
                <div className="aspect-[4/5] flex items-center justify-center bg-white/5 p-2">
                  <img src={teams.find((team) => team.id === leader.teamId)?.logo} alt={`${teams.find((team) => team.id === leader.teamId)?.name} logo`} className="w-full object-contain" />
                </div>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-slate-400 mb-1">Season leader</p>
              <p className="font-bold text-lg">{leader.name}</p>
              <p className="text-sm text-slate-400">{teams.find((team) => team.id === leader.teamId)?.name}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className={`text-3xl sm:text-4xl font-extrabold tabular-nums ${accent}`}>{leader[metric]}</p>
              <p className="text-xs text-slate-400 capitalize">{metric}</p>
            </div>
          </div>
        )}
      </div>
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{title} in NPL {playerStatsSnapshot.season}, through Match {playerStatsSnapshot.throughMatch}</caption>
        <thead className="text-xs uppercase text-slate-400 bg-gray-950/30">
          <tr>
            <th scope="col" className="pl-4 sm:pl-6 py-3 pr-2">Rank</th>
            <th scope="col" className="py-3 px-2">Player</th>
            <th scope="col" className="py-3 px-2 text-center"><abbr title="Matches" className="no-underline">M</abbr></th>
            <th scope="col" className={`py-3 pl-2 pr-4 sm:pr-6 text-right ${accent}`}>{metric}</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => {
            const team = teams.find((entry) => entry.id === player.teamId)
            return (
              <tr key={player.name} className="border-t border-white/5 hover:bg-white/5">
                <td className={`pl-4 sm:pl-6 pr-2 py-4 tabular-nums ${player.rank === 1 ? `${accent} font-bold` : 'text-slate-400'}`}>{player.rank}</td>
                <th scope="row" className="px-2 py-4 font-normal">
                  <span className="block font-semibold text-slate-100">{player.name}</span>
                  <Link to={`/teams/${player.teamId}/players`} className="mt-1 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-sky-300">
                    <img src={team?.logo} alt="" className="h-4 w-4 shrink-0 object-contain" />
                    {team?.name}
                  </Link>
                </th>
                <td className="px-2 py-4 text-center text-slate-400 tabular-nums">{player.matches}</td>
                <td className={`pl-2 pr-4 sm:pr-6 py-4 text-right text-lg font-bold tabular-nums ${accent}`}>{player[metric]}</td>
              </tr>
            )
          })}
          {Array.from({ length: 10 - players.length }, (_, index) => (
            <tr key={`pending-${index}`} className="border-t border-white/5 text-slate-500">
              <td className="pl-4 sm:pl-6 pr-2 py-5">—</td>
              <td colSpan={3} className="px-2 py-5 text-xs">{isBatting ? 'Awaiting more run scorers' : 'Awaiting more wicket-takers'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {players.length < 10 && <p className="border-t border-white/10 p-4 sm:px-6 text-xs leading-relaxed text-slate-400">Only {players.length} players have {isBatting ? 'scored runs' : 'taken wickets'} so far. Remaining places will fill as the season progresses.</p>}
    </section>
  )
}

export default function TopPlayers() {
  return (
    <div className="page-height bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white px-4 py-8 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="hover:underline mb-6 inline-block">← Back to Home</Link>
        <header className="mb-8">
          <p className="text-sky-400 font-semibold mb-2">NPL {playerStatsSnapshot.season} · Season leaders</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Top Players</h1>
          <p className="text-slate-300 mb-4">The leading run scorers and wicket-takers this season.</p>
          <p className="text-sm text-slate-400">After Match {playerStatsSnapshot.throughMatch} · Updated {playerStatsSnapshot.reviewedLabel} (Nepal time) · Completed matches only; stats are not live.</p>
        </header>
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <Leaderboard title="Top 10 Run Scorers" metric="runs" players={topRunScorers} />
          <Leaderboard title="Top 10 Wicket Takers" metric="wickets" players={topWicketTakers} />
        </div>
        <div className="mt-6 space-y-3 text-xs leading-relaxed text-slate-400">
          <p>Ranked by season totals. Equal totals share a rank and appear alphabetically; each list shows up to 10 players.</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>Sources:</span>
            {playerStatsSnapshot.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="text-sky-400 underline">{source.label}</a>)}
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>Leader photo credits:</span>
            {[topRunScorers[0], topWicketTakers[0]].filter(Boolean).map((player) => playerPhotos[player.name] && <a key={player.name} href={playerPhotos[player.name].source} target="_blank" rel="noopener noreferrer" className="text-sky-400 underline">{player.name}</a>)}
          </p>
        </div>
      </div>
    </div>
  )
}
