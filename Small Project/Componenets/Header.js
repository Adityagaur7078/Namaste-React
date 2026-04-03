import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnSignIn, setBtnSignIn] = useState("Sign In");

  return (
    <div className="navbar">
      <img src={LOGO_URL} alt="logo" />

      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
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