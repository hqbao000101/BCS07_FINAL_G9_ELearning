import React from "react";
import HorizontalCourseCard from "../HorizontalCourseCard/HorizontalCourseCard";
import { Pagination } from "antd";

const InfoCourse = () => {
  const item = {
    maKhoaHoc: "ABC",
    tenKhoaHoc: "Lap trinh suong suong",
    moTa: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro deserunt ut ipsam perspiciatis reiciendis eos est vero, culpa ad?",
    luotXem: "4399",
    hinhAnh: "https://photos.picsum/200",
  };
  return (
    <div>
      <HorizontalCourseCard item={item} />
      <HorizontalCourseCard item={item} />
      <HorizontalCourseCard item={item} />
      <div className="text-right">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};

export default InfoCourse;
