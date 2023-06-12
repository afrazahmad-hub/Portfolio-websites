import Link from "next/link";
import React from "react";
import Heading from "./Heading";

const Work = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Heading title={"Creative Works"} />
      <div className="flex flex-col gap-8">
        <div className="bg-gray-200 rounded-b-lg shadow-xl">
          <div className="bg-red-400 h-[6px] w-full"></div>
          <div className="p-4">
            <h2 className="text-gray-700 font-bold mb-2">My Resume Apps.</h2>
            <p className="text-gray-700 mb-2">
              A frontend based resume applications developed using typescript
              and tailwind CSS
            </p>
            <Link
              className="text-purple-700 underline italic"
              href={"https://github.com/afrazahmad-hub/My-portfolio-websites"}
            >
              see on github
            </Link>
          </div>
        </div>
        <div className="bg-gray-200 rounded-b-lg shadow-xl">
          <div className="bg-red-400 h-[6px] w-full"></div>
          <div className="p-4">
            <h2 className="text-gray-700 font-bold mb-2">
              Product Tracker D-app
            </h2>
            <p className="text-gray-700 mb-2">
              A decentralized supply chain application to track the status of
              the products delivery.
            </p>
            <Link
              className="text-purple-700 underline italic"
              href={
                "https://github.com/afrazahmad-hub/SupplyChain-Product-Tracker-Dapp-"
              }
            >
              see on github
            </Link>
          </div>
        </div>
        <div className="bg-gray-200 rounded-b-lg shadow-xl">
          <div className="bg-red-400 h-[6px] w-full"></div>
          <div className="p-4">
            <h2 className="text-gray-700 font-bold mb-2">
              Smart Contract for Lottery Dapp
            </h2>
            <p className="text-gray-700 mb-2">
              Solidity smart contract for Lottery Dapp.
            </p>
            <Link
              className="text-purple-700 underline italic"
              href={
                "https://github.com/afrazahmad-hub/Lottery-Solidity-Contract"
              }
            >
              see on github
            </Link>
          </div>
        </div>
        <div className="bg-gray-200 rounded-b-lg shadow-xl">
          <div className="bg-red-400 h-[6px] w-full"></div>
          <div className="p-4">
            <h2 className="text-gray-700 font-bold mb-2">
              Buy ME a Coffee, DeFi D-app
            </h2>
            <p className="text-gray-700 mb-2">
              A decentralized finance d-app developed, where buyer can buy a
              coffe against etehers. Functions of customer reviews and tips also
              included.
            </p>
            <Link
              className="text-purple-700 underline italic"
              href={"https://github.com/afrazahmad-hub/Buy-me-a-Coffee-Dapp"}
            >
              see on github
            </Link>
          </div>
        </div>
        <div className="bg-gray-200 rounded-b-lg shadow-xl">
          <div className="bg-red-400 h-[6px] w-full"></div>
          <div className="p-4">
            <h2 className="text-gray-700 font-bold mb-2">
              NFT(ERC721) mintable D-app.
            </h2>
            <p className="text-gray-700 mb-2">
              Designed a Non-fungible tokens mintable dapp. Using Hardhat,
              Solidity, Ethers.js, and typescript.
            </p>
            <Link
              className="text-purple-700 underline italic"
              href={"https://github.com/afrazahmad-hub/ERC721-MintingDapp"}
            >
              see on github
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
