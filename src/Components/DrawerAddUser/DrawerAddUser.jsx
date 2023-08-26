import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import FormInput from "../FormInput/FormInput";

const DrawerAddUser = () => {
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
      console.log(values);
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
    <form onSubmit={formik.handleSubmit}>
      <p className="mb-5 text-sm text-gray-400">
        Vui lòng điền các trường sau để thêm người dùng mới vào hệ thống!
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
      <div className="text-right">
        <button className="px-10 py-3 text-sm font-semibold text-white uppercase duration-300 bg-orange-400 rounded-lg shadow-lg hover:bg-orange-600 hover:scale-90">
          Tạo
        </button>
      </div>
    </form>
  );
};

export default DrawerAddUser;
