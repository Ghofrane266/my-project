import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../store/products";

function OneProduct() {
  const { id } = useParams();
  const product = useSelector((state) => state.products.product);
  console.log(product, "state");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);
  if (!product) return <p>Loading...</p>;

  return (
    <div className="px-2 py-20 w-full flex justify-center">
      
        <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
          <div className="lg:w-1/2">
            <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg">
              <img src={product.image} alt="product image" />
            </div>
          </div>
          <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
            <h2 className="text-3xl text-gray-800 font-bold">
              {product.name}
              {/* <span className="text-indigo-600">Choices</span> */}
            </h2>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <div className="mt-8">
              <a
                href="#"
                className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded"
              >
                {product.createdBy}
              </a>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default OneProduct;
