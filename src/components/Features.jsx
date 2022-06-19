import React from "react";
import Smart from "../assets/smart.png";
import Simple from "../assets/simple.png";
import Secure from "../assets/secure.png";
import BigLogo from "../assets/Icon.png";
import Icon from "../assets/Pattern icon.png";

const Features = () => {
  return (
    <>
      <div>
        <div className="lg:mt-[10%]  mt-[20%]">
          <img
            className="w-[12%] lg:translate-y-[200%] lg:w-[4%] lg:ml-[80%] translate-y-[110%] ml-10  "
            src={Icon}
            alt="icon"
          />

          <img
            className="w-[12%]  lg:w-[4%] lg:ml-[10%] translate-y-[600%] ml-[60%]  "
            src={Icon}
            alt="icon"
          />
          <img
            className="lg:w-[8%] mx-auto w-[20%] lg:mx-auto"
            src={BigLogo}
            alt="icon"
          />
          <h1 className="lg:ml-[35%] text-xl ml-[15%] lg:w-[40%] font-bold lg:text-4xl py-7">
            A smart, simple and secure
          </h1>
          <h1 className="lg:ml-[30%] text-xl ml-[15%] w-[80%] -translate-y-[50%]  lg:-translate-y-[40%] lg:w-[40%] font-bold lg:text-4xl py-7">
            banking experience with Bankfully
          </h1>
        </div>
      </div>

      {/* CARDS */}

      <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Smart}
              alt="single"
            />
            <h2 className="font-bold text-2xl py-8 text-center">Smart</h2>
            <p className="text-center lg:text-2xl text-xl ">
              Bank smartly with Bankfully as we have adobted modern tech to
              easily help users to make financially thoughtful actions
            </p>
          </div>

          <div className="w-full bg-gray-100 shadow-xl flex flex-col md:my-0 p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
              src={Simple}
              alt="single"
            />
            <h2 className="font-bold text-2xl py-8 text-center">Simple</h2>
            <p className="text-center text-xl lg:text-2xl">
              Simple and easy to use with our user-friendly interface to enhance
              a seamless experience to the user. Simplicity is surely our
              tradeoff for effective banking.
            </p>
          </div>

          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Secure}
              alt="single"
            />
            <h2 className="font-bold text-2xl py-8 text-center">Secure</h2>
            <p className="text-center text-xl lg:text-2xl">
              You do not have to worry about your money when you bank with
              Bankfully. Security is surely our hallmark
            </p>
          </div>
        </div>
      </div>

      {/* END OF  CARDS */}
    </>
  );
};

export default Features;
