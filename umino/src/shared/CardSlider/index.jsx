import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useQuery } from "@tanstack/react-query";
import Cards from "../Cards";
import { Navigation } from "swiper/modules";
import { GetApiService } from "../../services/api";

export default function CardSlider() {
  const { data } = useQuery({
    queryKey: ["default-card"],
    queryFn: () => GetApiService("default-cards?populate=*"),
  });
  console.log(data);
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      spaceBetween={20}
      style={{ width: "100%" }}
      slidesPerView={"auto"}
      autoHeight={true}
      // loop= {true}
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
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {" "}
      {data?.data.map((item, idx) => (
        <SwiperSlide key={idx}>
          <Cards
            image={`http://localhost:1337${item.image.url}`}
            hovimages={`http://localhost:1337${item.hovimages.url}`}
            text={item?.text}
            price={item?.price}
            disprice={item?.disprice}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
