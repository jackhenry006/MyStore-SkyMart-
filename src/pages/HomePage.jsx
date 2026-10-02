import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <section className="max-w-6xl mx-auto px-6 py-4">
          <div className="max-w-3xl">
            <p className="text-orange-500 font-semibold mb-4">
              WELCOME TO MYSTORE
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Everything you need,
              <span className="text-orange-500"> in one place.</span>
            </h2>

            <p className="text-gray-400 text-lg mt-6 max-w-xl leading-relaxed">
              Discover quality products at great prices. Shop your favorite
              products with a simple and smooth experience.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/main/product"
                className="bg-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                Shop Now
              </Link>

              <Link
                to="/main/about"
                className="border border-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition">
                <h3 className="text-xl font-semibold mb-3">Quality Products</h3>

                <p className="text-gray-400">
                  Find products selected with quality and value in mind.
                </p>
              </div>

              <div className="border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition">
                <h3 className="text-xl font-semibold mb-3">Easy Shopping</h3>

                <p className="text-gray-400">
                  Browse, search and add your favorite products to your cart.
                </p>
              </div>

              <div className="border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition">
                <h3 className="text-xl font-semibold mb-3">Secure Account</h3>

                <p className="text-gray-400">
                  Manage your account and keep your shopping experience simple.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
