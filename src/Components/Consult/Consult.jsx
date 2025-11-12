import React from "react";
import Swal from "sweetalert2";

const Consult = () => {

  const handleSubmit = (e) =>{
    e.preventDefault()
    Swal.fire({
      title:"Submitted",
      icon:"success",
      confirmButtonColor:"#FF5A3C"
      
    })
    e.target.reset();
  }
  return (
    <div className="bg-[#F2F6F7] dark:bg-[#23272b]">
      <div className="w-10/12 mx-auto pt-7 pb-4 flex items-center">
        <div className="flex-1"> 
          <img src='https://tunatheme.com/tf/html/quarter-preview/quarter/img/slider/21.png' alt="Home" className="h-100"/>
        </div>
        <div className="flex-1">
             <span className=" bg-[#FFEBE7] text-center text-[#FF5A3C] text-xl p-1 rounded-xl">
          Consult
        </span>
          <h1 className="text-5xl font-semibold mt-5">you can consult here</h1>
          <p className="text-xl font-medium text-gray-500 max-w-lg my-7 dark:text-gray-400">
            Our property advisors are always ready to guide you. Whether you are
            buying, renting, or selling — we provide clear, honest, and helpful
            assistance.
          </p>
          <div className="w-full">
            <form onSubmit={handleSubmit} className="w-full flex relative">
            <input type="email" name="email" id="email" placeholder="Enter Your Email here" className="border px-5 py-3 border-gray-400 outline-none rounded-sm w-[55%]" required/>
            <button type="submit" className="px-5 py-3 bg-[#FF5A3C] font-medium text-white  absolute top-[1px] left-86">Submit</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consult;
