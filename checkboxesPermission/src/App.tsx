import { useState } from "react";
import "./App.css";
import CheckBoxesRow from "./components/CheckBoxesRow";

function App() {
  const [permissions, setPermissions] = useState<Record<string, any>>({
    t1: {
      read: false,
      write: false,
      delete: false,
    },
    t2: {
      read: false,
      write: false,
      delete: false,
    },
  });

  const handleSubmit = () => {
    console.log(permissions);
  };
  return (
    <div className="App">
      <div className="grid">
        <span></span>
        <span>read</span>
        <span>write</span>
        <span>delete</span>
        {Object.keys(permissions).map((key) => (
          <CheckBoxesRow
            key={key}
            label={key}
            permissions={permissions[key]}
            setPermissions={(newPermissions: any) => {
              setPermissions({ ...permissions, [key]: { ...newPermissions } });
            }}
          />
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
