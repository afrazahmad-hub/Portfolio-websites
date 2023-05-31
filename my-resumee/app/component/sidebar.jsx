import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Envelope, Twitter, Linkedin, Medium } from "./icons/";

const Sidebar = ({ data }) => {
  const { name, role, education, contactLinks } = data;
  return (
    <div className="bg-black flex flex-col  content-between w-full h-auto md:w-1/3 ">
      <div className=" text-white flex flex-col p-10 items-center">
        <Image
          priority
          src={"/afraz.jpeg"}
          alt="Afraz Ahmad"
          width={300}
          height={300}
          className="rounded-full h-full mb-6"
        />
        <h1 className="mb-2">{name}</h1>
        <h2 className="mb-8 text-yellow italic">{role}</h2>
        <div className="flex flex-col gap-4 items-center md:items-start">
          <Link
            href={"https://www.piaic.org/block-chain"}
            className="mb-2 cursor-pointer hover:text-yellow hover:scale-105 duration-300"
          >
            {education[0]}
          </Link>

          <Link
            href={"https://www.panaverse.co/"}
            className="mb-2 cursor-pointer hover:text-yellow hover:scale-105 duration-300"
          >
            {education[1]}
          </Link>

          <Link
            href={"https://pide.org.pk/"}
            className="mb-2 cursor-pointer hover:text-yellow hover:scale-105 duration-300"
          >
            {education[2]}
          </Link>
        </div>
        <div className="text-white text-center mb-4 mt-4 sm:mt-8">
          <h3 className="mb-2 font-bold my-3">CONTECT ME</h3>
          <div className="flex flex-row justify-center gap-2">
            <Link
              className="icons-contactme hover:scale-125 duration-500"
              href={contactLinks?.[0]}
              aria-label={"Envelope Link"}
            >
              <Envelope />
            </Link>
            <Link
              className="icons-contactme hover:scale-125 duration-500"
              href={contactLinks?.[1]}
              aria-label={"Twitter Link"}
            >
              <Twitter />
            </Link>
            <Link
              className="icons-contactme hover:scale-125 duration-500"
              href={contactLinks?.[2]}
              aria-label={"Linkedin Link"}
            >
              <Linkedin />
            </Link>
            {/* <Link
              className="icons-contactme"
              href={contactLinks?.[3]}
              aria-label={"Medium Link"}
            >
              <Medium />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
