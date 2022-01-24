import React from "react";

export default function ColorText(props) {
  return <div className="game__header--guessing-color">RGB({props.color.join(", ")})</div>;
}
