import React, { useEffect } from "react";
import BlogContent from "../../Components/Blog/BlogContent";
import { CaretRightOutlined } from "@ant-design/icons";

const Blog = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="py-16 text-white bg-orange-400">
        <div className="px-4 mx-auto max-w-screen-2xl">
          <h1 className="mb-2 text-4xl font-bold uppercase sm:text-5xl">
            Blog
          </h1>
          <p className="flex items-center text-black sm:text-lg">
            <CaretRightOutlined className="me-1 animate-pulse" />
            Thông tin công nghệ số!
          </p>
        </div>
      </div>
      <BlogContent />
    </div>
  );
};

export default Blog;
