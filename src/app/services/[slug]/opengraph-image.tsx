import { ImageResponse } from "next/og";
import { services } from "@/data/site-data";

export const runtime = "edge";
export const alt = "Holme Engineering — Service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamic OG image per service page.
 * Shows service title, short description, key metrics, and category badge.
 */
export default async function ServiceOGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return new ImageResponse(
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0f",
          color: "#fff",
          fontSize: 48,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        Holme Engineering
      </div>,
      { ...size },
    );
  }

  const categoryLabels: Record<string, string> = {
    marine: "Marine Systems",
    ess: "Energy & Infrastructure",
    software: "Software & R&D",
  };

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        background:
          "linear-gradient(135deg, #0a0a0f 0%, #0d1117 50%, #0a0f1a 100%)",
        padding: "60px 80px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          display: "flex",
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-60px",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
          display: "flex",
        }}
      />

      {/* Logo + brand */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #06b6d4, #22d3ee)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: 800,
            color: "#0a0a0f",
            letterSpacing: "-1px",
          }}
        >
          HE
        </div>
        <span
          style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.5px",
          }}
        >
          Holme Engineering AS
        </span>
      </div>

      {/* Category badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            padding: "4px 14px",
            borderRadius: "20px",
            border: "1px solid rgba(6,182,212,0.3)",
            background: "rgba(6,182,212,0.08)",
            fontSize: "13px",
            fontWeight: 600,
            color: "#22d3ee",
            letterSpacing: "1px",
            textTransform: "uppercase" as const,
          }}
        >
          {categoryLabels[service.category] ?? service.category}
        </div>
        <div
          style={{
            padding: "4px 14px",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)",
            fontSize: "13px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.5px",
          }}
        >
          {service.shortTitle}
        </div>
      </div>

      {/* Title */}
      <span
        style={{
          fontSize: "48px",
          fontWeight: 800,
          color: "#ffffff",
          lineHeight: 1.1,
          letterSpacing: "-2px",
          maxWidth: "800px",
        }}
      >
        {service.title}
      </span>

      {/* Description */}
      <span
        style={{
          fontSize: "17px",
          color: "rgba(255,255,255,0.5)",
          marginTop: "16px",
          maxWidth: "650px",
          lineHeight: 1.5,
          display: "block",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {service.description.length > 140
          ? service.description.slice(0, 137) + "..."
          : service.description}
      </span>

      {/* Key metrics */}
      <div
        style={{
          display: "flex",
          gap: "28px",
          marginTop: "36px",
        }}
      >
        {service.keyMetrics.slice(0, 4).map((metric) => (
          <div
            key={metric.label}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                fontWeight: 800,
                color: "#06b6d4",
                letterSpacing: "-0.5px",
              }}
            >
              {metric.value}
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "1px",
                textTransform: "uppercase" as const,
              }}
            >
              {metric.label}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom accent */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "4px",
          background:
            "linear-gradient(90deg, #06b6d4, #22d3ee, #5eead4, transparent)",
          display: "flex",
        }}
      />

      <span
        style={{
          position: "absolute",
          bottom: "24px",
          right: "40px",
          fontSize: "13px",
          fontWeight: 500,
          color: "rgba(255,255,255,0.25)",
          letterSpacing: "0.5px",
        }}
      >
        holme-engineering.com
      </span>
    </div>,
    { ...size },
  );
}
