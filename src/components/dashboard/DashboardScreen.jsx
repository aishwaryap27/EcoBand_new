import { alerts, blocks, dustbins, summaryStats } from '../../data/dashboardData'
import SummaryCard from './SummaryCard'
import BlockCard from './BlockCard'
import DustbinCard from './DustbinCard'
import AlertList from './AlertList'
import SustainabilityAnalytics from './SustainabilityAnalytics'

function DashboardScreen() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#f8fcf8_0%,_#f3f7f2_100%)] px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="rounded-[2rem] border border-emerald-100 bg-white/90 p-4 shadow-sm backdrop-blur sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-semibold text-white">
                E
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                  EcoBand
                </p>
                <h1 className="text-xl font-semibold text-slate-900">Sanitary Worker Dashboard</h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                Welcome, Asha
              </div>
              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-emerald-200 hover:text-emerald-600">
                🔔
              </button>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">
                AW
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <SummaryCard label="Total Blocks" value={summaryStats.totalBlocks} detail="4 campus zones" />
          <SummaryCard label="Total Floors" value={summaryStats.totalFloors} detail="2 floors each" />
          <SummaryCard label="Total Smart Dustbins" value={summaryStats.totalSmartDustbins} detail="16 connected bins" />
          <SummaryCard label="Active Alerts" value={summaryStats.activeAlerts} detail="Priority monitoring" />
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Campus Overview</h2>
              <p className="mt-1 text-sm text-slate-500">Live block status across campus</p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {blocks.map((block) => (
              <BlockCard key={block.name} block={block} />
            ))}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Smart Dustbin Status</h2>
                <p className="mt-1 text-sm text-slate-500">Sample monitored bins</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {dustbins.map((bin) => (
                <DustbinCard key={bin.id} bin={bin} />
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-slate-900">Alerts</h2>
              <p className="mt-1 text-sm text-slate-500">Important operational warnings</p>
            </div>
            <AlertList alerts={alerts} />
          </div>
        </section>

        <SustainabilityAnalytics />
      </div>
    </div>
  )
}

export default DashboardScreen
