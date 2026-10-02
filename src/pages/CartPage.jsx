import React, { useContext } from "react";
import { Link } from "react-router";
import { MyStore } from "../context/MyContext";
import CartCard from "../components/CartCard";

const CartPage = () => {
  const { cartProduct } = useContext(MyStore);

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-orange-500 text-sm font-semibold tracking-wide">
          YOUR SHOPPING CART
        </p>

        <h1 className="text-4xl font-bold mt-2">Cart</h1>

        <p className="text-gray-400 mt-2">Review your items before checkout.</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        {cartProduct.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">Your cart is empty</h2>

            <p className="text-gray-400 mt-2">
              Add some products to your cart.
            </p>

            <Link
              to="/main/product"
              className="inline-block mt-6 bg-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartProduct.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default CartPage;
