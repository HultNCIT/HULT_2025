//Pill outline
import React from "react";
const Pill_outline = (props) => {
  return (
    <div
      className={`border-[2px] rounded-30 ${props.color} text-nowrap px-4 py-2 inline`}
    >
      <p className="pill inline">
        {props.name} <span className="text-accent">{props.date}</span>
      </p>
    </div>
  );
};

export default Pill_outline;
