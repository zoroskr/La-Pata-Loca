"use client";

import React, { useContext, useState } from "react";
import CartContext from "@/app/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import Map from "@/app/components/Map"
import { Label, Select } from "flowbite-react";

const Cart = () => {
  const [paymentMethod, setPaymentMethod] = useState("Efectivo 10% OFF");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const [sendMethod, setSendMethod] = useState("Retiro en sucursal");

  const handleSendMethodChange = (event) => {
    setSendMethod(event.target.value);
  };

  // Obtén la fecha y hora actual
  const currentDate = new Date();

  // Añade 24 horas para obtener la fecha de mañana
  currentDate.setDate(currentDate.getDate() + 1);

  // Formatea la fecha a YYYY-MM-DD
  const minDate = currentDate.toISOString().split("T")[0];

  const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext);

  const increaseQty = (cartItem) => {
    const newQty = cartItem?.quantity + 1;
    const item = { ...cartItem, quantity: newQty };

    addItemToCart(item);
  };

  const decreaseQty = (cartItem) => {
    const newQty = cartItem?.quantity - 1;
    const item = { ...cartItem, quantity: newQty };

    if (newQty <= 0) return;

    addItemToCart(item);
  };

  const amountWithoutTax = cart?.cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const discountPercentage = paymentMethod === "Efectivo 10% OFF" ? 0.1 : 0;
  const taxAmount = (amountWithoutTax * discountPercentage).toFixed(2);
  const totalAmount = (amountWithoutTax - taxAmount).toFixed(2);

  return (
    <>
      {/*
      <section className="py-5 sm:py-7 bg-blue-100">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-2">
            {cart?.cartItems?.length || 0} Item(s) in Cart
          </h2>
        </div>
      </section> */}

      {cart?.cartItems?.length > 0 && (
        <section className="py-10 ">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <main className="md:w-3/4">
                <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                  {cart?.cartItems?.map((cartItem) => (
                    <div key={cartItem.name}>
                      <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
                        <div className="w-full lg:w-2/5 xl:w-2/4">
                          <figure className="flex leading-5">
                            <div>
                              <div className="block w-20 h-8 rounded border border-gray-200 overflow-hidden">
                                <Image
                                  width={200}
                                  height={200}
                                  src={`/${cartItem.image}`}
                                  alt={cartItem.name}
                                />
                              </div>
                            </div>
                            <figcaption className="ml-3">
                              <p>
                                <a href="#" className="hover:text-blue-600">
                                  {cartItem.name}
                                </a>
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="w-24">
                          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                            <button
                              data-action="decrement"
                              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                              onClick={() => decreaseQty(cartItem)}
                            >
                              <span className="m-auto text-2xl font-thin">
                                −
                              </span>
                            </button>
                            <input
                              type="number"
                              className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-900  outline-none custom-input-number"
                              name="custom-input-number"
                              value={cartItem.quantity}
                              readOnly
                            ></input>
                            <button
                              data-action="increment"
                              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                              onClick={() => increaseQty(cartItem)}
                            >
                              <span className="m-auto text-2xl font-thin">
                                +
                              </span>
                            </button>
                          </div>
                        </div>
                        <div>
                          <div className="leading-5">
                            <p className="font-semibold not-italic">
                              ${cartItem.price * cartItem.quantity.toFixed(2)}
                            </p>
                            <small className="text-gray-400">
                              {" "}
                              ${cartItem.price} / per item{" "}
                            </small>
                          </div>
                        </div>
                        <div className="flex-auto">
                          <div className="float-right">
                            <a
                              className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                              onClick={() =>
                                deleteItemFromCart(cartItem?.product)
                              }
                            >
                              Remove
                            </a>
                          </div>
                        </div>
                      </div>

                      <hr className="my-4" />
                    </div>
                  ))}
                </article>
              </main>
              <aside className="md:w-1/4">
                <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                  <ul className="mb-5">
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>Precio antes del Descuento:</span>
                      <span>${amountWithoutTax}</span>
                    </li>
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>Total Units:</span>
                      <span className="text-green-500">
                        {cart?.cartItems?.reduce(
                          (acc, item) => acc + item.quantity,
                          0
                        )}{" "}
                        (Units)
                      </span>
                    </li>
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>Descuento:</span>
                      <span>${taxAmount}</span>
                    </li>
                    <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                      <span>Precio Total:</span>
                      <span>${totalAmount}</span>
                    </li>
                  </ul>

                  <div className="max-w-md py-3">
                    <div className="mb-2 block">
                      <Label htmlFor="calendar" value="Selecciona una fecha:" />
                    </div>
                    <input type="date" id="calendar" required min={minDate} />
                  </div>

                  <div className="max-w-md py-3">
                    <div className="mb-2 block">
                      <Label htmlFor="sendMethod" value="Metodos de envio:" />
                    </div>
                    <Select
                      id="sendMethod"
                      required
                      onChange={handleSendMethodChange}
                    >
                      <option>Retiro en Sucursal</option>
                      <option>Envio a domicilio</option>
                    </Select>
                  </div>
                  
                  <Map/>

                  <div className="max-w-md py-3">
                    <div className="mb-2 block">
                      <Label htmlFor="paymentMethod" value="Metodos de pago:" />
                    </div>
                    <Select
                      id="paymentMethod"
                      required
                      onChange={handlePaymentMethodChange}
                    >
                      <option>Efectivo 10% OFF</option>
                      <option>Debito</option>
                      <option>Credito</option>
                      <option>Mercadopago</option>
                    </Select>
                  </div>


                  <a className="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 cursor-pointer">
                    Continuar
                  </a>

                  <Link
                    href="/products"
                    className="px-4 py-3 inline-block text-lg w-full text-center font-medium text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                  >
                    Volver a la Tienda
                  </Link>
                </article>
              </aside>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
