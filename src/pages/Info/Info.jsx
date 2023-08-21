import React from "react";
import {
  CaretRightOutlined,
  EditOutlined,
  ScheduleOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";
import "./Info.scss";
import avatar from "../../assets/imgs/home_carousel_06.jpg";
import InfoDetail from "../../Components/InfoDetail/InfoDetail";
import InfoCourse from "../../Components/InfoCourse/InfoCourse";

const Info = () => {
  const items = [
    {
      key: 1,
      label: (
        <div className="flex items-center justify-center text-lg">
          <SolutionOutlined />
          <span>Thông tin cá nhân</span>
        </div>
      ),
      children: <InfoDetail />,
    },
    {
      key: 2,
      label: (
        <div className="flex items-center justify-center text-lg">
          <ScheduleOutlined />
          <span>Khóa học</span>
        </div>
      ),
      children: <InfoCourse />,
    },
  ];

  return (
    <div>
      <div className="py-16 text-white bg-orange-400">
        <div className="px-4 mx-auto max-w-screen-2xl">
          <h1 className="mb-2 text-4xl font-bold uppercase sm:text-5xl">
            Tài khoản
          </h1>
          <p className="flex items-center text-black sm:text-lg">
            <CaretRightOutlined className="me-1 animate-pulse" />
            Thông tin cá nhân!
          </p>
        </div>
      </div>
      <div className="mx-auto py-14 max-w-screen-2xl">
        <div className="flex gap-10 px-4 lg:px-0">
          <div className="w-2/5 ">
            <form className="sticky px-20 py-10 shadow-2xl top-5 rounded-2xl">
              <div className="relative">
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="object-cover mx-auto rounded-full shadow-2xl h-44 w-44"
                />
                <EditOutlined className="absolute bottom-0 p-3 text-white duration-300 -translate-x-full bg-orange-300 rounded-full shadow-md cursor-pointer left-2/3 hover:bg-orange-500" />
              </div>
              <h3 className="mt-10 text-2xl font-semibold text-center text-orange-400 uppercase">
                Thông tin
              </h3>
              <div className="flex items-center justify-between py-3 my-5 border-b-2">
                <div className="font-medium">Tài khoản</div>
                <div>Belgor</div>
              </div>
              <div className="flex items-center justify-between py-3 my-5 border-b-2">
                <div className="font-medium">Mật khẩu</div>
                <div>********56</div>
              </div>
              <div className="flex items-center justify-between py-3 my-5 border-b-2">
                <div className="font-medium">Loại người dùng</div>
                <div>Học viên</div>
              </div>
              <div className="flex items-center justify-between py-3 my-5 border-b-2">
                <div className="font-medium">Mã nhóm</div>
                <div>GP09</div>
              </div>
              <div className="text-center">
                <button className="px-3 py-2 text-white duration-300 bg-orange-400 rounded-lg hover:bg-orange-500 hover:scale-90">
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
          <div className="w-3/5">
            <Tabs items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
