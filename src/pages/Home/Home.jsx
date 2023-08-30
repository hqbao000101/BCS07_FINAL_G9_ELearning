import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Achievement from "../../Components/Achievement/Achievement";
import CourseCard from "../../Components/CourseCard/CourseCard";
import HomeCountUp from "../../Components/HomeCountUp/HomeCountUp";
import HomeCarousel from "../../Components/HomeCarousel/HomeCarousel";
import UserComment from "../../assets/imgs/user_feedback.png";
import { courseService } from "../../services/courseServices";
import { message } from "antd";
import { useDispatch } from "react-redux";
import {
  set_loading_end,
  set_loading_start,
} from "../../redux/slices/loadingSlice";

const Home = () => {
  const [course, setCourse] = useState([]);
  const dispatch = useDispatch();
  let count = 0;

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(set_loading_start());
    courseService
      .getAllCourses()
      .then((res) => {
        setCourse(res.data);
        dispatch(set_loading_end());
      })
      .catch(() => {
        message.error("Không thể lấy dữ liệu khóa học!");
        dispatch(set_loading_end());
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Banner />
      <Achievement />
      <div className="px-4 py-10 mx-auto max-w-screen-2xl 2xl:px-0">
        <h3 className="text-2xl font-bold text-orange-400">
          Khóa Học Phổ Biến
        </h3>
        <div className="grid gap-20 mt-8 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4">
          {course.map((item, index) => {
            return item.luotXem >= 3000 ? (
              <CourseCard
                key={index}
                tenDanhMucKhoaHoc={item.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                hinhAnh={item.hinhAnh}
                maKhoaHoc={item.maKhoaHoc}
                moTa={item.moTa}
                luotXem={item.luotXem}
                isPopular={item.luotXem >= 3000 ? true : false}
              />
            ) : (
              ""
            );
          })}
        </div>
      </div>
      <div className="px-4 py-10 mx-auto max-w-screen-2xl 2xl:px-0">
        <h3 className="text-2xl font-bold text-orange-400">
          Khóa Học Tham Khảo
        </h3>
        <div className="grid gap-20 mt-8 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4">
          {course.map((item, index) => {
            return index <= 3 ? (
              <CourseCard
                key={index}
                tenDanhMucKhoaHoc={item.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                hinhAnh={item.hinhAnh}
                maKhoaHoc={item.maKhoaHoc}
                moTa={item.moTa}
                luotXem={item.luotXem}
                isPopular={item.luotXem >= 3000 ? true : false}
              />
            ) : (
              ""
            );
          })}
        </div>
      </div>
      <div className="px-4 py-10 mx-auto max-w-screen-2xl 2xl:px-0">
        <h3 className="text-2xl font-bold text-orange-400">
          Khóa Học Front-end
        </h3>
        <div className="grid gap-20 mt-8 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4">
          {course.map((item, index) => {
            if (item.danhMucKhoaHoc.maDanhMucKhoahoc === "FrontEnd") {
              count++;
            }
            return item.danhMucKhoaHoc.maDanhMucKhoahoc === "FrontEnd" ? (
              count <= 4 ? (
                <CourseCard
                  key={index}
                  tenDanhMucKhoaHoc={item.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                  hinhAnh={item.hinhAnh}
                  maKhoaHoc={item.maKhoaHoc}
                  moTa={item.moTa}
                  luotXem={item.luotXem}
                  isPopular={item.luotXem >= 3000 ? true : false}
                />
              ) : (
                ""
              )
            ) : (
              ""
            );
          })}
        </div>
      </div>
      <HomeCountUp />
      <HomeCarousel />
      <div className="px-4 pt-0 pb-10 mx-auto sm:py-20 max-w-screen-2xl 2xl:px-0">
        <h3 className="text-2xl font-bold text-orange-400">
          Đánh Giá Từ Học Viên
        </h3>
        <div className="flex flex-col items-center justify-between mt-10 sm:mt-20 md:flex-row">
          <div>
            <div className="w-3/5 px-6 py-5 mx-auto mb-10 bg-orange-400 rounded-b-full shadow-2xl sm:mb-20 sm:py-10 sm:px-12 sm:w-2/5 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-e-full md:mb-0">
              <img
                src={UserComment}
                alt="Top User"
                className="object-cover w-full"
              />
            </div>
          </div>
          <div>
            <div className="flex text-lg">
              <i className="text-xl sm:text-4xl fa-solid fa-quote-left text-main me-5 animate-pulse"></i>
              <div>
                <p className="text-sm leading-8 sm:leading-10 sm:text-base">
                  Chương trình giảng dạy được biên soạn dành riêng cho các bạn
                  Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ
                  cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các
                  thành viên sáng lập và giảng viên dày kinh nghiệm. Thực sự rất
                  hay và hấp dẫn!
                </p>
                <div className="mt-5">
                  <h4 className="font-medium text-main md:text-xl">Mei Mei</h4>
                  <p className="text-sm text-gray-400 md:text-base">
                    Học viên xuất sắc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
