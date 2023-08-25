import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../pages/Loading/Loading";
import "./AdminTemplate.scss";
import {
  CodeSandboxOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ScheduleOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";
import favicon from "../assets/imgs/favicon.png";

const { Header, Sider, Content } = Layout;

const AdminTemplate = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
                  <img src={favicon} alt="Favicon" width={30} height={30} />
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
