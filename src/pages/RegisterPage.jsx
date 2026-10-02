import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

const RegisterPage = () => {
  let navigate = useNavigate();
  const [registeredUser, setRegisteredUser] = useState([]);
  let {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let formSubmit = (data) => {
    let arr = [...registeredUser, data];
    localStorage.setItem("arr", JSON.stringify(arr));
    setRegisteredUser(arr);
    reset();
    navigate("/login");
    console.log(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-white rounded-xl p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black text-center">
            Create Account
          </h1>

          <p className="text-gray-500 text-center mt-2">
            Register your account
          </p>
        </div>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black mb-2"
            >
              Name
            </label>

            <input
              {...register("name", { required: "Name Is Required" })}
              id="name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
              outline-none text-black
              focus:border-orange-500
              focus:ring-1 focus:ring-orange-500"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black mb-2"
            >
              Email
            </label>

            <input
              {...register("email", { required: "Email is Required" })}
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
              outline-none text-black
              focus:border-orange-500
              focus:ring-1 focus:ring-orange-500"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black mb-2"
            >
              Password
            </label>

            <input
              {...register("password", { required: "Passwor is required" })}
              id="password"
              type="password"
              placeholder="Create a password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
              outline-none text-black
              focus:border-orange-500
              focus:ring-1 focus:ring-orange-500"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-black py-3 rounded-lg
            font-semibold hover:bg-orange-600 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?
          <Link
            to="/"
            className="text-orange-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
