"use client";

import React, { useState, useEffect } from 'react'
import { Label, TextInput, Button } from "flowbite-react";
import { getSpecificProduct, editProduct } from "@/app/services/products.api";
import { useParams } from 'next/navigation'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Route = () => {
  const { id } = useParams();
  const [nombreProducto, setNombreProducto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const MySwal = withReactContent(Swal)

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getSpecificProduct(id);
      if (data) {
        setNombreProducto(data.name);
        setDescripcion(data.description);
        setPrecio(data.price);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editProduct(id, { name: nombreProducto, description: descripcion, price: precio });
      MySwal.fire({
        icon: "success",
        title: <p>Producto editado con éxito</p>,
      }).then(() => {
        // Recargar la página después de cerrar el SweetAlert
        window.location.href = '/products';
      });
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: <p>Error al editar producto</p>,
      });
    }
  };

  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="nombreProducto" value="Nombre Producto" />
        </div>
        <TextInput id="nombreProducto" type="text" sizing="sm" value={nombreProducto} onChange={(e) => setNombreProducto(e.target.value)} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="descripcion" value="Descripcion" />
        </div>
        <TextInput id="descripcion" type="text" sizing="lg" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="precio" value="Precio" />
        </div>
        <TextInput id="precio" type="number" sizing="sm" value={precio} onChange={(e) => setPrecio(e.target.value)} />
      </div>
      <Button type="submit">Guardar Cambios</Button>
    </form>
  )
}

export default Route