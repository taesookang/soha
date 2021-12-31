import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navlinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Menu", link: "/menu" },
  { id: 3, title: "Events", link: "/" },
  { id: 4, title: "Moments", link: "/" },
  { id: 5, title: "Reservation", link: "/" },
];

const Navbar = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className="header w-full h-16 bg-white flex items-center justify-between px-5 sticky top-0 z-50">
      <div className="logo">
        <Link href="/">
          <a className="w-44 flex items-center justify-between">
            <Image src="/logo.svg" width={50} height={50} />
            <div className="hidden sm:flex">
            <Image src="/logo_title.svg" width={120} height={50} />
            </div>
          </a>
        </Link>
      </div>

      <div className="nav hidden md:flex h-full ">
        {navlinks.map((link) => (
          <Link href={link.link} key={link.title}>
            <a
              className={`px-6 flex justify-center items-center cursor-pointer transition duration-300 ${
                current === link.id
                  ? "text-brand bg-brand-light"
                  : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              } `}
              onClick={() => setCurrent(link.id)}
            >
              {link.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
