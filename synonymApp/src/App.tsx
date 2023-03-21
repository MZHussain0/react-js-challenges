import React, { useState } from "react";
import "./App.css";

type synonyms = {
  word: string;
  score: number;
};

function App() {
  const [word, setWord] = useState<string>();
  const [synonyms, setSynonyms] = useState<synonyms[]>([]);

  const handleSynonymFetch = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
      .then((res) => res.json())
      .then(setSynonyms);
  };

  const handleSynonymClick = (word: string) => {
    setWord(word);
    fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
      .then((res) => res.json())
      .then(setSynonyms);
  };

  return (
    <div className="App">
      <form onSubmit={handleSynonymFetch}>
        <label htmlFor="word-input">Enter word</label>
        <input
          type="text"
          id="word-input"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button>submit</button>
      </form>

      <ul>
        {synonyms.map((syn) => (
          <li key={syn.score} onClick={() => handleSynonymClick(syn.word)}>
            {syn.word}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
