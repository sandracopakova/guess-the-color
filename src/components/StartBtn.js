import React from "react";

export default function StartBtn(props) {
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
