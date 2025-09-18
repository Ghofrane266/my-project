import React from "react";
import p4 from "../images/p4.jpg";
function Header() {
  return (
    <div className="flex justify-around mt-10 flex-wrap">
      <div className="mt-10">
        <h1
          className="text-5xl font-bold leading-tight   "
          style={{ fontFamily: "lobster" }}
        >
          <div>What</div>
          Would You Like
          <div>
            To <span className="text-[#4aa125]"> Order</span> Today?
          </div>
        </h1>
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

      <div className="mt-9 w-[600px]">
        <img src={p4} alt="img" loading="lazy" className="rounded-full" />
      </div>
    </div>
  );
}

export default Header;
