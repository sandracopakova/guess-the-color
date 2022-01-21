import React, { useState } from "react";
import Intro from "./components/Intro";
import Game from "./components/Game";

export default function App() {
  const [isIntro, setIsIntro] = useState(true);

  return (
    <div className="app">
      {isIntro ? (
        <Intro
          onBtnClick={() => {
            setIsIntro(false);
          }}
        />
      ) : (
        <Game />
      )}
    </div>
  );
}
