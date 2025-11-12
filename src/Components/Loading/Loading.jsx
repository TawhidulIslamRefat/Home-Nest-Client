import React from 'react';
import Lottie from "lottie-react";
import loading from "../../../public/Sandy Loading.json";

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen gap-15 sm:gap-25 '>
           <div className='w-[200px]'>
             <Lottie animationData={loading} loop={true} />
           </div>
        </div>
    );
};

export default Loading;