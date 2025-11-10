import React from "react";
import image1 from "../../assets/debby-hudson-FmCSSSGge-0-unsplash-PhotoRoom 1.png";

const Consult = () => {
  return (
    <div className="bg-[#F2F6F7]">
      <div className="w-10/12 mx-auto pt-7 flex items-center">
        <div className="flex-1"> 
          <img src={image1} alt="Home" />
        </div>
        <div className="flex-1">
             <span className=" bg-[#FFEBE7] text-center text-[#FF5A3C] text-xl p-1 rounded-xl">
          Consult
        </span>
          <h1 className="text-5xl font-semibold mt-5">you can consult here</h1>
          <p className="text-xl font-medium text-gray-500 max-w-lg my-7">
            Our property advisors are always ready to guide you. Whether you are
            buying, renting, or selling — we provide clear, honest, and helpful
            assistance.
          </p>
          <div className="w-full">
            <form className="w-full flex relative">
            <input type="email" name="email" id="email" placeholder="Enter Your Email here" className="border px-5 py-3 border-gray-400 outline-none rounded-sm w-[55%]"/>
            <button type="submit" className="px-5 py-3 bg-[#FF5A3C] font-medium text-white  absolute top-[1px] left-86">Submit</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consult;
