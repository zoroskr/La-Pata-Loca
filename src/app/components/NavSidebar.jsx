'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavSidebar = () => {
  const currentPath = usePathname();

  return (
    <div className="h-full w-full bg-[#1F1D2B] p-8 flex flex-col justify-start items-center gap-12 select-none rounded-r-2xl">
      <Link href="/gestion" className="p-2 rounded hover:bg-[#2D303E]">
        <Image
          src="/sidebar/home.svg"
          width={20}
          height={20}
          alt="home icon"
          className={currentPath === '/home' ? 'filter ' : ''}
        />
      </Link>
      <Link href="/products" className="p-2 rounded hover:bg-[#2D303E]">
        <Image
          src="/sidebar/home-client.svg"
          width={20}
          height={20}
          alt="home client icon"
          className={currentPath === '/products' ? 'filter brightness-150' : ''}
        />
      </Link>
      <Link href="/dashboard" className="p-2 rounded hover:bg-[#2D303E]">
        <Image
          src="/sidebar/dashboard.svg"
          width={20}
          height={20}
          alt="dashboard icon"
          className={currentPath === '/dashboard' ? 'filter brightness-150' : ''}
        />
      </Link>
      <Link href="/logout" className="p-2 rounded hover:bg-[#2D303E]">
        <Image
          src="/sidebar/logout.svg"
          width={20}
          height={20}
          alt="logout icon"
          className={currentPath === '/logout' ? 'filter brightness-150' : ''}
        />
      </Link>
    </div>
  );
};

export default NavSidebar;