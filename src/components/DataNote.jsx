import { season } from '../data/season.js'

export default function DataNote({ kind = 'squads' }) {
  return (
    <div className="text-sm text-slate-400 leading-relaxed">
      <p>Season {season.edition} · Reviewed {kind === 'squads' ? season.squadsReviewedLabel : season.reviewedLabel}</p>
      <p>
        {kind === 'fixtures' ? 'All times are Nepal time (NPT, UTC+5:45). ' : 'Published squads and announced signings; selections may change. '}
        <a className="text-sky-400 underline hover:text-sky-300" href={season.sources[kind]} target="_blank" rel="noopener noreferrer">
          {kind === 'fixtures' ? 'Schedule source' : 'Squad sources'}
        </a>
        {' · '}
        <a className="text-sky-400 underline hover:text-sky-300" href={kind === 'fixtures' ? season.sources.timings : season.sources.latestSignings} target="_blank" rel="noopener noreferrer">
          {kind === 'fixtures' ? 'Revised timings' : 'Latest signings'}
        </a>
      </p>
    </div>
  )
}
