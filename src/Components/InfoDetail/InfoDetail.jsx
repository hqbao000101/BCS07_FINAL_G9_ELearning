import React, { useEffect, useState } from "react";
import InfoSkill from "../InfoSkill/InfoSkill";
import { useDispatch, useSelector } from "react-redux";
import { message, notification } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  FileExcelOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { userService } from "../../services/userServices";
import { getAccountInfo } from "../../redux/slices/userSlice";

const InfoDetail = () => {
  const [card, setCard] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const accountInfo = useSelector((state) => state.user.accountInfo);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      hoTen: accountInfo.hoTen,
      email: accountInfo.email,
      soDT: accountInfo.soDT,
      taiKhoan: accountInfo.taiKhoan,
      matKhau: accountInfo.matKhau,
      maNhom: accountInfo.maNhom,
      maLoaiNguoiDung: accountInfo.maLoaiNguoiDung,
    },
    onSubmit: (values) => {
      userService
        .updateUsers({ ...values, matKhau: accountInfo.matKhau })
        .then(() => {
          dispatch(getAccountInfo());
          setCard(false);
          api.open({
            message: (
              <h1 className="text-lg font-semibold">Cập Nhật Thông Tin</h1>
            ),
            description:
              "Thông tin cập nhật thành công. Người dùng có thể thay đổi thông tin cá nhân bất kỳ lúc nào!",
            icon: (
              <SafetyCertificateOutlined
                style={{
                  color: "#41b294",
                }}
              />
            ),
            className: "border-l-8 border-[#41b294]",
          });
        })
        .catch((err) => {
          setCard(false);
          formik.values.hoTen = accountInfo.hoTen;
          formik.values.email = accountInfo.email;
          formik.values.soDT = accountInfo.soDT;
          api.open({
            message: (
              <h1 className="text-lg font-semibold">Cập Nhật Thông Tin</h1>
            ),
            description: `Thay đổi thông tin thất bại. ${
              err.response.data
                ? err.response.data
                : "Hệ thống đã xảy ra lỗi khi cập nhật!"
            }`,
            icon: (
              <FileExcelOutlined
                style={{
                  color: "red",
                }}
              />
            ),
            className: "border-l-8 border-red-500",
          });
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
    }),
  });

  useEffect(() => {
    userService
      .accountInfo()
      .then((res) => {
        formik.values.hoTen = res.data.hoTen;
        formik.values.email = res.data.email;
        formik.values.soDT = res.data.soDT;
        formik.values.taiKhoan = res.data.taiKhoan;
        formik.values.matKhau = res.data.matKhau;
        formik.values.maNhom = res.data.maNhom;
        formik.values.maLoaiNguoiDung = res.data.maLoaiNguoiDung;
      })
      .catch(() => {
        message.error("Không thể lấy thông tin tài khoản!");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {contextHolder}
      <form
        className="p-10 shadow-2xl mb-14 rounded-2xl"
        onSubmit={formik.handleSubmit}
      >
        <h3 className="text-xl font-semibold text-orange-400 uppercase border-b-2 border-orange-400">
          Chi tiết
        </h3>
        <div className="flex items-center justify-between py-3 mt-5">
          <div className="font-bold">Họ tên</div>
          <input
            id="hoTen"
            type="text"
            className={`py-3 text-right outline-none w-1/2 ${
              card
                ? "bg-gray-100 border-b-2 border-orange-400 duration-300"
                : "cursor-default"
            }`}
            value={formik.values.hoTen || ""}
            readOnly={card ? "" : "readonly"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.hoTen && formik.touched.hoTen ? (
          <p className="text-xs italic text-right text-red-500 sm:text-sm">
            * {formik.errors.hoTen}
          </p>
        ) : (
          ""
        )}
        <div className="flex items-center justify-between py-3 mt-5">
          <div className="font-bold">Địa chỉ email</div>
          <input
            id="email"
            type="text"
            className={`py-3 text-right outline-none w-1/2 ${
              card
                ? "bg-gray-100 border-b-2 border-orange-400 duration-300"
                : "cursor-default"
            }`}
            value={formik.values.email || ""}
            readOnly={card ? "" : "readonly"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.email && formik.touched.email ? (
          <p className="text-xs italic text-right text-red-500 sm:text-sm">
            * {formik.errors.email}
          </p>
        ) : (
          ""
        )}
        <div className="flex items-center justify-between py-3 mt-5">
          <div className="font-bold">Số điện thoại</div>
          <input
            id="soDT"
            type="text"
            className={`py-3 text-right outline-none w-1/2 ${
              card
                ? "bg-gray-100 border-b-2 border-orange-400 duration-300"
                : "cursor-default"
            }`}
            value={formik.values.soDT || ""}
            readOnly={card ? "" : "readonly"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.soDT && formik.touched.soDT ? (
          <p className="text-xs italic text-right text-red-500 sm:text-sm">
            * {formik.errors.soDT}
          </p>
        ) : (
          ""
        )}
        <div className="mt-5 text-right">
          {card ? (
            <button className="px-3 py-2 text-white duration-300 bg-orange-400 rounded-lg hover:bg-orange-500 hover:scale-90">
              Lưu thay đổi
            </button>
          ) : (
            <span
              className="px-3 py-2 text-white duration-300 bg-orange-400 rounded-lg cursor-pointer hover:bg-orange-500 hover:scale-90"
              onClick={() => {
                setCard(true);
                document.getElementById("hoTen").focus();
              }}
            >
              Cập nhật
            </span>
          )}
        </div>
      </form>
      <InfoSkill />
    </div>
  );
};

export default InfoDetail;
