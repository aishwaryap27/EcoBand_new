import { Link, useParams } from 'react-router-dom'
import { blockDetailsData } from '../../data/blockDetailsData'
import StatusBadge from './StatusBadge'

function BinDetailsPage() {
  const { binId } = useParams()
  const allBins = Object.values(blockDetailsData).flatMap((block) =>
    block.floors.flatMap((floor) => floor.bins.map((bin) => ({ ...bin, blockName: block.name })))
  )
  const bin = allBins.find((item) => item.id === binId)

  if (!bin) {
    return (
      <div className="min-h-screen bg-[linear-gradient(135deg,_#f8fcf8_0%,_#f3f7f2_100%)] p-6 text-slate-900">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">Bin not found</h1>
          <p className="mt-2 text-slate-500">The requested dustbin could not be loaded.</p>
          <Link to="/" className="mt-5 inline-flex rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">
            Return to dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#f8fcf8_0%,_#f3f7f2_100%)] px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <header className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Link to={`/blocks/${bin.blockName}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-lg text-slate-700 transition hover:border-emerald-200 hover:text-emerald-600">
                ←
              </Link>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Bin Details</p>
                <h1 className="text-2xl font-semibold text-slate-900">{bin.id}</h1>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={bin.fillLevel > 80 ? 'Critical' : bin.fillLevel > 60 ? 'Warning' : 'Normal'} />
              <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                {bin.blockName} · {bin.collectionStatus}
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Fill Level</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{bin.fillLevel}%</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Weight</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{bin.weight} kg</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Battery</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{bin.battery}%</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Waste Type</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{bin.wasteType}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Gas Status</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{bin.gasStatus}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Last Updated</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{bin.lastUpdated}</p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Detailed Metrics</h2>
            <button className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
              Mark as Collected
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Estimated Calorific Value</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{bin.calorificValue}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Estimated Recyclable Waste</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{bin.recyclableWaste}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Temperature</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{bin.temperature}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Humidity</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{bin.humidity}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BinDetailsPage
