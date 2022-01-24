import React from "react";

export default function ColorText(props) {
  return (
    <div className="game__header--guessing-color" style={props.showBg ? { backgroundColor: `rgb(${props.color.slice(0, 3).join(", ")})` } : undefined}>
      RGB({props.color.slice(0, 3).join(", ")})
    </div>
  );
}
