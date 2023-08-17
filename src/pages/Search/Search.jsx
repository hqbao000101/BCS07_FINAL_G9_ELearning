import React, { useState } from "react";
import {
  CaretRightOutlined,
  ControlFilled,
  StarFilled,
} from "@ant-design/icons";
import "./Search.scss";
import HorizontalCourseCard from "../../Components/HorizontalCourseCard/HorizontalCourseCard";
import { Pagination } from "antd";
import { useParams } from "react-router-dom";

const Search = () => {
  const { tuKhoa } = useParams();
  const [searchList, setSearchList] = useState([]);
  
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
          <div className="hidden w-1/4 px-4 lg:block">
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
            <div className="flex items-center justify-between mb-8">
              <p className="text-xl font-medium sm:text-2xl">
                Hiển thị <span className="text-orange-400">15</span> kết quả
              </p>
              <ControlFilled className="block text-2xl text-black duration-500 cursor-pointer sm:text-4xl lg:hidden hover:text-orange-400" />
            </div>
            <div>
              <HorizontalCourseCard />
              <HorizontalCourseCard />
              <HorizontalCourseCard />
              <HorizontalCourseCard />
              <HorizontalCourseCard />
            </div>
            <div className="text-right">
              <Pagination
                defaultCurrent={1}
                total={50}
                onChange={(page) => {
                  console.log(page);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
