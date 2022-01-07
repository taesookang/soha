import React from "react";
import Link from "next/link";

const Button = ({ width=160, height=50, link="/", text }) => {
  return (
    <Link href={link}>
      <a className={`capitalize flex items-center justify-center bg-brand text-white text-sm shadow-md rounded-sm transition duration-500 hover:-translate-y-1 my-12`}
        style={{
            width: width,
            height: height,
            minHeight: height
        }}
      >
          {text}
      </a>
    </Link>
  );
};

export default Button;
