import React from "react";
import "./menu-item.style.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, size, imageUrl, history, match, linkUrl }) => (
  <div
    className={`${size} menu-item`}
    style={{ backgroundImage: `url(${imageUrl})` }}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div className="content">
      <div className="title">{title.toUpperCase()}</div>
      <div className="subtitle">SHOP NOW</div>
    </div>
  </div>
);
export default withRouter(MenuItem);