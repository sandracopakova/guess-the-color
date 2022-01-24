import React from "react";

export default function ColorBox(props) {
  const styles = {
    backgroundColor: `rgb(${props.color.join(", ")})`,
    //backgroudColor: rgb({props.colorGen().join(", ")}) ale ne takhle
  };
  return <div className="box" style={styles} />;
}
