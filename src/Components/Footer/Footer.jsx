import { HomeFilled, MailFilled, PhoneFilled } from "@ant-design/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setNavbarActive } from "../../redux/slices/navbarSlice";
import favicon from "../../assets/imgs/favicon.png";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <footer className="bg-[#f0f8ff] mt-6">
      <div className="w-full p-4 py-6 mx-auto max-w-screen-2xl lg:py-8">
        <div className="grid grid-cols-1 gap-10 text-center lg:grid-cols-5 md:grid-cols-2 lg:gap-0 md:text-left">
          <div className="col-span-1 mb-6 lg:col-span-2 md:mb-0">
            <NavLink
              to="/"
              className="flex items-center justify-center mb-4 md:justify-start"
              onClick={() => {
                dispatch(setNavbarActive(false));
              }}
            >
              <span className="relative self-center text-2xl font-bold whitespace-nowrap group">
                <span className="text-[#41b294] drop-shadow-[5px_-2px_3px_#54d2c0] text-5xl me-2 group-hover:scale-105 inline-block duration-300">
                  E
                </span>
                <span className="drop-shadow-[5px_-2px_3px_#54d2c0] font-[900] group-hover:scale-105 inline-block duration-300">
                  Learning
                </span>
                <img
                  src={favicon}
                  alt="Logo"
                  className="absolute h-10 duration-300 -right-4 -top-3 group-hover:-top-4 group-hover:-right-5"
                />
              </span>
            </NavLink>
            <ul className="w-2/3 mx-auto font-medium text-gray-500 md:w-full">
              <NavLink to="https://cybersoft.edu.vn/" target="_blank">
                <li className="flex items-center mb-4 cursor-pointer group">
                  <PhoneFilled className="p-3 rounded-full bg-[#41b294] text-white group-hover:-translate-y-1 duration-300 md:inline-block hidden" />
                  <span className="inline-block duration-300 ms-2 group-hover:-translate-y-1 group-hover:text-[#41b294] flex-grow">
                    096-105-1014
                  </span>
                </li>
              </NavLink>
              <NavLink to="https://cybersoft.edu.vn/" target="_blank">
                <li className="flex items-center mb-4 cursor-pointer group">
                  <MailFilled className="p-3 rounded-full bg-[#41b294] text-white group-hover:-translate-y-1 duration-300 md:inline-block hidden" />
                  <span className="inline-block duration-300 ms-2 group-hover:-translate-y-1 group-hover:text-[#41b294] flex-grow">
                    info@cybersoft.edu.vn
                  </span>
                </li>
              </NavLink>
              <NavLink to="https://cybersoft.edu.vn/" target="_blank">
                <li className="flex items-center mb-4 cursor-pointer group">
                  <HomeFilled className="p-3 rounded-full bg-[#41b294] text-white group-hover:-translate-y-1 duration-300 md:inline-block hidden" />
                  <span className="inline-block duration-300 ms-2 group-hover:-translate-y-1 group-hover:text-[#41b294] flex-grow">
                    Tầng 5, toà nhà Suri, 112 Cao Thắng, Quận 3, TPHCM
                  </span>
                </li>
              </NavLink>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-bold text-black uppercase md:border-l-4 border-[#41b294] ps-2 py-2 md:py-0 border-l-0">
              Liên kết
            </h2>
            <ul className="font-medium text-gray-500">
              <li className="mb-4">
                <NavLink
                  to="/"
                  className="inline-block duration-300 hover:-translate-y-1 hover:text-[#41b294]"
                  onClick={() => {
                    dispatch(setNavbarActive(false));
                  }}
                >
                  {">"} Trang chủ
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/intro"
                  className="inline-block duration-300 hover:-translate-y-1 hover:text-[#41b294]"
                  onClick={() => {
                    dispatch(setNavbarActive(false));
                  }}
                >
                  {">"} Thông tin
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/blog"
                  className="inline-block duration-300 hover:-translate-y-1 hover:text-[#41b294]"
                  onClick={() => {
                    dispatch(setNavbarActive(false));
                  }}
                >
                  {">"} Blog
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/event"
                  className="inline-block duration-300 hover:-translate-y-1 hover:text-[#41b294]"
                  onClick={() => {
                    dispatch(setNavbarActive(false));
                  }}
                >
                  {">"} Sự kiện
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-bold text-black uppercase md:border-l-4 border-[#41b294] ps-2 py-2 md:py-0 border-l-0">
              Khóa học
            </h2>
            <ul className="font-medium text-gray-500">
              <li className="mb-4">
                <NavLink
                  to="/category/FrontEnd"
                  className="inline-block duration-300 hover:-translate-y-1 hover:text-[#41b294]"
                  onClick={() => {
                    dispatch(setNavbarActive(true));
                  }}
                >
                  {">"} ReactJS
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/category/BackEnd"
                  className="inline-block duration-300 hover:-translate-y-1 hover:text-[#41b294]"
                  onClick={() => {
                    dispatch(setNavbarActive(true));
                  }}
                >
                  {">"} NodeJS
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/category/FullStack"
                  className="inline-block duration-300 hover:-translate-y-1 hover:text-[#41b294]"
                  onClick={() => {
                    dispatch(setNavbarActive(true));
                  }}
                >
                  {">"} FullStack
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-bold text-black uppercase md:border-l-4 border-[#41b294] ps-2 py-2 md:py-0 border-l-0">
              Đăng ký tư vấn
            </h2>
            <form className="flex flex-col items-center md:block">
              <input
                type="text"
                placeholder="Họ và tên"
                className="bg-orange-100 focus:border-orange-400 w-2/3 md:w-full duration-300 outline-none px-5 py-2 mb-3 border-2 border-[#41b294] rounded-md"
              />
              <input
                type="email"
                placeholder="Địa chỉ email"
                className="bg-orange-100 focus:border-orange-400 w-2/3 md:w-full duration-300 outline-none px-5 py-2 mb-3 border-2 border-[#41b294] rounded-md"
              />
              <input
                type="text"
                placeholder="Số điện thoại"
                className="bg-orange-100 focus:border-orange-400 w-2/3 md:w-full duration-300 outline-none px-5 py-2 mb-3 border-2 border-[#41b294] rounded-md"
              />
              <button
                type="button"
                className="w-2/3 py-2 text-white duration-300 bg-orange-300 rounded-md md:w-full hover:bg-orange-400"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-black sm:text-center">
            <NavLink
              to="/"
              className="hover:underline"
              onClick={() => {
                dispatch(setNavbarActive(false));
              }}
            >
              Cyber E-Learning
            </NavLink>{" "}
            © 2023 by BCS07 | G9. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <NavLink
              to="https://www.facebook.com/lophocviet/"
              className="text-gray-500 duration-150 hover:text-blue-500"
              target="_blank"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </NavLink>
            <NavLink
              to="https://github.com/hqbao000101/BCS07_FINAL_G9_ELearning.git"
              className="text-gray-500 duration-150 hover:text-black"
              target="_blank"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </NavLink>
            <NavLink
              to="https://www.youtube.com/channel/UCQDXgEguMerxvCh_2dcxmtQ"
              className="text-gray-500 duration-150 hover:text-red-500"
              target="_blank"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 30 30"
              >
                <path
                  fillRule="evenodd"
                  d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Youtube account</span>
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
