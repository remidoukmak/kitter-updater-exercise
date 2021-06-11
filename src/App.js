import "./styles.css";
import { useState, useEffect } from "react";
import Timeline from "./components/Timeline";
import CreateMeow from "./components/CreateMeow";

export default function App() {
  const [meows, setMeows] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-cors-api.herokuapp.com/meows`)
      .then((res) => res.json())
      .then((data) => setMeows(data));
  }, []);
  return (
    <div className="App">
      <h1>Kitter</h1>
      <CreateMeow className="CreateMeow" />
      <Timeline meows={meows} />
    </div>
  );
}

// 1. Add a useEffect hook in App.js to fetch data from the following API endpoint: https://cyf-cors-api.herokuapp.com/meows. Use this data
//    to set the meows in App.js.
