import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge'

function BlockCard({ block }) {
  return (
    <Link to={`/blocks/${block.name}`} className="block rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{block.name}</h3>
          <p className="mt-1 text-sm text-slate-500">{block.description}</p>
        </div>
        <StatusBadge status={block.status} />
      </div>

      <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-slate-500">Floors</p>
          <p className="mt-1 font-semibold text-slate-900">{block.floors}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-slate-500">Dustbins</p>
          <p className="mt-1 font-semibold text-slate-900">{block.dustbins}</p>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-slate-500">Bins filled</span>
          <span className="font-semibold text-slate-900">{block.fillPercentage}%</span>
        </div>
        <div className="h-2 rounded-full bg-slate-100">
          <div
            className={`h-2 rounded-full ${block.fillPercentage > 75 ? 'bg-rose-500' : block.fillPercentage > 55 ? 'bg-amber-500' : 'bg-emerald-500'}`}
            style={{ width: `${block.fillPercentage}%` }}
          />
        </div>
      </div>

      <div className="mt-5 w-full rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-center text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100">
        Quick view
      </div>
    </Link>
  )
}

export default BlockCard
