import React from "react";

export default function StartBtn() {
  return (
    <button
      className="intro-btn"
      type="button"
      onClick={() => {
        props.onBtnClick();
      }}
    ></button>
  );
}
