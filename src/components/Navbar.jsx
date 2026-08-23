import { NavLink } from 'react-router-dom'

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-sky-400 font-semibold'
      : 'text-slate-300 hover:text-sky-400'

  return (
    <nav className="bg-gray-950 border-b border-white/10 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-white-400">Nepal Premier League </h1>
      <div className="flex gap-6 items-center">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/teams" className={linkClass}>Teams</NavLink>
        <NavLink to="/matches" className={linkClass}>Matches</NavLink>
        <NavLink to="/tickets" className={linkClass}>Tickets</NavLink>
        <NavLink to="/points-table" className={linkClass}>Points Table</NavLink>
        <NavLink
          to="/login"
          className="bg-emerald-500 text-gray-950 font-semibold px-5 py-2 rounded-full hover:bg-sky-400 transition"
        >
          Login
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar