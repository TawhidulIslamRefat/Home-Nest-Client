import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [theme,setTheme] = useState(()=>{
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme:"light";
  })
  const links = (
    <>
      <li className="text-[16px] font-medium">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-[16px] font-medium">
        <NavLink to="/all-properties">All Properties</NavLink>
      </li>
      <li className="text-[16px] font-medium">
        <NavLink to="/add-property">Add Properties</NavLink>
      </li>
      <li className="text-[16px] font-medium">
        <NavLink to="/my-property">My Properties</NavLink>
      </li>
      <li className="text-[16px] font-medium">
        <NavLink to="/my-ratings">My Ratings</NavLink>
      </li>
    </>
  );

  useEffect(()=>{
    localStorage.setItem("theme",theme);
    document.documentElement.setAttribute("data-theme",theme)
  },[theme])
   
const handleTheme = () =>{
  setTheme(theme === "light"?"dark":"light")
}

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logged Out Successfull ");
      })
      .catch((error) => {
        alert(error.message);
      });
  };


  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-2xl">
      <div className="navbar w-11/12 mx-auto  mt-1">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-end justify-center gap-2">
            <a href="/" className="text-2xl font-semibold  text-black dark:text-gray-300 ">
              Home<span className="text-[#FF5A3C] ">Nest</span>{" "}
              <span className="text-[17px] font-medium text-black dark:text-gray-400">
                - A Real Estate Listing Portal
              </span>{" "}
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-4">
          <div>
            <button
            onClick={handleTheme}
            className="text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
            {theme === "light" ? <FaMoon /> : <FaSun />}

            </button>
          </div>
          {user && user.photoURL ? (
            <>
              <div className="dropdown dropdown-center">
                <div tabIndex={0} role="button" className=" m-1">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={user.photoURL}
                    alt="user avator"
                  />
                </div>
                <div
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-300 rounded-box z-1 w-65 p-2 shadow-sm"
                >
                  <div className="border-b-2 border-gray-400">
                    <h1 className="text-[18px] font-bold pt-2 text-center">{user.displayName}</h1>
                   <p className="text-sm text-black pb-2 text-center dark:text-white">{user.email}</p>
                  </div>
                  <div>
                    <button className=" btn bg-[#FF5A3C] text-white w-full text-[15px] my-2" onClick={handleLogOut}>Logout</button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className=" bg-[#FF5A3C] text-white hover:bg-base-100 hover:text-gray-600 hover:border hover:border-[#FF5A3C]  text-[18px] font-medium px-4 py-2 rounded-sm"
              >
                Login
              </Link>
              <Link
                to="/register"
                className=" border border-[#FF5A3C] hover:bg-[#FF5A3C] hover:text-white px-2.5 py-1.5 rounded-sm text-[18px] font-medium"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
