import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10 text-slate-400 px-4 sm:px-8 py-8 sm:py-10 relative z-10">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Nepal Premier League 🏏</h3>
          <p className="text-sm">
            Festival of the Himalayas — Nepal's biggest T20 cricket carnival.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/teams" className="inline-flex min-h-11 items-center hover:text-sky-400 transition">Teams</Link></li>
            <li><Link to="/matches" className="inline-flex min-h-11 items-center hover:text-sky-400 transition">Matches</Link></li>
            <li><Link to="/tickets" className="inline-flex min-h-11 items-center hover:text-sky-400 transition">Tickets</Link></li>
            <li><Link to="/points-table" className="inline-flex min-h-11 items-center hover:text-sky-400 transition">Points Table</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Follow Us</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a href="#" className="inline-flex min-h-11 items-center hover:text-sky-400 transition">Facebook</a>
            <a href="#" className="inline-flex min-h-11 items-center hover:text-sky-400 transition">Instagram</a>
            <a href="#" className="inline-flex min-h-11 items-center hover:text-sky-400 transition">YouTube</a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/10 mt-8 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Nepal Premier League. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer