import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/slices/courseSlice";
import { Drawer, Table } from "antd";
import DrawerAddCourse from "../../Components/DrawerAddCourse/DrawerAddCourse";
import "./AdminCourse.scss";
import { DeleteFilled, EditFilled, SettingFilled } from "@ant-design/icons";
import ReactSample from "../../assets/imgs/card_react_sample.jpg";

const AdminCourse = () => {
  const courses = useSelector((state) => state.course.courses);
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false);

  useEffect(() => {
    dispatch(getAllCourses());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showDrawer = () => {
    setAdd(true);
  };
  const onClose = () => {
    setAdd(false);
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      align: "center",
    },
    {
      title: "Mã Khóa Học",
      dataIndex: "maKhoaHoc",
      key: "maKhoaHoc",
      align: "center",
    },
    {
      title: "Tên Khóa Học",
      dataIndex: "tenKhoaHoc",
      key: "tenKhoaHoc",
      align: "center",
      width: 200,
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      width: 300,
      align: "center",
      render: (text) => (
        <img
          src={text}
          alt="Course Pic"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = ReactSample;
          }}
          className="object-cover w-2/3 h-full mx-auto"
        />
      ),
    },
    {
      title: <p className="text-center">Mô Tả</p>,
      dataIndex: "moTa",
      key: "moTa",
      width: 300,
      render: (text) => <p className="line-clamp-3">{text}</p>,
    },
    {
      title: "Người Tạo",
      key: "nguoiTao",
      dataIndex: "nguoiTao",
      align: "center",
      render: (_, record) => <p>{record.nguoiTao.hoTen}</p>,
    },
    {
      title: "Ngày Tạo",
      key: "ngayTao",
      dataIndex: "ngayTao",
      align: "center",
    },
    {
      title: <SettingFilled />,
      key: "Action",
      align: "center",
      render: (_, record) => (
        <div className="flex items-center justify-center gap-2">
          <button className="px-3 py-2 text-white duration-300 bg-yellow-400 rounded-md hover:bg-yellow-500">
            <EditFilled />
          </button>
          <button className="px-3 py-2 text-white duration-300 bg-red-500 rounded-md hover:bg-red-600">
            <DeleteFilled />
          </button>
        </div>
      ),
    },
  ];
  const data = courses.map((item, index) => {
    return {
      ...item,
      stt: index + 1,
    };
  });

  return (
    <div id="admin__course">
      <div className="mb-5 text-3xl font-semibold uppercase">
        Quản Lý <span className="text-orange-400">Khóa Học</span>
      </div>
      <div className="flex items-center justify-between mb-5">
        <button
          className="px-3 py-2 text-white duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
          onClick={showDrawer}
        >
          Thêm khóa học
        </button>
        <input
          id="course__search"
          type="text"
          placeholder="Tìm kiếm khóa học..."
          onChange={(e) => {
            dispatch(getAllCourses(e.target.value));
          }}
          className="w-1/3 p-2 duration-300 border-2 rounded-tl-lg rounded-tr-lg outline-none focus:border-b-main"
          onFocus={(e) => {
            e.target.select();
          }}
        />
      </div>
      <Drawer
        title="Thêm Khóa Học"
        placement="right"
        onClose={onClose}
        open={add}
        size="large"
      >
        <DrawerAddCourse
          setClose={() => {
            onClose();
          }}
        />
      </Drawer>
      <Table
        rowKey={"stt"}
        columns={columns}
        dataSource={data}
        scroll={{ x: 1280 }}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default AdminCourse;
