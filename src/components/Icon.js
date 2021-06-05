import React from "react";

const Icon = ({ type, number }) => {
  let iconClass;
  if (type === "replies") {
    iconClass = "far fa-comment-alt";
  } else if (type === "likes") {
    iconClass = "fas fa-paw";
  }

  return (
    <div className="Icon">
      <i className={iconClass} />
      {number}
    </div>
  );
};

export default Icon;
