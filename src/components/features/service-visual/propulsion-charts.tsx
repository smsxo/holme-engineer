export function PropulsionCharts() {
  return (
    <div className="relative h-full w-full rounded-2xl border border-border bg-surface-elevated p-5 overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] font-medium uppercase tracking-widest text-foreground-muted">
          Performance Analytics
        </span>
      </div>

      {/* Efficiency gauge */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative h-20 w-20">
          <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
            <circle
              cx="18"
              cy="18"
              r="15.9"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-border"
            />
            <circle
              cx="18"
              cy="18"
              r="15.9"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="87 100"
              className="text-emerald-400"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-emerald-400">87%</span>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">
            Propulsion Efficiency
          </div>
          <div className="text-[10px] text-foreground-muted">
            +2.3% vs. last voyage
          </div>
        </div>
      </div>

      {/* Fuel & CO₂ bars */}
      <div className="space-y-3">
        {[
          {
            label: "Fuel Rate",
            value: "12.4 t/day",
            pct: 62,
            color: "bg-cyan-400",
          },
          {
            label: "CO₂ Emissions",
            value: "-18% YoY",
            pct: 38,
            color: "bg-emerald-400",
          },
          {
            label: "Hull Efficiency",
            value: "94.2%",
            pct: 94,
            color: "bg-emerald-500",
          },
        ].map((metric) => (
          <div key={metric.label}>
            <div className="flex justify-between text-[10px] text-foreground-muted mb-1">
              <span>{metric.label}</span>
              <span className="font-medium text-foreground">
                {metric.value}
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-border">
              <div
                className={`h-full rounded-full ${metric.color}`}
                style={{ width: `${metric.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Voyage trend (simplified sparkline) */}
      <div className="mt-4 rounded-xl border border-border bg-surface p-3">
        <div className="text-[9px] text-foreground-dim mb-2">
          FUEL TREND — 7 DAYS
        </div>
        <div className="flex items-end gap-1 h-10">
          {[70, 65, 72, 58, 62, 55, 52].map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-emerald-400/40"
              style={{ height: `${v}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-[8px] text-foreground-dim mt-1">
          <span>Mon</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
}
