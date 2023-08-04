import { https } from "./config";

export const userService = {
  getAllUsers: (maNhom = "GP09") => {
    return https.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`
    );
  },
};
