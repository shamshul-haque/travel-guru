import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import coxbazar from "../../assets/images/coxsbazar.png";
import sreemangal from "../../assets/images/sreemangal.jpg";
import sundarban from "../../assets/images/sundarban.jpg";

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[Navigation]}
        loop
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${coxbazar})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="h-screen"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${sreemangal})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="h-screen"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${sundarban})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="h-screen"
          ></div>
        </SwiperSlide>
        <div className="flex justify-center gap-2 cursor-pointer">
          <div className="button-prev-slide bg-red-500 rounded-full p-3">
            <AiOutlineLeft />
          </div>
          <div className="button-next-slide bg-red-500 rounded-full p-3">
            <AiOutlineRight />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
