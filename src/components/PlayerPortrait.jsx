import { useState } from 'react'
import playerPhotos from '../data/playerPhotos.json'

export default function PlayerPortrait({ name }) {
  const [failed, setFailed] = useState(false)
  const [useFallback, setUseFallback] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const photo = playerPhotos[name]
  const initials = name.split(/\s+/).map((part) => part[0]).slice(0, 2).join('')
  const imageSrc = useFallback ? photo?.fallbackSrc : photo?.src

  return (
    <div className="aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-slate-700/60 to-slate-950">
      {photo && !failed ? (
        <img
          key={attempt}
          src={attempt ? `${imageSrc}?retry=${attempt}` : imageSrc}
          alt={name}
          width="320"
          height="400"
          loading="lazy"
          decoding="async"
          onError={() => {
            if (!useFallback && photo.fallbackSrc) setUseFallback(true)
            else setFailed(true)
          }}
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <div className="h-full flex flex-col items-center justify-center gap-3 p-3 text-center">
          <span aria-hidden="true" className="text-3xl font-bold text-sky-300">{initials}</span>
          <span className="text-xs text-slate-400">Photo unavailable</span>
          {photo && <button
            type="button"
            aria-label={`Retry photo for ${name}`}
            onClick={() => { setAttempt(attempt + 1); setFailed(false) }}
            className="min-h-11 rounded-lg border border-white/20 px-3 text-xs text-sky-300 hover:bg-white/10"
          >Retry photo</button>}
        </div>
      )}
    </div>
  )
}
