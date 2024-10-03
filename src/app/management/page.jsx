import React from "react";

const page = () => {
  return (
    <div className="h-full w-full">
      <div className="rounded-3xl bg-[#1F1D2B] p-6">
        <h3 className="text-white font-semibold text-lg">
          Products Management
        </h3>


        <div className="h-full w-full">
            
        </div>

        <div className="flex flex-row items-center justify-start w-1/3 gap-2">
          <button className="p-[14px] w-full rounded-lg bg-[#EA7C69] shadow-lg shadow-[#EA7C694D] flex justify-center items-center">
            <span className="text-white text-[14px] font-semibold leading-[19.6px]">
              Guardar Cambios
            </span>
          </button>
          <button className="p-[14px] w-full rounded-lg border-2 border-[#EA7C69] bg-transparent flex justify-center items-center">
            <span className="text-[#EA7C69]  text-[14px] font-semibold leading-[19.6px]">
              Descartar Cambios
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
