import React from "react";
import HomeBanner1 from "../../assets/imgs/home_banner_01.png";
import HomeBanner2 from "../../assets/imgs/home_banner_02.png";
import HomeBanner3 from "../../assets/imgs/home_banner_03.png";
import HomeBanner4 from "../../assets/imgs/home_banner_04.png";
import HomeBanner5 from "../../assets/imgs/home_banner_05.png";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-4 py-6 mx-auto max-w-screen-2xl md:flex-row">
        <div className="relative order-2 w-full text-center md:order-1 md:w-1/2 ps-0 lg:ps-20 md:text-left">
          <p className="text-4xl font-bold leading-snug xl:leading-snug md:leading-snug md:text-4xl xl:text-5xl">
            Chào mừng
          </p>
          <p className="text-4xl font-bold leading-snug xl:leading-snug md:leading-snug md:text-4xl xl:text-5xl">
            đến nền tảng trực tuyến
          </p>
          <p className="text-5xl font-bold lg:leading-normal md:text-5xl xl:text-6xl text-main">
            E Learning
          </p>
          <button className="px-5 py-3 mt-5 text-sm text-white duration-500 bg-orange-400 rounded-md shadow-lg xl:text-xl hover:bg-orange-500 hover:scale-90 lg:text-lg md:text-md">
            Bắt đầu nào
          </button>
          <img
            src={HomeBanner2}
            alt="Home Banner 2"
            className="absolute object-cover w-1/5 right-[30%] -top-[30%]"
          />
        </div>
        <div className="relative order-1 w-full md:w-1/2 md:order-2">
          <img
            src={HomeBanner1}
            alt="Home Banner 01"
            className="object-cover w-full"
          />
          <img
            id="cloud1"
            src={HomeBanner3}
            alt="Item Banner 3"
            className="absolute object-cover"
          />
          <img
            id="cloud2"
            src={HomeBanner3}
            alt="Item Banner 3"
            className="absolute object-cover"
          />
          <img
            id="cloud3"
            src={HomeBanner3}
            alt="Item Banner 3"
            className="absolute object-cover"
          />
          <img
            id="code"
            src={HomeBanner4}
            alt="Item Banner 4"
            className="absolute object-cover w-1/6"
          />
          <img
            src={HomeBanner5}
            alt="Item Banner 5"
            id="thought"
            className="absolute object-cover w-1/6"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
