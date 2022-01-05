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
        <p className="text-gray-500 text-sm md:text-base mb-2">{children}</p>
      ),
      bold: ({ children }) => <b className="text-black">{children}</b>,
    }}
  />
);

const EventCard = ({ event }) => {
  return (
    <div className="card flex justify-between mx-auto mb-4 w-3/4 h-48 rounded-sm overflow-hidden">
      <div className="relative aspect-square h-full bg-gray-50">
        <Image src={event.image.url} layout="fill" objectFit="cover" />
      </div>
      <div className="w-full px-6 py-4">
        <div className="w-full flex items-center justify-between mb-4">
          <h1 className="capitalize text-xl text-brand font-bold">
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
      <div className="flex justify-center items-center w-1/5 my-6 border-l border-gray-200 text-sm text-brand text-center">
        <Link href={event.link}>
          <a target="_blank" rel="noreferrer">
            Veiw Details
          </a>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
