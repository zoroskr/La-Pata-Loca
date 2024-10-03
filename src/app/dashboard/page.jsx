import React from 'react'

const page = () => {
  return (
    <div className="h-full w-full p-6 overflow-hidden">
        <div className="bg-[#1F1D2B] pt-6 px-6 rounded-3xl h-full overflow-y-scroll">
            <h3 className="text-lg font-semibold text-white mb-6">Pedidos</h3>
            <table className="w-full h-full ">
                <thead className="text-white text-sm font-semibold text-left border-b-[0.5px] border-gray-600">
                    <tr >
                        <th>Fecha</th>
                        <th>Cliente</th>
                        <th>Estado</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody className="text-gray-400 text-sm">
                    <tr>
                        <td>05/09/2024</td>
                        <td>John Doe</td>
                        <td>Pendiente</td>
                        <td>$ 1200</td>
                    </tr>
                    <tr>
                        <td>05/09/2024</td>
                        <td>John Doe</td>
                        <td>Pendiente</td>
                        <td>$ 1200</td>
                    </tr>
                    <tr>
                        <td>05/09/2024</td>
                        <td>John Doe</td>
                        <td>Pendiente</td>
                        <td>$ 1200</td>
                    </tr>
                    <tr>
                        <td>05/09/2024</td>
                        <td>John Doe</td>
                        <td>Pendiente</td>
                        <td>$ 1200</td>
                    </tr>
                    <tr>
                        <td>05/09/2024</td>
                        <td>John Doe</td>
                        <td>Pendiente</td>
                        <td>$ 1200</td>
                    </tr>
                </tbody>
            </table>
            </div>

    </div>
  )
}

export default page