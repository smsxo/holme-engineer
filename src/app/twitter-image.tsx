import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Holme Engineering — Maritime & Energy Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Twitter-specific OG image (identical to opengraph-image).
 * Next.js serves this at /twitter-image and wires it into
 * <meta name="twitter:image">.
 */
export default function TwitterImage() {
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
      {/* Grid overlay */}
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

      {/* Cyan glow */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-80px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          display: "flex",
        }}
      />

      {/* Logo mark */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #06b6d4, #22d3ee)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: 800,
            color: "#0a0a0f",
            letterSpacing: "-1px",
          }}
        >
          HE
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.5px",
              lineHeight: 1.2,
            }}
          >
            Holme Engineering
          </span>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "3px",
              textTransform: "uppercase" as const,
            }}
          >
            AS
          </span>
        </div>
      </div>

      {/* Heading */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          maxWidth: "800px",
        }}
      >
        <span
          style={{
            fontSize: "52px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-2px",
          }}
        >
          Powering the Future of
        </span>
        <span
          style={{
            fontSize: "52px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-2px",
            background: "linear-gradient(90deg, #06b6d4, #22d3ee, #5eead4)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Maritime & Energy
        </span>
      </div>

      {/* Tagline */}
      <span
        style={{
          fontSize: "18px",
          color: "rgba(255,255,255,0.55)",
          marginTop: "20px",
          maxWidth: "600px",
          lineHeight: 1.5,
        }}
      >
        Norwegian engineering excellence in power management, energy storage,
        and automation — globally deployed.
      </span>

      {/* Trust badges */}
      <div style={{ display: "flex", gap: "32px", marginTop: "40px" }}>
        {[
          { value: "200+", label: "Systems Delivered" },
          { value: "30+", label: "Countries" },
          { value: "99.9%", label: "System Uptime" },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            <span
              style={{
                fontSize: "28px",
                fontWeight: 800,
                color: "#06b6d4",
                letterSpacing: "-1px",
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "1px",
                textTransform: "uppercase" as const,
              }}
            >
              {stat.label}
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
