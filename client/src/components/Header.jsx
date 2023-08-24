import { Link } from "react-router-dom";
import { useCurrentUserContext } from "../context/CurrentUser";
import logo from "./../assets/sony-buttons-logo.png";
import { HiSun, HiMoon, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import React, { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(true);
  const { isLoggedIn, logoutUser } = useCurrentUserContext();

  return (
    <div className="flex item-center p-5">
      <img src={logo} width={60} height={60} />
      
      <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full item-center">
        <HiOutlineMagnifyingGlass className="mt-2" />
        <input
          type="text"
          placeholder="Search Games"
          className="px-2 bg-transparent outline-none"
        />
      </div>
      <div>
        {/* <DarkThemeToggle /> */}
        {toggle ? (
          <HiMoon
            size={38}
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <HiSun
            size={38}
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        )}
      </div>
      <div className="flex pl-5 font-bold dark:text-white">
        {isLoggedIn() ? (
          <>
            <Link to="/profile">Profile</Link>
            <button type="button" onClick={logoutUser}>
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/register">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;