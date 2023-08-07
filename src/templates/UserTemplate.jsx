import React, { useEffect, useState } from "react";
import { userService } from "../services/userServices";

const UserTemplate = () => {
  const [user, setUser] = useState([]);
  const getAllUsers = async () => {
    const userData = await userService.getUsersPagination();   
    setUser(userData);
    console.log(user); 
  }; 

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="text-white bg-black p-8">UserTemplate</div>;
};

export default UserTemplate;
