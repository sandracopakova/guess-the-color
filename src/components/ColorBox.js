import React from "react";

export default function ColorBox(props) {
  const styles = {
    backgroundColor: `rgb(${props.color.slice(0,3).join(", ")})`,
    opacity: props.color[3] ? 1 : 0,
  };

  return <div className="box" style={styles} onClick={() => props.onClick(props.color)} />;
}
