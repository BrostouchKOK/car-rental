import React from "react";
import pattern from "../../assets/website/pattern.jpeg";
import playStore from "../../assets/website/play_store.png";
import appStore from "../../assets/website/app_store.png";
const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const AppStoreBanner = () => {
  return (
    <div className="container pb-14">
      <div
        style={bannerImg}
        className="text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-4xl font-semibold font-serif"
            >
              Get Started with our app
            </h1>
            <p data-aos="fade-up" className="text-center sm:px-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At amet
              tempora molestias quod!
            </p>
            <div data-aos="fade-up" className="flex flex-wrap justify-center items-center gap-4">
                <a href="#">
                    <img src={playStore} alt="" 
                        className="max-w-[150px] sm:max-w-[120] md:max-w-[200px]"
                    />
                </a>
                <a href="#">
                    <img src={appStore} alt="" 
                        className="max-w-[150px] sm:max-w-[120] md:max-w-[200px]"
                    />
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
