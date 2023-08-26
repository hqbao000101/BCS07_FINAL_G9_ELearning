import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../pages/Loading/Loading";
import "./AdminTemplate.scss";
import {
  CodeSandboxOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ScheduleOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, message, Dropdown } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";
import favicon from "../assets/imgs/favicon.png";
import tempUser from "../assets/imgs/home_carousel_01.jpg";
import { getLocal, removeLocal } from "../utils/localStorage";

const { Header, Sider, Content } = Layout;

const AdminTemplate = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [admin, setAdmin] = useState({});

  const items = [
    {
      key: "1",
      icon: <SettingOutlined />,
      label: <div>Cài Đặt</div>,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      icon: <LogoutOutlined />,
      label: (
        <div
          onClick={() => {
            removeLocal("user");
            window.location.href = "/admin/login";
          }}
        >
          Đăng Xuất
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (getLocal("user")) {
      const user = getLocal("user");
      setAdmin(user);
      message.success(`Chào mừng ${user.hoTen} đã quay lại!`);
    }
  }, []);

  return (
    <Fragment>
      {isLoading ? <Loading /> : <></>}
      <Layout id="admin__template" className="min-h-screen">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical bg-main" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "0",
                icon: (
                  <img
                    src={favicon}
                    alt="Favicon"
                    className={`${collapsed ? "w-20" : "w-10"}`}
                  />
                ),
                label: (
                  <NavLink to="/" className="text-sm text-black">
                    Cyber E-Learning
                  </NavLink>
                ),
              },
              {
                key: "1",
                icon: <TeamOutlined />,
                label: <NavLink to="/admin">Người dùng</NavLink>,
              },
              {
                key: "2",
                icon: <CodeSandboxOutlined />,
                label: <NavLink to="/admin/course">Khóa học</NavLink>,
              },
              {
                key: "3",
                icon: <ScheduleOutlined />,
                label: <NavLink to="/admin/enroll">Ghi danh</NavLink>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
            className="flex items-center justify-between"
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
              trigger={"click"}
            >
              <div className="flex items-center justify-center cursor-pointer group">
                <p>
                  Chào!{" "}
                  <span className="font-bold uppercase duration-300 group-hover:text-orange-400">
                    {admin.hoTen}
                  </span>
                </p>
                <div className="ms-2 me-4">
                  <img
                    src={tempUser}
                    alt="User Logo"
                    className="object-cover w-10 h-10 duration-300 rounded-full group-hover:shadow-lg"
                  />
                </div>
              </div>
            </Dropdown>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
          <Footer
            style={{
              textAlign: "right",
            }}
            className="py-3 bg-white"
          >
            Cyber E-Learning © 2023 by BCS07 | G9. All Rights Reserved.
          </Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default AdminTemplate;
