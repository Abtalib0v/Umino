import { ImgComparisonSlider } from '@img-comparison-slider/react';

// ...
export default function ComparisonImage() {
  return (
    <div className='container  mx-auto px-[55px] pt-[21px] pb-[100px]  flex justify-between font-[jost]'>
        <div className='relative'>
         <ImgComparisonSlider  className='rounded-[12px] overflow-hidden'>
         
      <img slot="first" className="object-cover w-full h-full"  src="https://umino-demo.myshopify.com/cdn/shop/files/before.jpg?v=1682657655" />

      <img slot="second" className="object-cover w-full h-full" src="https://umino-demo.myshopify.com/cdn/shop/files/after.jpg?v=1682657665" />
    </ImgComparisonSlider>
    <div className='absolute 2xl:flex hidden top-[30px] left-[30px] font-medium rounded-[50px] py-[8px] px-[30px] bg-white text-black'>Before</div>
    <div  className='absolute 2xl:flex hidden bottom-[30px] right-[30px] font-medium  rounded-[50px] py-[8px] px-[30px] bg-white text-black'>After</div>
    </div>
    </div>
    
   
  );
}