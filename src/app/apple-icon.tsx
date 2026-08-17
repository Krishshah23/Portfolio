import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #1c140c 0%, #0e0a06 100%)",
          borderRadius: 36,
          border: "4px solid #3a2a19",
          padding: 16,
        }}
      >
        <svg
          viewBox="0 0 64 64"
          width="130"
          height="130"
          fill="none"
        >
          <defs>
            <linearGradient id="brandGradApple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdba74" />
              <stop offset="50%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
            <linearGradient id="stemGradApple" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fdf8f0" />
              <stop offset="100%" stopColor="#d6c6b0" />
            </linearGradient>
          </defs>

          {/* Vertical Spine */}
          <path
            d="M18 16C18 14.3431 19.3431 13 21 13C22.6569 13 24 14.3431 24 16V48C24 49.6569 22.6569 51 21 51C19.3431 51 18 49.6569 18 48V16Z"
            fill="url(#stemGradApple)"
          />

          {/* Top dynamic wing */}
          <path
            d="M23 31.5L37.8 16.7C38.97 15.53 40.87 15.53 42.04 16.7C43.21 17.87 43.21 19.77 42.04 20.94L29.5 33.5L23 31.5Z"
            fill="url(#brandGradApple)"
          />

          {/* Bottom dynamic wing */}
          <path
            d="M28.5 32.5L42.04 46.04C43.21 47.21 43.21 49.11 42.04 50.28C40.87 51.45 38.97 51.45 37.8 50.28L23 35.5L28.5 32.5Z"
            fill="url(#brandGradApple)"
          />

          {/* Krish signature beacon dot (kreesh.me) */}
          <circle cx="45" cy="15" r="4" fill="#fb923c" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
