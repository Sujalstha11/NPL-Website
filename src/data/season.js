export const season = {
  year: 2026,
  edition: 3,
  reviewedOn: '2026-10-25',
  reviewedLabel: '25 October 2026',
  squadsReviewedLabel: '26 October 2026',
  timeZone: 'Asia/Kathmandu',
  venue: 'TU International Cricket Ground, Kirtipur',
  window: '26 October – 21 November 2026',
  sources: {
    fixtures: 'https://nplt20league.com/schedule/',
    timings: 'https://risingnepaldaily.com/news/88002',
    squads: 'https://gorkhasports.com/npl-2026/squads',
    latestSignings: 'https://kathmandupost.com/sports/2026/10/25/npl-returns-with-bigger-ambitions-and-global-recognition',
  },
}

export function formatMatchDate(startsAt) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: season.timeZone, weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
  }).format(new Date(startsAt))
}

export function formatMatchTime(startsAt) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: season.timeZone, hour: 'numeric', minute: '2-digit', hour12: true,
  }).format(new Date(startsAt))
}

export function getTimeLeft(startsAt, now = Date.now()) {
  const diff = Math.max(0, new Date(startsAt).getTime() - now)
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    started: diff === 0,
  }
}
