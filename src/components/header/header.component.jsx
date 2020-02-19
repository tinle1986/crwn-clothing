import React from "react";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className={"header"}>
    <Link to="/" className={"logo-container"}>
      <Logo className={"logo"} />
    </Link>
    <div className="options">
      <Link to={"/"} className={"option"}>
        HOME
      </Link>
      <Link to={"/shop"} className={"option"}>
        SHOP
      </Link>
      <Link to={"/"} className={"option"}>
        CONTACT
      </Link>
      {currentUser ? (
        <div className={"option"}>
          <span className={'greeting'}>Hello {currentUser.displayName},</span>
          <span className={'sign-out'} onClick={() => auth.signOut()}>SIGN OUT</span>
        </div>
      ) : (
        <Link to={"/signin"} className={"option"}>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
