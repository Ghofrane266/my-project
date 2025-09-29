import React, { use, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products";
import { useNavigate } from "react-router-dom";
//  import { Card, Typography, Button } from "@material-tailwind/react";
function Menu() {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(products, "state");
  return (
    <>
      <Navbar />
      {/* flex justify-around  space-y-6  flex-wrap */}
      {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto */}
      <div className="flex justify-evenly  gap-6  flex-wrap  ">
        {products.map((product) => (
          <div className="max-w-[720px] ">
            {/* <div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
            <a 
                target="_blank" 
                href="https://www.material-tailwind.com/docs/html/card" 
                className="block w-full px-4 py-2 text-center text-slate-700 transition-all"
            >
                More components on <b>Material Tailwind</b>.
            </a>
        </div> */}

            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-80">
                <img
                  src={product.image}
                  alt="card-image"
                  className=" w-full h-full object-fill object-center"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {product.name}
                  </p>
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    ${product.price}
                  </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                  {product.description}
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  type="button"
                  onClick={() => navigate(`/OneProduct/${product.id}`)}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
