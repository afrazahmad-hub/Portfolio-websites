import Image from "next/image";
import React from "react";
import Link from "next/link";
import Heading from "./Heading";
import { AiOutlineGift } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { TbPacman } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import Button from "./Button";

const About = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Heading title="About Me" />
      <div className="grid  grid-cols-1 md:grid-cols-[40%,60%]">
        <Image
          src="/afraz.jpeg"
          alt="about image"
          width={"200"}
          height="400"
          className="rounded-xl shadow-xl"
        />

        <div>
          <div className="flex item-center justify-between w-[300px]">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center font-medium">
                <AiOutlineGift className="text-[#ff4d41] text-[22px]" />
                Birthday
              </div>
              <div className="flex gap-4 items-center font-medium">
                <FiBookOpen className="text-[#ff4d41] text-[22px]" />
                Study
              </div>
              <div className="flex gap-4 items-center font-medium">
                <BsGlobe2 className="text-[#ff4d41] text-[22px]" />
                Website
              </div>
              <div className="flex gap-4 items-center font-medium">
                <TbPacman className="text-[#ff4d41] text-[22px]" />
                Interest
              </div>
              <div className="flex gap-4 items-center font-medium">
                <IoLocationOutline className="text-[#ff4d41] text-[22px]" />
                Loation
              </div>
            </div>
            <div className="flex flex-col gap-6 text-gray-600">
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>
            <div className="flex flex-col gap-6 text-gray-600">
              <div>3rd March, 1990</div>
              <div>PIDE, Islamabad & PIAIC</div>
              <div>www.dummy.com</div>
              <div>Travelling, Hiking</div>
              <div>Islamabad</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-gray-200 p-4 rounded-lg shadow-lg mt-6 ">
        <h2 className="font-bold mt-5 mb-5">
          I&apos;m Afraz, and I am a Blockchain developer
        </h2>
        <p className="text-gray-600">
          Hi, I am Afraz Ahmad. And I am a Blockchain and frontend developer. I
          am very passinate toward my goals. As a highly motivated and driven
          individual with a passion for making a positive impact, I have a
          unique blend of technical and interpersonal skills. I am able to
          tackle complex problems with ease, and I never lose sight of my
          ultimate goal, even when facing challenges. <br /> When I&apos;m not
          working, I love hiking, reading, and spending time with my friends and
          family. I believe that my determination, can-do attitude, and hard
          work make me a true asset to any team.
        </p>

        <Button link={"mailto:afrazahmad313@gmail.com"} text="Hire me" />
      </div>
    </section>
  );
};

export default About;
