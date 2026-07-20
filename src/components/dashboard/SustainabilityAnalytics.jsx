import AnalyticsChartCard from './AnalyticsChartCard'
import SustainabilityKpiCard from './SustainabilityKpiCard'

const sustainabilityKpis = [
  { label: 'Estimated Recyclable Waste', value: '312', unit: 'kg', accent: 'emerald' },
  { label: 'Estimated Organic Waste', value: '248', unit: 'kg', accent: 'amber' },
  { label: 'Estimated Calorific Value', value: '18.6', unit: 'MJ', accent: 'sky' },
  { label: 'Potential Energy Recovery', value: '92', unit: 'kWh', accent: 'violet' },
  { label: 'Estimated CO₂ Emissions Avoided', value: '164', unit: 'kg', accent: 'emerald' },
  { label: 'Waste Diverted from Landfill', value: '68', unit: '%', accent: 'amber' },
  { label: 'Campus Sustainability Score', value: '87', unit: '/100', accent: 'sky' },
]

const compositionData = [
  { name: 'Organic', value: 28, color: '#10b981' },
  { name: 'Plastic', value: 22, color: '#3b82f6' },
  { name: 'Paper', value: 18, color: '#f59e0b' },
  { name: 'Metal', value: 10, color: '#8b5cf6' },
  { name: 'Glass', value: 8, color: '#14b8a6' },
  { name: 'Mixed Waste', value: 14, color: '#64748b' },
]

const weeklyCollection = [
  { day: 'Mon', value: 120 },
  { day: 'Tue', value: 138 },
  { day: 'Wed', value: 132 },
  { day: 'Thu', value: 150 },
  { day: 'Fri', value: 162 },
  { day: 'Sat', value: 146 },
  { day: 'Sun', value: 128 },
]

const fillLevels = [
  { block: 'CSE', value: 74 },
  { block: 'Civil', value: 58 },
  { block: 'Mechanical', value: 86 },
  { block: 'Architecture', value: 42 },
]

const efficiency = [
  { label: 'Mon', value: 78 },
  { label: 'Tue', value: 82 },
  { label: 'Wed', value: 80 },
  { label: 'Thu', value: 85 },
  { label: 'Fri', value: 88 },
  { label: 'Sat', value: 84 },
  { label: 'Sun', value: 81 },
]

const insights = [
  'Prioritize collection in Mechanical Block',
  'Organic waste is suitable for composting',
  'High calorific waste can be diverted for energy recovery',
  'Two bins require battery replacement',
]

const environmentCards = [
  { label: "Today's Waste Collected", value: '386', unit: 'kg' },
  { label: 'Estimated Energy Recoverable', value: '92', unit: 'kWh' },
  { label: 'Recycling Rate', value: '68', unit: '%' },
  { label: 'Average Bin Health', value: '84', unit: '%' },
  { label: 'Average Battery Health', value: '71', unit: '%' },
]

function SustainabilityAnalytics() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-slate-900">Sustainability Analytics</h2>
        <p className="mt-1 text-sm text-slate-500">Operational insights for cleaner and greener campus practices</p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="mb-3 text-lg font-semibold text-slate-900">Sustainability KPIs</h3>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sustainabilityKpis.map((kpi) => (
              <SustainabilityKpiCard key={kpi.label} {...kpi} />
            ))}
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <AnalyticsChartCard title="Waste Composition" subtitle="Share of waste by category">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex h-48 w-full items-center justify-center rounded-2xl bg-slate-50 sm:max-w-[220px]">
                <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-[18px] border-emerald-500 border-t-sky-500 border-r-amber-500 border-b-violet-500" />
              </div>
              <div className="flex-1 space-y-2">
                {compositionData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-slate-600">{item.name}</span>
                    </div>
                    <span className="font-semibold text-slate-900">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </AnalyticsChartCard>

          <AnalyticsChartCard title="Weekly Analytics" subtitle="Collection performance and fill levels">
            <div className="space-y-6">
              <div>
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-700">Weekly Waste Collection</span>
                  <span className="text-slate-500">kg</span>
                </div>
                <div className="flex items-end gap-2 rounded-2xl bg-slate-50 p-3">
                  {weeklyCollection.map((item) => (
                    <div key={item.day} className="flex flex-1 flex-col items-center gap-2">
                      <div className="w-full rounded-t-xl bg-emerald-500" style={{ height: `${Math.max(item.value / 1.8, 24)}px` }} />
                      <span className="text-xs text-slate-500">{item.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="mb-2 text-sm font-semibold text-slate-700">Fill Level by Block</p>
                  <div className="space-y-3">
                    {fillLevels.map((item) => (
                      <div key={item.block}>
                        <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
                          <span>{item.block}</span>
                          <span>{item.value}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white">
                          <div className="h-2 rounded-full bg-amber-500" style={{ width: `${item.value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="mb-2 text-sm font-semibold text-slate-700">Collection Efficiency</p>
                  <div className="space-y-3">
                    {efficiency.map((item) => (
                      <div key={item.label}>
                        <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
                          <span>{item.label}</span>
                          <span>{item.value}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white">
                          <div className="h-2 rounded-full bg-sky-500" style={{ width: `${item.value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnalyticsChartCard>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <AnalyticsChartCard title="Environmental Insights" subtitle="A quick sustainability snapshot">
            <div className="grid gap-3 md:grid-cols-2">
              {environmentCards.map((card) => (
                <div key={card.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">{card.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">{card.value}</p>
                  <p className="text-sm text-slate-500">{card.unit}</p>
                </div>
              ))}
            </div>
          </AnalyticsChartCard>

          <AnalyticsChartCard title="Smart Recommendations" subtitle="AI-assisted sustainability insights">
            <div className="space-y-3">
              {insights.map((insight) => (
                <div key={insight} className="rounded-2xl border border-emerald-100 bg-emerald-50 p-3 text-sm text-emerald-800">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-base">💡</span>
                    <span>{insight}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnalyticsChartCard>
        </div>
      </div>
    </section>
  )
}

export default SustainabilityAnalytics
