export function MicroGridTopology() {
  return (
    <div className="relative h-full w-full rounded-2xl border border-border bg-surface-elevated p-5 overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] font-medium uppercase tracking-widest text-foreground-muted">
          Micro Grid — Islanded Mode
        </span>
      </div>

      {/* Energy sources */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          {
            label: "Solar",
            power: "1.2 MW",
            color: "bg-amber-400/10 border-amber-400/20 text-amber-400",
          },
          {
            label: "Wind",
            power: "0.8 MW",
            color: "bg-cyan-400/10 border-cyan-400/20 text-cyan-400",
          },
          {
            label: "Battery",
            power: "2.0 MWh",
            color: "bg-emerald-400/10 border-emerald-400/20 text-emerald-400",
          },
        ].map((src) => (
          <div
            key={src.label}
            className={`rounded-xl border p-2.5 text-center ${src.color}`}
          >
            <div className="text-[9px] text-foreground-dim">{src.label}</div>
            <div className="text-xs font-semibold mt-1">{src.power}</div>
          </div>
        ))}
      </div>

      {/* Central bus */}
      <div className="h-2 rounded-full bg-linear-to-r from-amber-400/30 via-cyan-400/30 to-emerald-400/30 my-3" />

      {/* Loads */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Hospital", load: "0.6 MW", priority: "Critical" },
          { label: "Data Center", load: "0.9 MW", priority: "Critical" },
          { label: "Community", load: "0.3 MW", priority: "Standard" },
          { label: "Reserve", load: "0.2 MW", priority: "Backup" },
        ].map((load) => (
          <div
            key={load.label}
            className="rounded-xl border border-border bg-surface p-2.5"
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-foreground-dim">
                {load.label}
              </span>
              <span
                className={`text-[8px] font-medium ${load.priority === "Critical" ? "text-amber-400" : "text-foreground-dim"}`}
              >
                {load.priority}
              </span>
            </div>
            <div className="text-xs font-semibold text-foreground mt-1">
              {load.load}
            </div>
          </div>
        ))}
      </div>

      {/* Grid status */}
      <div className="mt-3 flex justify-between border-t border-border pt-3">
        <div className="text-center">
          <div className="text-xs font-semibold text-emerald-400">99.99%</div>
          <div className="text-[9px] text-foreground-dim">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-xs font-semibold text-cyan-400">2.0 MW</div>
          <div className="text-[9px] text-foreground-dim">Total Load</div>
        </div>
        <div className="text-center">
          <div className="text-xs font-semibold text-amber-400">Islanded</div>
          <div className="text-[9px] text-foreground-dim">Mode</div>
        </div>
      </div>
    </div>
  );
}
