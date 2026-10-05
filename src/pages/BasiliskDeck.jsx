import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { BASILISK_SUBSYSTEMS } from '../lib/basiliskSubsystems'

function stamp() {
  const d = new Date()
  return d.toLocaleTimeString('en-US', { hour12: false })
}

function ServerineMonogram() {
  return (
    <div
      className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-fuchsia-400/70 bg-gradient-to-br from-violet-950 via-fuchsia-950 to-rose-950 shadow-[0_0_24px_-4px_rgba(217,70,239,0.55)]"
      aria-hidden="true"
    >
      <span className="text-2xl font-bold tracking-wider text-fuchsia-200">S</span>
    </div>
  )
}

export default function BasiliskDeck() {
  const [logs, setLogs] = useState([
    `[${stamp()}] [SYS] Basilisk concept session opened.`,
    `[${stamp()}] [UI] Private studio panels loaded.`,
    `[${stamp()}] [DEMO] No backend connected — all data is simulated.`,
    `[${stamp()}] [AUTH] Override channel locked — auth required.`,
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
    pushLog('[SWEEP] Demo studio sweep initiated.')
    for (const sys of BASILISK_SUBSYSTEMS) {
      await new Promise((r) => setTimeout(r, 160))
      pushLog(`[SWEEP] ${sys.name} (${sys.id}) — simulated check OK`)
    }
    pushLog('[SWEEP] DEMO SWEEP COMPLETE (simulated)')
    setSweepStatus('DEMO COMPLETE')
    setSweeping(false)
  }

  return (
    <div className="basilisk-grid min-h-screen text-gray-100 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div
          className="mb-4 flex flex-wrap items-center gap-2 text-[10px] tracking-[0.2em] uppercase"
          role="status"
        >
          <span className="px-2 py-1 rounded border border-rose-500/60 text-rose-200 bg-rose-950/50">
            CONCEPT DRAFT — PRIVATE
          </span>
          <span className="px-2 py-1 rounded border border-violet-500/50 text-violet-200 bg-violet-950/40">
            PRIVATE · BLACK VAULT LANE
          </span>
          <span className="px-2 py-1 rounded border border-amber-500/40 text-amber-200 bg-amber-950/30">
            OUTSIDE PUBLIC 3×3 LO SHU
          </span>
          <span className="px-2 py-1 rounded border border-fuchsia-500/50 text-fuchsia-300 bg-fuchsia-500/10">
            DEMO · SIMULATED DATA
          </span>
        </div>

        <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-fuchsia-500/25 pb-5 mb-6">
          <div className="flex items-start gap-4">
            <ServerineMonogram />
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-widest text-fuchsia-300">
                  NEXUS / BASILISK
                </h1>
              </div>
              <p className="mt-1 text-xs sm:text-sm tracking-[0.22em] text-rose-300/90 uppercase">
                PRIVATE STUDIO COMMAND DECK · CONCEPT DRAFT
              </p>
              <p className="mt-2 text-[11px] text-violet-200/80">
                Resident:{' '}
                <span className="text-fuchsia-200 font-semibold">Serverine</span>
                {' — '}Resident Intelligence &amp; Studio Steward
              </p>
              <p className="mt-1 text-[10px] text-gray-500">
                Sibling to Leyla / HYDRA · separate OS lane · no shared vault / orbit / agents
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2">
            <span className="text-xs text-amber-300/90" aria-label="Simulation status">
              ● SIMULATED
            </span>
            <Link
              to="/"
              className="text-xs text-fuchsia-400 hover:text-fuchsia-200 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-fuchsia-400 rounded"
            >
              ← Home
            </Link>
            <Link
              to="/dashboard"
              className="text-[10px] text-violet-400/90 hover:text-violet-200 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-400 rounded"
            >
              Sibling to HYDRA deck →
            </Link>
          </div>
        </header>

        <div className="grid lg:grid-cols-[1fr_340px] gap-6">
          <div className="space-y-6">
            <section aria-label="Basilisk stack panels">
              <h2 className="text-xs tracking-[0.3em] text-fuchsia-400/80 mb-3 uppercase">
                Basilisk Stack
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BASILISK_SUBSYSTEMS.map((sys) => (
                  <article
                    key={sys.id}
                    className="rounded-lg border border-violet-500/25 bg-black/70 p-4 hover:border-fuchsia-500/45 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-semibold text-fuchsia-200">{sys.name}</h3>
                        <p className="text-[11px] text-rose-300/85 mt-0.5">{sys.role}</p>
                      </div>
                      <span className="shrink-0 text-[9px] tracking-wider px-1.5 py-0.5 rounded border border-amber-400/40 text-amber-300 bg-amber-400/10">
                        DEMO
                      </span>
                    </div>
                    <p className="mt-2 text-[11px] text-gray-400 leading-relaxed">{sys.detail}</p>
                    {sys.stages ? (
                      <ol className="mt-3 space-y-1 list-none p-0">
                        {sys.stages.map((stage, i) => (
                          <li
                            key={stage}
                            className="text-[10px] text-violet-200/80 flex gap-2"
                          >
                            <span className="text-fuchsia-500/80 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                            <span>{stage}</span>
                          </li>
                        ))}
                      </ol>
                    ) : null}
                    <p className="mt-2 text-[10px] text-gray-500">ID {sys.id}</p>
                  </article>
                ))}
              </div>
            </section>

            <section
              aria-label="Studio execution"
              className="rounded-lg border border-rose-500/30 bg-black/70 p-4"
            >
              <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
                <h2 className="text-xs tracking-[0.3em] text-rose-300 uppercase">
                  Studio Execution
                </h2>
                <span className="text-[10px] text-gray-400">STATUS: {sweepStatus}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <button
                  type="button"
                  onClick={runSweep}
                  disabled={sweeping}
                  className="px-4 py-2.5 rounded border border-fuchsia-400/60 bg-fuchsia-500/10 text-fuchsia-200 text-xs tracking-widest uppercase hover:bg-fuchsia-500/20 disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-fuchsia-400"
                >
                  {sweeping ? 'Sweeping…' : 'Run Demo Sweep'}
                </button>
                <div
                  className="flex-1 rounded border border-violet-800/60 bg-violet-950/40 px-3 py-2 text-[11px] text-violet-300/80"
                  role="note"
                >
                  Override channel · LOCKED · auth required — no command box without auth
                </div>
              </div>
            </section>
          </div>

          <aside
            aria-label="Basilisk telemetry terminal"
            className="rounded-lg border border-fuchsia-500/30 bg-black/85 flex flex-col min-h-[420px] lg:min-h-0 lg:h-[calc(100vh-8rem)]"
          >
            <div className="flex items-center justify-between px-3 py-2 border-b border-fuchsia-500/20">
              <h2 className="text-[11px] tracking-[0.25em] text-fuchsia-300 uppercase">
                Studio Telemetry
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
                  <span className="text-fuchsia-500/70">{'>'}</span> {line}
                </div>
              ))}
            </div>
          </aside>
        </div>

        <footer className="mt-8 pt-4 border-t border-violet-900/50 text-[10px] text-gray-500 tracking-wide flex flex-wrap gap-x-4 gap-y-1">
          <span>CONCEPT DRAFT — PRIVATE</span>
          <span>NEXUS / BASILISK · outside public 3×3 Lo Shu</span>
          <span>Sibling OS to HYDRA · Inter-OS Gateway only (sketch)</span>
        </footer>
      </div>
    </div>
  )
}
