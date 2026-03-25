"use client";

import React, { useState } from "react";

type Position = "bottom-right" | "bottom-left" | "top-right" | "top-left";

const positionStyles: Record<Position, React.CSSProperties> = {
  "bottom-right": { bottom: 20, right: 20 },
  "bottom-left": { bottom: 20, left: 20 },
  "top-right": { top: 80, right: 20 },
  "top-left": { top: 80, left: 20 },
};

export function KyleBadge({
  position = "bottom-right",
}: {
  position?: Position;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://kylejeffrey.com"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        zIndex: 50,
        textDecoration: "none",
        ...positionStyles[position],
      }}
    >
      <div
        style={{
          position: "relative",
          padding: "8px 16px",
          borderRadius: 8,
          border: `1px solid rgba(255, 255, 255, ${hovered ? 0.2 : 0.1})`,
          background: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: hovered
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
          transition: "all 300ms ease",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.05), transparent)",
            transform: hovered ? "translateX(100%)" : "translateX(-100%)",
            transition: "transform 700ms ease",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontFamily: "ui-monospace, monospace",
              color: "rgba(255, 255, 255, 0.4)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            built by
          </span>
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.025em",
              transition: "all 300ms ease",
              ...(hovered
                ? {
                    color: "transparent",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    backgroundImage:
                      "linear-gradient(to right, #22d3ee, #34d399)",
                  }
                : {
                    color: "white",
                  }),
            }}
          >
            Kyle
          </span>
        </div>
      </div>
    </a>
  );
}
