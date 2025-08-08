import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";


const Header = () => {
    const [loginButton,setloginButton] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo"
                    src={LOGO_URL}
                    alt="logo-image" 
                />
            </div>
            <div className="header-components" >
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
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