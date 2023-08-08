import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Loading from "../pages/Loading/Loading";
import { useSelector } from "react-redux";

const UserTemplate = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);
  return (
    <Fragment>
      {isLoading ? <Loading /> : <></>}
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Fragment>
  );
};

export default UserTemplate;
