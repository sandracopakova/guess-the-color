import React from "react";
import ColorBox from "./ColorBox";

export default function Game() {
  return (
    <>
      <div className="game__header">
        <div className="game__header--title">
          the great <div className="game__header--guessing-color">RGB()</div> guessing game
        </div>
      </div>

      <div className="box-container">
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
      </div>
    </>
  );
}
