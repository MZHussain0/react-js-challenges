import { useState } from "react";
import "./App.css";

function App() {
  const [towers, setTowers] = useState([5, 0, 0]);
  const [selectedTower, setSelectedTower] = useState<number | undefined>();

  const handleSelectTower = (idx: number) => {
    setSelectedTower(idx);
  };

  return (
    <div className="App">
      <div className="towers">
        {towers.map((towerHeight, idx) => (
          <div
            onClick={() => handleSelectTower(idx)}
            className={"tower" + (selectedTower === idx ? "selected" : "")}
            key={idx}>
            <div className="line"></div>
            <div className="discs">
              {[...new Array(towerHeight)].map((_, idx) => (
                <div
                  className="disc"
                  key={idx}
                  style={{ width: `${idx * 20 + 20}px` }}></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
