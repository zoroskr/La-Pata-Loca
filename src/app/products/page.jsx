"use client";
import React, { useEffect, useState } from "react";
import Product from "../components/ProductCard.jsx";
import { getProducts } from "@/app/services/products.api";
import Carrito from "../components/Carrito.jsx";

const Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex flex-row justify-center items-center w-full h-screen overflow-hidden">
        <div className="flex flex-col justify-center items-start w-full h-full p-6">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-col justify-center items-start gap-1">
              <h3 className="text-white text-[28px] font-semibold leading-[39.2px]">
                La Pata Loca
              </h3>
              <p className="text-[#E0E6E9] text-[16px] font-normal leading-[22.4px]">
                Jueves, 5 de Septiembre 2024
              </p>
            </div>
            <input
              className="p-[14px] rounded-lg bg-[#2D303E] border-[1px] border-[#393C49]"
              placeholder="Buscar platos..."
            />
          </div>
          <div className="my-[24px] w-full flex flex-col justify-center items-center">
            <ul className="flex flex-row justify-start items-center gap-[32px] text-white text-[14px] font-semibold leading-[19.6px]  w-full">
              <li>Patas</li>
              <li>Picadas</li>
              <li>Hamburguesas</li>
              <li>Guarniciones</li>
              <li>Promos</li>
            </ul>
            <hr className="border-t border-[#393C49] w-full my-[24px]" />
          </div>

          <div className="flex flex-row items-center justify-between w-full mb-">
            <h3 className="text-white text-[20px] font-semibold leading-[28px] ">
              Nuestra carta
            </h3>
            <button className="bg-[#1F1D2B] border-[1px] border-[#393C49] rounded-lg p-[14px]">
              <span className="text-white text-[14px] font-medium leading-[18.2px]">
                Ordenar Por
              </span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-x-7 gap-y-16 h-full overflow-y-scroll py-20 ">
            {products.map((product) => (
              <Product
                key={product._id}
                productId={product._id}
                title={product.name}
                description={product.description}
                price={product.price}
                imgAlt={product.image}
                imgSrc={product.image}
              />
            ))}
          </div>
        </div>
        <Carrito />
      </div>
    </>
  );
};

export default Page;
