import React from "react";
import errorElement from "../../assets/error-1.png";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-50">
        <img className="w-[60%]" src={errorElement} alt="Error 404" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-center mt-2">Page Not Found!</h1>
        <p className="text-[16px] font-medium text-center mt-8 mb-10">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link
          to="/"
          className="shadow-2xl px-4 py-3 text-xl mx-auto border border-gray-300 hover:bg-[#FF5A3C] duration-150 hover:text-white"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
