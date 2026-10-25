import { useEffect, useState } from 'react'
import { getTimeLeft } from '../data/season.js'

export default function useCountdown(startsAt) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(startsAt))
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(startsAt)), 1000)
    return () => clearInterval(timer)
  }, [startsAt])
  return timeLeft
}
