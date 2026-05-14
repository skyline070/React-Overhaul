import { useState, useContext } from "react";
import logo from "url:../assets/logo.png";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

  // console.log("Header Render");

  return (
    <div className="flex justify-between items-center px-6 py-3 bg-pink-100 shadow-lg transition-all duration-500 sm:bg-yellow-50 lg:bg-green-50">

      {/* Logo */}
      <div className="logo-container flex items-center">
        <img
          className="w-20 md:w-24 lg:w-28 h-auto object-contain cursor-pointer"
          src={logo}
          alt="logo"
        />
      </div>

      {/* Nav Items */}
      <div className="nav-items flex items-center">
        <ul className="flex items-center gap-6 font-medium text-gray-700">

          <li className="text-sm">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>

          <li className="hover:text-orange-500 transition duration-200 cursor-pointer">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-orange-500 transition duration-200 cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>

          <li className="hover:text-orange-500 transition duration-200 cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="hover:text-orange-500 transition duration-200 cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="hover:text-orange-500 transition duration-200 cursor-pointer">
            Cart
          </li>

          <button
            className="px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition duration-200"
            onClick={() => {
              btnName === "Login"
                ? setBtnName("Logout")
                : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="hover:text-orange-500 transition duration-200 cursor-pointer">
            {loggedInUser}
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Header;