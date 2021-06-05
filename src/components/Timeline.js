import React from "react";
import Meow from "./Meow";

const Timeline = ({ meows }) => (
  <div className="Timeline">
    {meows.map((meow, index) => (
      <Meow {...meow} key={index} />
    ))}
  </div>
);

export default Timeline;
