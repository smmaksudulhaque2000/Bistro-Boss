import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle";

const FoodCategory = () => {
  return (
    <div>
        <SectionTitle subTitle={"---From 11:00am to 10:00pm---"} heading={"ORDER ONLINE"}></SectionTitle>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mb-24"
      >
        <SwiperSlide>
          <img className="w-full" src={slide1} alt="slide image" />
          <h3 className="text-4xl text-center uppercase -mt-16 text-white">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide2} alt="slide image" />
          <h3 className="text-4xl text-center uppercase -mt-16 text-white">Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide3} alt="slide image" />
          <h3 className="text-4xl text-center uppercase -mt-16 text-white">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide4} alt="slide image" />
          <h3 className="text-4xl text-center uppercase -mt-16 text-white">Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide5} alt="slide image" />
          <h3 className="text-4xl text-center uppercase -mt-16 text-white">Salad</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FoodCategory;
