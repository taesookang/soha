import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon } from "@heroicons/react/solid";
import { RichText } from "@graphcms/rich-text-react-renderer";

const RichTextRenderer = ({ content }) => (
  <RichText
    content={content}
    renderers={{
      a: ({ children, href }) => (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className=" text-blue-600"
        >
          {children}
        </a>
      ),
      h1: ({ children }) => <b className="text-2xl">{children}</b>,
      h2: ({ children }) => <b className="text-xl">{children}</b>,
      h3: ({ children }) => <b className="text-lg">{children}</b>,
      p: ({ children }) => (
        <p className="text-gray-500 text-sm sm:text-base mb-2">{children}</p>
      ),
      bold: ({ children }) => <b className="text-black">{children}</b>,
    }}
  />
);

const EventCard = ({ event }) => {
  return (
    <div className="card flex flex-col lg:flex-row justify-between mx-auto mb-4 w-4/5 md:w-3/4 lg:h-48 rounded-sm overflow-hidden">
      <div className="relative aspect-square w-full lg:w-auto lg:h-full bg-gray-50">
        <Image src={event.image.url} layout="fill" objectFit="cover" />
      </div>
      <div className="w-full px-6 py-4">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between mb-4">
          <h1 className="capitalize text-xl my-4 lg:my-auto text-brand font-bold">
            {event.title}
          </h1>
          <div className="flex justify-center items-center">
            <CalendarIcon className=" w-4 h-4 text-brand mr-2" />
            <span className="text-xs whitespace-nowrap">
              {event.startDate} ~ {event.endDate ? event.endDate : "TBD"}
            </span>
          </div>
        </div>
        <RichTextRenderer content={event.description.raw} />
      </div>
      <div className="flex justify-center items-center mx-6 lg:mx-auto lg:w-1/5 py-8 lg:py-0 my-0 lg:my-6 border-t lg:border-t-0 lg:border-l border-gray-200">
        <Link href={event.link}>
          <a target="_blank" rel="noreferrer" className="whitespace-nowrap text-base lg:text-sm text-brand text-center">
            Veiw Details
          </a>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
