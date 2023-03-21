import { useState } from "react";
import "./App.css";

function App() {
  const [grid, setGrid] = useState<number[][]>([
    [0, 3, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const setGridValue = (
    rowIndex: number,
    columnIndex: number,
    value: number
  ) => {
    const newGrid = [...grid];
    newGrid[rowIndex][columnIndex] = value;
    setGrid(newGrid);
  };

  const solvePuzzle = () => {
    // curl -H 'Content-Type: application/json' -X POST -d '{"sudoku":["9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254"]}' http://127.0.0.1:5000

    fetch(" http://127.0.0.1:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sudoku: [],
      }),
    });
  };

  return (
    <div className="App">
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((number, colIndex) => (
              <div className="cell" key={colIndex}>
                <input
                  value={number}
                  onChange={(e) =>
                    setGridValue(
                      rowIndex,
                      colIndex,
                      parseInt(e.target.value) || 0
                    )
                  }
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="cta" onClick={solvePuzzle}>
        solve
      </button>
    </div>
  );
}

export default App;
