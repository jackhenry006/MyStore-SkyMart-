import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();

  const [loggedInUser, setLoggedInUser] = useState(null);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onUser = (data) => {
    const savedUser = localStorage.getItem("arr");

    if (!savedUser) {
      toast.info("Register First");
      return;
    }

    const registeredUser = JSON.parse(savedUser);

    const user = registeredUser.find(
      (val) => val.email === data.email && val.password === data.password,
    );

    if (user) {
      toast.success("User LoggedIn");

      setLoggedInUser(user);

      localStorage.setItem("loggedInUser", JSON.stringify(user));

      navigate("/main", { replace: true });
    } else {
      toast.error("Invalid User or Password");
    }

    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-white rounded-xl p-8">
        <h1 className="text-3xl font-bold text-black text-center">Login</h1>

        <p className="text-gray-500 text-center mt-2 mb-8">
          Login to your account
        </p>

        <form onSubmit={handleSubmit(onUser)} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black mb-2"
            >
              Email
            </label>

            <input
              {...register("email", {
                required: "The Email Is Required",
              })}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
              outline-none text-black
              focus:border-orange-500
              focus:ring-1 focus:ring-orange-500"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black mb-2"
            >
              Password
            </label>

            <input
              {...register("password", {
                required: "The Password Is Required",
              })}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
              outline-none text-black
              focus:border-orange-500
              focus:ring-1 focus:ring-orange-500"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-black py-3 rounded-lg
            font-semibold hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-500">
          Don't have an account?
          <Link
            to="/register"
            className="text-orange-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
