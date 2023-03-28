import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import ProfileImg from "../../img/profileImg.jpg";

const ProfileCard = () => {
  return (
    <div className="profilecard">
      <div className="profileimages">
        <img src={Cover} alt="cover"></img>
        <img src={ProfileImg} alt="profile"></img>
      </div>
      <div className="profilename">
        <span>Divya</span>
        <span>Senior system Engineer</span>
      </div>
      <div className="followstatus">
        <hr></hr>
        <div>
          <div className="follow">
            <span>6,453</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Following</span>
          </div>
        </div>
        <hr></hr>
      </div>
      <span>
        My Profile
      </span>
    </div>
  );
};

export default ProfileCard;
