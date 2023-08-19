import React, { useState } from "react";
import loginBG from "../../assets/imgs/login_bg.png";
import loginOverlay from "../../assets/imgs/login_overlay.png";
import "./Login.scss";
import LoginForm from "../../Components/LoginForm/LoginForm";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";

const Login = () => {
  const [form, setForm] = useState("login");

  return (
    <div
      id="login"
      className="flex items-center justify-center w-screen h-screen"
      style={{ backgroundImage: `url(${loginBG})` }}
    >
      <div className="relative flex w-4/5 px-16 bg-white rounded-lg shadow-2xl">
        <div className="w-1/2 overflow-hidden flex items-center justify-center pe-16 py-24">
          <div
            className={`relative duration-1000 w-full ${
              form === "login" ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <LoginForm />
          </div>
        </div>
        <div className="w-1/2 overflow-hidden flex items-center justify-center ps-16 py-24">
          <div
            className={`relative duration-1000 w-full ${
              form === "login" ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <RegisterForm />
          </div>
        </div>
        <div
          id="overlay"
          className={`absolute block w-1/2 h-full top-0 duration-1000 overflow-hidden ${
            form === "login"
              ? "right-0 rounded-tr-lg rounded-br-lg shadow-[-10px_0_5px_-2px_#aaa]"
              : "right-0 -translate-x-full rounded-tl-lg rounded-bl-lg shadow-[10px_0_5px_-2px_#aaa]"
          }`}
          style={{
            backgroundImage: `url(${loginOverlay})`,
            backgroundSize: "250% 100%",
            backgroundPosition: `${
              form === "login" ? "right center" : "left center"
            }`,
          }}
        >
          <div
            className={`flex items-center justify-center h-full text-white relative duration-1000 ${
              form === "login" ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="text-center">
              <h1 className="text-4xl font-bold">Xin Chào</h1>
              <p className="mt-3 mb-8">
                Đăng ký ngay để thiết lập tài khoản của riêng bạn!
              </p>
              <button
                className="px-10 py-3 text-sm font-semibold text-white uppercase rounded-full bg-main hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg border border-white"
                onClick={() => {
                  setForm("register");
                }}
              >
                Đăng ký
              </button>
            </div>
          </div>
          <div
            className={`flex items-center justify-center h-full text-white relative duration-1000 -translate-y-full ${
              form === "login" ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="text-center">
              <h1 className="text-4xl font-bold">Chào Mừng</h1>
              <p className="mt-3 mb-8">
                Hãy đăng nhập để kết nối với tài khoản của bạn nào!
              </p>
              <button
                className="px-10 py-3 text-sm font-semibold text-white uppercase rounded-full bg-main hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg border border-white"
                onClick={() => {
                  setForm("login");
                }}
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
