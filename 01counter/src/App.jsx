import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount((prevCount) => prevCount + 1); // takes and update value from and in ReactDOM
    setCount((prevCount) => prevCount + 1); // takes and update value from and in ReactDOM
    setCount(count + 1); // takes value from acutal DOM and overwrites(updates) value in ReactDOM
  };
  const RemoveValue = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>this is a Vite react app</h1>
      <h2>Click and change the counter value: {count}</h2>
      <button onClick={() => addValue()}>Add Value</button>
      {"  "}
      <button onClick={() => RemoveValue()}>Remove value</button>
    </>
  );
}

export default App;
