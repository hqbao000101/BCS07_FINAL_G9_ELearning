import React from "react";
import HocVien from "../../assets/imgs/HocVien.png";
import KhoaHoc from "../../assets/imgs/KhoaHoc.png";
import GioHoc from "../../assets/imgs/GioHoc.png";
import GiangVien from "../../assets/imgs/GiangVien.png";
import CountUp from "react-countup";

const HomeCountUp = () => {
  return (
    <div className="bg-[#f0f8ff] mt-14">
      <div className="grid px-4 py-20 mx-auto sm:grid-cols-2 md:grid-cols-4 max-w-screen-2xl 2xl:px-0">
        <div className="my-10 text-center md:my-0">
          <img src={HocVien} alt="Student" className="w-20 mx-auto" />
          <CountUp
            end={9000}
            separator=""
            duration={2.5}
            enableScrollSpy={true}
            scrollSpyOnce={true}
            className="mt-1 text-[50px] font-extrabold text-main"
          />
          <p className="font-medium">Học Viên</p>
        </div>
        <div className="my-10 text-center md:my-0">
          <img src={KhoaHoc} alt="Course" className="w-20 mx-auto" />
          <CountUp
            end={1000}
            separator=""
            duration={2.5}
            enableScrollSpy={true}
            scrollSpyOnce={true}
            className="mt-1 text-[50px] font-extrabold text-main"
          />
          <p className="font-medium">Khóa Học</p>
        </div>
        <div className="my-10 text-center md:my-0">
          <img src={GioHoc} alt="Hours" className="w-20 mx-auto" />
          <CountUp
            end={33200}
            separator=""
            duration={2.5}
            enableScrollSpy={true}
            scrollSpyOnce={true}
            className="mt-1 text-[50px] font-extrabold text-main"
          />
          <p className="font-medium">Giờ Học</p>
        </div>
        <div className="my-10 text-center md:my-0">
          <img src={GiangVien} alt="Teacher" className="w-20 mx-auto" />
          <CountUp
            end={400}
            separator=""
            duration={2.5}
            enableScrollSpy={true}
            scrollSpyOnce={true}
            className="mt-1 text-[50px] font-extrabold text-main"
          />
          <p className="font-medium">Giảng Viên</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCountUp;
