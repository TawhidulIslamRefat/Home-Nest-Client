import React from 'react';
import Lottie from "lottie-react";
import loading from "../../../public/Geometric Shape Loading.json";

const Loading = () => {
    return (
        <div>
           <Lottie animationData={loading} loop={true} />
        </div>
    );
};

export default Loading;