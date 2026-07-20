function StatusBadge({ status }) {
  const styles = {
    Normal: 'bg-emerald-100 text-emerald-700',
    Warning: 'bg-amber-100 text-amber-700',
    Critical: 'bg-rose-100 text-rose-700',
  }

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status] || styles.Normal}`}>
      {status}
    </span>
  )
}

export default StatusBadge
