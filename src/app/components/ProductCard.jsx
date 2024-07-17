"use client";

import { Card } from "flowbite-react";
import { useSession } from "next-auth/react";
import { deleteProduct } from "@/app/services/products.api";
import Swal from 'sweetalert2'
import CartContext from "@/app/context/CartContext";
import withReactContent from 'sweetalert2-react-content'
import { useContext } from "react";

export default function Component({
  productId,
  imgAlt,
  imgSrc,
  title,
  price,
  description,
}) {
  const { data: session } = useSession();
  const MySwal = withReactContent(Swal)
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
    <Card className="max-w-sm" imgAlt={imgAlt} imgSrc={imgSrc}>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <div className="flex items-center justify-between mt-4 gap-4">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${price}
        </span>
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
        )}
      </div>
    </Card>
  );
}
