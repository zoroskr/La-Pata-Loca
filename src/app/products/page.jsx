"use client";
import React, { useEffect, useState } from 'react'
import Product from '../components/ProductCard.jsx'
import { getProducts } from "@/app/services/products.api";

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
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <Product key={product._id} productId={product._id} title={product.name} description={product.description} price={product.price} imgAlt={product.image} imgSrc={product.image}   />
      ))}
    </div>
  )
}

export default Page