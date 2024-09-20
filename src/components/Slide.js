import Image from "next/image";
import React from "react";

const Slide = ({ img, title, mainTitle, price }) => {
  return (
    <div className="outline-none border-none relative">
      <div className="absolute left-[30px] md:left[70px] max-w-[250px] sm:max-w-[350px] top-[65%] -translate-y-[40%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
        <h3 className="text-emerald-900 text font-extrabold text-[24px] lg:text-[28px]">{title}</h3>
        <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
          {mainTitle}
        </h2>

        <h3 className="text-[24px] text-gray-800 tex">
         Starting at{" "}
          <strong className="text-[20px] md:text-[24px] lg:text-[30px] text-red-800">
            {price}
          </strong>
          
        </h3>
        <div className="bg-emerald-500 text-white/60 text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">
          Shop Now
        </div>
      </div>

      <div className="grid justify-items-end">
      <Image
        className="w-[50%] h-[200px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
        src={img}
        alt="banner"
        width={1000}
        height={1000}
      />
      </div>
    </div>
  );
};

export default Slide;
