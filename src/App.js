import React, { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAdd = () => {
    if (num < 150) {
      const newNum = num + 1;
      const newHistory = history.slice(0, currentIndex + 1).concat(newNum);
      setNum(newNum);
      setHistory(newHistory);
      setCurrentIndex(newHistory.length - 1);
    }
  };

  const handleSubtract = () => {
    if (num > 0) {
      const newNum = num - 1;
      const newHistory = history.slice(0, currentIndex + 1).concat(newNum);
      setNum(newNum);
      setHistory(newHistory);
      setCurrentIndex(newHistory.length - 1);
    }
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setNum(history[currentIndex - 1]);
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setNum(history[currentIndex + 1]);
    }
  };

  const progressBarStyle = {
    width: `${(num / 150) * 100}%`,
    transition: "width 0.3s ease-in-out",
  };

  return (
    <div className="App">
      <h1>Number Counter</h1>
      <div className="counter-container">
        <button onClick={handleSubtract}>-</button>
        <span>{num}</span>
        <button onClick={handleAdd}>+</button>
      </div>
      <div className="progress-bar">
        <div className="progress" style={progressBarStyle}></div>
      </div>
      <div className="history-buttons">
        <button onClick={handleUndo} disabled={currentIndex === 0}>
          Undo
        </button>
        <button
          onClick={handleRedo}
          disabled={currentIndex === history.length - 1}
        >
          Redo
        </button>
      </div>
    </div>
  );
}

export default App;
