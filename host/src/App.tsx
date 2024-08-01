import "./App.css";
import AuthModule from "authModule/App";
import useStore from "authModule/store";

function App() {
  const [count, setCount] = useStore(0);

  return (
    <>
      <h1>Host</h1>
      <div className="card">
        <button onClick={() => setCount((count: number) => count + 1)}>
          count is {count}
        </button>
      </div>
      <AuthModule />
    </>
  );
}

export default App;
