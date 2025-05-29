// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='w-full relative h-[90vh] rounded-[20px] object-cover' src="https://umino-demo.myshopify.com/cdn/shop/files/slide-furinture-1.jpg?v=1682649036&width=2000" />
<div className="text absolute inset-0  text-center flex  flex-col items-center justify-center">
<h1 className='text-[14px] font-semibold text-white mb-[15px]'>BEAUTIFUL & ELEGANT</h1>
<h2 className='text-[90px] text-white mb-[15px]'>Bedroom Textiles</h2>
<p className='text-[16px] text-white'>Discount 50% On Products & Free Shipping.</p>
<button className='mt-[50px] py-[17px] px-[57px] bg-white rounded-[50px] text-[12px] font-[jost] font-semibold text-[#111111]'>EXPLORE NOW</button>
</div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[90vh] rounded-[20px] object-cover' src="https://umino-demo.myshopify.com/cdn/shop/files/slide-furinture-2.jpg?v=1682649036&width=2000" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
