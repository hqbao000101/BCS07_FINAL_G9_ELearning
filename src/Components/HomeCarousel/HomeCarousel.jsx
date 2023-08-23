import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem1 from "../../assets/imgs/home_carousel_01.jpg";
import CarouselItem2 from "../../assets/imgs/home_carousel_02.jpg";
import CarouselItem3 from "../../assets/imgs/home_carousel_03.jpg";
import CarouselItem4 from "../../assets/imgs/home_carousel_04.jpg";
import CarouselItem5 from "../../assets/imgs/home_carousel_05.jpg";
import CarouselItem6 from "../../assets/imgs/home_carousel_06.jpg";
import CarouselItem7 from "../../assets/imgs/home_carousel_07.jpg";
import { StarFilled } from "@ant-design/icons";

const HomeCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1300, min: 1024 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    smallMobile: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
    },
    superSmallMobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="px-4 py-10 mx-auto mt-5 max-w-screen-2xl 2xl:px-0">
      <h3 className="text-2xl font-bold text-orange-400">
        Giảng Viên Hàng Đầu
      </h3>
      <div>
        <Carousel
          responsive={responsive}
          arrows={false}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={2000}
          showDots={false}
        >
          <div className="p-5 text-center">
            <div className="px-5 py-10 duration-300 hover:shadow-xl group">
              <img
                src={CarouselItem1}
                alt="Teacher"
                className="object-cover w-20 h-20 mx-auto duration-300 rounded-full group-hover:shadow-2xl"
              />
              <h3 className="my-2 text-xl font-bold uppercase text-main">
                Big DadMoon
              </h3>
              <p>Chuyên gia lĩnh vực</p>
              <p className="font-medium">- OOP -</p>
              <div className="my-2 text-yellow-300">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
              </div>
              <p className="text-sm text-gray-400">1,234 đánh giá</p>
            </div>
          </div>
          <div className="p-5 text-center">
            <div className="px-5 py-10 duration-300 hover:shadow-xl group">
              <img
                src={CarouselItem2}
                alt="Teacher"
                className="object-cover w-20 h-20 mx-auto duration-300 rounded-full group-hover:shadow-2xl"
              />
              <h3 className="my-2 text-xl font-bold uppercase text-main">
                IcarDi MenBor
              </h3>
              <p>Chuyên gia ngôn ngữ</p>
              <p className="font-medium">- Javascript -</p>
              <div className="my-2 text-yellow-300">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
              </div>
              <p className="text-sm text-gray-400">1,908 đánh giá</p>
            </div>
          </div>
          <div className="p-5 text-center">
            <div className="px-5 py-10 duration-300 hover:shadow-xl group">
              <img
                src={CarouselItem4}
                alt="Teacher"
                className="object-cover w-20 h-20 mx-auto duration-300 rounded-full group-hover:shadow-2xl"
              />
              <h3 className="my-2 text-xl font-bold uppercase text-main">
                Chris Andersan
              </h3>
              <p>Chuyên gia lĩnh vực</p>
              <p className="font-medium">- Fullstack -</p>
              <div className="my-2 text-yellow-300">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
              </div>
              <p className="text-sm text-gray-400">1,037 đánh giá</p>
            </div>
          </div>
          <div className="p-5 text-center">
            <div className="px-5 py-10 duration-300 hover:shadow-xl group">
              <img
                src={CarouselItem3}
                alt="Teacher"
                className="object-cover w-20 h-20 mx-auto duration-300 rounded-full group-hover:shadow-2xl"
              />
              <h3 className="my-2 text-xl font-bold uppercase text-main">
                Bladin Slaham
              </h3>
              <p>Chuyên gia hệ thống</p>
              <p className="font-medium">- Security -</p>
              <div className="my-2 text-yellow-300">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
              </div>
              <p className="text-sm text-gray-400">1,104 đánh giá</p>
            </div>
          </div>
          <div className="p-5 text-center">
            <div className="px-5 py-10 duration-300 hover:shadow-xl group">
              <img
                src={CarouselItem5}
                alt="Teacher"
                className="object-cover w-20 h-20 mx-auto duration-300 rounded-full group-hover:shadow-2xl"
              />
              <h3 className="my-2 text-xl font-bold uppercase text-main">
                VueLo Gadi
              </h3>
              <p>Chuyên gia phân tích</p>
              <p className="font-medium">- BA -</p>
              <div className="my-2 text-yellow-300">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
              </div>
              <p className="text-sm text-gray-400">1,490 đánh giá</p>
            </div>
          </div>
          <div className="p-5 text-center">
            <div className="px-5 py-10 duration-300 hover:shadow-xl group">
              <img
                src={CarouselItem6}
                alt="Teacher"
                className="object-cover w-20 h-20 mx-auto duration-300 rounded-full group-hover:shadow-2xl"
              />
              <h3 className="my-2 text-xl font-bold uppercase text-main">
                Zack Karen
              </h3>
              <p>Chuyên gia lĩnh vực</p>
              <p className="font-medium">- AI & IoTs -</p>
              <div className="my-2 text-yellow-300">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
              </div>
              <p className="text-sm text-gray-400">997 đánh giá</p>
            </div>
          </div>
          <div className="p-5 text-center">
            <div className="px-5 py-10 duration-300 hover:shadow-xl group">
              <img
                src={CarouselItem7}
                alt="Teacher"
                className="object-cover w-20 h-20 mx-auto duration-300 rounded-full group-hover:shadow-2xl"
              />
              <h3 className="my-2 text-xl font-bold uppercase text-main">
                Savani Rose
              </h3>
              <p>Chuyên gia ngôn ngữ</p>
              <p className="font-medium">- PHP -</p>
              <div className="my-2 text-yellow-300">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
              </div>
              <p className="text-sm text-gray-400">892 đánh giá</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomeCarousel;
