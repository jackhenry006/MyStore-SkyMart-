import { pre } from "framer-motion/m";
import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ products }) => {
  const { setProductCart } = useContext(MyStore);
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-orange-500 transition duration-300">
      {/* Product Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-6">
        <img
          src={products.image}
          alt={products.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <p className="text-orange-500 text-sm font-medium capitalize">
          {products.category}
        </p>

        {/* Title */}
        <h2 className="text-lg font-semibold text-black mt-2 line-clamp-2">
          {products.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-orange-500 font-semibold">
            ★ {products.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({products.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-5">
          <p className="text-2xl font-bold text-black">${products.price}</p>

          <button
            className="bg-orange-500 text-black px-4 py-2 rounded-lg
            font-semibold hover:bg-orange-600 transition"
            onClick={() => {
              return setProductCart((prev) => [...prev, products]);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
