function SustainabilityKpiCard({ label, value, unit, accent = 'emerald' }) {
  const accentStyles = {
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
    sky: 'bg-sky-500',
    violet: 'bg-violet-500',
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-3 flex items-end gap-2">
        <p className="text-2xl font-semibold text-slate-900">{value}</p>
        {unit ? <span className="pb-1 text-sm text-slate-500">{unit}</span> : null}
      </div>
      <div className={`mt-4 h-2 rounded-full ${accentStyles[accent] || accentStyles.emerald}`} />
    </div>
  )
}

export default SustainabilityKpiCard
