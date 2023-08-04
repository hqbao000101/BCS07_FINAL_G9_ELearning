# Ghi chú về dự án React - ELearning
- Duration: 1 month (01/08/2023 - 31/08/2023)
- Deadline: 27/08/2023 !!!
- 28/08 -> 31/08: Merge code -> Fix bugs -> Video Demo -> Deliver / Submit
- Member: 3
  + Huynh Quang Bao
  + Nguyen Dinh Anh Hao
  + Dang Thuy Linh

# Pages are intended to be done (if we can):
- Login - Register (MUST) -> Bao
- Home - Trang chủ (MUST) -> Bao
- Info - Thông tin người dùng (MUST) -> Bao
- Intro - Thông tin / Giới thiệu -> Hao
- Category - Danh mục -> Hao
- Course - Khóa học -> Hao
- Detail - Chi tiết khóa học (MUST) -> Linh
- Blog - Blog -> Linh
- Event - Sự kiện -> Linh
- Search - Tìm kiếm -> Bao
- Admin: -> Bao
  + User Management - Quản lý người dùng (MUST)
  + Course Management - Quản lý khóa học (MUST)
  + Enrollment Management - Quản lý ghi danh (optional)

# Project Relevant Sources
- Google Drive: https://drive.google.com/drive/folders/1ACHSwsRRtpHIydXv8VKoz9-kkzQ6saZ9?usp=sharing
- Requirements - PDF file: https://apicrm.cybersoft.edu.vn/files/14-09-2022-02-12-43-duancuoikhoa-bc.pdf
- Swagger - APIs: https://elearningnew.cybersoft.edu.vn/swagger/index.html
- Reference Demo: VLearning (https://demo2.cybersoft.edu.vn/)

# Project Submission
- Task Distribution - Excel File: https://docs.google.com/spreadsheets/d/1CIVkPK2hTssnkHWOtpBPQUI7wh80vzKMYiAkQG7fDu8/edit?usp=sharing
- Github: https://github.com/hqbao000101/BCS07_FINAL_G9_ELearning.git
- Deploy: https://bcs-07-final-g9-e-learning.vercel.app/
- Youtube: ...

# Các thư mục cần tạo
- Components
- pages
- redux
- services: Nơi lưu trữ các logic về gọi dữ liệu
- utils: Nới chứa các hàm, các logic hỗ trợ
- assets: Nơi lưu trữ các hình ảnh, mp4, json, svg,...
- templates

# Các thư viện cần cài đặt
- react-router-dom
- axios
- redux -> @reduxjs/toolkit react-redux (thêm middleware)
- antd --> npm i antd --save
- tailwindcss --> npm install -D tailwindcss, npx tailwindcss init --> tailwind.config.js --> content: ["./src/**/*.{js,jsx,ts,tsx}"] --> index.css --> @tailwind base; @tailwind components; @tailwind utilities;
- sass - sass-loader

# Other Supports
- formik: npm i formik (--force) + npm i yup (--force)
- animation: LottieFiles --> npm install --save react-lottie (--force)
- format Datetime: Moment --> npm i moment (--force)

# Comment ESLint React Hook - useEffect
- eslint-disable-next-line react-hooks/exhaustive-deps

# Accounts for testing
- GV: { "taiKhoan": "huycan4mat", "matKhau": "123456" }
- HV: { "taiKhoan": "user0001", "matKhau": "123" }
