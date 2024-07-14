import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter > 0 ? setCounter(counter - 1) : setCounter(0);
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
