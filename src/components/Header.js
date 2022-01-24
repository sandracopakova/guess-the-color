import React from "react";
import StartBtn from "./StartBtn";
import ColorText from "./ColorText";

export default function Header(props) {
  return (
    <>
      <div className="game__header">
        <div className="game__header--title">the great {props.isIntro ? <StartBtn /> : <ColorText color={props.color} showBg={props.showBg} />} guessing game</div>
      </div>
    </>
  );
}
