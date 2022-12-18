import React from "react";
import { greyPlane } from "../../../../../../assets";
import "./header.css";
import { useSelector } from "react-redux";

const TicketsHeader = ({ item }) => {
  console.log("TicketsHeader", item);
  // const item = useSelector((state) => state.popups.item);
  return (
    <div>
      <div className="tickets-main">
        <div className="left-side">
          <p className="tickets-time">{item.arrival_time}</p>
          <div className="tickets-country">
            <p>{item.origin}</p>
            <p>, {item.origin_name}</p>
          </div>
          <p>{item.arrival_date}</p>
        </div>
        <div className="middle">
          <p>{item.stops} transfers</p>
          <div className="little-line"></div>
          {/*<div className="right-card-middle-picture"></div>*/}
          <img className="right-card-middle-picture" src={greyPlane} alt="" />
        </div>
        <div className="right-side">
          <p className="tickets-time">{item.departure_time}</p>
          <div className="tickets-country">
            <p>{item.destination}</p>
            <p>, {item.destination_name}</p>
          </div>
          <p>{item.departure_date}</p>
        </div>
      </div>
      <div className="line-wrapper">
        <div className="big-line"></div>
      </div>
    </div>
  );
};

export default TicketsHeader;
