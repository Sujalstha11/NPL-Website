import { useState } from 'react'
import teams from '../data/teams'
import { Link } from 'react-router-dom'

function Teams() {
  const [selectedTeam, setSelectedTeam] = useState(teams[0])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white p-8">
      <Link to="/" className="text-white hover:underline mb-6 inline-block">
  ← Back to Home
</Link>
          <h1 className="text-4xl font-bold text-white-400 mb-8 text-center">
        NPL Teams
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Cards grid */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {teams.map((team) => (
            <button
              key={team.id}
              onClick={() => setSelectedTeam(team)}
              className={`bg-white/5 border border-white/10 rounded-xl p-4 text-left hover:bg-white/10 transition ${
                selectedTeam.id === team.id ? 'ring-2 ring-emerald-400' : ''
              }`}
            >
              {team.logo && (
                <img src={team.logo} alt={team.name} className="w-12 h-12 object-contain mb-2" />
              )}
              <p className="font-bold text-sm">{team.name}</p>
              <p className="text-xs text-slate-400 mb-2">{team.region}</p>
              <Link
                to={`/teams/${team.id}/players`}
                onClick={(e) => e.stopPropagation()}
                className="text-xs underline text-emerald-400 hover:text-emerald-300"
              >
                View Players →
              </Link>
            </button>
          ))}
        </div>

        {/* Description panel */}
        <div className="bg-white/5 rounded-xl p-8 shadow-lg border border-white/10">
          <div className="flex items-center gap-4 mb-4">
            {selectedTeam.logo && (
              <img src={selectedTeam.logo} alt={selectedTeam.name} className="w-20 h-20 object-contain" />
            )}
            <h2 className="text-3xl font-bold text-emerald-400">{selectedTeam.name}</h2>
          </div>
          <p className="text-base text-slate-400 mb-4">{selectedTeam.region}</p>
          <p className="text-lg mb-3">
            <span className="font-semibold text-emerald-400">Captain:</span> {selectedTeam.captain}
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold text-emerald-400">Coach:</span> {selectedTeam.coach}
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">{selectedTeam.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Teams