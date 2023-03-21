import { useState } from "react";
import "./App.css";

type Tcell = {
  row: number;
  col: number;
};

function App() {
  const [grid, setGrid] = useState([
    [0, 1, 2, 4],
    [2, 3, 1, 5],
    [3, 4, 5, 0],
  ]);

  const [isRevealedGrid, setIsRevealedGrid] = useState(
    new Array(grid.length)
      .fill("")
      .map(() => new Array(grid[0].length).fill(false))
  );

  const [previousClick, setPreviousClick] = useState<Tcell | undefined>();

  const handleCardClicked = (row: number, col: number) => {
    const clickedNumber = grid[row][col];
    const newRevealedGrid = [...isRevealedGrid];
    newRevealedGrid[row][col] = true;
    setIsRevealedGrid(newRevealedGrid);

    if (previousClick) {
      // second click of the two
      const previousClickPosition = grid[previousClick.row][previousClick.col];

      if (previousClickPosition !== clickedNumber) {
        // set the card tp false after one second
        setTimeout(() => {
          newRevealedGrid[row][col] = false;
          newRevealedGrid[previousClick.row][previousClick.col] = false;
          setIsRevealedGrid([...newRevealedGrid]);
        }, 1000);
      } else {
        const hasWon = newRevealedGrid.flat().every((isRevealed) => isRevealed);
        console.log(hasWon);
        if (hasWon) {
          setTimeout(() => {
            alert("You won!!");
          });
        }
      }
      setPreviousClick(undefined);
    } else {
      setPreviousClick({ row: row, col: col });
    }
  };

  return (
    <div className="App">
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((number, colIndex) => (
              <div
                className="card"
                key={colIndex}
                onClick={() => handleCardClicked(rowIndex, colIndex)}>
                {isRevealedGrid[rowIndex][colIndex] ? number : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
