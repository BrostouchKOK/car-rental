import React from "react";
import { carList } from "../../constant/carList";

const CarList = () => {
  return (
    <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
      <div className="container">
        {/* heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Lorem, ipsum dolor.
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          voluptatibus! Assumenda, nisi.
        </p>
        {/* car lising card */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="space-y-3 border-2 border-gray-300 p-3
                    hover:border-primary rounded-xl duration-200 relative group"
                >
                  <div className="w-full h-[120px] ">
                    <img
                      src={data.image}
                      alt=""
                      className="w-full h-[120px] object-contain sm:translate-x-8
                        group-hover:translate-x-16 duration-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1 className="font-bold text-primary">{data.name}</h1>
                    <div className="flex justify-between items-center text-xl font-semibold">
                      <p>${data.price}/Day</p>
                      <a href="#">Details</a>
                    </div>
                  </div>
                  <p className="text-xl font-semibold absolute top-0 left-3">
                    12Km
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid place-content-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
