import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";

const Main = () => {
  return (
    <div className="bg-[url(/ethers.jpeg)] h-screen bg-cover bg-fixed flex items-center ">
      <div className="container mx-auto px-4">
        <div className="max-w-[450px] text-gray-300 flex flex-col gap-[40px]">
          <div>
            <h1 className="text-5xl">I&apos;m Afraz Ahmad</h1>
            <h4 className="text-2xl mt-3">
              <Typewriter
                options={{
                  strings: ["Blockchain Developer", "Frontend Developer"],
                  changeDelay: 4,
                  changeDeleteSpeed: 2,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
            {/* Draw an orange line */}
            <div className="bg-[#ff4D41] h-[2px] w-[80px] mt-2 "></div>
            <div className="flex flex-row gap-2 w-40 mt-6 mr-3 border hover:border-[#ff4D41] hover:bg-transparent rounded-[5px] px-4 py-2 hover:text-[#ff4D41] bg-[#ff4D41] text-white transition duration-200">
              <Link
                target="blank"
                href="/C.V.Afraz.pdf"
                className="hover:font-bold"
              >
                Download CV
              </Link>
              <HiDownload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
