import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-screen h-20 z-10 bg-gray-100 fixed drop-shadow-lg">
      {/* container */}
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="font-bold text-3xl mr-4 sm:text-4xl cursor-pointer">
            BRAND.
          </h1>
        </div>
        <ul className="hidden md:flex cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
          <li>Platforms</li>
          <li>Pricing</li>
        </ul>
        <div className="hidden md:flex pr-4 font-semibold">
          <button className="border-none bg-transparent text-black">
            Sign Up
          </button>
          <button className=" ml-3 px-4 py-2"> Sign In</button>
        </div>
        <div className=" md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      {/* container */}

      <ul className={!nav ? "hidden" : "absolute bg-gray-200 w-full md:hidden cursor-pointer"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        <div className="flex  flex-col m-5 font-semibold">
          <button className="border-2  bg-transparent text-black">
            Sign Up
          </button>
          <button className="mt-5 px-4 py-2">Sign In</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
