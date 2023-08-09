import React from "react";
import { NavLink } from "react-router-dom";
import {
  BarsOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setNavbarActive } from "../../redux/slices/navbarSlice";

const Header = () => {
  const { isActive } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();

  const items = [
    {
      key: "1",
      label: (
        <NavLink
          to="/category/TuDuy"
          style={({ isActive }) => (isActive ? { color: "orange" } : {})}
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
        >
          Tư Duy Lập Trình
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink
          to="/category/DiDong"
          style={({ isActive }) => (isActive ? { color: "orange" } : {})}
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
        >
          Lập Trình Mobile
        </NavLink>
      ),
    },
    {
      key: "3",
      label: (
        <NavLink
          to="/category/Design"
          style={({ isActive }) => (isActive ? { color: "orange" } : {})}
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
        >
          Thiết Kế Website
        </NavLink>
      ),
    },
    {
      key: "4",
      label: (
        <NavLink
          to="/category/FrontEnd"
          style={({ isActive }) => (isActive ? { color: "orange" } : {})}
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
        >
          Lập Trình Front-end
        </NavLink>
      ),
    },
    {
      key: "5",
      label: (
        <NavLink
          to="/category/BackEnd"
          style={({ isActive }) => (isActive ? { color: "orange" } : {})}
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
        >
          Lập Trình Back-end
        </NavLink>
      ),
    },
    {
      key: "6",
      label: (
        <NavLink
          to="/category/FullStack"
          style={({ isActive }) => (isActive ? { color: "orange" } : {})}
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
        >
          Lập Trình Fullstack
        </NavLink>
      ),
    },
  ];

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-2xl">
          <NavLink
            to="/"
            className="flex items-center"
            onClick={() => {
              dispatch(setNavbarActive(false));
            }}
          >
            <img src="./favicon.png" className="h-20" alt="ELearning Logo" />
            <div>
              <span className="self-center text-2xl font-semibold tracking-wide uppercase whitespace-nowrap hover:scale-105 inline-block duration-300">
                Cyber E-Learning
              </span>
              <p className="flex items-center text-xs text-orange-400 uppercase justify-center">
                <CaretRightOutlined />
                The Best Online Education
                <CaretLeftOutlined />
              </p>
            </div>
          </NavLink>
          <div className="flex items-center lg:order-2">
            <NavLink
              to="/login"
              className="text-white hover:bg-orange-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none bg-orange-400 duration-300 hover:shadow-md"
              onClick={() => {
                dispatch(setNavbarActive(false));
              }}
            >
              Đăng nhập
            </NavLink>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full xl:flex xl:w-auto xl:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pl-3 pr-4 uppercase duration-300 border-b border-gray-100 nav-link hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                  style={({ isActive }) =>
                    isActive ? { color: "orange" } : {}
                  }
                  onClick={() => {
                    dispatch(setNavbarActive(false));
                  }}
                >
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/intro"
                  className="block py-2 pl-3 pr-4 uppercase duration-300 border-b border-gray-100 nav-link hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                  style={({ isActive }) =>
                    isActive ? { color: "orange" } : {}
                  }
                  onClick={() => {
                    dispatch(setNavbarActive(false));
                  }}
                >
                  Thông tin
                </NavLink>
              </li>
              <li>
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <NavLink
                    className={`flex items-center py-2 pl-3 pr-4 uppercase duration-300 border-b border-gray-100 nav-link hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-400 lg:p-0 ${
                      isActive ? "text-orange-400" : ""
                    }`}
                  >
                    <BarsOutlined className="me-2" />
                    Danh mục
                  </NavLink>
                </Dropdown>
              </li>
              <li>
                <NavLink
                  to="/course"
                  className="block py-2 pl-3 pr-4 uppercase duration-300 border-b border-gray-100 nav-link hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                  style={({ isActive }) =>
                    isActive ? { color: "orange" } : {}
                  }
                  onClick={() => {
                    dispatch(setNavbarActive(false));
                  }}
                >
                  Khóa học
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="block py-2 pl-3 pr-4 uppercase duration-300 border-b border-gray-100 nav-link hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                  style={({ isActive }) =>
                    isActive ? { color: "orange" } : {}
                  }
                  onClick={() => {
                    dispatch(setNavbarActive(false));
                  }}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/event"
                  className="block py-2 pl-3 pr-4 uppercase duration-300 border-b border-gray-100 nav-link hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                  style={({ isActive }) =>
                    isActive ? { color: "orange" } : {}
                  }
                  onClick={() => {
                    dispatch(setNavbarActive(false));
                  }}
                >
                  Sự kiện
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
