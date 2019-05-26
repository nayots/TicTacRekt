import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeSwitcherConnected } from "./components/ThemeSwitcher/ThemeSwitcher";

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeSwitcherConnected />
    </div>
  );
};

export default App;
