import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const KICKOFF_DATE = new Date('2026-10-28T00:00:00')

function getTimeLeft() {
  const now = new Date()
  const diff = KICKOFF_DATE - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, started: true }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    started: false,
  }
}

function Matches() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white p-8">
      <Link to="/" className="text-white hover:underline mb-6 inline-block">
         ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold text-white mb-2 text-center">
        Matches
      </h1>
      <p className="text-slate-400 text-center mb-10">
        {timeLeft.started
          ? "The tournament has kicked off! 🏏"
          : "Countdown to Kickoff — October 28, 2026"}
      </p>

      {!timeLeft.started && (
        <div className="flex justify-center gap-4 mb-16">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-center min-w-[90px]"
            >
              <p className="text-4xl font-extrabold text-white">
                {String(unit.value).padStart(2, '0')}
              </p>
              <p className="text-sm text-slate-400 mt-1">{unit.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Fixtures</h2>
        <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
          <p className="text-slate-300">
            Match fixtures will be announced closer to the tournament. Check back soon!
          </p>
          <p className="text-white font-semibold mt-3">Status: TBD</p>
        </div>
      </div>
    </div>
  )
}

export default Matches