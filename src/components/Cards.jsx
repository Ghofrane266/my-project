import React from "react";
import p18 from "../images/p18.webp";
function Cards() {
  return (
     <div className="flex justify-center mt-12 items-center flex-wrap">
        <div className="mt-9 w-[450px]  " style={{}}>
        <img src={p18} alt="img" loading="lazy" className="rounded-2xl h-[500px]" />
      </div>
      <div className=" w-[600px] mt-10  bg-gradient-to-l from-[#c8e2b1] to-[#f3f5f0] border-[#c8e2b1] text-center py-14   px-8  rounded-md">
        <div className="text-5xl font-semibold text-[#262626]" style={{fontFamily:"lobster"}}>about us</div>
        <div className="text-center mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem non recusandae optio, nobis porro distinctio quos cum sint expedita illum, doloribus beatae at consectetur deserunt, veritatis incidunt aspernatur dignissimos.
            </div>
        <p class="mt-4 text-gray-600">
          Our job is to fill your tummy with delicious food
          <div>with fast and free delivery</div>
        </p>
        <div className="flex space-x-4 items-center justify-center">
          <button className="bg-[#ee9922] text-white px-4 py-2 rounded-3xl mt-4">
            Order Now
          </button>
          <button className=" font-semibold border-black border-2 px-4 py-1 rounded-3xl mt-4">
            View Menu
          </button>
        </div>
      </div>

      
    </div>
  );
}

export default Cards;
