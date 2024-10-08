import { Barlow } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/NavSidebar";
import { Providers } from "./Providers";
import { CartProvider } from "./context/CartContext";

const barlow = Barlow({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-row bg-[#252836] ${barlow.className}`}>
        <Providers>
          <CartProvider>
            <div className="h-lvh">
              <Sidebar />
            </div>
            <div className="flex justify-center items-center w-full">
              {children}
            </div>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}