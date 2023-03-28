import React from "react";
import "./Postshare.css";
import ProfileImg from "../../img/profileImg.jpg";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
} from "@iconscout/react-unicons";

function Postshare() {
  return (
    <div className="postshare">
      <img src={ProfileImg} alt="share_img"></img>
      <div>
        <input type="text" placeholder="What's happening" />
        <div className="postoptions">
          <div className="option" style={{color:"var(--photo)"}}>
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{color:"var(--video)"}}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{color:"var(--location)"}}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{color:"var(--shedule)"}}>
            <UilSchedule />
            Shedule
          </div>
          <button className="button ps-button">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Postshare;
