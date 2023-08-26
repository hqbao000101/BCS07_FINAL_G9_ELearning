import React, { useEffect, useState } from "react";
import { Drawer, Popconfirm, Space, Table, Tag, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/slices/userSlice";
import { QuestionCircleOutlined, SettingFilled } from "@ant-design/icons";
import DrawerAddUser from "../../Components/DrawerAddUser/DrawerAddUser";
import DrawerUpdateUser from "../../Components/DrawerUpdateUser/DrawerUpdateUser";
import "./AdminUser.scss";
import { userService } from "../../services/userServices";
import { getLocal } from "../../utils/localStorage";

const AdminUser = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);

  const showDrawer = () => {
    setAdd(true);
  };
  const onClose = () => {
    setAdd(false);
  };

  const showUpdateDrawer = () => {
    setUpdate(true);
  };
  const onCloseUpdate = () => {
    setUpdate(false);
  };

  const deleteConfirm = (taiKhoan) => {
    userService
      .deleteUsers(taiKhoan)
      .then(() => {
        const searchInput = document.getElementById("user__search").value;
        message.success("Xóa người dùng thành công!");
        searchInput
          ? dispatch(getAllUsers(searchInput))
          : dispatch(getAllUsers());
      })
      .catch((err) => {
        message.error(
          `${err ? err.response.data : "Không tìm thấy tài khoản này!"}`
        );
      });
  };

  useEffect(() => {
    const localUser = getLocal("user");
    if (localUser) {
      dispatch(getAllUsers());
    } else {
      window.location.href = "/admin/login";
    }
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
      render: (_, record) => (
        <Space size="small">
          <button
            className="px-3 py-2 text-white duration-300 bg-orange-400 rounded-lg hover:bg-orange-500"
            onClick={showUpdateDrawer}
          >
            Cập nhật
          </button>
          <Popconfirm
            title="Xóa Người Dùng"
            description={
              <>
                <p>Bạn có chắc muốn xóa người dùng này?</p>
                <p>Hành động sẽ không được hoàn tác!</p>
              </>
            }
            icon={
              <QuestionCircleOutlined
                style={{
                  color: "red",
                }}
              />
            }
            okType="danger"
            placement="topRight"
            cancelText="Hủy"
            okText="Xóa"
            onConfirm={() => deleteConfirm(record.taiKhoan)}
          >
            <button className="px-3 py-2 text-white duration-300 bg-red-500 rounded-lg hover:bg-red-600">
              Xóa
            </button>
          </Popconfirm>
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
    <div id="admin__user--table">
      <div className="mb-5 text-3xl font-semibold uppercase">
        Quản Lý <span className="text-orange-400">Người dùng</span>
      </div>
      <div className="flex items-center justify-between mb-5">
        <button
          className="px-3 py-2 text-white duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
          onClick={showDrawer}
        >
          Thêm người dùng
        </button>
        <input
          id="user__search"
          type="text"
          placeholder="Tìm kiếm tên người dùng..."
          onChange={(e) => {
            dispatch(getAllUsers(e.target.value));
          }}
          className="w-1/2 p-2 border-2"
          onFocus={(e) => {
            e.target.select();
          }}
        />
      </div>
      <Table
        rowKey="stt"
        columns={columns}
        dataSource={data}
        scroll={{ x: "1280" }}
        pagination={{ pageSize: 7 }}
      />
      <Drawer title="Thêm Người Dùng" placement="right" onClose={onClose} open={add}>
        <DrawerAddUser />
      </Drawer>
      <Drawer
        title="Update Drawer"
        placement="right"
        onClose={onCloseUpdate}
        open={update}
      >
        <DrawerUpdateUser />
      </Drawer>
    </div>
  );
};

export default AdminUser;
