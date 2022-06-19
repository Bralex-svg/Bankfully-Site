import React from "react";
import Rafik from "../assets/rafiki.png";
import Bro from "../assets/bro.png";
import Icon from "../assets/Pattern icon.png";
import Expenses from "../assets/amico.png";
const HowTo = () => {
  return (
    <>
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
          <div>
            <img
              className="w-[12%] lg:w-[8%] lg:ml-[80%] translate-y-[110%] ml-10  "
              src={Icon}
              alt="icon"
            />

            <img
              className="mt-[10%] lg:-ml-[5%] mx-auto w-[70%] lg:w-[70%] lg:mt-[10%] "
              src={Bro}
              alt="rafik"
            />

            <img
              className="w-[12%]  lg:w-[8%] lg:ml-[120%] translate-y-[110%] ml-[60%]  "
              src={Icon}
              alt="icon"
            />
            <img
              className="w-[12%] hidden lg:block lg:w-[8%] lg:ml-[1%] translate-y-[110%] ml-[60%]  "
              src={Icon}
              alt="icon"
            />
          </div>
          <div className="flex lg:mt-[90%] lg:-ml-[15%] mt-[80%] flex-col justify-center md:items-start  w-full ">
            <h1 className=" lg:w-[80%] mx-auto -mt-[80%] ml-[20%] lg:ml-[30%] text-3xl lg:text-6xl font-bold">
              Make payments
            </h1>
            <p className="lg:w-[60%] lg:ml-[30%] mx-auto py-3 w-[70%] lg:py-3">
              Pay all your bills at the comfort of your home, office or anywhere
              as it has been made easy for you with Bankfully
            </p>
          </div>
        </div>
      </div>

      <div className="flex mt-[5%] mx-auto  flex-col w-full  justify-between ">
        <div className="grid mx-auto md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex lg:mt-[10%] lg:-ml-[25%] mt-[80%] flex-col justify-center md:items-start  w-full ">
            <h1 className=" ml-[20%] lg:ml-[30%] text-3xl lg:text-6xl font-bold">
              Track expenses
            </h1>
            <p className="lg:w-[60%] lg:ml-[32%] mx-auto py-3 w-[70%] lg:py-3">
              Keep track of all your expenses, get insights on your spending
              habits and manage them effortlessly
            </p>
          </div>
          <div>
            <img
              className="-mt-[130%] mx-auto w-[75%] lg:ml-[30%] lg:w-[70%] lg:mt-[10%] "
              src={Expenses}
              alt="rafik"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowTo;
