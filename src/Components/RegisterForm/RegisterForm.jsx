import React from "react";
import FormInput from "../FormInput/FormInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { userService } from "../../services/userServices";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { saveLocal } from "../../utils/localStorage";

const RegisterForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      hoTen: "",
      email: "",
      soDT: "",
      taiKhoan: "",
      matKhau: "",
      maNhom: "GP09",
    },
    onSubmit: (values) => {
      userService
        .register(values)
        .then((res) => {
          message.success("Đăng ký thành công");
          userService
            .login({
              taiKhoan: res.data.taiKhoan,
              matKhau: res.data.matKhau,
            })
            .then((res) => {
              saveLocal("user", res.data);
              setTimeout(() => {
                navigate("/");
              }, [1000]);
            })
            .catch(() => {
              message.error("Tự động đăng nhập bị lỗi!");
              formik.resetForm();
            });
        })
        .catch((err) => {
          message.error(err.response.data);
          formik.resetForm();
        });
    },
    validationSchema: yup.object({
      hoTen: yup
        .string()
        .required("Trường này không dược để trống!")
        .matches(
          /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
          "Họ tên chỉ được chứa các kí tự!"
        ),
      email: yup
        .string()
        .required("Trường này không dược để trống!")
        .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Email này không hợp lệ!"),
      soDT: yup
        .string()
        .required("Trường này không dược để trống!")
        .matches(/^[0-9\-+]{9,15}$/, "Số điện thoại này không hợp lệ!"),
      taiKhoan: yup.string().required("Trường này không dược để trống!"),
      matKhau: yup
        .string()
        .required("Trường này không dược để trống!")
        .min(3, "Mật khẩu cần có ít nhất 3 ký tự"),
    }),
  });

  return (
    <form className="text-center" onSubmit={formik.handleSubmit}>
      <h1 className="mb-2 text-4xl font-semibold">Đăng Ký</h1>
      <p className="mb-8 text-sm text-gray-400">
        Tạo tài khoản để có thể ghi danh các khóa học hấp dẫn nào!
      </p>
      <FormInput
        id="hoTen"
        type="text"
        placeholder="Họ tên"
        formik={formik}
        errors={formik.errors.hoTen}
        touched={formik.touched.hoTen}
        value={formik.values.hoTen}
      />
      <FormInput
        id="email"
        type="text"
        placeholder="Địa chỉ email"
        formik={formik}
        errors={formik.errors.email}
        touched={formik.touched.email}
        value={formik.values.email}
      />
      <FormInput
        id="soDT"
        type="text"
        placeholder="Số điện thoại"
        formik={formik}
        errors={formik.errors.soDT}
        touched={formik.touched.soDT}
        value={formik.values.soDT}
      />
      <FormInput
        id="taiKhoan"
        type="text"
        placeholder="Tài Khoản"
        formik={formik}
        errors={formik.errors.taiKhoan}
        touched={formik.touched.taiKhoan}
        value={formik.values.taiKhoan}
      />
      <FormInput
        id="matKhau"
        type="password"
        placeholder="Mật Khẩu"
        formik={formik}
        errors={formik.errors.matKhau}
        touched={formik.touched.matKhau}
        value={formik.values.matKhau}
      />
      <label className="flex items-center justify-center text-left lg:justify-start">
        <input id="receiveNotification" type="checkbox" />
        <span
          className="text-sm text-gray-500 ms-2"
          style={{ userSelect: "none" }}
        >
          Nhận các thông báo mới về khóa học và sự kiện qua email đã đăng ký!
        </span>
      </label>
      <button className="px-10 py-3 text-sm font-semibold text-white uppercase rounded-full bg-main hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg my-5 sm:mt-8 sm:mb-2">
        Đăng ký
      </button>
    </form>
  );
};

export default RegisterForm;
