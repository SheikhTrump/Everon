import { ImageResponse } from "next/og";


export const alt = "EVERON | Architectural Distinction, Bangladesh";
export const size = {
  width: 1200,
  height: 630,
};
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111214",
          color: "#F6F4EF",
          padding: "60px 80px",
          fontFamily: "serif",
          position: "relative",
          border: "12px solid #1a1c20",
        }}
      >
        {/* Subtle decorative inner gold border */}
        <div
          style={{
            position: "absolute",
            inset: "20px",
            border: "1px solid rgba(201, 166, 107, 0.35)",
            pointerEvents: "none",
          }}
        />

        {/* Brand Insignia Icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              border: "2px solid #C9A66B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(201, 166, 107, 0.1)",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderTop: "3px solid #C9A66B",
                borderLeft: "3px solid #C9A66B",
                borderRight: "3px solid #C9A66B",
              }}
            />
          </div>
        </div>

        {/* Brand Wordmark */}
        <div
          style={{
            fontSize: "44px",
            letterSpacing: "0.28em",
            fontWeight: 700,
            color: "#F6F4EF",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          EVERON
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "0.15em",
            color: "#C9A66B",
            textTransform: "uppercase",
            marginBottom: "32px",
            fontWeight: 500,
          }}
        >
          Architectural Distinction & Luxury Living
        </div>

        {/* Divider bar */}
        <div
          style={{
            width: "120px",
            height: "2px",
            backgroundColor: "#C9A66B",
            marginBottom: "36px",
          }}
        />

        {/* Footer info */}
        <div
          style={{
            display: "flex",
            gap: "36px",
            fontSize: "15px",
            letterSpacing: "0.1em",
            color: "#999BA3",
            textTransform: "uppercase",
          }}
        >
          <span>7 Landmark Developments</span>
          <span>•</span>
          <span>Dhaka & Chittagong</span>
          <span>•</span>
          <span>Private Viewings by Appointment</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
