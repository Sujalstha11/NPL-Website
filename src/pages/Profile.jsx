import { useAuth } from '../context/AuthContext'

function Profile() {
  const { user } = useAuth()

  const fullName = user?.user_metadata?.full_name || 'No name set'
  const email = user?.email || ''
  const joinDate = user?.created_at
    ? new Date(user.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''
  const initial = (fullName || email || '?').charAt(0).toUpperCase()

  return (
    <div className="page-height bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8 min-w-0 w-full max-w-md shadow-lg">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-sky-500 text-gray-950 font-bold text-2xl flex items-center justify-center mb-4">
            {initial}
          </div>
          <h1 className="text-2xl font-bold text-white">{fullName}</h1>
        </div>

        <div className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">
            <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Email</p>
            <p className="text-white">{email}</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">
            <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Member Since</p>
            <p className="text-white">{joinDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile