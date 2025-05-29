import React from 'react'

const AboutSection = () => {
  return (
    <div className='container  mx-auto relative px-[55px] py-[21px] pb-[100px] flex justify-between font-[jost] border-b-[1px] border-b-[#ebebeb]'>
        <div className='grid 2xl:grid-cols-12 grid-cols-1 w-full'>
        <div className="cards grid col-span-4 text-center">
             <div className="image flex items-center justify-center mb-[20px]">
            <img className='w-[42px] h-[42px]' src="https://umino-demo.myshopify.com/cdn/shop/files/icon_box1_d1.png?v=1682404972" alt="" />
        </div>
        <h1 className='text-[20px] mb-[20px] font-medium'>Free Shipping</h1>
        <p className='text-[#555555]'>Get complimentary ground shipping on every <br /> order. Don't love it? Send it back, on us.</p>
        </div>
         <div className="cards grid col-span-4 text-center">
             <div className="image flex items-center justify-center mb-[20px]">
            <img className='w-[42px] h-[42px]' src="	https://umino-demo.myshopify.com/cdn/shop/files/icon_box2_d1.png?v=1682404972" alt="" />
        </div>
        <h1 className='text-[20px] mb-[20px] font-medium'>Free Shipping</h1>
        <p className='text-[#555555]'>Free returns within 10 days, please make sure the <br /> items are in undamaged condition.</p>
        </div>
         <div className="cards grid col-span-4 text-center">
             <div className="image flex items-center justify-center mb-[20px]">
            <img className='w-[42px] h-[42px]' src="	https://umino-demo.myshopify.com/cdn/shop/files/icon_box3_d1.png?v=1682404972" alt="" />
        </div>
        <h1 className='text-[20px] mb-[20px] font-medium'>Free Shipping</h1>
        <p className='text-[#555555]'>We support customers 24/7, send questions we <br /> will solve for you immediately.</p>
        </div>
        
        
       
    </div> 
    </div>
   
  )
}

export default AboutSection