import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-700 text-black p-4 rounded-3xl mb-7">
        Tailwain Test
      </h1>
      <Card userName="Zainab" btnClick="Read more" />
      <br />
      <br />
      <Card userName="CodeView" btnClick="Visit more" />
    </>
  );
}

export default App;
