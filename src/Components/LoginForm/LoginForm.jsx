import React from "react";
import FormInput from "../FormInput/FormInput";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      taiKhoan: yup.string().required("Trường này không dược để trống!"),
      matKhau: yup
        .string()
        .required("Trường này không dược để trống!")
        .min(3, "Mật khẩu cần có ít nhất 3 ký tự"),
    }),
  });

  return (
    <form className="text-center" onSubmit={formik.handleSubmit}>
      <h1 className="mb-2 text-4xl font-semibold">Đăng Nhập</h1>
      <p className="mb-8 text-sm text-gray-400">
        {"("}Hoặc sử dụng tài khoản bạn vừa đăng ký{")"}
      </p>
      <FormInput
        id="taiKhoan"
        type="text"
        placeholder="Tài Khoản"
        formik={formik}
        errors={formik.errors.taiKhoan}
        touched={formik.touched.taiKhoan}
      />
      <FormInput
        id="matKhau"
        type="password"
        placeholder="Mật Khẩu"
        formik={formik}
        errors={formik.errors.matKhau}
        touched={formik.touched.matKhau}
      />
      <div className="mb-3 sm:mt-8">
        <NavLink to="/login-forget">
          <span className="text-sm italic duration-300 cursor-pointer hover:text-orange-400 hover:underline">
            Quên mật khẩu?
          </span>
        </NavLink>
      </div>
      <button className="px-10 py-3 text-sm font-semibold text-white uppercase rounded-full bg-main hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg sm:mb-0 mb-5">
        Đăng nhập
      </button>
    </form>
  );
};

export default LoginForm;