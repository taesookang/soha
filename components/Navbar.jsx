import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'

const navlinks = [
  { path: "/", title: "Home", link: "/" },
  { path: "/menu", title: "Menu", link: "/menu" },
  { path: "/events", title: "Events", link: "/_error" },
  { path: "/moments", title: "Moments", link: "/moments" },
  { path: "/reservation", title: "Reservation", link: "/reservation" },
];

const Navbar = () => {
  const router = useRouter()
  console.log(router.pathname);

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
                // router.pathname.includes(link.path)
                router.pathname === link.link
                  ? "text-brand bg-brand-light"
                  : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              } `}
              // onClick={() => {
              //   setCurrentPath(link.id);
              // }}
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
