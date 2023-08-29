import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import { useDispatch } from "react-redux";
import { courseService } from "./../../services/courseServices";
import { message } from "antd";
import {
  set_loading_end,
  set_loading_start,
} from "../../redux/slices/loadingSlice";
import { useParams } from "react-router-dom";

const CategoryContent = () => {
  const [course, setCourse] = useState([]);
  const dispatch = useDispatch();
  const { maDanhMuc } = useParams();
  useEffect(() => {
    dispatch(set_loading_start());
    courseService
      .getCoursesByCategory(maDanhMuc)
      .then((res) => {
        setCourse(res.data);
        console.log(res.data);
        dispatch(set_loading_end());
      })
      .catch(() => {
        message.error("Không thể lấy dữ liệu khóa học!");
        dispatch(set_loading_end());
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maDanhMuc]);

  return (
    <div>
      <div className="container">
        <div className="title mb-5 text-base font-semibold clear-both">
          <span className="rounded-full border-2 border-zinc-300 m-5 px-3 py-3">
            <i class="fa-solid fa-desktop mr-2 text-yellow-400"></i>
            {course[0].danhMucKhoaHoc.tenDanhMucKhoaHoc}
          </span>
        </div>
        <div className="px-5">
          <div className="grid gap-6 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:place-items-center">
            {course.map((item, index) => {
              return (
                <CourseCard
                  key={index}
                  tenDanhMucKhoaHoc={item.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                  hinhAnh={item.hinhAnh}
                  maKhoaHoc={item.maKhoaHoc}
                  moTa={item.moTa}
                  luotXem={item.luotXem}
                  isPopular={item.luotXem >= 3000 ? true : false}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryContent;
