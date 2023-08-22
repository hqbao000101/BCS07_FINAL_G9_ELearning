import React from "react";
import "./Intro.scss";
import IntroBg from "../../assets/imgs/intro-img1.png";
import IntroImg3 from "../../assets/imgs/intro-img3.png";
import IntroImg4 from "../../assets/imgs/intro-img5.png";
import IntroImg5 from "../../assets/imgs/intro-img6.png";
import IntroImg6 from "../../assets/imgs/intro-img7.png";

const Intro = () => {
  return (
    <section id="about" className="mb-96">
      <div className="about_content">
        <div
          className="about_title text-center text-white py-24 min-h-[40vh] flex items-center justify-center bg-fixed bg-center"
          style={{
            backgroundImage: `url(${IntroBg})`,
          }}
        >
          <div>
            <p className="text-main">V LEARNING HỌC LÀ VUI</p>
            <h6>Cùng nhau khám phá nhưng điều mới mẻ</h6>
            <p>Học đi đôi với hành</p>
          </div>
        </div>
      </div>
      <div className="about_items mt-10">
        <div className="grid max-h-32 md:grid-cols-2">
          <div className="">
            <h6 className="text-main">V LEARNING ?</h6>
            <h5>Nơi hội tụ kiến thức</h5>
            <p>
              Đây là nền tảng giảng dạy và học tập trực tuyến được xây dựng để
              hỗ trợ phát triển giáo dục trong thời đại công nghiệp 4.0, được
              xây dựng dựa trên cơ sở quan sát toàn bộ các nhu cầu cần thiết của
              một lớp học offline. Từ đó đáp ứng và đảm bảo cung cấp các công cụ
              toàn diện, dễ sử dụng cho giáo viên và học sinh, giúp tạo nên một
              lớp học trực tuyến thú vị và hấp dẫn.
            </p>
          </div>
          <div className="img">
            <img
              src={IntroImg3}
              alt="img-3"
              className="object-contain max-h-96"
            />
          </div>
        </div>
      </div>
      <div className="about_items mt-80">
        <div className="grid max-h-32 md:grid-cols-2">
          <div className="img">
            <img
              src={IntroImg4}
              alt="img-3"
              className="object-contain max-h-96"
            />
          </div>
          <div className="">
            <h6 className="text-main">CHƯƠNG TRÌNH HỌC V LEARNING</h6>
            <h5>Hệ thống học hàng đầu</h5>
            <p>
              Giảng viên đều là các chuyên viên thiết kế đồ họa và giảng viên
              của các trường đại học danh tiếng trong thành phố: Đại học CNTT,
              KHTN, Bách Khoa,…Trang thiết bị phục vụ học tập đầy đủ, phòng học
              máy lạnh, màn hình LCD, máy cấu hình mạnh, mỗi học viên thực hành
              trên một máy riêng.100% các buổi học đều là thực hành trên máy
              tính. Đào tạo với tiêu chí: “học để làm được việc”, mang lại cho
              học viên những kiến thức hữu ích nhất, sát với thực tế nhất.
            </p>
          </div>
        </div>
      </div>
      <div className="about_items mt-80">
        <div className="grid max-h-32 md:grid-cols-2">
          <div className="">
            <h6 className="text-main">TẦM NHÌN V LEARNING</h6>
            <h5>Đào tạo lập trình chuyên sâu</h5>
            <p>
              Trở thành hệ thống đào tạo lập trình chuyên sâu theo nghề hàng đầu
              khu vực, cung cấp nhân lực có tay nghề cao, chuyên môn sâu cho sự
              phát triển công nghiệp phần mềm trong thời đại công nghệ số hiện
              nay, góp phần giúp sự phát triển của xã hội, đưa Việt Nam thành
              cường quốc về phát triển phần mềm.giúp người học phát triển cả tư
              duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn sàng
              đáp ứng mọi nhu cầu của doanh nghiệp.
            </p>
          </div>
          <div className="img">
            <img
              src={IntroImg5}
              alt="img-3"
              className="object-contain max-h-96"
            />
          </div>
        </div>
      </div>
      <div className="about_items mt-80">
        <div className="grid max-h-32 md:grid-cols-2">
          <div className="img">
            <img
              src={IntroImg6}
              alt="img-3"
              className="object-contain max-h-96"
            />
          </div>
          <div className="">
            <h6 className="text-main">SỨ MỆNH V LEARNING</h6>
            <h5>Phương pháp đào tạo hiện đại</h5>
            <p>
              Sử dụng các phương pháp đào tạo tiên tiến và hiện đại trên nền
              tảng công nghệ giáo dục, kết hợp phương pháp truyền thống, phương
              pháp trực tuyến, lớp học đảo ngược và học tập dựa trên dự án thực
              tế, phối hợp giữa đội ngũ training nhiều kinh nghiệm và yêu cầu từ
              các công ty, doanh nghiệp. Qua đó, V learning giúp người học phát
              triển cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt
              đời, sẵn sàng đáp ứng mọi nhu cầu của doanh nghiệp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
