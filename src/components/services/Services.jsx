import React from "react";
import { skillData } from "../../constant/skillData";

const Services = () => {
  return (
    <div className="py-14 dark:bg-dark dark:text-white sm:min-h-[600px] sm:grid">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">
            Why Choose Us
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillData.map((data, index) => {
            const IconComponent = data.icon; // Get the icon component reference
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4
                sm:py-16 bg-dark hover:bg-primary duration-300
                text-white hover:text-black rounded-lg"
              >
                {/* Render the icon component */}
                <div className="grid place-content-center">
                  <IconComponent
                    className="text-5xl text-primary group-hover:text-black duration-300
                    "
                  />
                </div>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <a href={data.link}>Learn More</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
