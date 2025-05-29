import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import Might from "../../shared/Might";

export default function MightLike() {
  return (
    <div className="bg-[#f5f5f5] pt-[90px] pb-[70px]">
         <div className="container flex-col mx-auto px-[55px] flex justify-between font-[jost]">
        <div className="text-[45px] font-normal flex items-center flex-col">
            <h1>
                 You Might Like
            </h1>
            <p className="text-[16px] text-[#555555] mb-[40px]">Our products are designed for everyone, environmentally friendly.</p>
           
        </div>
        <div>
            <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        autoHeight={true}
        //   loop= {true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <Might />
        </SwiperSlide>
        <SwiperSlide>
          <Might />
        </SwiperSlide>
        <SwiperSlide>
          <Might />
        </SwiperSlide>
        <SwiperSlide>
          <Might />
        </SwiperSlide>{" "}
      </Swiper>
        </div>
      
    </div>
    </div>
   
  );
}
