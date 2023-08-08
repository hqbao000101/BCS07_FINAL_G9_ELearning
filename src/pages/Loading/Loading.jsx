import React from "react";
import Lottie from "react-lottie";
import * as animationLoading from "../../assets/animations/loading.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-yellow-500 to-orange-500">
      <Lottie options={defaultOptions} width={"50%"} />;
    </div>
  );
};

export default Loading;
