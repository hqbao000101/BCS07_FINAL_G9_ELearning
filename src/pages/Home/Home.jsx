import React from "react";
import Banner from "../../Components/Banner/Banner";
import Achievement from "../../Components/Achievement/Achievement";
import CourseCard from "../../Components/CourseCard/CourseCard";

const Home = () => {
  return (
    <div>
      <Banner />
      <Achievement />
      <div className="px-4 py-10 mx-auto max-w-screen-2xl 2xl:px-0">
        <h3 className="text-2xl font-bold text-orange-400">
          Khóa học phổ biến
        </h3>
        <div className="grid grid-cols-4 gap-16 mt-8">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
