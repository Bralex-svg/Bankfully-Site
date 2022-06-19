import React from "react";
import Mobile from "../assets/phone.png";
import PlayStore from "../assets/Mobile app badges.png";
import Icon from "../assets/Pattern icon.png";

const Download = () => {
  return (
    <>
      <div className="w-full -mt-[20%] lg:mt-[15%]  flex flex-col justify-between ">
        <div className=" mx-auto rounded-[20px] lg:rounded-[60px] w-[90%] h-[100vh] lg:w-[80%] lg:h-[50vh] bg-gradient-to-b from-[#1C6DE8] to-[#091e39]"></div>
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex -mt-[200%] lg:-mt-[45%] text-white flex-col justify-center md:items-start w-full px-2 py-8">
            <h1 className=" text-3xl -mt-[15%] lg:-mt-[5%] lg:ml-[20%] lg:w-[90%] ml-[20%] w-[80%] lg:text-3xl font-bold">
              Download the Bankfully App today!
            </h1>
            <p className="p-3 text-sm ml-2 lg:text-xl lg:ml-[18%] mx-auto w-[90%] lg:w-[70%]">
              Bankfully gives you an awesome experience to manage your money
              with ease.
            </p>
            <img
              className="w-[70%] ml-[10%] lg:ml-[18%] lg:my-10 lg:w-[50%]"
              src={PlayStore}
              alt="code"
            />
            <img
              className="lg:block w-[12%] lg:-translate-y-[960%] lg:w-[8%] lg:ml-[50%] -translate-y-[830%] ml-[40%]  "
              src={Icon}
              alt="icon"
            />
            <img
              className="hidden lg:block  w-[12%] lg:-translate-y-[1250%] lg:w-[8%] lg:ml-[130%] translate-y-[110%] ml-[60%]  "
              src={Icon}
              alt="icon"
            />
            <img
              className="hidden lg:block  w-[12%] lg:-translate-y-[50%] lg:w-[8%] lg:ml-[160%] translate-y-[110%] ml-[60%]  "
              src={Icon}
              alt="icon"
            />
            <img
              className=" hidden lg:block  w-[12%] lg:-translate-y-[50%] lg:w-[8%] lg:ml-[40%] translate-y-[110%] ml-[60%]  "
              src={Icon}
              alt="icon"
            />
          </div>
          <div>
            <img
              className="  w-[50%] lg:-mt-[80%] lg:w-[40%] mx-auto -mt-[70%]   "
              src={Mobile}
              alt="phone"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
