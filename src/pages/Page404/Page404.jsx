import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import * as animationPage404 from "../../assets/animations/page404.json";

const Page404 = () => {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPage404,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex items-start justify-center min-h-screen">
      <div className="flex flex-col justify-center h-screen">
        <Lottie options={defaultOptions} width={"50vw"} height={"63vh"} />
        <div className="text-center">
          <button
            className="px-10 py-5 text-white duration-500 bg-orange-400 rounded-lg hover:bg-orange-500 hover:scale-105 hover:shadow-lg"
            onClick={() => {
              navigate("/");
            }}
          >
            Trở Về Trang Chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page404;
