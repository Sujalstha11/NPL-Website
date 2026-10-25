import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { animate } from 'animejs'
import trophyImg from '../assets/trophy.webp'
import ticketImg from '../assets/ticket.webp'
import pointsImg from '../assets/points.webp'
import teams from '../data/teams'
import pointsTable from '../data/pointsTable'
import Footer from '../components/Footer'
import { openingMatch } from '../data/fixtures.js'
import { season, formatMatchDate, formatMatchTime } from '../data/season.js'
import useCountdown from '../hooks/useCountdown.js'

function useFadeInOnScroll() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(el, {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            easing: 'easeOutExpo',
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

function Home() {
  const timeLeft = useCountdown(openingMatch.startsAt)

  const heroRef = useFadeInOnScroll()
  const countdownRef = useFadeInOnScroll()
  const teamsRef = useFadeInOnScroll()
  const championsRef = useFadeInOnScroll()
  const aboutRef = useFadeInOnScroll()
  const ticketsRef = useFadeInOnScroll()
  const pointsRef = useFadeInOnScroll()

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  const champions2024 = pointsTable[2024]?.champion
  const champions2025 = pointsTable[2025]?.champion

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white px-4 py-16 relative overflow-hidden">

      {/* Floating glow orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-float-slow pointer-events-none"></div>
      <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-sky-400/10 rounded-full blur-3xl animate-float-slow-reverse pointer-events-none"></div>
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl animate-float-slow pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">

        {/* Hero section */}
        <div ref={heroRef} className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-400 mb-2">
              Welcome to
            </h1>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              Nepal Premier League 🏏
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl">
              Festival of the Himalayas — Nepal's biggest cricket carnival
            </p>
            <Link
              to="/matches"
              className="inline-block bg-sky-500 text-gray-950 font-bold px-6 py-3 rounded-full hover:bg-sky-400 transition"
            >
              View Fixtures
            </Link>
          </div>
          <div className="bg-gray-950 rounded-3xl p-3 border-4 border-white/10 shadow-lg">
            <img src={trophyImg} alt="Nepal Premier League" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>

        {/* Countdown teaser */}
        <div ref={countdownRef} className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">
            {timeLeft.started ? "NPL 2026 Match Schedule" : "Countdown to Kickoff"}
          </h2>
          <p className="text-slate-400 mb-8">{formatMatchDate(openingMatch.startsAt)} · {formatMatchTime(openingMatch.startsAt)} NPT</p>
          <p className="text-slate-300 mb-3">Lumbini Lions vs Sudurpaschim Royals</p>
          <p className="text-sm text-slate-400 mb-6">Season {season.edition} · {season.window} · Reviewed {season.reviewedLabel}</p>
          <Link to="/matches" className="inline-block text-sky-400 underline mb-6">View all 32 fixtures →</Link>
          {!timeLeft.started && (
            <div className="flex justify-center gap-2 sm:gap-4">
              {timeUnits.map((unit) => (
                <div
                  key={unit.label}
                  className="bg-white/5 border border-white/10 rounded-xl px-3 sm:px-6 py-4 text-center min-w-0"
                >
                  <p className="text-3xl font-extrabold text-sky-400">
                    {String(unit.value).padStart(2, '0')}
                  </p>
                  <p className="text-sm text-slate-400 mt-1">{unit.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Featured Teams strip */}
        <div ref={teamsRef}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Teams</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {teams.map((team) => (
              <Link
                key={team.id}
                to={`/teams/${team.id}/players`}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition"
              >
                {team.logo && (
                  <img src={team.logo} alt={team.name} className="w-12 h-12 object-contain mx-auto mb-2" />
                )}
                <p className="text-sm font-semibold">{team.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Champions strip */}
        <div ref={championsRef}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Past Champions</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {champions2025 && (
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <p className="text-sm text-sky-400 uppercase tracking-wide mb-2">2025 Champions</p>
                {champions2025.logo && (
                  <img src={champions2025.logo} alt={champions2025.name} className="w-24 h-24 object-contain mx-auto mb-2" />
                )}
                <p className="text-xl font-bold">{champions2025.name}</p>
              </div>
            )}
            {champions2024 && (
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <p className="text-sm text-sky-400 uppercase tracking-wide mb-2">2024 Champions</p>
                {champions2024.logo && (
                  <img src={champions2024.logo} alt={champions2024.name} className="w-24 h-24 object-contain mx-auto mb-2" />
                )}
                <p className="text-xl font-bold">{champions2024.name}</p>
              </div>
            )}
          </div>
        </div>

        {/* About NPL */}
        <div ref={aboutRef} className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">About the League</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            The Nepal Premier League is an 8-team T20 cricket tournament organized by the
            Cricket Association of Nepal, first launched in 2024. Franchises representing
            major cities and provinces battle it out in a round-robin format followed by
            playoffs, showcasing both rising Nepali talent and international stars.
          </p>
        </div>

        {/* Tickets section */}
        <div ref={ticketsRef} className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-white mb-4">Get Your Tickets</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              Secure your seat and be part of the action live
            </p>
            <Link
              to="/tickets"
              className="inline-block bg-sky-500 text-gray-950 font-bold px-6 py-3 rounded-full hover:bg-sky-400 transition"
            >
              View Tickets
            </Link>
          </div>
          <div className="bg-gray-950 rounded-3xl p-3 border-4 border-white/10 shadow-lg">
            <img src={ticketImg} alt="NPL Tickets" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>

        {/* Points table section */}
        <div ref={pointsRef} className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-white mb-4">Check the Standings</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              See how your favorite team is performing this season
            </p>
            <Link
              to="/points-table"
              className="inline-block bg-sky-500 text-gray-950 font-bold px-6 py-3 rounded-full hover:bg-sky-400 transition"
            >
              View Points Table
            </Link>
          </div>
          <div className="bg-gray-950 rounded-3xl p-3 border-4 border-white/10 shadow-lg">
            <img src={pointsImg} alt="NPL Points Table" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Home