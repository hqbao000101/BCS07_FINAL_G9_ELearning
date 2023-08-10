import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BarsOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setNavbarActive } from "../../redux/slices/navbarSlice";
import CollapsedMenu from "../CollapsedMenu/CollapsedMenu";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Header = () => {
  const { isActive } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
            <img src="./favicon.png" className="h-20" alt="Logo" />
            <div>
              <span className="self-center hidden text-2xl font-semibold tracking-wide uppercase duration-300 sm:inline-block whitespace-nowrap hover:scale-105">
                Cyber E-Learning
              </span>
              <p className="items-center justify-center hidden text-xs text-orange-400 uppercase sm:flex">
                <CaretRightOutlined />
                The Best Online Education
                <CaretLeftOutlined />
              </p>
            </div>
          </NavLink>
          <div className="flex items-center lg:order-2">
            <NavLink
              to="/login"
              className="text-white hover:bg-orange-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none bg-orange-400 duration-300 hover:shadow-md flex justify-center items-center"
            >
              {windowSize.innerWidth <= 342 ? <LoginOutlined /> : "Đăng nhập"}
            </NavLink>
            <CollapsedMenu />
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
