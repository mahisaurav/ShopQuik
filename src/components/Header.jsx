import React, { useEffect, useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Search, Bell, User, ShoppingBag, ChevronDown } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { UserContext } from "../UserContext";

function Header() {
  const { user, logout } = useContext(UserContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShirtsHovered, setIsShirtsHovered] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
  };

  const userMenu = (textColor = "text-white") => (
    <li className="relative flex items-center gap-1">
      {!user ? (
        <NavLink
          to="/Admin"
          className={({ isActive }) =>
            `hover:text-red-600 cursor-pointer transition-colors duration-300 ${isActive ? "text-red-600" : ""}`
          }
        >
          <User />
        </NavLink>
      ) : (
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          className={`cursor-pointer flex items-center gap-1 ${textColor} hover:text-red-300 transition`}
        >
          <span className="text-sm font-medium">Hi, {user.name}</span>
          <ChevronDown size={16} />
        </div>
      )}
      {showDropdown && (
        <div className="absolute top-full right-0 mt-2 bg-white text-sm text-black rounded shadow-md py-2 z-50">
          <button
            onClick={handleLogout}
            className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
          >
            Logout
          </button>
        </div>
      )}
    </li>
  );

  const topBanner = (
    <div className="w-full z-50 bg-blue-900 text-white py-1 relative">
      <div className="flex justify-center items-center relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer hover:underline">
          FREE DELIVERY FROM 150 - FREE RETURN 30J
        </div>
        <div className="ml-auto mr-4 flex items-center cursor-pointer">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-sm ml-2">4.6/5 - 16299 REVIEWS</span>
        </div>
      </div>
    </div>
  );

  const navLinks = (
    <ul className="flex gap-7">
      <li>
        <NavLink to="/" className={({ isActive }) => `hover:text-red-600 transition-colors duration-300 ${isActive ? "text-red-600" : ""}`}>
          Novelties
        </NavLink>
      </li>
      <li
        className="relative hover:text-red-600 transition-colors duration-300"
        onMouseEnter={() => setIsShirtsHovered(true)}
        onMouseLeave={() => setIsShirtsHovered(false)}
      >
        <NavLink to="/shirts" className={({ isActive }) => `hover:text-red-600 transition-colors duration-300 ${isActive ? "text-red-600" : ""}`}>
          Shirts
        </NavLink>
        {isShirtsHovered && <MegaMenu />}
      </li>
      <li>
        <NavLink to="/clothes" className={({ isActive }) => `hover:text-red-600 transition-colors duration-300 ${isActive ? "text-red-600" : ""}`}>
          Clothes
        </NavLink>
      </li>
      <li>
        <NavLink to="/socks" className={({ isActive }) => `hover:text-red-600 transition-colors duration-300 ${isActive ? "text-red-600" : ""}`}>
          Socks
        </NavLink>
      </li>
      <li>
        <NavLink to="/tie" className={({ isActive }) => `hover:text-red-600 transition-colors duration-300 ${isActive ? "text-red-600" : ""}`}>
          Tie
        </NavLink>
      </li>
      <li>
        <NavLink to="/accessories" className={({ isActive }) => `hover:text-red-600 transition-colors duration-300 ${isActive ? "text-red-600" : ""}`}>
          Accessories
        </NavLink>
      </li>
    </ul>
  );

  const iconLinks = (color = "text-white") => (
    <ul className="flex gap-4 items-center">
      <li className="text-2xl cursor-pointer hover:text-red-600 transition-colors duration-300">
        <Search />
      </li>
      <li className="text-2xl cursor-pointer hover:text-red-600 transition-colors duration-300">
        <Bell />
      </li>
      {userMenu(color)}
      <li>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `hover:text-red-600 cursor-pointer transition-colors duration-300 ${isActive ? "text-red-600" : ""}`
          }
        >
          <ShoppingBag />
        </NavLink>
      </li>
    </ul>
  );

  return (
    <>
      {!isScrolled && isHomePage && topBanner}

      {isHomePage && (
        <div className="relative w-full">
          <img
            className="w-full h-[100vh] object-cover"
            src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg"
            alt="Fashion Hero"
          />
          <div
            className={`${
              isScrolled
                ? "fixed top-0 left-0 bg-white text-[#193254] shadow-md"
                : "absolute top-0 left-0 bg-[rgba(99,99,99,0.15)] text-white"
            } w-full flex justify-between items-center px-6 py-4 h-17 font-semibold transition-all duration-300 z-40`}
          >
            <NavLink
              to="/"
              onClick={() => window.location.reload()}
              className="text-3xl cursor-pointer hover:text-red-600 transition-colors duration-300"
            >
              ShopQuik
            </NavLink>
            {navLinks}
            {iconLinks("text-white")}
          </div>
        </div>
      )}

      {!isHomePage && (
        <>
          {topBanner}
          <div className="w-full bg-white text-[#193254] shadow-md flex justify-between items-center px-6 py-4 h-17 font-semibold z-40 sticky top-0">
            <NavLink
              to="/"
              className="text-3xl cursor-pointer hover:text-red-600 transition-colors duration-300"
            >
              ShopQuik
            </NavLink>
            {navLinks}
            {iconLinks("text-[#193254]")}
          </div>
        </>
      )}
    </>
  );
}

export default Header;







