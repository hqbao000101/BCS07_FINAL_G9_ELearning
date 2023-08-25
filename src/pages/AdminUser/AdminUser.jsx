import React, { useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./AdminUser.scss";
import { getAllUsers } from "../../redux/slices/userSlice";
import { SettingFilled } from "@ant-design/icons";

const AdminUser = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Địa Chỉ Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDt",
      key: "soDt",
    },
    {
      title: "Người Dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      render: (_, { maLoaiNguoiDung }, index) => (
        <div key={index}>
          <Tag color={maLoaiNguoiDung === "HV" ? "blue" : "volcano"}>
            {maLoaiNguoiDung === "HV" ? "Học Viên" : "Giáo Vụ"}
          </Tag>
        </div>
      ),
    },
    {
      title: <SettingFilled />,
      key: "action",
      align: "center",
      render: (_, record, index) => (
        <Space size="small">
          <button className="px-3 py-2 text-white duration-300 bg-yellow-400 rounded-lg hover:bg-yellow-500">
            Cập nhật
          </button>
          <button className="px-3 py-2 text-white duration-300 bg-red-500 rounded-lg hover:bg-red-600">
            Xóa
          </button>
        </Space>
      ),
    },
  ];
  const data = users.map((item, index) => {
    return {
      ...item,
      stt: index + 1,
    };
  });
  return (
    <>
      <div className="mb-5 text-3xl font-semibold uppercase">
        Quản Lý <span className="text-orange-400">Người dùng</span>
      </div>
      <div className="flex items-center justify-between mb-5">
        <button className="px-3 py-2 text-white duration-300 bg-blue-500 rounded-lg hover:bg-blue-600">
          Thêm người dùng
        </button>
        <input
          type="text"
          placeholder="Tìm kiếm người dùng..."
          onChange={(e) => {
            console.log(e.target.value);
          }}
          className="w-1/2 p-2 border-2"
        />
      </div>
      <Table
        id="admin__user--table"
        rowKey="stt"
        columns={columns}
        dataSource={data}
        scroll={{ x: "1280" }}
      />
    </>
  );
};

export default AdminUser;
