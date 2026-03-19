import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Generated favicon — cyan HE monogram on dark background.
 * Next.js serves this at /icon and wires it into <link rel="icon">.
 */
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0a0a0f, #0d1117)",
        borderRadius: "6px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <span
        style={{
          fontSize: "18px",
          fontWeight: 900,
          background: "linear-gradient(135deg, #06b6d4, #22d3ee)",
          backgroundClip: "text",
          color: "transparent",
          letterSpacing: "-1px",
        }}
      >
        H
      </span>
    </div>,
    { ...size },
  );
}
