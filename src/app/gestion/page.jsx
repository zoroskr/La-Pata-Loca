"use client";

import React, { useState } from "react";
import { Label, TextInput, Button, FileInput } from "flowbite-react";
import { createProduct } from "@/app/services/products.api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Route = () => {
  // Estados para cada campo del formulario
  const [nombreProducto, setNombreProducto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState(null);
  const MySwal = withReactContent(Swal);

  // Manejador del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", nombreProducto);
    formData.append("description", descripcion);
    formData.append("price", precio);
    // Asegúrate de que 'imagen' no sea null antes de agregarlo
    if (imagen) {
      formData.append("image", imagen); // 'image' es el nombre del campo en el servidor
    }

    try {
      await createProduct(formData); // Modifica esta función según sea necesario
      MySwal.fire({
        icon: "success",
        title: <p>Producto creado con éxito</p>,
      }).then(() => {
        window.location.href = "/products";
      });
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: <p>Error al agregar producto: ${error}</p>,
      });
    }
  };

  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="nombreProducto" value="Nombre Producto" />
        </div>
        <TextInput
          id="nombreProducto"
          type="text"
          sizing="sm"
          value={nombreProducto}
          onChange={(e) => setNombreProducto(e.target.value)}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="descripcion" value="Descripcion" />
        </div>
        <TextInput
          id="descripcion"
          type="text"
          sizing="lg"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="precio" value="Precio" />
        </div>
        <TextInput
          id="precio"
          type="number"
          sizing="sm"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="file-upload" value="Upload file" />
        </div>
        <FileInput
          id="file-upload"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file && !file.type.startsWith("image/")) {
              MySwal.fire({
                icon: "error",
                title: <p>Por favor, elige un archivo de tipo imagen</p>,
              });
              e.target.value = ''; 
            } else {
              setImagen(file);
            }
          }}
          required
          accept="image/*"
        />
      </div>
      <Button type="submit">Agregar Producto</Button>
    </form>
  );
};

export default Route;
