import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { SocialLinks } from ".";
import { useGlobalContext } from '../contexts'
import { useOutsideClick } from '../services'

const navlinks = [
  { path: "/", title: "Home", link: "/" },
  { path: "/menu", title: "Menu", link: "/menu" },
  { path: "/events", title: "Events", link: "/events" },
  { path: "/moments", title: "Moments", link: "/moments" },
  {
    path: "/reservation",
    title: "Reservation",
    link: "https://www.opentable.com/restref/client/?restref=270343&corrid=60c7575f-1899-4f38-808e-b319f4dad1d6",
  },
];

const Navbar = () => {
  const router = useRouter();

  const { menuOpen, setMenuOpen } = useGlobalContext();

  const menuRef = useRef()
  useOutsideClick(menuRef, () => setMenuOpen(false))

  return (
    <>
      <div className="header w-full max-w-[2000px] mx-auto h-16 bg-white flex items-center justify-between px-5 sticky top-0 z-50" ref={menuRef}>
        <div className="logo">
          <Link href="/">
            <a className="relative w-44 flex items-center justify-between" onClick={() => setMenuOpen(false)}>
              <Image src="/images/logo.svg" width={50} height={50} />
              <div className="relative hidden sm:flex">
                <Image src="/images/logo_title.svg" width={120} height={50} />
              </div>
            </a>
          </Link>
        </div>
        <div
          className={`hamburger ${menuOpen && "open"} md:hidden`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>

        <div
          className={`nav bg-white flex fixed md:static justify-between h-full md:pb-0 md:h-full flex-col md:flex-row w-[300px] md:w-auto top-16 transition-[right] transform duration-500 ease-in-out ${
            menuOpen ? "right-0" : "-right-[300px]"
          } `}
        >
          <div className="w-full flex flex-col md:flex-row">
          {navlinks.map((link) => (
            <a
              href={link.link}
              key={link.title}
              className={`px-6 py-6 md:py-0 flex justify-center items-center cursor-pointer transition duration-300 ${
                router.pathname === link.link
                  ? "text-brand bg-brand-light"
                  : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              } `}
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                router.push(link.link);
              }}
            >
              {link.title}
            </a>
          ))}
          </div>
          <div className="md:hidden h-16 flex justify-end items-center w-full mb-[100px] pr-4 ">
            <SocialLinks size={58} />
          </div>
        </div>
      </div>
      {/* <div className="md:hidden fixed w-[300px] top-16 right-0 h-screen bg-white z-50">
      hihi
    </div> */}
    </>
  );
};

export default Navbar;
