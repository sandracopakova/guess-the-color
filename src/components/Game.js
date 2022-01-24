import React, { useState, useMemo } from "react";
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
  const [win, setWin] = useState(false);
  const [random, setRandom] = useState(colors[Math.floor(Math.random() * colors.length)]);
  return (
    <>
      <Header color={random} showBg={win} />
      <div className="action-line">
        {win ? (
          <button
            className="action-line__btn"
            onClick={() => {
              const newColors = createColors();
              setColors(newColors);
              setWin(false);
              setRandom(newColors[Math.floor(Math.random() * newColors.length)]);
            }}
          >
            Play again
          </button>
        ) : undefined}
      </div>
      <div className="box-container">
        {colors.map((color) => (
          <ColorBox
            color={color}
            onClick={(color) => {
              console.log(color, random, color === random);
              if (color === random) {
                setColors([color, color, color, color, color, color]);
                setWin(true);
              } else {
                setColors(
                  colors.map((c) => {
                    if (c === color) {
                      const newColor = [...color];
                      newColor[3] = false;
                      return newColor;
                    }
                    return c;
                  })
                );
              }
            }}
          />
        ))}
      </div>
    </>
  );
}
