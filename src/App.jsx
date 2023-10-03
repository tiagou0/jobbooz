import { useState } from "react";
import "./App.css";

function App() {
  const [first, setFirst] = useState("Tiago");

  return (
    <div>
      <h1> {first} </h1>
      <button
        onClick={() => {
          setFirst("Baby Hello");
        }}
      >
        hola
      </button>
    </div>
  );
}

export default App;
