import React from "react";
import InfoSkill from "../InfoSkill/InfoSkill";

const InfoDetail = () => {
  return (
    <div>
      <form className="p-10 shadow-2xl mb-14 rounded-2xl">
        <h3 className="text-xl font-semibold text-orange-400 uppercase border-b-2 border-orange-400">
          Chi tiết
        </h3>
        <div className="flex items-center justify-between py-3 my-5">
          <div className="font-medium">Họ tên</div>
          <div>User 0001</div>
        </div>
        <div className="flex items-center justify-between py-3 my-5">
          <div className="font-medium">Địa chỉ email</div>
          <div>user0001@gmail.com</div>
        </div>
        <div className="flex items-center justify-between py-3 my-5">
          <div className="font-medium">Số điện thoại</div>
          <div>023124457989</div>
        </div>
        <div className="text-right">
          <button className="px-3 py-2 text-white duration-300 bg-orange-400 rounded-lg hover:bg-orange-500 hover:scale-90">
            Cập nhật
          </button>
        </div>
      </form>
      <InfoSkill />
    </div>
  );
};

export default InfoDetail;
