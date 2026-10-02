import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <span className="text-white">My</span>
          <span className="text-orange-500">Store</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            to="/main"
            className="text-white hover:text-orange-500 transition"
          >
            Home
          </Link>

          <Link
            to="/main/product"
            className="text-white hover:text-orange-500 transition"
          >
            Shop
          </Link>

          <Link
            to="/main/about"
            className="text-white hover:text-orange-500 transition"
          >
            About
          </Link>

          {/* Cart */}
          <Link
            to="/main/cart"
            className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg
            hover:bg-orange-500 hover:text-black transition"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
