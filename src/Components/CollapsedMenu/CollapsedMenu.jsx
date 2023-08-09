import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setNavbarActive } from "../../redux/slices/navbarSlice";
import "./CollapsedMenu.scss";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const CollapsedMenu = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const items = [
    getItem(
      <NavLink
        to="/"
        onClick={() => {
          dispatch(setNavbarActive(false));
        }}
      >
        Trang chủ
      </NavLink>,
      "1",
      null
    ),
    getItem(
      <NavLink
        to="/intro"
        onClick={() => {
          dispatch(setNavbarActive(false));
        }}
      >
        Thông tin
      </NavLink>,
      "2",
      null
    ),
    getItem("Danh mục", "3", null, [
      getItem(
        <NavLink
          to="/category/TuDuy"
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
        >
          Tư Duy Lập Trình
        </NavLink>,
        "3-1",
        null
      ),
      getItem(
        <NavLink
          to="/category/DiDong"
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
        >
          Lập Trình Mobile
        </NavLink>,
        "3-2",
        null
      ),
      getItem(
        <NavLink
          to="/category/Design"
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
        >
          Thiết Kế Website
        </NavLink>,
        "3-3",
        null
      ),
      getItem(
        <NavLink
          to="/category/FrontEnd"
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
        >
          Lập Trình Front-end
        </NavLink>,
        "3-4",
        null
      ),
      getItem(
        <NavLink
          to="/category/BackEnd"
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
        >
          Lập Trình Back-end
        </NavLink>,
        "3-5",
        null
      ),
      getItem(
        <NavLink
          to="/category/FullStack"
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
        >
          Lập Trình Fullstack
        </NavLink>,
        "3-6",
        null
      ),
    ]),
    getItem(
      <NavLink
        to="/course"
        onClick={() => {
          dispatch(setNavbarActive(false));
        }}
      >
        Khóa Học
      </NavLink>,
      "4",
      null
    ),
    getItem(
      <NavLink
        to="/blog"
        onClick={() => {
          dispatch(setNavbarActive(false));
        }}
      >
        Blog
      </NavLink>,
      "5",
      null
    ),
    getItem(
      <NavLink
        to="/event"
        onClick={() => {
          dispatch(setNavbarActive(false));
        }}
      >
        Sự kiện
      </NavLink>,
      "6",
      null
    ),
  ];

  return (
    <>
      <button
        data-collapse-toggle="mobile-menu-2"
        type="button"
        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
        onClick={showDrawer}
      >
        <MenuOutlined />
      </button>
      <Drawer
        title="Cyber E-Learning"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Menu
          id="collapsedMenu"
          onClick={onClose}
          style={{
            width: "100%",
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </Drawer>
    </>
  );
};

export default CollapsedMenu;
