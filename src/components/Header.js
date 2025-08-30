import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../customHooks/useOnlineStatus";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  const status = useOnlineStatus();

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-gray-900 shadow-lg sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <img
            className="w-14 h-14 rounded-full border-2 border-white shadow-md hover:scale-105 transition-transform duration-300"
            src={LOGO_URL}
            alt="logo"
          />
        </Link>
        <Link to={"/"}>
          <span className="text-white text-2xl font-bold tracking-wide">
            MealMate
          </span>
        </Link>
      </div>

      {/* Nav Links */}
      <nav>
        <ul className="flex items-center gap-6 text-white font-medium text-lg">
          <li className={`flex items-center  rounded-2xl px-2 ${status ? "bg-green-700" : "bg-red-600"} `} >
            <span className="mr-1">{status ? "👍" : "👎"}</span>
            <span className="text-sm text-white">
              {status ? "Online" : "Offline"}
            </span>
          </li>
          <li>
            <Link
              to="/Grocery"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Grocery
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Login Button */}
      <button
        onClick={() =>
          loginButton === "Login"
            ? setLoginButton("Logout")
            : setLoginButton("Login")
        }
        className="px-5 py-2 rounded-xl bg-yellow-400 text-gray-900 font-semibold shadow-md hover:bg-yellow-300 hover:shadow-lg transition-all duration-300"
      >
        {loginButton}
      </button>
    </header>
  );
};

export default Header;
