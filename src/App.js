import "./styles.css";
import { useState, useEffect } from "react";
import Timeline from "./components/Timeline";

export default function App() {
  const [meows, setMeows] = useState([]);
  return (
    <div className="App">
      <h1>Kitter</h1>
      <Timeline meows={meows} />
    </div>
  );
}
