import React from "react";
import HomeBanner1 from "../../assets/imgs/home_banner_01.png";

const Home = () => {
  return (
    <div>
      <div className="flex items-center p-4 py-6 mx-auto max-w-screen-2xl">
        <div className="w-1/2">Home Title</div>
        <div className="w-1/2">
          <img
            src={HomeBanner1}
            alt="Home Banner 01"
            className="object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
