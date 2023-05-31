import React from "react";
import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <div>
      <Link href={link} className="btn">
        {text}
      </Link>
    </div>
  );
};

export default Button;
