import React from "react";
import DefaultCard from "../../shared/DefaultCard";

const TrendingGrid = () => {
  return (
    <div className="pt-[90px] pb-[70px]">
         <div className="container mx-auto px-[55px] py-[21px] flex justify-between font-[jost]">
        <div className="flex flex-col">
         <div className="text-[45px] font-normal flex items-center flex-col">
        <h1>Top Trending</h1>
        <p className="text-[16px] text-[#555555] mb-[40px]">
          Here’s some of our most popular products people are in love with.
        </p>
      </div>
      <div className="grid 2xl:grid-cols-12 grid-cols-1 gap-[30px]">
        <div className="2xl:grid col-span-6 hidden">
          {" "}
          <img
            className=" sticky top-0 rounded-[12px]"
            src="https://umino-demo.myshopify.com/cdn/shop/files/banner-furnitured.jpg?v=1682650550&width=720"
            alt=""
          />
        </div>
        <div className="grid col-span-6">
          <div className="">
            <DefaultCard />
          </div>
        </div>
      </div>   
        </div>
      
    </div>
    </div>
   
  );
};

export default TrendingGrid;
