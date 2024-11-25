import React from "react";
import Button from "./Button";

const EventCard = (props) => {
  return (
    <div
      className={`event-card flex flex-col items-end justify-between ${props.hover} ${props.transition}`}
    >
      <div className="card-title bg-blackMain relative px-3 py-6 right-0 inline-block">
        <h6 className="font-extrabold text-right text-white">OC Workshop</h6>
        <p className="text-right">November 29,2024</p>
      </div>
      <div className="card-content px-4 py-2 flex items-center justify-between gap-8 rounded-b-2xl bg-blackMain">
        <div className="card-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            maiores veniam
          </p>
        </div>
        <div className="card-button">
          <Button />
        </div>
      </div>
    </div>
  );
};
export default EventCard;
