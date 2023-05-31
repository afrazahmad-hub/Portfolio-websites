import React from "react";
import { RiCloseFill } from "react-icons/ri";
import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`w-screen h-screen ${
        isOpen ? "fixed" : "hidden"
      } top-0 left-0 bg-gray-500 z-20 text-white grid place-items-center`}
    >
      <div
        className="absolute top-0 right-0 mr-[30px] mt-[10px] text-[24px]"
        onClick={toggleSidebar}
      >
        <RiCloseFill />
      </div>
      <div className="flex flex-col gap-4 text-[24]">
        <Link className="hover:text-[#ff4D41]" href="#">
          Home
        </Link>
        <Link className="hover:text-[#ff4D41]" href="/About">
          About
        </Link>
        <Link className="hover:text-[#ff4D41]" href="#">
          Portfolio
        </Link>
        <Link className="hover:text-[#ff4D41]" href="#">
          Blog
        </Link>
        <Link className="hover:text-[#ff4D41]" href="#">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
