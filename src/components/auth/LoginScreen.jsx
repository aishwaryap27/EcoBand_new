import { useState } from 'react'

function InputField({ label, type, value, onChange, placeholder, rightElement }) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      <span className="mb-2 block">{label}</span>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 pr-12 text-sm text-slate-800 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
        />
        {rightElement ? (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">{rightElement}</div>
        ) : null}
      </div>
    </label>
  )
}

function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [statusMessage, setStatusMessage] = useState(
    'Demo mode: use any credentials to preview the EcoBand experience.'
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatusMessage('Secure demo access is ready. The full dashboard will connect here later.')
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_35%),linear-gradient(135deg,_#f6fff8_0%,_#f8faf8_55%,_#eef7f0_100%)] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.12)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 p-8 text-white sm:p-10 lg:p-12">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-base font-semibold">
                E
              </span>
              EcoBand Operations
            </div>

            <h1 className="mt-8 text-3xl font-semibold leading-tight sm:text-4xl">
              Keep the campus clean with smart waste visibility.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-emerald-50 sm:text-base">
              Monitor fill levels, collection status, and alert health in one elegant dashboard built for sanitary teams.
            </p>

            <div className="mt-8 space-y-3 text-sm text-emerald-50">
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                <span className="text-lg">♻️</span>
                <span>Live campus-wide waste intelligence</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                <span className="text-lg">🧹</span>
                <span>Rapid prioritization for collection crews</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                <span className="text-lg">📡</span>
                <span>IoT-ready dashboard for future sensor integration</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">
                Sanitary worker portal
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Welcome back
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                Sign in to review dustbin health, alerts, and campus collection priorities.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <InputField
                label="Email address"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="worker@ecoband.edu"
              />

              <InputField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                rightElement={
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="rounded-full p-1 text-slate-500 transition hover:bg-slate-100 hover:text-emerald-600"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                        <path d="M3 3l18 18" />
                        <path d="M10.6 10.6A3 3 0 0 0 13.4 13.4" />
                        <path d="M9.2 4.9A10.6 10.6 0 0 1 12 4c6.5 0 10 8 10 8a18.2 18.2 0 0 1-4 5.2" />
                        <path d="M6.8 6.8A17.9 17.9 0 0 0 2 12s3.5 7 10 7a10.9 10.9 0 0 0 4.2-.8" />
                      </svg>
                    )}
                  </button>
                }
              />

              <div className="flex justify-end">
                <a href="#" className="text-sm font-medium text-emerald-600 transition hover:text-emerald-700">
                  Forgot Password?
                </a>
              </div>

              <div className="flex items-center justify-between text-sm text-slate-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                  <span>Keep me signed in</span>
                </label>
                <a href="#" className="font-medium text-emerald-600 transition hover:text-emerald-700">
                  Need help?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              >
                Access dashboard
              </button>
            </form>

            <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-700">
              {statusMessage}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
