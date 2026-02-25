import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(1);
  const addCounter = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Counter In React use State</h1>
      <h3>Counter {counter}</h3>
      <button onClick={addCounter}>Add Counter</button>
      <br />
      <br />
      <button onClick={removeCounter}>Remove Counter</button>
    </>
  );
}

export default App;
