import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { footerLink } from "../../constant/footerLinks";

const Footer = () => {
  return (
    <div className="dark:bg-black">
      <div className="bg-gray-100 dark:bg-dark rounded-t-3xl">
        <div className="container">
          <div className="grid md:grid-cols-3 py-5">
            {/* company details */}
            <div className="py-8 px-4">
              <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center">
                Car Rental
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                eum officiis!
              </p>
              <br />
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Tangkork, KPT, PP</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt />
                <p>+855 969634904</p>
              </div>
              <br />
              {/* socail handle */}
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100087122262760"
                  target="_blank"
                >
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
            {/* navlinks */}
            <div
              className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10
            "
            >
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl  font-bold sm:text-left text-justify mb-3">
                    Important Link
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {footerLink.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="cursor-pointer hover:text-primary duration-300"
                        >
                          <span className="mr-2">&#11162;</span>
                          <a href={item.link}>{item.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl  font-bold sm:text-left text-justify mb-3">
                    Important Link
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {footerLink.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="cursor-pointer hover:text-primary duration-300"
                        >
                          <span className="mr-2">&#11162;</span>
                          <a href={item.link}>{item.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl  font-bold sm:text-left text-justify mb-3">
                    Important Link
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {footerLink.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="cursor-pointer hover:text-primary duration-300"
                        >
                          <span className="mr-2">&#11162;</span>
                          <a href={item.link}>{item.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
