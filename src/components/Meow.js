import React from "react";
import Username from "./Username";
import Profile from "./Profile";
import Hashtag from "./Hashtag";
import Icon from "./Icon";

const Meow = ({ user, text, hashtags, replies, likes }) => (
  <div className="Meow">
    <div className="top-section">
      <Profile photo={user.photo} displayName={user.displayName} />
      <Username username={user.username} />
    </div>
    <div className="mid-section">
      <p>{text}</p>
      <div className="hashtags">
        {hashtags.map((hashtag, index) => (
          <Hashtag key={index}>{hashtag}</Hashtag>
        ))}
      </div>
    </div>
    <div className="bottom-section">
      <Icon type="replies" number={replies} />
      <Icon type="likes" number={likes} />
    </div>
  </div>
);

export default Meow;
