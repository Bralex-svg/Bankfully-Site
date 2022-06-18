import React from "react";
import Back from "../assets/background.png";
function Banner() {
  return (
    <div className="bg-[#1C6DE8] h-[800px] -mt-32 w-full">
      <img src={Back} className="h-[500px] lg:h-[500px]" alt="back" />
    </div>
  );
}

export default Banner;
