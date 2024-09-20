"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCard = ({ img, title, desc, rating, price, index }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation after a slight delay when the page loads
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200); // Adjust delay if necessary
    return () => clearTimeout(timer);
  }, []);

  const generateRating = (rating) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
    }
  };

  // Determine if the card should animate from the left or right
  const animationClass = animate
    ? index % 2 === 0
      ? "translate-x-0 opacity-100"
      : "translate-x-0 opacity-100"
    : index % 2 === 0
    ? "-translate-x-full opacity-0"
    : "translate-x-full opacity-0";

  return (
    <div
      className={` relative px-4 border bg-cyan-900 border-gray-200 rounded-xl w-[270px] group transition-transform duration-700 ${animationClass} h-[500px]`}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <Image
          className="w-full max-h-[300px] object-cover transform transition-transform duration-300 group-hover:scale-110 py-2"
          src={img}
          width={500} // Ensure image width is consistent
          height={300} // Ensure image height is proportional
          alt={title}
        />
      </div>

      {/* Product Information */}
      <div className="space-y-2 py-2">
        <h2 className="text-orange-600 font-semibold uppercase">{title}</h2>
        <p className="text-white max-w-[200px] truncate font-semibold">{desc}</p>
        <div>{generateRating(rating)}</div>

        {/* Price and Discount */}
        <div className="font-bold flex gap-4">
          ${price}
          <del className="text-emerald-300 font-normal">
            ${parseInt(price) + 50}.00
          </del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
