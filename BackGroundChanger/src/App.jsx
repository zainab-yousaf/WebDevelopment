import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");
  let changeColor = (color) => {
    setColor(color);
  };
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm "
              style={{ backgroundColor: "red" }}
              onClick={() => {
                changeColor("red");
              }}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full  text-white shadow-sm"
              style={{ backgroundColor: "orange" }}
              onClick={() => {
                changeColor("orange");
              }}
            >
              Orange
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full  text-white shadow-sm "
              style={{ backgroundColor: "blue" }}
              onClick={() => {
                changeColor("blue");
              }}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full  text-white shadow-sm"
              style={{ backgroundColor: "purple" }}
              onClick={() => {
                changeColor("purple");
              }}
            >
              Purple
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full  text-white shadow-sm"
              style={{ backgroundColor: "green" }}
              onClick={() => {
                changeColor("green");
              }}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full  text-white shadow-sm"
              style={{ backgroundColor: "yellow" }}
              onClick={() => {
                changeColor("yellow");
              }}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
