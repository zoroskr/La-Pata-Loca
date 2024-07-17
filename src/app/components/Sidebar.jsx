"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiLogout, HiUser } from "react-icons/hi";
import { signIn, useSession, signOut } from "next-auth/react";

export default function Component(){
  const { data: session } = useSession();
  console.log(session)
  console.log(session?.user?.role)
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {session?
            <Sidebar.Item href="#" icon={HiLogout} onClick={() => signOut()}>
            Cerrar Sesión
          </Sidebar.Item>:
          <Sidebar.Item onClick={() => signIn()} href="#" icon={HiArrowSmRight}>
            Iniciar Sesión
          </Sidebar.Item>
          }

          {session?.user?.role == "admin" ? (
          <>      
          <Sidebar.Item href="/gestion" icon={HiInbox}>
            Agregar Producto
          </Sidebar.Item>
          </>):null}
          <Sidebar.Item href="/products" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
