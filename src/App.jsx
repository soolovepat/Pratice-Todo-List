import "./App.css";
import React from "react";
import Router from "./shared/Router";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <main>
      <GlobalStyle />
      <Router />
    </main>
  );
}

export default App;
