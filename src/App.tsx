import React from "react";
import { Counter } from "./features/counter/Counter";
import Todos from "./features/todos/Todos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todos />
      </header>
    </div>
  );
}

export default App;
