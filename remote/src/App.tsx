import "./App.css";

import useCount from "./store";

function App() {
  const [count, setCount] = useCount();

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
