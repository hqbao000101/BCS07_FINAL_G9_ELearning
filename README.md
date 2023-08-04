# Ghi chú về dự án React

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
  - animation: LottieFiles --> npm install --save react-lottie (--force)
  - format Datetime: Moment --> npm i moment (--force)
