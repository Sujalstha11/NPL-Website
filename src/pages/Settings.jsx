import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabaseClient'

function Settings() {
  const { user } = useAuth()

  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordMsg, setPasswordMsg] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [emailNotifications, setEmailNotifications] = useState(
    user?.user_metadata?.email_notifications ?? true
  )
  const [prefMsg, setPrefMsg] = useState('')

  const handlePasswordChange = async (e) => {
    e.preventDefault()
    setPasswordMsg('')
    setPasswordError('')

    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match')
      return
    }
    if (newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters')
      return
    }

    const { error } = await supabase.auth.updateUser({ password: newPassword })

    if (error) {
      setPasswordError(error.message)
      return
    }

    setPasswordMsg('Password updated successfully')
    setNewPassword('')
    setConfirmPassword('')
  }

  const handleToggleNotifications = async () => {
    const newValue = !emailNotifications
    setEmailNotifications(newValue)
    setPrefMsg('')

    const { error } = await supabase.auth.updateUser({
      data: { email_notifications: newValue },
    })

    if (error) {
      setPrefMsg('Failed to save preference')
      setEmailNotifications(!newValue)
      return
    }

    setPrefMsg('Preference saved')
  }

  return (
    <div className="page-height bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-white text-center">Settings</h1>

        {/* Change Password */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-white mb-4">Change Password</h2>

          {passwordError && (
            <p className="text-red-400 text-sm mb-3">{passwordError}</p>
          )}
          {passwordMsg && (
            <p className="text-emerald-400 text-sm mb-3">{passwordMsg}</p>
          )}

          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-sky-400"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-1">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-sky-400"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sky-500 text-gray-950 font-bold py-3 rounded-lg hover:bg-sky-400 transition"
            >
              Update Password
            </button>
          </form>
        </div>

        {/* Email Preferences */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-white mb-4">Email Preferences</h2>

          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-300">Receive match & ticket updates</span>
            <button
              aria-label="Receive match and ticket updates"
              aria-pressed={emailNotifications}
              onClick={handleToggleNotifications}
              className="w-12 h-11 shrink-0 flex items-center rounded-full"
            >
              <span
                aria-hidden="true"
                className={`relative w-12 h-6 rounded-full transition ${
                  emailNotifications ? 'bg-sky-500' : 'bg-white/20'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    emailNotifications ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </span>
            </button>
          </div>

          {prefMsg && (
            <p className="text-sm text-slate-400 mt-3">{prefMsg}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings
