import React, { useEffect, useState } from "react";
import {
  CaretRightOutlined,
  ControlFilled,
  StarFilled,
} from "@ant-design/icons";
import "./Search.scss";
import HorizontalCourseCard from "../../Components/HorizontalCourseCard/HorizontalCourseCard";
import { Pagination } from "antd";
import { useParams } from "react-router-dom";
import { courseService } from "../../services/courseServices";
import { useDispatch, useSelector } from "react-redux";
import { setPagination } from "../../redux/slices/courseSlice";
import Lottie from "react-lottie";
import * as animationNoData from "../../assets/animations/no_data.json";

const Search = () => {
  const { tuKhoa } = useParams();
  const [searchList, setSearchList] = useState({});
  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");
  const pagination = useSelector((state) => state.course.pagination);
  const dispatch = useDispatch();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationNoData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    courseService
      .getCoursesPagination(tuKhoa, pagination)
      .then((res) => {
        setError("");
        setSearchList(res.data);
        setTotal(res.data.totalCount);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, [tuKhoa, pagination]);

  return (
    <div>
      <div className="py-16 text-white bg-orange-400">
        <div className="px-4 mx-auto max-w-screen-2xl">
          <h1 className="mb-2 text-4xl font-bold uppercase sm:text-5xl">
            Tìm Kiếm
          </h1>
          <p className="flex items-center text-black sm:text-lg">
            <CaretRightOutlined className="me-1 animate-pulse" />
            Kết quả tìm kiếm khóa học!
          </p>
        </div>
      </div>
      <div className="py-10 mx-auto max-w-screen-2xl">
        <div className="flex items-start">
          <div className="sticky hidden w-1/4 px-4 lg:block top-5">
            <div className="flex items-center text-4xl font-semibold text-black">
              <ControlFilled className="text-orange-400 me-2" />
              <h2>Lọc</h2>
            </div>
            <h3 className="mt-5 mb-3 text-xl font-medium">Danh Mục</h3>
            <ul className="ps-3">
              <li className="mb-3">
                <label htmlFor="category1" className="container">
                  <input
                    className="categoryInput"
                    id="category1"
                    name="category"
                    type="radio"
                    defaultChecked
                  />
                  <span className="checkmark"></span>
                  Tất cả
                </label>
              </li>
              <li className="mb-3">
                <label htmlFor="category2" className="container">
                  <input
                    className="categoryInput"
                    id="category2"
                    name="category"
                    type="radio"
                  />
                  <span className="checkmark"></span>
                  Tư duy lập trình
                </label>
              </li>
              <li className="mb-3">
                <label htmlFor="category3" className="container">
                  <input
                    className="categoryInput"
                    id="category3"
                    name="category"
                    type="radio"
                  />
                  <span className="checkmark"></span>
                  Lập trình Mobile
                </label>
              </li>
              <li className="mb-3">
                <label htmlFor="category4" className="container">
                  <input
                    className="categoryInput"
                    id="category4"
                    name="category"
                    type="radio"
                  />
                  <span className="checkmark"></span>
                  Thiết kế Website
                </label>
              </li>
              <li className="mb-3">
                <label htmlFor="category5" className="container">
                  <input
                    className="categoryInput"
                    id="category5"
                    name="category"
                    type="radio"
                  />
                  <span className="checkmark"></span>
                  Lập trình Front-end
                </label>
              </li>
              <li className="mb-3">
                <label htmlFor="category6" className="container">
                  <input
                    className="categoryInput"
                    id="category6"
                    name="category"
                    type="radio"
                  />
                  <span className="checkmark"></span>
                  Lập trình Back-end
                </label>
              </li>
              <li className="mb-3">
                <label htmlFor="category7" className="container">
                  <input
                    className="categoryInput"
                    id="category7"
                    name="category"
                    type="radio"
                  />
                  <span className="checkmark"></span>
                  Lập trình Fullstack
                </label>
              </li>
            </ul>
            <h3 className="mt-5 mb-3 text-xl font-medium">Lượt Xem</h3>
            <ul className="ps-3">
              <li className="mb-3">
                <label htmlFor="eye1" className="container">
                  <input
                    className="eyeInput"
                    id="eye1"
                    name="eye"
                    type="radio"
                    defaultChecked
                  />
                  <span className="checkmark"></span>
                  Tất cả
                </label>
              </li>
              <li className="mb-3">
                <label htmlFor="eye2" className="container">
                  <input
                    className="eyeInput"
                    id="eye2"
                    name="eye"
                    type="radio"
                  />
                  <span className="checkmark"></span>0 - 1000
                </label>
              </li>
              <li className="mb-3">
                <label htmlFor="eye3" className="container">
                  <input
                    className="eyeInput"
                    id="eye3"
                    name="eye"
                    type="radio"
                  />
                  <span className="checkmark"></span>
                  1000 - 2000
                </label>
              </li>
              <li className="mb-3">
                <label htmlFor="eye4" className="container">
                  <input
                    className="eyeInput"
                    id="eye4"
                    name="eye"
                    type="radio"
                  />
                  <span className="checkmark"></span>
                  3000 - 4000
                </label>
              </li>
              <li className="mb-3">
                <label htmlFor="eye5" className="container">
                  <input
                    className="eyeInput"
                    id="eye5"
                    name="eye"
                    type="radio"
                  />
                  <span className="checkmark"></span>
                  4000 - 5000
                </label>
              </li>
              <li className="mb-3">
                <label htmlFor="eye6" className="container">
                  <input
                    className="eyeInput"
                    id="eye6"
                    name="eye"
                    type="radio"
                  />
                  <span className="checkmark"></span>
                  5000 +
                </label>
              </li>
            </ul>
            <h3 className="mt-5 mb-3 text-xl font-medium">Đánh Giá</h3>
            <ul className="ps-3">
              <li className="mb-3">
                <label htmlFor="rate6" className="container">
                  <input
                    className="rateInput"
                    id="rate6"
                    name="rate"
                    type="radio"
                    defaultChecked
                  />
                  <span className="checkmark"></span>
                  Tất cả
                </label>
              </li>
              <li className="mb-3">
                <label htmlFor="rate1" className="container">
                  <input
                    className="rateInput"
                    id="rate1"
                    name="rate"
                    type="radio"
                  />
                  <span className="checkmark"></span>
                  <StarFilled className="text-yellow-400" />
                </label>
              </li>
              <li className="mb-3">
                <label htmlFor="rate2" className="container">
                  <input
                    className="rateInput"
                    id="rate2"
                    name="rate"
                    type="radio"
                  />
                  <span className="checkmark"></span>
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-400" />
                </label>
              </li>
              <li className="mb-3">
                <label htmlFor="rate3" className="container">
                  <input
                    className="rateInput"
                    id="rate3"
                    name="rate"
                    type="radio"
                  />
                  <span className="checkmark"></span>
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-400" />
                </label>
              </li>
              <li className="mb-3">
                <label htmlFor="rate4" className="container">
                  <input
                    className="rateInput"
                    id="rate4"
                    name="rate"
                    type="radio"
                  />
                  <span className="checkmark"></span>
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-400" />
                </label>
              </li>
              <li className="mb-3">
                <label htmlFor="rate5" className="container">
                  <input
                    className="rateInput"
                    id="rate5"
                    name="rate"
                    type="radio"
                  />
                  <span className="checkmark"></span>
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-400" />
                </label>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-3/4 pe-5 lg:ps-0 ps-5">
            {error === "" ? (
              <>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center text-xl font-medium sm:text-2xl">
                    Trang
                    <span className="text-orange-400 ms-2">{pagination}</span>
                    <i className="text-sm fas fa-angle-double-right ms-2"></i>
                    <span className="hidden ms-2 sm:inline">Hiển thị</span>
                    <div>
                      <span className="text-orange-400 ms-2">
                        {searchList.count}
                      </span>
                      <span className="text-base">{`/${searchList.totalCount}`}</span>
                    </div>
                  </div>
                  <ControlFilled className="block text-2xl text-black duration-500 cursor-pointer sm:text-4xl lg:hidden hover:text-orange-400" />
                </div>
                <div>
                  {searchList.items?.map((item, index) => {
                    return <HorizontalCourseCard key={index} item={item} />;
                  })}
                </div>
                <div className="text-right">
                  <Pagination
                    current={pagination}
                    total={total}
                    onChange={(page) => {
                      dispatch(setPagination(page));
                      window.scrollTo({ top: 0, left: 0 });
                    }}
                    pageSize={10}
                  />
                </div>
              </>
            ) : (
              <div>
                <p className="text-xl font-medium sm:text-2xl">{error}</p>
                <div className="flex items-center justify-center">
                  <Lottie options={defaultOptions} width={"70%"} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
