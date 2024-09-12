import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoLight from "../assets/logo-light.svg";
import logoDark from "../assets/logo-dark.svg";
import { Menu, X } from "lucide-react";

const Navbar = ({ withHeroSection }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setScrolled(scrollPosition > viewportHeight * 0.4);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getNavStyles = () => {
    if (withHeroSection && location.pathname === "/") {
      if (scrolled) {
        return theme === "light"
          ? "bg-white text-black py-3"
          : "bg-black text-white py-3";
      } else {
        return "bg-gradient-to-b from-black/80 to-transparent text-white py-8";
      }
    } else {
      return theme === "light"
        ? "bg-white text-black py-3"
        : "bg-black text-white py-3";
    }
  };

  const getLinkStyles = () => {
    if (withHeroSection && location.pathname === "/") {
      if (scrolled) {
        return theme === "light"
          ? "text-black hover:text-gray-600"
          : "text-white  hover:text-gray-300";
      } else {
        return theme === "light"
        ? "text-white hover:text-gray-600"
        : "text-white  hover:text-gray-300";
      }
    } else {
      return theme === "light"
        ? "text-black hover:text-gray-600"
        : "text-white hover:text-gray-300";
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`w-full px-4 md:px-12 fixed top-0 left-0 right-0 z-50 flex justify-between items-center transition-all duration-300 ${getNavStyles()}`}
    >
      <div className="font-Syne h-[55px] w-[210px] flex justify-center items-center object-cover">
        <img
          className="object-cover  ml-[-4rem] md:ml-0 h-[100%] w-[100%] mt-[-2px]"
          src={
            scrolled || !withHeroSection
              ? theme === "light"
                ? logoDark
                : logoLight
              : logoLight
          }
          alt="Logo"
        />
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? (
            <X size={24} className={getLinkStyles()} />
          ) : (
            <Menu size={24} className={getLinkStyles()} />
          )}
        </button>
      </div>
      <ul
        className={`md:flex items-center space-y-4 md:space-y-0 md:space-x-8 uppercase tracking-[2px] font-Archivo text-[13px] font-normal ${
          isMenuOpen
            ? "flex flex-col absolute top-full left-0 right-0 p-4 shadow-lg"
            : "hidden"
        } ${
          theme === "light"
            ? "bg-white text-black"
            : "bg-black text-white"
        } md:bg-transparent md:static md:shadow-none`}
      >
        <NavLink
          to="/"
          className={`hover:opacity-70 transition-all duration-200 ${getLinkStyles()}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={`hover:opacity-70 transition-all duration-200 ${getLinkStyles()}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </NavLink>
        <NavLink
          to="/work"
          className={`hover:opacity-70 transition-all duration-200 ${getLinkStyles()}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Work
        </NavLink>
        <NavLink
          to="/blogs"
          className={`hover:opacity-70 transition-all duration-200 ${getLinkStyles()}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Blogs
        </NavLink>
        <NavLink
          to="/about"
          className={`hover:opacity-70 transition-all duration-200 ${getLinkStyles()}`}
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={`hover:opacity-70 transition-all duration-200 ${getLinkStyles()}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </NavLink>
        <div className="md:ml-4">
          <input
            onClick={toggleTheme}
            type="checkbox"
            className="theme-checkbox"
            checked={theme === "dark"}
          />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;