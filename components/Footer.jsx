import React from "react";
import Image from "next/image";
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import { SocialLinks } from ".";

const contacts = [
  {
    title: "212-213-2177",
    icon: <PhoneIcon className="h-5 w-5 text-brand" />,
  },
  {
    title: "soju_haus@soha.com",
    icon: <MailIcon className="h-5 w-5 text-brand" />,
  },
  {
    title: "315 5th ave 2FL, New York, NY10016",
    icon: <LocationMarkerIcon className="h-5 w-5 text-brand" />,
  },
];

const Footer = () => {
  return (
    <div className="relative w-11/12 mx-auto hidden sm:flex flex-col items-center justify-center border-t border-gray-300 mt-36">
      <div className="absolute w-14 h-14 -top-7 bg-white rounded-full border border-gray-300 flex justify-center items-center">
        <div className="relative w-5/6 h-5/6">
        <Image src={"/images/logo.svg"} layout="fill" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-12">
        {/* contact */}
        <div className="flex flex-col">
          <span className="font-bold mb-4">Contact</span>
          {contacts.map((contact, index) => (
            <div className="flex items-start my-2" key={index}>
              <div className="mr-2">{contact.icon}</div>
              <p className="text-gray-600 text-sm">{contact.title}</p>
            </div>
          ))}
        </div>
        {/* Hours */}
        <div className="flex flex-col">
          <span className="font-bold mb-4">Hours</span>
          <p className="text-gray-600 text-sm my-1">Sun - Wed : 4pm - 1am</p>
          <p className="text-gray-600 text-sm my-1">Thu : 4pm - 2am </p>
          <p className="text-gray-600 text-sm my-1">Fri & Sat : 4pm - 3am </p>
          <p className="text-gray-600 text-sm my-1">
            Delivery & Pickup : 4pm - 11pm{" "}
          </p>
        </div>
        {/* Social link */}
        <div className="flex flex-col w-44">
          <span className="font-bold mb-4">Follow us</span>
          <SocialLinks size={40} />
        </div>
      </div>
      <p className="my-12 text-xs text-gray-400">Created by T.Kang | All Rights Reserved</p>
    </div>
  );
};

export default Footer;
