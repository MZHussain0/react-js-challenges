import React, { useState } from "react";
import "./App.css";

type TPoint = { x: number; y: number };

function App() {
  const [points, setPoints] = useState<TPoint[]>([]);
  const [poppedPoints, setPoppedPoints] = useState<TPoint[]>([]);

  const handlePlaceCircle = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setPoints([...points, { x: clientX, y: clientY }]);
  };

  const handleUndo = () => {
    const newPoints = [...points];
    const popped = newPoints.pop();

    if (!popped) return;
    setPoppedPoints([...poppedPoints, popped]);
    setPoints(newPoints);
  };

  const handleRedo = () => {
    const newPopped = [...poppedPoints];
    const poppedPoint = newPopped.pop();
    if (!poppedPoint) return;
    setPoints([...points, poppedPoint]);
    setPoppedPoints(newPopped);
  };

  return (
    <>
      <button disabled={points.length === 0} onClick={handleUndo}>
        undo
      </button>
      <button disabled={poppedPoints.length === 0} onClick={handleRedo}>
        Redo
      </button>
      <div className="app" onClick={handlePlaceCircle}>
        {points.map((p, i) => (
          <div
            className="point"
            key={i}
            style={{
              left: p.x - 3 + "px",
              top: p.y - 5 + "px",
            }}></div>
        ))}
      </div>
    </>
  );
}

export default App;
