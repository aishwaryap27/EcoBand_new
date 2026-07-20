import StatusBadge from './StatusBadge'

function DustbinCard({ bin }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">{bin.id}</p>
          <p className="mt-1 text-sm text-slate-500">{bin.location}</p>
        </div>
        <StatusBadge status={bin.status} />
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-slate-500">Fill level</span>
          <span className="font-semibold text-slate-900">{bin.fillLevel}%</span>
        </div>
        <div className="h-2 rounded-full bg-slate-100">
          <div
            className={`h-2 rounded-full ${bin.fillLevel > 80 ? 'bg-rose-500' : bin.fillLevel > 60 ? 'bg-amber-500' : 'bg-emerald-500'}`}
            style={{ width: `${bin.fillLevel}%` }}
          />
        </div>
      </div>

      <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-slate-500">Weight</p>
          <p className="mt-1 font-semibold text-slate-900">{bin.weight}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-slate-500">Waste type</p>
          <p className="mt-1 font-semibold text-slate-900">{bin.wasteType}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-slate-500">Battery</p>
          <p className="mt-1 font-semibold text-slate-900">{bin.battery}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-slate-500">Gas</p>
          <p className="mt-1 font-semibold text-slate-900">{bin.gasStatus}</p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
        <span className="font-semibold text-slate-900">Collection:</span> {bin.collectionStatus}
      </div>
    </div>
  )
}

export default DustbinCard
