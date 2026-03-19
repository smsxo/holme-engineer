export function PMSDashboard() {
  return (
    <div className="relative h-full w-full rounded-2xl border border-border bg-surface-elevated p-5 overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-medium uppercase tracking-widest text-foreground-muted">
            Power Distribution — Live
          </span>
        </div>
        <div className="text-[10px] text-foreground-dim">GEN 1–4 ONLINE</div>
      </div>

      {/* Generator bars */}
      <div className="space-y-3">
        {[
          { label: "GEN 1", load: 82, color: "bg-cyan-400" },
          { label: "GEN 2", load: 67, color: "bg-cyan-500" },
          { label: "GEN 3", load: 45, color: "bg-emerald-400" },
          { label: "GEN 4", load: 91, color: "bg-amber-400" },
        ].map((gen) => (
          <div key={gen.label}>
            <div className="flex justify-between text-[10px] text-foreground-muted mb-1">
              <span>{gen.label}</span>
              <span>{gen.load}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-border">
              <div
                className={`h-full rounded-full ${gen.color} transition-all duration-1000`}
                style={{ width: `${gen.load}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Switchboard grid */}
      <div className="mt-5 grid grid-cols-4 gap-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`h-8 rounded-lg border ${i < 6 ? "border-cyan-500/20 bg-cyan-500/5" : "border-border bg-surface"} flex items-center justify-center`}
          >
            <div
              className={`h-1.5 w-1.5 rounded-full ${i < 6 ? "bg-cyan-400" : "bg-foreground-dim"}`}
            />
          </div>
        ))}
      </div>

      {/* Total load */}
      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <span className="text-[10px] text-foreground-muted">TOTAL LOAD</span>
        <span className="text-sm font-semibold text-cyan-400">4.2 MW</span>
      </div>
    </div>
  );
}
