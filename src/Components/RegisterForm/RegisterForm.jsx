import React from "react";
import FormInput from "../FormInput/FormInput";

const RegisterForm = () => {
  return (
    <form className="text-center">
      <h1 className="mb-2 text-4xl font-semibold">Đăng Ký</h1>
      <p className="mb-8 text-sm text-gray-400">
        Tạo tài khoản để có thể ghi danh các khóa học hấp dẫn nào!
      </p>
      <FormInput type="text" placeholder="Họ tên" name="hoTen" />
      <FormInput type="text" placeholder="Địa chỉ email" name="email" />
      <FormInput type="text" placeholder="Số điện thoại" name="soDT" />
      <FormInput type="text" placeholder="Tài Khoản" name="taiKhoan" />
      <FormInput type="password" placeholder="Mật Khẩu" name="matKhau" />
      <label className="flex items-center justify-center text-left lg:justify-start">
        <input id="receiveNotification" type="checkbox" />
        <span
          className="text-sm text-gray-500 ms-2"
          style={{ userSelect: "none" }}
        >
          Nhận các thông báo mới về khóa học và sự kiện qua email đã đăng ký!
        </span>
      </label>
      <button type="button" className="px-10 py-3 text-sm font-semibold text-white uppercase rounded-full bg-main hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg mt-8 mb-2">
        Đăng ký
      </button>
    </form>
  );
};

export default RegisterForm;
