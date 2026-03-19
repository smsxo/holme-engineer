export function ESSBatteryBank() {
  const cells = [
    { charge: 94, temp: 22 },
    { charge: 87, temp: 23 },
    { charge: 91, temp: 21 },
    { charge: 78, temp: 24 },
    { charge: 96, temp: 22 },
    { charge: 83, temp: 23 },
  ];

  return (
    <div className="relative h-full w-full rounded-2xl border border-border bg-surface-elevated p-5 overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] font-medium uppercase tracking-widest text-foreground-muted">
          Battery Management System
        </span>
      </div>

      {/* Battery cells */}
      <div className="grid grid-cols-3 gap-3">
        {cells.map((cell, i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-surface p-3"
          >
            <div className="text-[9px] text-foreground-dim mb-2">
              RACK {i + 1}
            </div>
            <div className="relative h-16 w-full rounded-lg border border-border bg-background overflow-hidden">
              <div
                className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-emerald-500/30 to-emerald-400/10 transition-all duration-1000"
                style={{ height: `${cell.charge}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-semibold text-emerald-400">
                  {cell.charge}%
                </span>
              </div>
            </div>
            <div className="mt-2 text-[9px] text-foreground-dim text-center">
              {cell.temp}°C
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-4 flex justify-between border-t border-border pt-3">
        <div className="text-center">
          <div className="text-xs font-semibold text-emerald-400">3.2 MWh</div>
          <div className="text-[9px] text-foreground-dim">Capacity</div>
        </div>
        <div className="text-center">
          <div className="text-xs font-semibold text-cyan-400">88%</div>
          <div className="text-[9px] text-foreground-dim">Avg SoC</div>
        </div>
        <div className="text-center">
          <div className="text-xs font-semibold text-foreground-muted">
            22.5°C
          </div>
          <div className="text-[9px] text-foreground-dim">Avg Temp</div>
        </div>
      </div>
    </div>
  );
}
