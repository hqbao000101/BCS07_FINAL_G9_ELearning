import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserTemplate from "./templates/UserTemplate";
import Home from "./pages/Home/Home";
import Page404 from "./pages/Page404/Page404";
import AdminTemplate from "./templates/AdminTemplate";
import Login from "./pages/Login/Login";
import Search from "./pages/Search/Search";
import Category from "./pages/Category/Category";
import Course from "./pages/Course/Course";
import Blog from "./pages/Blog/Blog";
import Event from "./pages/Event/Event";
import Intro from "./pages/Intro/Intro";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<Home />} />
          <Route path="/search/:tuKhoa" element={<Search />} />
          <Route path="/category/:maDanhMuc" element={<Category />} />
          <Route path="/course" element={<Course />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/event" element={<Event />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/detail/:tenKhoaHoc" element={<Detail />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminTemplate />}></Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
