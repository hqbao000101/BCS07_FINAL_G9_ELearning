import { https } from "./config";

export const courseService = {
  getAllCourses: (maNhom = "GP09") => {
    return https.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`);
  },
};
