import React from "react";
import "./CourseCard.scss";
// import { Divider } from "antd";
// import user from "../../assets/imgs/user_icon.png";
// import { BellOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import ReactSample from "../../assets/imgs/card_react_sample.jpg";
import AdImg from "../../assets/imgs/course-ad-img.png";

const tempContent =
  "Lập trình Frontend là công việc sử dụng các ngôn ngữ HTML, CSS và JavaScript để thiết kế và xây dựng giao diện cho một trang web hoặc ứng dụng web mà người dùng có thể xem và tương tác trực tiếp";

const CourseCard = ({
  info = "Lập trình Front-end",
  hinhAnh = ReactSample,
  maKhoaHoc = "1636364364967",
  moTa = tempContent,
  luotXem = 100,
}) => {
  return (
    <NavLink to={`/detail/${maKhoaHoc}`} className="card" href="#">
      <img
        src={hinhAnh}
        alt="info"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = ReactSample;
        }}
      />
      <span className="stiker">{info}</span>
      <div className="card_body">
        <h6 className="line-clamp-2">{moTa}</h6>
        <div className="grid items-center grid-cols-5 title_maker">
          <div className="img_footer">
            <img src={AdImg} alt="people" />
          </div>
          <span className="col-span-4 name_maker">Elon Musk</span>
        </div>
      </div>
      <div className="card_footer">
        <div className="price">
          <p className="price_start">
            800.000 <sup>đ</sup>
          </p>
          <p className="price_sell">
            400.000 <sup>đ</sup>
          </p>
        </div>
        <div className="danh_gia">
          <i class="fa-solid fa-star"></i>
          <span className="text_star">4.9</span>
          <span className="number_people">({luotXem})</span>
        </div>
      </div>
    </NavLink>
  );
};

export default CourseCard;
