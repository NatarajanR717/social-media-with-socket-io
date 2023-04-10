import React from "react";
import "./Infocard.css";
import { UilPen } from "@iconscout/react-unicons";

const Infocard = () => {
  return (
    <div className="infocard">
      <div className="infohead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Releationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Coimbatore</span>
      </div>
      <div className="info">
        <span>
          <b>works at </b>
        </span>
        <span>Rigelsoft Technologies</span>
      </div>
      <button className="button logout-btn">Logout</button>
    </div>
  );
};

export default Infocard;
