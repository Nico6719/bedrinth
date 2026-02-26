import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 30% 20%, #ecfeff 0%, #dbeafe 45%, #bfdbfe 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.35), rgba(255,255,255,0))",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 9,
            background: "#6b4423",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 9,
            left: 0,
            right: 0,
            height: 5,
            background: "#5cb85c",
          }}
        />

        <div
          style={{
            position: "relative",
            width: 16,
            height: 16,
            display: "flex",
            transform: "translateY(1px)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 2,
              width: 12,
              height: 5,
              background: "#f7c66e",
              border: "1px solid #8b5a2b",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 5,
              left: 2,
              width: 7,
              height: 8,
              background: "#e5a64f",
              border: "1px solid #8b5a2b",
              borderTop: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 5,
              left: 9,
              width: 5,
              height: 8,
              background: "#d18f3f",
              border: "1px solid #8b5a2b",
              borderTop: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 7,
              left: 7,
              width: 2,
              height: 2,
              background: "#8b5a2b",
              borderRadius: 1,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
