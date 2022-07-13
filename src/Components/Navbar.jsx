import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
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
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black">
            {" "}
            Sign Up
          </button>
          <button className=" ml-3 px-4 py-2"> Sign In</button>
        </div>
        <div className=" md:hidden">
          <MenuIcon className="w-5" />
          {/* <XIcon className="w-5"/> */}
        </div>
      </div>
      {/* container */}

      <ul className="absolute bg-gray-200 w-full md:hidden">
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
      </ul>
    </div>
  );
};

export default Navbar;
