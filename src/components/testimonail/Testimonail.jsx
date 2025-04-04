import React from "react";
import { testimonialData } from "../../constant/testimonailData";

const Testimonail = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
      <div className="container">
        {/* header */}
        <div className="space-y-4 pb-12">
          <p
            data-aos="fade-up"
            className="text-center font-semibold font-serif text-3xl sm:text-4xl"
          >
            What Our Clients Say About Us
          </p>
          <p data-aos="fade-up" className="text-center sm:px-44">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black sm:text-dark dark:text-white">
          {testimonialData.map((item, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={item.aosDelay}
                key={index}
                className="card text-center group space-y-3 sm:space-y-6 p-4
                bg-gray-100 rounded-lg dark:bg-white/20 sm:py-12 duration-300"
              >
                <div className="grid place-items-center">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="h-20 w-20 rounded-full"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{item.description}</p>
                <p className="font-semibold text-lg">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonail;
