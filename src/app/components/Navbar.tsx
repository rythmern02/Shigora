"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <nav className="p-8 flex bg-white  justify-between items-center fixed top-0 left-0 right-0 z-20 shadow-md ">
      <Link href="#" id="brand" className="flex gap-2 items-center flex-1">
        <Image
          className="object-cover max-w-28 max-h-16"
          src="/shigora.png"
          alt="Logo"
          width={108}
          height={108}
        />
      </Link>
      <div id="nav-menu" className="hidden lg:flex gap-12">
        <Link href="/" className="font-medium hover:text-primary">Home</Link>
        <Link href="/about-us" className="font-medium hover:text-primary">About Us</Link>
        <Link href="/buy" className="font-medium hover:text-primary">Buy Properties</Link>
        <Link href="sell" className="font-medium hover:text-primary">Sell Properties</Link>
        <Link href="gallery" className="font-medium hover:text-primary">Gallery</Link>
      </div>
      <div className="hidden lg:flex flex-1 justify-end">
        <button className="text-white text-lg sm:text-xl font-bold font-['Antonio'] capitalize bg-[#FF9500] hover:bg-orange-600 w-[140px] sm:w-[179px] h-[35px] sm:h-[40px] border-orange-400 rounded-md shadow-white shadow-sm">
        <Link href={'/contact'}>
            Contact us
            </Link>
        </button>
      </div>
      <button className="mr-3 lg:hidden" onClick={onToggleMenu}>
        {menuOpen ? <X className="text-3xl cursor-pointer text-gray-600" /> : <Menu className="text-3xl cursor-pointer text-gray-600" />}
      </button>
      {menuOpen && (
        <div id="nav-dialog" className="fixed z-10  inset-0 p-8 lg:hidden">
          <div id="nav-bar" className="flex justify-between bg-white">
            <Link href="#" id="brand" className="flex gap-2 items-center">
              <Image
                className="object-cover max-w-28 max-h-16"
                src="/shigora.png"
                alt="Logo"
                width={108}
                height={108}
              />
            </Link>
            <button className="p-2" onClick={onToggleMenu}>
              <X className="text-3xl cursor-pointer text-gray-600" />
            </button>
          </div>
          <div className="mt-6 bg-white">
            <Link href="/" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Home</Link>
            <Link href="/about-us" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">About Us</Link>
            <Link href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Buy Properties</Link>
            <Link href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Sell Properties</Link>
            <Link href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Gallery</Link>
          </div>
          <button className="text-white text-lg sm:text-xl font-bold font-['Antonio'] capitalize bg-[#FF9500] hover:bg-orange-600 w-[140px] sm:w-[179px] h-[35px] sm:h-[40px] border-orange-400 rounded-md shadow-white shadow-sm">
            <Link href={'#contact'}>
            Contact us
            </Link>
          </button>
          <div className="h-[1px] bg-gray-300 mt-4"></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
