import React from "react";
import StartBtn from "./StartBtn";
import RgbGenerator from "./RgbGenerator";

export default function Header(props) {
  return (
    <>
      <div className="game__header">
        <div className="game__header--title">the great {props.isIntro ? <StartBtn /> : <RgbGenerator />} guessing game</div>
      </div>
    </>
  );
}
