import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import CategoryContent from "../../Components/Category/CategoryContent";

const Category = () => {
  return (
    <section className="category">
      <div className="py-16 text-white bg-orange-400">
        <div className="px-4 mx-auto max-w-screen-2xl">
          <h1 className="mb-2 text-4xl font-bold uppercase sm:text-5xl">
            Khóa học theo danh mục
          </h1>
          <p className="flex items-center text-black sm:text-lg">
            <CaretRightOutlined className="me-1 animate-pulse" />
            Hãy chọn lấy khóa học mong muốn!!!
          </p>
        </div>
      </div>
      <div className="">
        <CategoryContent />
      </div>
    </section>
  );
};

export default Category;
