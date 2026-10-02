import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-orange-500 text-sm font-semibold tracking-wider mb-4">
            ABOUT MYSTORE
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Shopping made
            <span className="text-orange-500"> simple.</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            MyStore is a simple and user-friendly online shopping platform
            designed to make discovering and purchasing products easier.
          </p>
        </div>
      </section>

      <section className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-5">Who We Are</h2>

              <p className="text-gray-400 leading-relaxed">
                MyStore brings a variety of products together in one place. Our
                goal is to provide a clean and simple shopping experience where
                users can easily browse products, view details, and add their
                favorite items to their cart.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-5">What We Offer</h2>

              <p className="text-gray-400 leading-relaxed">
                From everyday essentials to useful products, MyStore provides an
                easy way to explore different categories and find products that
                fit your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">Why MyStore?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition">
              <h3 className="text-xl font-semibold mb-3">Simple</h3>

              <p className="text-gray-400 leading-relaxed">
                A clean interface that makes browsing and shopping easy.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition">
              <h3 className="text-xl font-semibold mb-3">Reliable</h3>

              <p className="text-gray-400 leading-relaxed">
                Manage your account and shopping experience in one place.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition">
              <h3 className="text-xl font-semibold mb-3">Convenient</h3>

              <p className="text-gray-400 leading-relaxed">
                Find products quickly and add them to your cart with ease.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
