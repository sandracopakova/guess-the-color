import React from "react";

export default function Intro(props) {
  return (
    <>
      <div className="game__header">
        <div className="game__header--title">
          the great{" "}
          <button
            className="intro-btn"
            type="button"
            onClick={() => {
              props.onBtnClick();
            }}
          >
            Start
          </button>{" "}
          guessing game
        </div>
      </div>
    </>
  );
}
