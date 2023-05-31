import React from "react";
import Heading from "./Heading";
import { RiLightbulbFlashLine } from "react-icons/ri";
import Link from "next/link";

const WhatIDo = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Heading title="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="shadow-lg flex flex-col px-8 py-10 bg-[#ff4d41] gap-4 text-white ">
          <RiLightbulbFlashLine className="text-[32px]" />
          <h2 className="font-medium text-[20px]">NFTs and FTs</h2>
          <p>
            The major area of interest is to build Non-Fungible and Fungible
            token dapss, using ethereum blockchain.
          </p>
        </div>
        <div className="shadow-lg flex flex-col px-8 py-10 bg-[#ff4d41] gap-4 text-white ">
          <RiLightbulbFlashLine className="text-[32px]" />
          <h2 className="font-medium text-[20px]">Ethereum Defi Dapps</h2>
          <p>
            Apart from NFT/Ft token dapps, I also build the full stack
            blockchain websites.
          </p>
        </div>
        <div className="shadow-lg flex flex-col px-8 py-10 bg-[#ff4d41] gap-4 text-white ">
          <RiLightbulbFlashLine className="text-[32px]" />
          <h2 className="font-medium text-[20px]">Frontend developer</h2>
          <p>
            I am also a front-end developer. I am able to develop front-end
            websites using next.js and tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
