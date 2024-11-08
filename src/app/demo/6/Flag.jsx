"use client";

const flagMap = {
  0: "🇺🇸",
  1: "🇪🇸",
  2: "🇫🇷",
  3: "🇩🇪",
  4: "🇷🇺",
};

function Flag() {
  console.log("Rendering Flag");
  return (
    <span role="img" aria-label="hand waving">
      {flagMap[0]}
    </span>
  );
}

export default Flag;
