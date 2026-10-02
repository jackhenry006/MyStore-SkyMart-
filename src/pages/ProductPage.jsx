import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");

      setProducts(res.data);
    } catch (error) {
      console.log("An Error occured during fetch ", error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchData);
    }, 700);

    return () => clearTimeout(timeout);
  }, [searchData]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
  }, [products, debouncedSearch]);

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-orange-500 text-sm font-semibold tracking-wide">
              OUR COLLECTION
            </p>

            <h1 className="text-4xl font-bold mt-2">Products</h1>

            <p className="text-gray-400 mt-2">
              Explore our latest products and find what you need.
            </p>
          </div>

          <div className="flex gap-2">
            <input
              value={searchData}
              onChange={(e) => {
                setSearchData(e.target.value);
              }}
              type="text"
              placeholder="Search products..."
              className="w-full md:w-72 px-7 py-3 bg-white text-black
              rounded-lg outline-none border-2 border-transparent
              focus:border-orange-500"
            />

            <button
              className="bg-orange-500 text-black px-5 py-3
              rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} products={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
