"use client";

import { useState } from "react";

export default function Slider({ min, max, onChange, value }) {
  return (
    <div className="range">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step="1"
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div>{value}</div>
    </div>
  );
}
