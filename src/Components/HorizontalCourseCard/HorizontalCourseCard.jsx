import React from "react";
import ReactSample from "../../assets/imgs/card_react_sample.jpg";
import { NavLink } from "react-router-dom";
import { FileSearchOutlined, StarFilled } from "@ant-design/icons";
import userIcon from "../../assets/imgs/user_icon.png";
import { Divider } from "antd";

const HorizontalCourseCard = () => {
  return (
    <div className="flex flex-col items-center mb-10 shadow-lg sm:flex-row sm:h-64 group sm:pe-3 pe-0">
      <div className="w-full h-full overflow-hidden sm:w-2/5">
        <img
          src={ReactSample}
          alt="Course Banner"
          className="object-cover w-full h-full duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col justify-between w-full h-full px-3 py-2 sm:w-3/5 sm:ps-5">
        <div>
          <NavLink to={`/detail/:maKhoaHoc`}>
            <h4 className="inline text-xl font-medium duration-300 hover:text-orange-400">
              React JS
            </h4>
          </NavLink>
          <p className="mt-2 text-gray-400 duration-500 line-clamp-2">
            Lập trình Frontend là công việc sử dụng các ngôn ngữ HTML, CSS và
            JavaScript để thiết kế và xây dựng giao diện cho một trang web hoặc
            ứng dụng web mà người dùng có thể xem và tương tác trực tiếp
          </p>
          <div className="flex items-center gap-1 my-2 text-yellow-400">
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-start pt-3 text-gray-500 sm:justify-end">
            <div className="sm:ms-4 me-5">
              <i className="text-red-400 fa-regular fa-clock me-2"></i>
              <span>
                72 <span className="hidden sm:inline">giờ</span>
              </span>
            </div>
            <div className="sm:ms-4 me-5">
              <i className="text-orange-400 fa-solid fa-calendar-days me-2"></i>
              <span>
                12 <span className="hidden sm:inline">tuần</span>
              </span>
            </div>
            <div className="sm:ms-4 me-5">
              <i className="text-blue-500 fa-regular fa-eye me-2"></i>
              <span>5000</span>
            </div>
          </div>
          <Divider className="my-2" />
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <img src={userIcon} alt="User Icon" className="w-10 me-2" />
              <span>Elon Mush</span>
            </div>
            <NavLink to={`/detail/:maKhoaHoc`}>
              <button className="hidden px-3 py-2 text-white duration-500 bg-orange-400 rounded-md sm:items-center sm:gap-1 hover:bg-orange-500 hover:scale-90 sm:flex">
                <FileSearchOutlined />

                Xem Chi Tiết
              </button>
              <button className="flex px-3 py-2 text-white duration-500 bg-orange-400 rounded-md hover:bg-orange-500 hover:scale-90 sm:hidden">
                <FileSearchOutlined />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCourseCard;
