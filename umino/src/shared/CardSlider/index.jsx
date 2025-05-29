import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useQuery } from "@tanstack/react-query";
import Cards from "../Cards";
import { Navigation } from "swiper/modules";

export default function CardSlider() {
  const { data } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      fetch("http://localhost:3000/product").then((res) => res.json()),
  });
  return (
    <Swiper
    navigation={true} modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={4}
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
      
        {data?.map((product) => (
          <SwiperSlide key={product.id}>
            <Cards
              image={product.image}
              hovimage={product.hovimage}
              text={product.text}
              price={product.price}
              disprice={product.disprice}
            />
          </SwiperSlide>
        ))}
      
    </Swiper>
  );
}
