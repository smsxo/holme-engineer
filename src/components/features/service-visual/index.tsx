import { PMSDashboard } from "./pms-dashboard";
import { ESSBatteryBank } from "./ess-battery-bank";
import { IASDashboard } from "./ias-dashboard";
import { PropulsionCharts } from "./propulsion-charts";
import { ShoreConnectionDiagram } from "./shore-connection-diagram";
import { MicroGridTopology } from "./micro-grid-topology";
import { AutonomousVision } from "./autonomous-vision";

const visualMap: Record<string, React.FC> = {
  "power-management-systems": PMSDashboard,
  "energy-storage-systems": ESSBatteryBank,
  "integrated-automation-systems": IASDashboard,
  "propulsion-performance-monitoring": PropulsionCharts,
  "shore-connections": ShoreConnectionDiagram,
  "micro-grids": MicroGridTopology,
  "autonomous-marine-solutions": AutonomousVision,
};

interface ServiceVisualProps {
  slug: string;
  className?: string;
}

export function ServiceVisual({ slug, className }: ServiceVisualProps) {
  const Visual = visualMap[slug];
  if (!Visual) return null;

  return (
    <div className={className}>
      <Visual />
    </div>
  );
}
