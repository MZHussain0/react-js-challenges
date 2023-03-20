import { useState } from "react";
import "./App.css";

function App() {
  const [cells, setCells] = useState(["a", "b", "c"]);

  const onChangeHandler = (newCellValue: string, indexToUpdate: number) => {
    setCells((prevCells) =>
      prevCells.map((cell, idx) =>
        idx === indexToUpdate ? newCellValue : cell
      )
    );
  };

  const handlePlusClicked = (idx: number) => {
    setCells((prevCells) => [
      ...prevCells.slice(0, idx + 1),
      "_",
      ...prevCells.slice(idx + 1),
    ]);
  };

  const combinedString = cells.join("");

  return (
    <>
      <div className="cells">
        {cells.map((cell, idx) => (
          <div key={idx} className="cell">
            <input
              type="text"
              value={cell}
              onChange={(e) => onChangeHandler(e.currentTarget.value, idx)}
            />
            {idx < cells.length - 1 && (
              <span
                className="plus"
                onClick={() => handlePlusClicked(idx)}></span>
            )}
          </div>
        ))}
      </div>
      <div>{combinedString}</div>
    </>
  );
}

export default App;
