import React from "react";

const Might = () => {
  return (
    <div>
      <div className="relative inline-block ">
        <div className="image rounded-[10px] overflow-hidden">
          <img className=" transition-all duration-500 scale-100 hover:scale-110"
            src="https://umino-demo.myshopify.com/cdn/shop/files/furniture-cate-1.jpg?v=1682650030"
            alt=""
          />
        </div>
        <div className="absolute bottom-[30px] mx-auto w-full flex justify-center">
                <button className="font-medium  w-[180px] rounded-[50px] p-[12px] bg-white text-black">
                Sofa
              </button>
            </div>
      </div>
    </div>
  );
};

export default Might;
