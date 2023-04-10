import React from "react";
import "./Profile.css";
import ProfileLeft from "../../../components/ProfileLeft/ProfileLeft";
import ProfileCard from "../../../components/profilecard/ProfileCard";
import Postside from "../../../components/Postside/Postside";
import Rightside from "../../../components/Rightside/Rigthside"

const Profile = () => {
  return <div className="profile">
    <ProfileLeft/>
    <div className="profile-center">
      <ProfileCard/>
      <Postside/>
    </div>

    <Rightside/>
  </div>
};

export default Profile;
