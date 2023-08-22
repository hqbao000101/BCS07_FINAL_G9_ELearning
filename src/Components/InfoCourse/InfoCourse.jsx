import React from "react";
import HorizontalCourseCard from "../HorizontalCourseCard/HorizontalCourseCard";
import { Pagination } from "antd";
import { useSelector } from "react-redux";

const InfoCourse = () => {
  const accountInfo = useSelector((state) => state.user.accountInfo);

  return (
    <div>
      {accountInfo.chiTietKhoaHocGhiDanh?.map((item, index) => {
        return <HorizontalCourseCard item={item} flag={true} key={index} />;
      })}
      {accountInfo.chiTietKhoaHocGhiDanh?.length > 0 ? (
        <div className="text-right">
          <Pagination
            defaultCurrent={1}
            total={accountInfo.chiTietKhoaHocGhiDanh?.length}
            pageSize={1}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default InfoCourse;
