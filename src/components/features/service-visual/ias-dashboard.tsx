export function IASDashboard() {
  return (
    <div className="relative h-full w-full rounded-2xl border border-border bg-surface-elevated p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-medium uppercase tracking-widest text-foreground-muted">
            Integrated Automation — Bridge
          </span>
        </div>
        <div className="flex gap-1">
          {["bg-emerald-400", "bg-emerald-400", "bg-amber-400"].map((c, i) => (
            <div key={i} className={`h-1.5 w-1.5 rounded-full ${c}`} />
          ))}
        </div>
      </div>

      {/* Dashboard widgets grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Engine widget */}
        <div className="rounded-xl border border-border bg-surface p-3">
          <div className="text-[9px] text-foreground-dim mb-2">ENGINES</div>
          <div className="flex items-end gap-1 h-10">
            {[65, 82, 45, 71].map((v, i) => (
              <div key={i} className="flex-1 rounded-sm bg-cyan-500/20">
                <div
                  className="rounded-sm bg-cyan-400/60"
                  style={{ height: `${v}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* HVAC widget */}
        <div className="rounded-xl border border-border bg-surface p-3">
          <div className="text-[9px] text-foreground-dim mb-2">HVAC</div>
          <div className="text-lg font-semibold text-foreground">21.5°C</div>
          <div className="text-[9px] text-emerald-400">● Normal</div>
        </div>

        {/* Alarms widget */}
        <div className="rounded-xl border border-border bg-surface p-3">
          <div className="text-[9px] text-foreground-dim mb-2">ALARMS</div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span className="text-[9px] text-foreground-muted">
                Gen 3 temp high
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[9px] text-foreground-muted">
                All systems OK
              </span>
            </div>
          </div>
        </div>

        {/* Navigation widget */}
        <div className="rounded-xl border border-border bg-surface p-3">
          <div className="text-[9px] text-foreground-dim mb-2">NAV</div>
          <div className="text-sm font-semibold text-foreground">12.4 kn</div>
          <div className="text-[9px] text-foreground-muted">HDG 247°</div>
        </div>
      </div>

      {/* Event log */}
      <div className="mt-3 rounded-xl border border-border bg-surface p-3">
        <div className="text-[9px] text-foreground-dim mb-2">EVENT LOG</div>
        <div className="space-y-1 text-[9px] text-foreground-muted font-mono">
          <div>14:32:01 — Generator 2 synchronized</div>
          <div>14:31:45 — Shore power disconnected</div>
          <div>14:30:12 — Departure sequence initiated</div>
        </div>
      </div>
    </div>
  );
}
