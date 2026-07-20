import { Link, useParams } from 'react-router-dom'
import { blockDetailsData } from '../../data/blockDetailsData'
import StatusBadge from './StatusBadge'

function BlockDetailsPage() {
  const { blockName } = useParams()
  const block = blockDetailsData[blockName]

  if (!block) {
    return (
      <div className="min-h-screen bg-[linear-gradient(135deg,_#f8fcf8_0%,_#f3f7f2_100%)] p-6 text-slate-900">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">Block not found</h1>
          <p className="mt-2 text-slate-500">The requested block could not be loaded.</p>
          <Link to="/" className="mt-5 inline-flex rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">
            Return to dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#f8fcf8_0%,_#f3f7f2_100%)] px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-lg text-slate-700 transition hover:border-emerald-200 hover:text-emerald-600">
                ←
              </Link>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Block Details</p>
                <h1 className="text-2xl font-semibold text-slate-900">{block.name}</h1>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={block.health === 'Critical' ? 'Critical' : block.health === 'Good' ? 'Normal' : 'Warning'} />
              <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                Last updated {block.lastUpdated}
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Floors</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{block.summary.floors}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Smart Dustbins</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{block.summary.smartDustbins}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Average Fill Level</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{block.summary.averageFillLevel}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Pending Collections</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{block.summary.pendingCollections}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Active Alerts</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{block.summary.activeAlerts}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Average Battery Health</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{block.summary.averageBatteryHealth}</p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-slate-900">Sustainability Summary</h2>
            <p className="mt-1 text-sm text-slate-500">Environmental performance indicators</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Total Waste</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{block.sustainability.totalWaste}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Estimated Recyclable Waste</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{block.sustainability.recyclableWaste}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Estimated Organic Waste</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{block.sustainability.organicWaste}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Estimated Calorific Value</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{block.sustainability.calorificValue}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Potential Energy Recovery</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{block.sustainability.energyRecovery}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Estimated CO₂ Saved</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{block.sustainability.co2Saved}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 md:col-span-2 xl:col-span-1">
              <p className="text-sm text-slate-500">Waste Diverted from Landfill</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{block.sustainability.landfillDiversion}</p>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          {block.floors.map((floor) => (
            <div key={floor.title} className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">{floor.title}</h2>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">1 Smart Dustbin</span>
              </div>

              <div className="grid gap-4 lg:grid-cols-1">
                {floor.bins.map((bin) => (
                  <div key={bin.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <p className="text-lg font-semibold text-slate-900">{bin.id}</p>
                        <p className="mt-1 text-sm text-slate-500">Last updated {bin.lastUpdated}</p>
                      </div>
                      <StatusBadge status={bin.fillLevel > 80 ? 'Critical' : bin.fillLevel > 60 ? 'Warning' : 'Normal'} />
                    </div>

                    <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-sm text-slate-500">Fill Level</p>
                        <div className="mt-2 h-2 rounded-full bg-slate-100">
                          <div className="h-2 rounded-full bg-emerald-500" style={{ width: `${bin.fillLevel}%` }} />
                        </div>
                        <p className="mt-2 text-sm font-semibold text-slate-900">{bin.fillLevel}%</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-sm text-slate-500">Weight</p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">{bin.weight} kg</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-sm text-slate-500">Waste Type</p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">{bin.wasteType}</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-sm text-slate-500">Estimated Calorific Value</p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">{bin.calorificValue}</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-sm text-slate-500">Estimated Recyclable Waste</p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">{bin.recyclableWaste}</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-sm text-slate-500">Battery Percentage</p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">{bin.battery}%</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-sm text-slate-500">Gas Status</p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">{bin.gasStatus}</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-sm text-slate-500">Collection Status</p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">{bin.collectionStatus}</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-sm text-slate-500">Temperature</p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">{bin.temperature}</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-sm text-slate-500">Humidity</p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">{bin.humidity}</p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link to={`/bins/${bin.id}`} className="rounded-2xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700">
                        View Details
                      </Link>
                      <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700">
                        Mark as Collected
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default BlockDetailsPage
