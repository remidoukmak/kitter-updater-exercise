import "./styles.css";
import { useState } from "react";
import meowsData from "./meows.json";
import Meow from "./components/Meow";
import Timeline from "./components/Timeline";

export default function App() {
  const [meows, setMeows] = useState(meowsData);
  return (
    <div className="App">
      <h1>Kitter</h1>
      <Timeline meows={meows} />
    </div>
  );
}
