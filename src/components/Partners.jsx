import React from "react";
import Partner from "../assets/partners logo.png";
import Icon from "../assets/Pattern icon.png";
const Partners = () => {
  return (
    <div className=" lg:mt-[1%]   mt-[40%]">
      <h1 className=" lg:text-5xl lg:ml-[30%] text-xl font-bold text-gray-800 ml-[10%]">
        Our trusted payment partners
      </h1>
      <img
        className="w-[80%] lg:mt-10 mt-4 lg:w-[40%] mx-auto"
        src={Partner}
        alt="logos"
      />
      <img
        className="lg:ml-[30%] ml-[60%] mt-10 w-[12%] lg:ml-[60%] lg:w-[3%] mt-[5%]  "
        src={Icon}
        alt="icon"
      />
    </div>
  );
};

export default Partners;
