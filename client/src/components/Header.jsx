import { Link } from "react-router-dom";
import { useCurrentUserContext } from "../context/CurrentUser";
import logo from "./../assets/sony-buttons-logo.png";
import { HiSun, HiMoon, HiOutlineMagnifyingGlass } from "react-icons/hi2";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(true);
  const { isLoggedIn, logoutUser } = useCurrentUserContext();

  return (
    <div className="flex items-center p-5 ">
      <img src={logo} width={60} height={60} className="rounded-full" />

      <input
        type="text"
        placeholder="Search Games"
        className="px-2 bg-transparent outline-none w-full mx-5 rounded-full"
      />

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
  );
}

export default Header;
