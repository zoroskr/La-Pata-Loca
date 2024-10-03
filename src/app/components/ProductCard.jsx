"use client";

import { useSession } from "next-auth/react";
import { deleteProduct } from "@/app/services/products.api";
import Swal from "sweetalert2";
import CartContext from "@/app/context/CartContext";
import withReactContent from "sweetalert2-react-content";
import { useContext } from "react";
import Image from "next/image";

export default function Component({
  productId,
  imgAlt,
  imgSrc,
  title,
  price,
  description,
  unitsAvailables = "20 Bowls available",
  image = "/food-example.jpg",
}) {
  const { data: session } = useSession();
  const MySwal = withReactContent(Swal);
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    addItemToCart({
      product: productId,
      name: title,
      price: price,
      image: imgSrc,
    });
  };

  const handleDelete = async () => {
    const isDeleted = await deleteProduct(productId);
    if (isDeleted) {
      MySwal.fire({
        icon: "success",
        title: <p>Producto eliminado con éxito</p>,
      }).then(() => {
        // Recargar la página después de cerrar el SweetAlert
        window.location.reload();
      });
    } else {
      MySwal.fire({
        icon: "error",
        title: <p>Error al eliminar producto</p>,
      });
    }
  };

  return (
    <div className="bg-transparent w-[192px] h-[260px] flex justify-center items-center "> 
    <div className="max-w-sm bg-[#1F1D2B] w-[192px] h-[226px] rounded-xl relative">
      <Image
        src={image}
        alt={image}
        width={150}
        height={135}
        className="rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      <div className="flex flex-col justify-end items-center h-full w-full p-6 text-center">

        <h5 className="text-white text-[14px] font-medium leading-[18.2px] mb-2">
          {title}
        </h5>

        <span className="text-white text-center font-normal leading-[19.6px] mb-1">
          ${price}
        </span>

        <p className="text-[14px] text-[#ABBBC2] text-center font-normal leading-[19.6px]">
          {unitsAvailables}
        </p>
      </div>  
      </div>
      {/*}
        <div className="flex items-center justify-between mt-4 gap-4"></div>

        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          onClick={addToCartHandler}
        >
          Agregar al Carrito
        </a>

        {session?.user?.role == "admin" && (
          <div className="flex flex-col justify-center items-center overflow-hidden gap-3">
            <button
              onClick={handleDelete}
              className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Eliminar Publicación
            </button>
            <a
              href={`/editarpublicacion/${productId}`}
              className="rounded-lg bg-yellow-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
            >
              Editar Publicación
            </a>
          </div>
        )}*/} 
      </div>  
  );
}
