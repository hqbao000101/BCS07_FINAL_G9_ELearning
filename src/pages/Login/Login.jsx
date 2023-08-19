import React from "react";
import loginBG from "../../assets/imgs/login_bg.png";
// import loginOverlay from "../../assets/imgs/login_overlay.png";
import "./Login.scss";
import LoginForm from "../../Components/LoginForm/LoginForm";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";

const Login = () => {
  return (
    <div
      id="login"
      className="flex items-center justify-center w-screen h-screen"
      style={{ backgroundImage: `url(${loginBG})` }}
    >
      <div className="relative flex w-4/5 bg-white rounded-lg shadow-2xl">
        <LoginForm />
        <RegisterForm />
        <div id="overlay" className="absolute"></div>
      </div>
    </div>
  );
};

export default Login;
