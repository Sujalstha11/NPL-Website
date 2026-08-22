import { useState } from 'react'
import pointsTable from '../data/pointsTable'
import { Link } from 'react-router-dom'

const seasons = [2026, 2025, 2024]

function PointsTable() {
  const [selectedSeason, setSelectedSeason] = useState(2026)

  const seasonData = pointsTable[selectedSeason]
  const standings = [...seasonData.standings].sort((a, b) => b.points - a.points)
  const champion = seasonData.champion

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white p-8">
      <Link to="/" className="text-white hover:underline mb-6 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold text-emerald-400 mb-2 text-center">
        Points Table
      </h1>
      <p className="text-slate-400 text-center mb-6">
        {selectedSeason === 2026
          ? 'Standings will update once the tournament begins'
          : `Final standings — NPL ${selectedSeason}`}
      </p>

      <div className="flex justify-center gap-3 mb-8">
        {seasons.map((season) => (
          <button
            key={season}
            onClick={() => setSelectedSeason(season)}
            className={`px-5 py-2 rounded-full font-semibold transition ${
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
          <div className="bg-gray-950/60 p-12 flex items-center justify-center gap-6 min-h-[280px]">
            {champion.logo && (
              <img
                src={champion.logo}
                alt={champion.name}
                className="w-28 h-28 object-contain"
              />
            )}
            <div className="text-center">
              <p className="text-sm text-emerald-400 uppercase tracking-wide">
                {selectedSeason} Champions
              </p>
              <p className="text-3xl font-extrabold text-white">{champion.name}</p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto overflow-x-auto">
        <table className="w-full text-left border-collapse">
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
                <td className="py-3 px-3 text-slate-400">{index + 1}</td>
                <td className="py-3 px-3 flex items-center gap-3">
                  {team.logo && (
                    <img src={team.logo} alt={team.name} className="w-8 h-8 object-contain" />
                  )}
                  <span className={`font-semibold ${champion && team.id === champion.id ? 'text-emerald-400' : ''}`}>
                    {team.name}
                  </span>
                  {champion && team.id === champion.id && <span title="Champion">🏆</span>}
                </td>
                <td className="py-3 px-3 text-center">{team.played}</td>
                <td className="py-3 px-3 text-center">{team.won}</td>
                <td className="py-3 px-3 text-center">{team.lost}</td>
                <td className="py-3 px-3 text-center">{team.nrr.toFixed(2)}</td>
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