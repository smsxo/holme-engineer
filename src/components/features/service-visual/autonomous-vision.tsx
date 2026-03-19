export function AutonomousVision() {
  return (
    <div className="relative h-full w-full rounded-2xl border border-border bg-surface-elevated p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[10px] font-medium uppercase tracking-widest text-foreground-muted">
            Autonomous Navigation
          </span>
        </div>
        <span className="text-[9px] text-cyan-400 font-medium">AI ACTIVE</span>
      </div>

      {/* Radar display */}
      <div className="relative mx-auto h-40 w-40 mb-4">
        {/* Concentric rings */}
        {[1, 0.75, 0.5, 0.25].map((scale) => (
          <div
            key={scale}
            className="absolute inset-0 rounded-full border border-cyan-500/10"
            style={{
              transform: `scale(${scale})`,
            }}
          />
        ))}
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-cyan-400" />
        {/* Crosshair */}
        <div className="absolute top-0 left-1/2 -translate-x-px h-full w-px bg-cyan-500/10" />
        <div className="absolute top-1/2 left-0 -translate-y-px w-full h-px bg-cyan-500/10" />
        {/* Detected objects */}
        {[
          { x: 30, y: 25 },
          { x: 65, y: 40 },
          { x: 45, y: 70 },
        ].map((obj, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-amber-400/80"
            style={{ left: `${obj.x}%`, top: `${obj.y}%` }}
          >
            <div className="absolute inset-0 rounded-full bg-amber-400/30 animate-ping" />
          </div>
        ))}
      </div>

      {/* Sensor status */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Lidar", status: "Active" },
          { label: "Camera", status: "Active" },
          { label: "Radar", status: "Active" },
        ].map((sensor) => (
          <div
            key={sensor.label}
            className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-2 text-center"
          >
            <div className="text-[9px] text-foreground-dim">{sensor.label}</div>
            <div className="text-[9px] font-medium text-cyan-400">
              {sensor.status}
            </div>
          </div>
        ))}
      </div>

      {/* AI decision */}
      <div className="mt-3 rounded-xl border border-border bg-surface p-3">
        <div className="text-[9px] text-foreground-dim mb-1">AI DECISION</div>
        <div className="text-[10px] text-foreground-muted font-mono">
          COLREGs Rule 15 — Give way to starboard vessel
        </div>
        <div className="text-[9px] text-cyan-400 mt-1">
          Altering course 15° port
        </div>
      </div>
    </div>
  );
}
