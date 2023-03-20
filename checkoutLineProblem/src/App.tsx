import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [itemsInPersonCart, setItemsInPersonCart] = useState(0);
  const [lines, setLines] = useState([
    [6, 3],
    [2, 5, 6],
    [3, 8, 2],
    [4, 6, 7],
    [5, 9, 2],
  ]);

  const handleAddPersonToLine = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let leastItemsAmount = 1000000000000;
    let linesWithLeast: number[] | undefined = undefined;

    for (let line of lines) {
      const totalInLine = line.reduce((sum, value) => sum + value, 0);
      if (totalInLine < leastItemsAmount) {
        leastItemsAmount = totalInLine;
        linesWithLeast = line;
      }
    }

    setLines((prevlines) =>
      prevlines.map((line) =>
        line === linesWithLeast ? [...line, itemsInPersonCart] : line
      )
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prevLines) => {
        //reduce the items by one every half second
        return prevLines.map((line) => {
          return [line[0] - 1, ...line.slice(1)].filter((value) => value > 0);
        });
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="App">
      <form onSubmit={handleAddPersonToLine}>
        <input
          type="number"
          value={itemsInPersonCart}
          onChange={(e) => {
            setItemsInPersonCart(e.target.valueAsNumber);
          }}
        />
        <button>Checkout</button>
      </form>

      <div className="lines">
        {lines.map((line, idx) => (
          <div className="line" key={idx}>
            {line.map((items, id) => (
              <div key={id}>{items}</div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
