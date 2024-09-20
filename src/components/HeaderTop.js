import React from "react";

import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="border-b border-divide-sky-900 bg-lime-500 hidden sm:block">
      <div className="container py-10">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
              <BsFacebook />
            </div>
            <div className="header_top__icon_wrapper">
              <BsTwitter />
            </div>
            <div className="header_top__icon_wrapper">
              <BsInstagram />
            </div>
            <div className="header_top__icon_wrapper">
              <BsLinkedin />
            </div>
          </div>
          <div className="text-bg-blue-gray-900 text-[12px] text-font-extrabold text-stroke-violet-900 hover:border-purple-900 text-bg-green-500 cursor-cell">
            <strong>FREE SHIPPING & DELIVERY </strong>
            THIS WEEK ORDER OVER - $100
          </div>
          <div className="flex gap-4">
            <select
              name="currency"
              id="currency"
              className="text-gray-500 text-[12px] w-[70px]"
            >
              <option value="USD">USD</option> 
              <option value="PKR">PKR</option>
              <option value="SAR">SAR</option>
            </select>
            <select
              name="language"
              id="language"
              className="text-gray-500 text-[12px] w-[80px]"
            >
              <option value="Urdu">Urdu</option>
              <option value="Arabic">Arabic</option>
              <option value="English">English</option>
            </select>
            <select
              name="country"
              id="country"
              className="text-gray-500 text-[12px] w-[70px]"
            >
              <option value="USA">USA</option>
              <option value="PAK">PAK</option>
              <option value="KSA">KSA</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
