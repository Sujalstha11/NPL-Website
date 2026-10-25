import { useState } from 'react'
import pointsTable from '../data/pointsTable'
import { season } from '../data/season.js'
import { Link } from 'react-router-dom'

const seasons = [2026, 2025, 2024]

function PointsTable() {
  const [selectedSeason, setSelectedSeason] = useState(2026)

  const seasonData = pointsTable[selectedSeason]
  const standings = [...seasonData.standings].sort((a, b) => b.points - a.points || b.nrr - a.nrr)
  const champion = seasonData.champion

  return (
    <div className="page-height bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white px-4 py-6 sm:p-8">
      <Link to="/" className="text-white hover:underline mb-6 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2 text-center">
        Points Table
      </h1>
      <p className="text-slate-400 text-center mb-6">
        {selectedSeason === 2026
          ? `Pre-season snapshot · Reviewed ${season.reviewedLabel} · No matches played; results are not live.`
          : `Final standings — NPL ${selectedSeason}`}
      </p>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
        {seasons.map((season) => (
          <button
            key={season}
            onClick={() => setSelectedSeason(season)}
            className={`min-h-11 px-4 sm:px-5 py-2 rounded-full font-semibold transition ${
              selectedSeason === season
                ? 'bg-emerald-500 text-gray-950'
                : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
            }`}
          >
            {season}
          </button>
        ))}
      </div>

      {champion && (
        <div
          className="max-w-4xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-lg relative"
          style={{
            backgroundImage: seasonData.bannerImg ? `url(${seasonData.bannerImg})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="bg-gray-950/60 p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 min-h-56 sm:min-h-[280px]">
            {champion.logo && (
              <img
                src={champion.logo}
                alt={champion.name}
                className="w-20 h-20 sm:w-28 sm:h-28 shrink-0 object-contain"
              />
            )}
            <div className="text-center">
              <p className="text-sm text-emerald-400 uppercase tracking-wide">
                {selectedSeason} Champions
              </p>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">{champion.name}</p>
            </div>
          </div>
        </div>
      )}

      <p className="sm:hidden max-w-4xl mx-auto text-sm text-slate-400 mb-3">Swipe the table to see all columns.</p>
      <div role="region" aria-label="Season standings, scroll horizontally for all columns" tabIndex={0} className="max-w-4xl mx-auto overflow-x-auto overscroll-x-contain rounded-lg">
        <table className="w-full min-w-[36rem] text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-emerald-400 text-sm uppercase">
              <th className="py-3 px-3">#</th>
              <th className="py-3 px-3">Team</th>
              <th className="py-3 px-3 text-center">P</th>
              <th className="py-3 px-3 text-center">W</th>
              <th className="py-3 px-3 text-center">L</th>
              <th className="py-3 px-3 text-center">NRR</th>
              <th className="py-3 px-3 text-center">Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team, index) => (
              <tr
                key={team.id}
                className={`border-b border-white/10 hover:bg-white/5 transition ${
                  champion && team.id === champion.id ? 'bg-emerald-400/10' : ''
                }`}
              >
                <td className="py-3 px-3 text-slate-400">{selectedSeason === 2026 ? '—' : index + 1}</td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-3">
                  {team.logo && (
                    <img src={team.logo} alt="" className="w-8 h-8 shrink-0 object-contain" />
                  )}
                  <span className={`font-semibold ${champion && team.id === champion.id ? 'text-emerald-400' : ''}`}>
                    {team.name}
                  </span>
                  {champion && team.id === champion.id && <span title="Champion">🏆</span>}
                  </div>
                </td>
                <td className="py-3 px-3 text-center">{team.played}</td>
                <td className="py-3 px-3 text-center">{team.won}</td>
                <td className="py-3 px-3 text-center">{team.lost}</td>
                <td className="py-3 px-3 text-center">{team.played ? team.nrr.toFixed(3) : '—'}</td>
                <td className="py-3 px-3 text-center font-bold text-emerald-400">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PointsTable
