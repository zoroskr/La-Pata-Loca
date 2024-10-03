import React from "react";
import ItemCart from "./ItemCart";

const Carrito = () => {
  return (
    <div className="flex flex-col justify-between items-start h-full w-2/5 p-[24px] bg-[#1F1D2B] rounded-l-lg ">
      <h3 className="text-white text-[20px] font-semibold leading-[28px] mb-6">
        Numero de Orden: #23131
      </h3>
      <div className="flex flex-row gap-2 justify-start items-center w-full mb-6">
        <button className="py-[7px] px-[12px] bg-transparent border-[1px] rounded-lg border-[#393C49] flex justify-center items-center ">
          <span className="text-[#EA7C69] text-[14px] font-semibold leading-[19.6px]">
            Domicilio
          </span>
        </button>
        <button className="py-[7px] px-[12px] bg-transparent border-[1px] rounded-lg border-[#393C49] flex justify-center items-center ">
          <span className="text-[#EA7C69] text-[14px] font-semibold leading-[19.6px]">
            Retiro
          </span>
        </button>
      </div>
      <div className="grid grid-cols-6 text-white text-[16px] font-semibold leading-[22.4px] gap-2 w-full border-gray-600 mb-6">
        <h5 className="col-start-1 col-span-3 self-center">Producto</h5>
        <h5 className="col-start-5 col-span-1 self-center justify-self-end">
          Qty
        </h5>
        <h5 className="col-start-6 col-span-2 self-center justify-self-end">
          Precio
        </h5>
      </div>
      <div className="h-full w-full overflow-y-scroll flex flex-col justify-start items-start border-gray-600 border-y-2 gap-6 py-2">
        <ItemCart title={"Pata riquisima"} price={"1200"} qty={1} />
        <ItemCart title={"Pata riquisima"} price={"1200"} qty={1} />
        <ItemCart title={"Pata riquisima"} price={"120640"} qty={1} />
        <ItemCart title={"Pata riquisima"} price={"1200"} qty={1} />

        <ItemCart title={"Pata riquisima"} price={"1200"} qty={1} />
        <ItemCart title={"Pata riquisima"} price={"1200"} qty={1} />
        <ItemCart title={"Pata riquisima"} price={"12050"} qty={1} />
        <ItemCart title={"Pata riquisima"} price={"132200"} qty={1} />
        <ItemCart title={"Pata riquisima"} price={"1200"} qty={1} />

        <ItemCart title={"Pata riquisima"} price={"1200"} qty={1} />

        <ItemCart title={"Pata riquisima"} price={"1500"} qty={1} />
        <ItemCart title={"Pata riquisima"} price={"1100"} qty={1} />
      </div>

      <div className="flex flex-col justify-center items-center gap-[16px] mt-[24px] mb-[42px] w-full ">
        <div className="flex flex-row w-full justify-between items-center">
          <h5 className="text-[#ABBBC2] text-[14px] font-normal leading-[19.6px]">
            Descuento
          </h5>
          <span className="text-white text-[16px] font-medium leading-[22.4px]">
            $0
          </span>
        </div>
        <div className="flex flex-row w-full justify-between items-center">
          <h5 className="text-[#ABBBC2] text-[14px] font-normal leading-[19.6px]">
            Total
          </h5>
          <span className="text-white text-[16px] font-medium leading-[22.4px]">
            $0
          </span>
        </div>
      </div>

      <button className="p-[14px] w-full rounded-lg bg-[#EA7C69] shadow-lg shadow-[#EA7C694D] flex justify-center items-center">
        <span className="text-white text-[14px] font-semibold leading-[19.6px]">
          Continuar con el pago
        </span>
      </button>
    </div>
  );
};

export default Carrito;
