import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { navLinks } from "../../constant/navLinks";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${showMenu ? "left-0": "-left-full" } fixed top-0 z-50 bg-white dark:bg-gray-900
      h-screen w-[75%] md:hidden rounded-r-xl shadow-md flex-col
      flex justify-between px-8 py-6 pt-6 transition-all duration-300`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Brostouch</h1>
            <h1>Premium user</h1>
          </div>
        </div>
        {/* links */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {
              navLinks.map((item,index)=>{
                return (
                  <li key={index}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
      <div>Brostouch'K Fronted-Dev 💖</div>
    </div>
  );
};

export default ResponsiveMenu;
