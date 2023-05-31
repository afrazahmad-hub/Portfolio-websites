import React from "react";
import Heading from "../components/Heading";

const Skills = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Heading title="Skills" />
      <p className="text-gray-600 ">
        Hi, I&apos;m a Blockchain and frontend developer. I am very passinate
        toward my goals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div>
          <p>Solidity</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-[90%]"> </div>
          </div>
        </div>
        <div>
          <p>Ethers.js</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-[70%]"></div>
          </div>
        </div>
        <div>
          <p>Javascript</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-[90%]"></div>
          </div>
        </div>
        <div>
          <p>Typescript</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-[60%]"></div>
          </div>
        </div>
        <div>
          <p>React.js</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-[60%]"></div>
          </div>
        </div>
        <div>
          <p>Next.js</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-[70%]"></div>
          </div>
        </div>
        <div>
          <p>TailwindCSS</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-[60%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
