import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Search from "./Search";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/destination"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline active" : ""
          }
        >
          Destination
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline active" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex items-center justify-between mx-5 md:mx-10 lg:mx-20 py-5">
      <div>
        <img src={logo} alt="logo" className="w-24" />
      </div>
      <div className="hidden md:flex">
        <Search />
      </div>
      <div className="hidden lg:flex items-center gap-5">
        <ul className="flex gap-5 px-1">{links}</ul>
        <Link to="/login">
          <button className="px-4 py-2 bg-[#F9A51A] rounded w-full">
            Login
          </button>
        </Link>
      </div>
      <div className="lg:hidden flex">
        <div onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu === true ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`absolute right-8 bg-yellow-200 rounded-lg p-5 ${
            toggleMenu ? `top-14` : `-top-40`
          } duration-1000 z-10`}
        >
          {links}
          <Link to="/login">
            <button className="px-4 py-2 bg-[#F9A51A] rounded w-full">
              Login
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
