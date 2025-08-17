import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
    const [loginButton,setloginButton] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <Link to = "/" >
                    <img 
                    className="logo"
                    src={LOGO_URL}
                    alt="logo-image" 
                    />
                </Link>
            </div>
            <div className="header-components" >
                <ul>
                    <li><Link to = "/"> Home </Link></li>
                    <li><Link to = "/About"> About </Link></li>
                    <li><Link to = "/Contact"> Contact </Link></li>
                </ul>
                <button className="login-btn" onClick={
                    () => {
                        loginButton === "Login"
                        ? setloginButton("Logout")
                        : setloginButton("Login")
                    }
                }>
                    {loginButton}
                </button>
            </div>
        </div>
    )
}

export default Header;