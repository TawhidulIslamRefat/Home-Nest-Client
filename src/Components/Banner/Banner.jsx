import React from "react";
import Lottie from "lottie-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import houseAnimation from "../../../public/Home.json";
import houseAnimation1 from "../../../public/City Building Construction.json";
import houseAnimation2 from "../../../public/City Skyline Building.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="relative mt-6 mx-7">
      <div className="swiper-button-prev !text-black font-bold border p-2 border-gray-300 hover:bg-[#FF5A3C] hover:!text-white hover:rounded-lg hover:bg-[#FF5A3C]">
        <FaArrowLeft />
      </div>
      <div className="swiper-button-next !text-black !font-bold border p-2 border-gray-300 hover:bg-[#FF5A3C] hover:!text-white hover:rounded-lg">
        <FaArrowRight />
      </div>
      <div className="w-11/12 mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay:true
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="rounded-xl"
        >

          <SwiperSlide>
            <div className="flex items-center justify-around">
              <div>
                <p className="flex items-center gap-1 text-xl font-semibold">
                  <span className="text-[#FF5A3C] text-2xl">
                    <AiFillHome />
                  </span>{" "}
                  Real <span className="text-[#FF5A3C]"> Estate{" "}</span>
                </p>
                <h1 className="font-bold text-7xl mt-2 mb-5 leading-20">
                  Find Your Dream <br /> House <span className="text-[#FF5A3C]">By Us</span>
                </h1>
                <p className="text-xl font-medium border-l border-gray-400 pl-4 text-gray-700 mb-5 leading-9 dark:text-gray-300">
                  Browse thousands of trusted properties, compare prices, <br />{" "}
                  and choose the one that fits your lifestyle.
                </p>
                <Link to='/all-properties' className="bg-[#FF5A3C] text-white text-[18px] font-normal py-3 px-5 rounded-sm">
                  FIND NOW
                </Link>
              </div>
              <div className="w-[1000px]">
                <Lottie animationData={houseAnimation} loop={true} />
              </div>
            </div>
            
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-row-reverse items-center justify-around">
              <div className="text-right mr-5">
                <p className="flex  items-center justify-end mr-3 gap-1 text-xl font-semibold text-right">
                  <span className="text-[#FF5A3C] text-2xl">
                    <AiFillHome />
                  </span>{" "}
                  Real
                  <span className="text-[#FF5A3C]"> Estate{" "}</span>
                </p>
                <h1 className="font-bold text-7xl mt-2 mb-5 leading-20">
                  Step into a world where <br /> comfort <span className="text-[#FF5A3C]">meets style</span>
                </h1>
                <p className="text-xl font-medium border-r border-gray-400 pr-4 text-gray-700 mb-5 leading-9 dark:text-gray-300">
                  Explore premium homes built for better living — modern spaces,{" "}
                  <br /> smart layouts, and the warmth you deserve
                </p>
                <Link to='/all-properties' className="bg-[#FF5A3C] text-white text-[18px] font-normal py-3 px-5 rounded-sm ">
                  Explore
                </Link>
                <Link to='/all-properties' className="border-[#FF5A3C] border text-[18px] font-normal py-2.5 px-5 rounded-sm mr-10 ml-6 hover:bg-orange-600 transition transform scale-110 duration-300">
                  Buy Now
                </Link>
              </div>
              <div className="w-[700px]">
                <Lottie animationData={houseAnimation1} loop={true} />
              </div>
            </div>
          </SwiperSlide>
         
          <SwiperSlide>
            <div className="flex items-center justify-around">
              <div className="ml-10">
                <p className="flex  items-center  gap-1 text-xl font-semibold text-right">
                  <span className="text-[#FF5A3C] text-2xl">
                    <AiFillHome />
                  </span>{" "}
                  Real <span className="text-[#FF5A3C]">Estate{" "}</span>
                </p>
                <h1 className="font-bold text-7xl mt-2 mb-5 leading-20">
                  Safe, secure, and verified <span className="text-[#FF5A3C]">properties.</span>
                </h1>
                <p className="text-xl font-medium border-l border-gray-400 pl-4 text-gray-700 mb-5 leading-9 dark:text-gray-300">
                  Create a warm space where your family grows, smiles, and stays{" "}
                  <br />
                  close. Let’s find that place together.
                </p>
                <Link to='/all-properties' className="bg-[#FF5A3C] text-white text-[18px] font-normal py-3 px-5 rounded-sm ">
                  FIND NOW
                </Link>
                <Link to='/all-properties' className="border-[#FF5A3C] border text-[18px] font-normal py-2.5 px-5 rounded-sm mr-10 ml-6 hover:fill-orange-600 hover:bg-orange-600 transition transform scale-110 duration-300">
                  RENT NOW
                </Link>
              </div>
              <div className="w-[1000px]">
                <Lottie animationData={houseAnimation2} loop={true} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
