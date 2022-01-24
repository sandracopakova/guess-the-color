import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Header from "./Header";
import { colorGen } from "./RgbGenerator";

const createColors = () => {
  const result = [];
  for (let i = 0; i < 6; i++) {
    result.push(colorGen());
  }
  return result;
};

export default function Game() {
  const [colors, setColors] = useState(createColors());
  let random = colors[Math.floor(Math.random() * colors.length)];
  return (
    <>
      <Header color={random} />
      <div className="box-container">
        {colors.map((color) => (
          <ColorBox color={color} />
        ))}
      </div>
    </>
  );
}
