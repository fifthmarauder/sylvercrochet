import React from "react";

const Wave = ({ color }: { color: string }) => {
  return (
    <svg
      style={{ display: "block", width: "100%", height: "100px" }}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
    >
      <path
        d="M0,40
       C120,0 240,80 360,40
       480,0 600,80 720,40
       840,0 960,80 1080,40
       1200,0 1320,80 1440,40
       L1440,0 L0,0 Z"
        fill={color}
      />
    </svg>
  );
};

export default Wave;
