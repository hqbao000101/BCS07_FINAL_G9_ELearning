import React from "react";
import "./CourseCard.scss";
import { Divider } from "antd";
import user from "../../assets/imgs/user_icon.png";
import ReactSample from "../../assets/imgs/card_react_sample.jpg";
import { BellOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const CourseCard = () => {
  return (
    <div className="duration-300 shadow-md hover:shadow-xl group">
      <div className="relative">
        <div className="overflow-hidden">
          <img
            src={ReactSample}
            alt="React Course"
            className="object-cover w-full aspect-[3/2] group-hover:scale-110 duration-300"
          />
        </div>
        <span
          id="like__tag"
          className="absolute top-0 -left-2 px-3 py-1 text-white bg-red-600 translate-y-[50%]"
        >
          Yêu thích
        </span>
        <span className="absolute bottom-0 left-0 px-3 py-1 text-white bg-main translate-y-[50%] shadow-md">
          Lập trình Frontend
        </span>
      </div>
      <div className="p-5">
        <NavLink
          to="/detail/react"
          className="font-medium duration-500 line-clamp-2 hover:text-orange-400"
        >
          Lorem ipsum dolor sit amet consetur adipisicing elit. Minus accusamus
          nesciunt error facere perspiciatis quibusdam maiores libero. Sit
          ipsum, quam repellat sunt neque totam ad incidunt, similique ut ullam
          laborum?
        </NavLink>
        <div className="flex items-center justify-between pt-3 text-gray-500">
          <div>
            <i className="text-red-400 fa-regular fa-clock me-2"></i>
            <span>8 giờ</span>
          </div>
          <div>
            <i className="text-orange-400 fa-solid fa-calendar-days me-2"></i>
            <span>4 tuần</span>
          </div>
          <div>
            <i className="text-blue-500 fa-solid fa-signal me-2"></i>
            <span>Hoàn thành</span>
          </div>
        </div>
      </div>
      <Divider className="m-0" />
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center">
          <img src={user} alt="User" className="object-cover w-10 me-2" />
          <span className="text-gray-500">Elon Musk</span>
        </div>
        <div>
          <p className="text-sm text-gray-400 line-through">
            800.000<sup>đ</sup>
          </p>
          <div className="flex items-center">
            <BellOutlined
              id="sale-off"
              className="text-[#e55039] text-md me-1"
            />
            <p className="text-lg font-medium">
              400.000<sup>đ</sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
