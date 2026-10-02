import React from "react";

const CartCard = ({ item }) => {
  return (
    <div className="bg-white text-black rounded-xl overflow-hidden border border-gray-200 hover:border-orange-500 transition">
      {/* Product Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-6">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <p className="text-sm text-orange-500 font-medium capitalize">
          {item.category}
        </p>

        {/* Title */}
        <h2 className="text-lg font-semibold mt-2 line-clamp-2">
          {item.title}
        </h2>

        {/* Price */}
        <p className="text-xl font-bold mt-4">${item.price}</p>
      </div>
    </div>
  );
};

export default CartCard;
