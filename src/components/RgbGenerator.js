import React from "react";

export function colorGen() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return [r, g, b];
}

export default function RgbGenerator(props) {
  return <div className="game__header--guessing-color">RGB({props.color.join(", ")})</div>;
}
