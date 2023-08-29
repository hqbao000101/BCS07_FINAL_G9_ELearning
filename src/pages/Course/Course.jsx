import React, { useEffect, useState } from "react";
import "./Course.scss";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "./CourseCard";
import { courseService } from "./../../services/courseServices";
import { message, Pagination } from "antd";
import {
  set_loading_end,
  set_loading_start,
} from "../../redux/slices/loadingSlice";

const Course = () => {
  // eslint-disable-next-line no-undef
  const [course, setCourse] = useState([]);
  const [total, setTotal] = useState(0);
  const pagination = useSelector((state) => state.course.pagination);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(set_loading_start());
    courseService
      .getAllCourses()
      .then((res) => {
        setCourse(res.data);
        setTotal(res.data.totalCount);
        dispatch(set_loading_end());
      })
      .catch(() => {
        message.error("Không thể lấy dữ liệu khóa học!");
        dispatch(set_loading_end());
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  return (
    <section id="course">
      <div>
        <div class="py-16 text-white bg-orange-400">
          <div class="px-4 mx-auto max-w-screen-2xl">
            <h1 class="mb-2 text-4xl font-bold uppercase sm:text-5xl">
              KHÓA HỌC
            </h1>
            <p
              class="flex items-center text-black sm:text-lg"
              style={{ textTransform: `Uppercase` }}
            >
              <span
                role="img"
                aria-label="caret-right"
                class="anticon anticon-caret-right me-1 animate-pulse"
              ></span>
              Bắt đầu hành trình nào!!!
            </p>
          </div>
        </div>
        <div className="course_container m-10">
          <div className="container">
            <div className="grid xl:grid-cols-6 xl:grid-rows-1 md:grid-rows-2 md:grid-cols-3 sm:grid-rows-6 min-h-48">
              <div className="course_box bgs-1 min-h-30 max-h-48">
                <div className="my-10">
                  <h6>Trương trình học</h6>
                  <i class="fa-solid fa-laptop"></i>
                  <p>300</p>
                </div>
              </div>
              <div className="course_box bgs-2">
                <div className="my-10">
                  <h6>nhà sáng tạo</h6>
                  <i class="fa-solid fa-laptop"></i>
                  <p>10000</p>
                </div>
              </div>
              <div className="course_box bgs-3">
                <div className="my-10">
                  <h6>nhà thiết kế</h6>
                  <i class="fa-solid fa-laptop"></i>
                  <p>400</p>
                </div>
              </div>
              <div className="course_box bgs-4">
                <div className="my-10">
                  <h6>bài giảng</h6>
                  <i class="fa-solid fa-laptop"></i>
                  <p>3000</p>
                </div>
              </div>
              <div className="course_box bgs-5">
                <div className="my-10">
                  <h6>video</h6>
                  <i class="fa-solid fa-laptop"></i>
                  <p>40000</p>
                </div>
              </div>
              <div className="course_box bgs-6">
                <div className="my-10">
                  <h6>lĩnh vực</h6>
                  <i class="fa-solid fa-laptop"></i>
                  <p>200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="course_list m-10">
          <div className="list_info">
            <h6>
              <i class="fa-solid fa-bookmark"></i>Danh sách khóa học
            </h6>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:place-items-center mt-4 gap-4 place-items-stretch items-center">
            {course.map((item, index) => {
              return (
                <CourseCard
                  key={index}
                  info={item.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                  hinhAnh={item.hinhAnh}
                  maKhoaHoc={item.maKhoaHoc}
                  moTa={item.moTa}
                  luotXem={item.luotXem}
                />
              );
            })}
          </div>
          <div className="text-right">
            <Pagination
              current={pagination}
              total={total}
              onChange={total}
              pageSize={10}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
