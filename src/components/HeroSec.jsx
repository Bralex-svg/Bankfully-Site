import React from "react";
import Mock from "../assets/Mockups.png";
import QRCODE from "../assets/QR Code.png";
import PlayStore from "../assets/Mobile app badges.png";
import Typed from "react-typed";
function HeroSec() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-between ">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex -mt-10% lg:-mt-[25%] text-white flex-col justify-center md:items-start w-full px-2 py-8">
            <h1 className=" text-4xl mt-[4%] lg:-mt-[5%] lg:ml-[1%] mx-auto lg:w-[90%] w-[80%] lg:text-7xl font-bold">
              Bank{" "}
              <Typed
                strings={[" smartly", "creatively"]}
                typeSpeed={150}
                backSpeed={150}
                loop
              />{" "}
              with Bankfully
            </h1>
            <p className="p-3 text-xs ml-2 lg:text-sm lg:ml-[1%] mx-auto w-[80%] lg:w-[55%]">
              Bankfully gives you an awesome experience to send and receive
              money with ease
            </p>
            <img className="w-[30%] lg:block hidden" src={QRCODE} alt="code" />
            <h4 className="ml-[35%] w-[26%] -mt-[18%] hidden lg:block">
              Scan to download the Bankfully Mobile App
            </h4>
            <img
              className="lg:hidden ml-4 w-[80%] "
              src={PlayStore}
              alt="store"
            />
          </div>
          <div>
            <img
              className="w-[70%] mx-auto mt-[10%]   "
              src={Mock}
              alt="phone"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSec;
