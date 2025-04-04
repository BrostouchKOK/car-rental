import React, { useState } from "react";
import { navLinks } from "../../constant/navLinks";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav
      className="shadow-md bg-white dark:bg-dark dark:text-white duration-200
      relative z-40"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-3xl font-serif">Car Rental</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    href={item.link}
                    className="py-2 hover:text-primary
                         duration-500 hover:border-b-2 hover:border-primary
                         transition-colors text-lg font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* dark mode icon  */}
          <div>
            {theme == "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
          <div className="flex gap-6 items-center md:hidden">
            {/* mobile hamburger menu */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                size={30}
                className="cursor-pointer transition-all duration-300"
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                size={30}
                className="cursor-pointer transition-all duration-300"
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
