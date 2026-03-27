import { LOGO_URL } from "../utils/constants";

const Header = () => (
    <div className="navbar">
        <img src= { LOGO_URL }></img>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Offers</li>
            <li>Sign In</li>
        </ul>
    </div>
);

export default Header;