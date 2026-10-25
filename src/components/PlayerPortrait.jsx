import { useState } from 'react'
import playerPhotos from '../data/playerPhotos.json'

export default function PlayerPortrait({ name }) {
  const [failed, setFailed] = useState(false)
  const photo = playerPhotos[name]
  const initials = name.split(/\s+/).map((part) => part[0]).slice(0, 2).join('')

  return (
    <div className="aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-slate-700/60 to-slate-950">
      {photo && !failed ? (
        <img
          src={photo.src}
          alt={name}
          width="320"
          height="400"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <div role="img" aria-label={`Photo unavailable for ${name}`} className="h-full flex flex-col items-center justify-center gap-3 p-3 text-center">
          <span aria-hidden="true" className="text-3xl font-bold text-sky-300">{initials}</span>
          <span className="text-xs text-slate-400">Photo unavailable</span>
        </div>
      )}
    </div>
  )
}
