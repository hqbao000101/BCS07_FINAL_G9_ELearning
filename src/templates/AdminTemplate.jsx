import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Loading from "../pages/Loading/Loading";

const AdminTemplate = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);
  return (
    <Fragment>
      {isLoading ? <Loading /> : <></>}
      <div>AdminTemplate</div>
    </Fragment>
  );
};

export default AdminTemplate;
