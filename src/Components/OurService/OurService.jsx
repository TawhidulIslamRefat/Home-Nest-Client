import React from "react";
import iamge1 from "../../assets/21.png";
import iamge2 from "../../assets/22.png";
import iamge3 from "../../assets/23.png";
import { FaLongArrowAltRight } from "react-icons/fa";
const OurService = () => {
  return (
    <div className="w-9/12 mx-auto">
      <div className="flex items-center justify-center">
        <span className=" bg-[#FFEBE7] text-center text-[#FF5A3C] text-xl p-1.5 rounded-2xl">
          Our Service
        </span>
      </div>
      <div>
        <h1 className="text-center font-bold text-4xl mt-5">Our Main Focus</h1>
        <div>
          <div className="grid grid-cols-3 items-center justify-center gap-20 my-15">
            <div className="card bg-base-100  border shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <figure className="px-10 pt-10">
                <img
                  src={iamge1}
                  alt="Home"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-2xl font-bold hover:text-[#FF5A3C]">Buy a home</h2>
                <p className="font-semibold my-2">
                  Find a home that fits your lifestyle and future. Explore verified properties in trusted neighborhoods and choose the one that feels just right for you.
                </p>
                <div className="card-actions">
                  <a href="/all-properties" className="flex items-center gap-2 justify-center text-gray-500 font-semibold text-[16px] hover:text-[#FF5A3C]">Find A Home <FaLongArrowAltRight /></a>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 border  shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <figure className="px-10 pt-10">
                <img
                  src={iamge2}
                  alt="Home"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-2xl font-bold hover:text-[#FF5A3C]">Rent a home</h2>
                <p className="font-semibold my-2">
                  Looking for a comfortable place to stay without long-term commitment? Browse clean, safe, and well-located rental homes that match your budget and needs.
                </p>
                <div className="card-actions">
                  <a href="/all-properties" className="flex items-center gap-2 justify-center text-gray-500 font-semibold text-[16px] hover:text-[#FF5A3C]">Find A Home <FaLongArrowAltRight /></a>
                </div>
              </div>
            </div>
            <div className="card bg-base-100  border shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <figure className="px-10 pt-10">
                <img
                  src={iamge3}
                  alt="Home"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-2xl font-bold hover:text-[#FF5A3C]">Sell a home</h2>
                <p className="font-semibold my-2">
                 Sell your property quickly and confidently. List your home with us and connect with genuine buyers who are actively looking for a place just like yours.
                </p>
                <div className="card-actions">
                  <a href="/all-properties" className="flex items-center gap-2 justify-center text-gray-500 font-semibold text-[16px] hover:text-[#FF5A3C]">Find A Home <FaLongArrowAltRight /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
