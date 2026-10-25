import stadiumImg from '../assets/stadium.webp'
import { Link } from 'react-router-dom'

function Tickets() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${stadiumImg})` }}
    >
      {/* dark overlay so text stays readable over the photo */}
      <div className="absolute inset-0 bg-gray-950/80"></div>
<Link
  to="/"
  className="absolute top-6 left-6 z-20 text-white/80 hover:underline"
>
  ← Back to Home
</Link>
      <div className="relative z-10 text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-400 mb-4">
          Get Your Tickets
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          Secure your seat and be part of the action live at the stadium
        </p>

        <a
          href="https://esewa.com.np"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold px-8 py-4 rounded-full transition shadow-lg"
        >
          Buy Your Ticket with eSewa
        </a>

        <p className="text-slate-400 text-sm mt-6">
          You'll be redirected to eSewa to complete your purchase securely.
        </p>
      </div>
    </div>
  )
}

export default Tickets
