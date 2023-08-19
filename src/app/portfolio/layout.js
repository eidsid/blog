import React from "react";
import "./style.scss";
const layout = ({ children }) => {
  return (
    <div className="container layOut">
      <h1 className="mainTitle">Our Works</h1>

      {children}
    </div>
  );
};

export default layout;
