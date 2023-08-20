import React from "react";
import FormInput from "../FormInput/FormInput";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="text-center">
      <h1 className="mb-2 text-4xl font-semibold">Đăng Nhập</h1>
      <p className="mb-8 text-sm text-gray-400">
        {"("}Hoặc sử dụng tài khoản bạn vừa đăng ký{")"}
      </p>
      <FormInput type="text" placeholder="Tài Khoản" name="taiKhoan" />
      <FormInput type="password" placeholder="Mật Khẩu" name="matKhau" />
      <div className="mt-8 mb-3">
        <NavLink to="/login-forget">
          <span className="text-sm italic duration-300 cursor-pointer hover:text-orange-400 hover:underline">
            Quên mật khẩu?
          </span>
        </NavLink>
      </div>
      <button type="button" className="px-10 py-3 text-sm font-semibold text-white uppercase rounded-full bg-main hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg">
        Đăng nhập
      </button>
    </form>
  );
};

export default LoginForm;
