import React from "react";
import "./Details.scss";
import ReactBanner from "../../assets/imgs/card_react_sample.jpg";
import UserComment from "../../assets/imgs/user_feedback.png";

const Details = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-between mt-10 sm:mt-20 md:flex-row">
          <div class="margin">
            <div class="img-margin" style={{ width: '40vw' }}>
              <img
                src={ReactBanner}
                alt="Course Details"
                className="object-cover w-full"
                style={{ maxHeight: '40vh', maxWidth: '100%', borderRadius: 150 / 2, overflow: "hidden", borderWidth: 3, borderColor: "orange"}}
              />
            </div>
          </div>
          <div class="text-margin">
            <div className="flex text-lg">
              <i className="text-xl sm:text-4xl fa-solid text-main me-5 animate-pulse"></i>
              <div>
                <p className="text-sm leading-8 sm:leading-10 sm:text-base">
                Khóa học này dạy cho bạn cách lập trình hiện đại với các hướng dẫn tùy chỉnh cho cả người mới học và người lập trình có kinh nghiệm. Nội dung sẽ bao gồm React, Golang, Python và C. Học viên  sẽ có cơ hội tiếp cận với những người cố vấn, những người sẽ giúp bạn vượt trội trong sự nghiệp và nó sẽ đem đến cho ban bạn những kết quả tuyệt vời mà bạn chưa từng nghĩ đến.
                </p>
                <div className="mt-5">
                  <h4 className="font-medium text-main md:text-xl"> <button>MUA KHÓA HỌC</button> </h4>
                  <p className="text-sm text-gray-400 md:text-base">
                  120.000đ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  );
};

export default Details;
