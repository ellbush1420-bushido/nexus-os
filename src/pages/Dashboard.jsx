import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { SUBSYSTEMS } from '../lib/subsystems'

function stamp() {
  const d = new Date()
  return d.toLocaleTimeString('en-US', { hour12: false })
}

export default function Dashboard() {
  const [logs, setLogs] = useState([
    `[${stamp()}] [SYS] Demo session started.`,
    `[${stamp()}] [UI] Panels loaded.`,
    `[${stamp()}] [DEMO] No backend connected — all data is simulated.`,
  ])
  const [sweeping, setSweeping] = useState(false)
  const [sweepStatus, setSweepStatus] = useState('IDLE')
  const terminalRef = useRef(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [logs])

  const pushLog = (line) => {
    setLogs((prev) => [...prev, `[${stamp()}] ${line}`])
  }

  const runSweep = async () => {
    if (sweeping) return
    setSweeping(true)
    setSweepStatus('RUNNING')
    pushLog('[SWEEP] Demo sweep initiated.')
    for (const sys of SUBSYSTEMS) {
      await new Promise((r) => setTimeout(r, 180))
      pushLog(`[SWEEP] ${sys.name} (${sys.id}) — simulated check OK`)
    }
    pushLog('[SWEEP] DEMO SWEEP COMPLETE (simulated)')
    setSweepStatus('DEMO COMPLETE')
    setSweeping(false)
  }

  return (
    <div className="obsidian-grid min-h-screen text-gray-100 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-cyan-500/20 pb-4 mb-6">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-widest text-cyan-300">
                NEXUS // OS
              </h1>
              <span className="text-[10px] tracking-widest px-2 py-1 rounded border border-fuchsia-500/50 text-fuchsia-300 bg-fuchsia-500/10">
                DEMO · SIMULATED DATA
              </span>
            </div>
            <p className="mt-1 text-xs sm:text-sm tracking-[0.25em] text-fuchsia-400/90 uppercase">
              HALL 5 CHIEF COMMAND DECK
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-amber-300/90" aria-label="Simulation status">
              ● SIMULATED
            </span>
            <Link
              to="/"
              className="text-xs text-cyan-400 hover:text-cyan-200 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded"
            >
              ← Home
            </Link>
          </div>
        </header>

        <div className="grid lg:grid-cols-[1fr_340px] gap-6">
          <div className="space-y-6">
            <section aria-label="Subsystems">
              <h2 className="text-xs tracking-[0.3em] text-cyan-400/80 mb-3 uppercase">Subsystems</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SUBSYSTEMS.map((sys) => (
                  <article
                    key={sys.id}
                    className="rounded-lg border border-cyan-500/20 bg-gray-950/80 p-4 hover:border-fuchsia-500/40 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-semibold text-cyan-200">{sys.name}</h3>
                        <p className="text-[11px] text-fuchsia-300/80 mt-0.5">{sys.role}</p>
                      </div>
                      <span className="shrink-0 text-[9px] tracking-wider px-1.5 py-0.5 rounded border border-amber-400/40 text-amber-300 bg-amber-400/10">
                        DEMO
                      </span>
                    </div>
                    <p className="mt-2 text-[11px] text-gray-400 leading-relaxed">{sys.detail}</p>
                    <p className="mt-2 text-[10px] text-gray-500">ID {sys.id}</p>
                  </article>
                ))}
              </div>
            </section>

            <section
              aria-label="Tactical Execution"
              className="rounded-lg border border-fuchsia-500/30 bg-gray-950/80 p-4"
            >
              <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
                <h2 className="text-xs tracking-[0.3em] text-fuchsia-300 uppercase">
                  Tactical Execution
                </h2>
                <span className="text-[10px] text-gray-400">STATUS: {sweepStatus}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={runSweep}
                  disabled={sweeping}
                  className="px-4 py-2.5 rounded border border-cyan-400/60 bg-cyan-500/10 text-cyan-200 text-xs tracking-widest uppercase hover:bg-cyan-500/20 disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
                >
                  {sweeping ? 'Sweeping…' : 'Run Demo Sweep'}
                </button>
                <label className="sr-only" htmlFor="override-input">
                  Override code (read-only demo)
                </label>
                <input
                  id="override-input"
                  type="text"
                  disabled
                  placeholder="Read-only demo"
                  className="flex-1 rounded border border-gray-700 bg-gray-900/60 px-3 py-2 text-xs text-gray-500 cursor-not-allowed"
                />
              </div>
            </section>
          </div>

          <aside
            aria-label="Omni-Telemetry terminal"
            className="rounded-lg border border-cyan-500/30 bg-gray-950/90 flex flex-col min-h-[420px] lg:min-h-0 lg:h-[calc(100vh-8rem)]"
          >
            <div className="flex items-center justify-between px-3 py-2 border-b border-cyan-500/20">
              <h2 className="text-[11px] tracking-[0.25em] text-cyan-300 uppercase">
                Omni-Telemetry
              </h2>
              <span className="text-[9px] tracking-wider px-1.5 py-0.5 rounded border border-fuchsia-500/50 text-fuchsia-300 bg-fuchsia-500/10">
                DEMO · SIMULATED DATA
              </span>
            </div>
            <div
              ref={terminalRef}
              className="flex-1 overflow-y-auto p-3 text-[11px] leading-relaxed text-gray-300 space-y-1"
              role="log"
              aria-live="polite"
              aria-relevant="additions"
            >
              {logs.map((line, i) => (
                <div key={`${i}-${line}`} className="font-mono break-all">
                  <span className="text-cyan-500/70">{'>'}</span> {line}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
