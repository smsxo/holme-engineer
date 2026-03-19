import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple Touch Icon — cyan HE monogram on dark background.
 * Next.js serves this at /apple-icon and wires it into
 * <link rel="apple-touch-icon">.
 */
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0a0a0f 0%, #0d1117 100%)",
        borderRadius: "36px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <span
        style={{
          fontSize: "80px",
          fontWeight: 900,
          letterSpacing: "-4px",
          background: "linear-gradient(135deg, #06b6d4, #22d3ee)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        HE
      </span>
    </div>,
    { ...size },
  );
}
