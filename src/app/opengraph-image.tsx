import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Holme Engineering — Maritime & Energy Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const svgRaw = await fetch(
    new URL("../../public/logo-light.svg", import.meta.url),
  ).then((res) => res.text());

  const navySvg = svgRaw
    .replace('<?xml version="1.0" encoding="UTF-8"?>\n', "")
    .replaceAll('fill="#000000"', 'fill="#1b2a4a"');

  const logoSrc = `data:image/svg+xml;base64,${btoa(navySvg)}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8f9fb",
        fontFamily: "system-ui, -apple-system, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "48px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={220} height={220} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: "54px",
              fontWeight: 800,
              color: "#1b2a4a",
              letterSpacing: "-2px",
              lineHeight: 1.1,
            }}
          >
            Holme Engineering
          </span>
          <span
            style={{
              fontSize: "22px",
              fontWeight: 500,
              color: "#5a6b82",
              letterSpacing: "0.5px",
            }}
          >
            Maritime & Energy Systems
          </span>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #1b2a4a, #3a6b9f, #1b2a4a)",
          display: "flex",
        }}
      />

      <span
        style={{
          position: "absolute",
          bottom: "20px",
          right: "40px",
          fontSize: "14px",
          fontWeight: 500,
          color: "#8a9bb5",
        }}
      >
        holme-engineering.com
      </span>
    </div>,
    { ...size },
  );
}
