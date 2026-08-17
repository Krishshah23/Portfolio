import { ImageResponse } from "next/og";

export const alt = "Krish Shah · Computer Science Student & Freelance Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf6f0",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            color: "#c2410c",
            fontWeight: 600,
          }}
        >
          Computer Science Student · Freelance Developer
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 104,
              fontWeight: 700,
              color: "#241d14",
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            Krish Shah
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#59503f",
              marginTop: 24,
              maxWidth: 820,
            }}
          >
            Building real products like PathPilot AI, Crictalx, and BrainBrew, while freelancing for CS students along the way.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 24,
            color: "#8a7d67",
            borderTop: "1px solid #e7dcc9",
            paddingTop: 28,
          }}
        >
          kreesh.me
        </div>
      </div>
    ),
    { ...size }
  );
}
