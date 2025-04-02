import React from "react";
import { navLinks } from "../../constant/navLinks";

const Navbar = () => {
  return (
    <nav className="shadow-md">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
