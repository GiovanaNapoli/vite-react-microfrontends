import { useState } from "react";
import "./App.css";
import AuthModule from "authModule/App";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Host</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <AuthModule />
    </>
  );
}

export default App;
