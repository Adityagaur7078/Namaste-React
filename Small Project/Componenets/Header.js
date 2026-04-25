import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import Body from "./Body";

const Header = () => {
  const [btnSignIn, setBtnSignIn] = useState("Sign In");

  return (
    <div className="navbar">
      <img src={LOGO_URL} alt="logo" />

      <ul className="nav-items">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/contact"> Contact </Link>
        </li>
        <li>Offers</li>
        <li>
          <button
            className="btn-signIn-signOUT"
            onClick={() => {
              setBtnSignIn(
                btnSignIn === "Sign In" ? "Sign Out" : "Sign In"
              );
            }}
          >
            {btnSignIn}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header; 