import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()


  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const [confirmText, setConfirmText] = useState('')
  const [confirmError, setConfirmError] = useState('')

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-sky-400 font-semibold'
      : 'text-slate-300 hover:text-sky-400'

  const fullName = user?.user_metadata?.full_name || ''
  const email = user?.email || ''
  const initial = (fullName || email || '?').charAt(0).toUpperCase()

  const handleConfirmLogout = async (e) => {
  e.preventDefault()
  setConfirmError('')

  if (confirmText.trim().toLowerCase() !== 'confirm') {
    setConfirmError('Type "confirm" exactly to log out')
    return
  }

  await logout()
  setShowLogoutModal(false)
  setConfirmText('')
  setSidebarOpen(false)
}

  return (
    <>
      <nav className="bg-gray-950 border-b border-white/10 text-white px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white-400">Nepal Premier League </h1>
        <div className="flex gap-6 items-center">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/teams" className={linkClass}>Teams</NavLink>
          <NavLink to="/matches" className={linkClass}>Matches</NavLink>
          <NavLink to="/tickets" className={linkClass}>Tickets</NavLink>
          <NavLink to="/points-table" className={linkClass}>Points Table</NavLink>

          {user ? (
            <button
              onClick={() => setSidebarOpen(true)}
              className="w-10 h-10 rounded-full bg-sky-500 text-gray-950 font-bold flex items-center justify-center hover:bg-sky-400 transition"
            >
              {initial}
            </button>
          ) : (
            <NavLink
              to="/login"
              className="bg-emerald-500 text-gray-950 font-semibold px-5 py-2 rounded-full hover:bg-sky-400 transition"
            >
              Login
            </NavLink>
          )}
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-in Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-950 border-l border-white/10 z-50 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <button
            onClick={() => setSidebarOpen(false)}
            className="self-end text-slate-400 hover:text-white mb-6"
          >
            ✕
          </button>

          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-sky-500 text-gray-950 font-bold text-2xl flex items-center justify-center mb-4">
              {initial}
            </div>
            <p className="text-white font-semibold text-lg">{fullName || 'No name set'}</p>
            <p className="text-slate-400 text-sm">{email}</p>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => { setSidebarOpen(false); navigate('/profile') }}
              className="text-left px-4 py-3 rounded-lg text-slate-300 hover:bg-white/5 hover:text-sky-400 transition"
            >
              Personal Information
            </button>
            <button
              onClick={() => { setSidebarOpen(false); navigate('/settings') }}
              className="text-left px-4 py-3 rounded-lg text-slate-300 hover:bg-white/5 hover:text-sky-400 transition"
            >
              Settings
            </button>
          </div>

          <button
             onClick={() => setShowLogoutModal(true)}
            className="mt-auto text-left px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition font-semibold"
            >
            Logout
        </button>
        </div>
      </div>
          {/* Logout Confirmation Modal */}
      {showLogoutModal && (
      <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center px-4">
        <div className="bg-gray-950 border border-white/10 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
          <h2 className="text-lg font-bold text-white mb-2 text-center">Log Out?</h2>
          <p className="text-slate-400 text-sm mb-4 text-center">
            Type <span className="text-sky-400 font-semibold">confirm</span> to log out.
          </p>

          {confirmError && (
            <p className="text-red-400 text-sm mb-3 text-center">{confirmError}</p>
          )}

          <form onSubmit={handleConfirmLogout} className="space-y-3">
            <input
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white text-center focus:outline-none focus:border-red-400"
              placeholder="Type confirm"
              autoFocus
            />

            <button
              type="submit"
              className="w-full bg-red-500 text-gray-950 font-bold py-2.5 rounded-lg hover:bg-red-400 transition"
            >
              Log Out
            </button>

            <button
              type="button"
              onClick={() => { setShowLogoutModal(false); setConfirmText(''); setConfirmError('') }}
              className="w-full text-slate-400 hover:text-white text-sm py-2"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
)}
    </>
  )
}

export default Navbar