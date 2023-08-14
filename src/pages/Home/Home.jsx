import React from "react";
import Banner from "../../Components/Banner/Banner";
import Achievement from "../../Components/Achievement/Achievement";
import CourseCard from "../../Components/CourseCard/CourseCard";
import HomeCountUp from "../../Components/HomeCountUp/HomeCountUp";
import HomeCarousel from "../../Components/HomeCarousel/HomeCarousel";

const Home = () => {
  return (
    <div>
      <Banner />
      <Achievement />
      <div className="px-4 py-10 mx-auto max-w-screen-2xl 2xl:px-0">
        <h3 className="text-2xl font-bold text-orange-400">
          Khóa Học Phổ Biến
        </h3>
        <div className="grid gap-20 mt-8 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
      <div className="px-4 py-10 mx-auto max-w-screen-2xl 2xl:px-0">
        <h3 className="text-2xl font-bold text-orange-400">
          Khóa Học Tham Khảo
        </h3>
        <div className="grid gap-20 mt-8 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
      <div className="px-4 py-10 mx-auto max-w-screen-2xl 2xl:px-0">
        <h3 className="text-2xl font-bold text-orange-400">
          Khóa Học Front-end
        </h3>
        <div className="grid gap-20 mt-8 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
      <HomeCountUp />
      <HomeCarousel />
    </div>
  );
};

export default Home;
