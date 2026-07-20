import StatusBadge from './StatusBadge'

function AlertList({ alerts }) {
  return (
    <div className="space-y-3">
      {alerts.map((alert) => (
        <div key={alert.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-900">{alert.title}</p>
              <p className="mt-1 text-sm text-slate-600">{alert.message}</p>
            </div>
            <StatusBadge status={alert.severity} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default AlertList
