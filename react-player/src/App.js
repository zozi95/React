import React from "react";
//스타일
import "./styles/app.scss";
//컴포넌트 추가
import Player from "./components/Player";
import Song from "./components/Song";
function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
