import React from "react";
import p7 from "../images/p7.jpg";
function Cards() {
  return (
     <div className="flex justify-around mt-12 flex-wrap">
        <div className="mt-9 w-[600px]">
        <img src={p7} alt="img" loading="lazy" className="rounded-r-full" />
      </div>
      <div className="mt-10 w-[400px] ">
        <h1 className="text-4xl font-semibold text-[#4aa125]" style={{fontFamily:"lobster"}}>about us</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem non recusandae optio, nobis porro distinctio quos cum sint expedita illum, doloribus beatae at consectetur deserunt, veritatis incidunt aspernatur dignissimos.
            </h2>
        <p class="mt-4 text-gray-600">
          Our job is to fill your tummy with delicious food
          <div>with fast and free delivery</div>
        </p>
        <div className="flex space-x-4">
          <button className="bg-[#4aa125] text-white px-4 py-2 rounded-3xl mt-4">
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
