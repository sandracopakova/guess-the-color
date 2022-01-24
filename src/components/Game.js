import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Header from "./Header";

function colorGen() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = true;
  return [r, g, b, a];
}

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
          <ColorBox
            color={color}
            onClick={(color) => {
              if (color === random) {
                setColors([color, color, color, color, color, color]);
              } else {
                setColors(colors.map((c) => {
                  if (c === color) {
                    const newColor = [...color]
                    newColor[3] = false;
                    return newColor;
                  }
                  return c;
                }))
              }
            }}
          />
        ))}
      </div>
    </>
  );
}
