export function ShoreConnectionDiagram() {
  return (
    <div className="relative h-full w-full rounded-2xl border border-border bg-surface-elevated p-5 overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] font-medium uppercase tracking-widest text-foreground-muted">
          Shore Power — Connected
        </span>
      </div>

      {/* Connection diagram */}
      <div className="flex items-center justify-between gap-2 my-6">
        {/* Shore side */}
        <div className="flex-1 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-center">
          <div className="text-[9px] text-foreground-dim mb-1">SHORE GRID</div>
          <div className="text-lg font-bold text-emerald-400">11 kV</div>
          <div className="text-[9px] text-foreground-muted">AC 50 Hz</div>
        </div>

        {/* Transfer indicator */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-0.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-0.5 w-3 rounded-full bg-cyan-400"
                style={{ opacity: 1 - i * 0.25 }}
              />
            ))}
          </div>
          <span className="text-[8px] text-cyan-400 font-medium">6.5 MW</span>
          <div className="flex gap-0.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-0.5 w-3 rounded-full bg-cyan-400"
                style={{ opacity: 1 - i * 0.25 }}
              />
            ))}
          </div>
        </div>

        {/* Vessel side */}
        <div className="flex-1 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-3 text-center">
          <div className="text-[9px] text-foreground-dim mb-1">VESSEL</div>
          <div className="text-lg font-bold text-cyan-400">690 V</div>
          <div className="text-[9px] text-foreground-muted">Transformer</div>
        </div>
      </div>

      {/* Status indicators */}
      <div className="space-y-2">
        {[
          { label: "Diesel Engines", status: "OFF", color: "text-emerald-400" },
          { label: "Shore Breaker", status: "CLOSED", color: "text-cyan-400" },
          {
            label: "Synchronization",
            status: "LOCKED",
            color: "text-cyan-400",
          },
          {
            label: "Emissions",
            status: "ZERO",
            color: "text-emerald-400",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="flex justify-between items-center text-[10px]"
          >
            <span className="text-foreground-muted">{item.label}</span>
            <span className={`font-medium ${item.color}`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
