import React from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import About from "./About";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="bg-white fixed top-0 w-[100%] ">
      <div className="container mx-auto flex justify-between item-center font-bold py-4 px-4">
        <div className="text-[24px] italic text-black text-2xl font-serif">
          Afraz Ahmad
        </div>
        <div className="hidden md:flex gap-6">
          <Link
            href="/"
            className="hover:text-[#ff4D41] bg-gray-200 hover:bg-gray-100 rounded-lg px-3 py-1"
          >
            Home
          </Link>
          <Link
            href={"/"}
            className="hover:text-[#ff4D41] bg-gray-200 hover:bg-gray-100 rounded-lg px-3 py-1"
          >
            About
          </Link>
          <Link
            href="/"
            className="hover:text-[#ff4D41] bg-gray-200 hover:bg-gray-100 rounded-lg px-3 py-1"
          >
            Portfolio
          </Link>
          <Link
            href="/"
            className="hover:text-[#ff4D41] bg-gray-200 hover:bg-gray-100 rounded-lg px-3 py-1"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="hover:text-[#ff4D41] bg-gray-200 hover:bg-gray-100 rounded-lg px-3 py-1"
          >
            Contact
          </Link>
        </div>
        <div
          className="md:hidden text-[24px] cursor-pointer"
          onClick={toggleSidebar}
        >
          <FiMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
