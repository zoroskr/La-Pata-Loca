import React from "react";
import Image from "next/image";

const ItemCart = ({ title, price, qty, image = "/food-example.jpg" }) => {
  return (
      <div className="grid grid-cols-6 grid-rows-2 w-full gap-2 ">
        <div className="flex flex-row w-full justify-between col-span-5 row-span-1">
          <div className="flex flex-row justify-center items-center">
            <Image
              src={image}
              alt={image}
              width={40}
              height={40}
              className="rounded-full mr-[5px]"
            />
            <div className="flex flex-col justify-center items-start">
              <h3 className="text-white text-[14px] font-medium leading-[18.2px]">
                {title}
              </h3>
              <span className="text-[#ABBBC2] text-[12px] font-medium leading-[16.8px]">
                ${price}
              </span>
            </div>
          </div>
          <div className="p-[14px] bg-[#2D303E] border-[1px] border-[#393C49] w-12 h-12 flex justify-center items-center rounded-lg">
            <span className="text-white font-medium leading-[22.4px]">
              {qty}
            </span>
          </div>
        </div>

        <div className="w-full flex flex-row justify-start items-center col-span-5 row-span-2">
          <input
            type="text"
            placeholder="Nota para la orden..."
            className="bg-[#2D303E] border-[1px] border-[#393C49] w-full rounded-lg"
          />
          <button />
        </div>

        <div className="p-[14px] bg-transparent border-[1px] border-pink-400 w-12 h-12 flex justify-center items-center rounded-lg cursor-pointer col-span-1 row-span-2 justify-self-end ">
          <Image
            src={"/trash-icon.svg"}
            alt="trash icon"
            width={15}
            height={15}
          />
        </div>

        <div className="flex flex-col h-full justify-center items-center col-span-1 row-span-1 col-start-6 row-start-1 justify-self-end ">
          <h3 className="text-white text-16 font-medium leading-[22.4px]">
            ${price * qty}
          </h3>
        </div>
      </div>
  );
};

export default ItemCart;