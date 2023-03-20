import "./App.css";
import Entry from "./components/Entry";

const files = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: "joi",
          children: [
            {
              name: "node_modules",
            },
            {
              name: "package.json",
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
    },
    {
      name: "tsconfig.json",
    },
  ],
};

function App() {
  return (
    <div className="App">
      {files.children.map((entry) => (
        <Entry entry={entry} depth={1} />
      ))}
    </div>
  );
}

export default App;
