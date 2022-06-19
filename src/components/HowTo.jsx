import React from "react";
import Rafik from "../assets/rafiki.png";
const HowTo = () => {
  return (
    <div className="flex mt-[5%] mx-auto  flex-col w-full  justify-between ">
      <div className="grid mx-auto md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex lg:mt-[10%] lg:-ml-[25%] mt-[80%] flex-col justify-center md:items-start  w-full ">
          <h1 className=" ml-[25%] lg:ml-[30%] text-3xl lg:text-6xl font-bold">
            Send Money
          </h1>
          <p className="lg:w-[50%] lg:px-7 mx-auto py-3 w-[70%] lg:py-3">
            Send and receive money with ease to your family, friends and loved
            ones at your finger tips
          </p>
        </div>
        <div>
          <img className="-mt-[120%] lg:-mt-[5%] " src={Rafik} alt="rafik" />
        </div>
      </div>
    </div>
  );
};

export default HowTo;
