import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const UserTemplate = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserTemplate;
