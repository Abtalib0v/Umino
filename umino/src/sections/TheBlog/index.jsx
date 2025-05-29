import React from 'react'

const TheBlog = () => {
  return (
    <div>
      <div className='container flex-col  mx-auto relative px-[55px] mb-[80px] py-[21px] flex justify-between font-[jost]'>
        <div className="text-[45px] mt-[80px] font-normal flex items-center flex-col">
            <h1>
                 The Blog
            </h1>
            <p className="text-[16px] text-[#555555] mb-[40px]">Provide you with useful knowledge about fashion trend.</p>
           
        </div>
        <div className='grid 2xl:grid-cols-12 grid-cols-1 w-full gap-[30px]'>
            <div className="cards grid col-span-4 ">
                 <div className="image rounded-[10px] overflow-hidden">
          <img className=" transition-all duration-500 scale-100 hover:scale-110 w-full"
            src="	https://umino-demo.myshopify.com/cdn/shop/articles/furniture-blog-3.jpg?v=1682653199&width=533"
            alt=""
          />
        </div>
        <div className="text pt-[25px]">
            <h1 className='text-[#111111] text-[12px] font-medium uppercase mb-[5px]'>Furniture</h1>
            <h2 className='text-[#111111] text-[24px] font-medium mb-[5px]'>Restoring Old Furniture Pieces</h2>
            <p className='text-[#555555] text-[16px]  mb-[15px]'>These are the people who make your life asier. Large tiles were arranged on the counter top plate near the window of the living room, they...</p>
            <div className="about uppercase flex gap-[15px] font-medium text-[#555555] text-[12px]">
                <h1 >Apr 28 2023</h1> <span>Post by Unimo Demo</span>
            </div>
        </div>
            </div>
              <div className="cards grid col-span-4">
                 <div className="image rounded-[10px] overflow-hidden">
          <img className=" transition-all duration-500 scale-100 hover:scale-110 w-full"
            src="	https://umino-demo.myshopify.com/cdn/shop/articles/furniture-blog-2.jpg?v=1682653170&width=533"
            alt=""
          />
        </div>
        <div className="text text pt-[25px]">
            <h1 className='text-[#111111] text-[12px] font-medium uppercase mb-[5px]'>Furniture</h1>
            <h2 className='text-[#111111] text-[24px] font-medium mb-[5px]'>Restoring Old Furniture Pieces</h2>
            <p className='text-[#555555] text-[16px] mb-[15px]'>These are the people who make your life asier. Large tiles were arranged on the counter top plate near the window of the living room, they...</p>
            <div className="about uppercase flex gap-[15px] font-medium text-[#555555] text-[12px]">
                <h1 >Apr 28 2023</h1> <span >Post by Unimo Demo</span>
            </div>
        </div>
            </div>
              <div className="cards grid col-span-4">
                 <div className="image rounded-[10px] overflow-hidden">
          <img className=" transition-all duration-500 scale-100 hover:scale-110 w-full"
            src="	https://umino-demo.myshopify.com/cdn/shop/articles/furniture-blog-1.jpg?v=1682653128&width=533"
            alt=""
          />
        </div>
        <div className="text text pt-[25px]">
            <h1 className='text-[#111111] text-[12px] font-medium uppercase mb-[5px]'>Furniture</h1>
            <h2 className='text-[#111111] text-[24px] font-medium mb-[5px]'>Restoring Old Furniture Pieces</h2>
            <p className='text-[#555555] text-[16px]  mb-[15px]'>These are the people who make your life asier. Large tiles were arranged on the counter top plate near the window of the living room, they...</p>
            <div className="about uppercase flex gap-[15px] font-medium text-[#555555] text-[12px]">
                <h1 >Apr 28 2023</h1> <span>Post by Unimo Demo</span>
            </div>
        </div>
            </div>
           
        </div>
        
      </div>
    </div>
  )
}

export default TheBlog