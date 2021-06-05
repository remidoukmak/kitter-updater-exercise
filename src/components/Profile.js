import React from "react";
import Avatar from "./Avatar";

const Profile = ({ photo, displayName }) => (
  <div className="Profile">
    <Avatar photo={photo} />
    <h3>{displayName}</h3>
  </div>
);

export default Profile;
