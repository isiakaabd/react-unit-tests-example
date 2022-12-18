import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <div className="card">
        <button role="button" onClick={() => setCount((count) => count + 1)}>
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
