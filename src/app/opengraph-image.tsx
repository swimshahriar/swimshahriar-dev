import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#121212",
          color: "#f4f2ee",
          borderTop: "12px solid #f2a65a",
        }}
      >
        <div style={{ fontSize: 32, color: "#f2a65a", fontFamily: "monospace" }}>
          ~/swimshahriar.dev
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 88, fontWeight: 600, letterSpacing: -2 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 40, color: "#b9b4ab" }}>Senior Software Engineer</div>
        </div>
        <div style={{ fontSize: 28, color: "#8e8a84" }}>
          {`React · TypeScript · Go — ${siteConfig.location}`}
        </div>
      </div>
    ),
    size,
  );
}
