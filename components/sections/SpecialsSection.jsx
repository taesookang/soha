import React from "react";
import Image from "next/image";
import { Button, Section } from "..";

const SpecialsSection = ({ images }) => {
  return (
    <Section title="soha specials" withBg={true}>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 w-4/5 max-w-4xl">
        {images.map((img) => (
          <div className="relative h-24 sm:h-28 rounded-sm overflow-hidden" key={img.id}>
            <div className="capitalize absolute top-0 left-0 w-full h-full bg-black/60 z-10 transition duration-500 opacity-0 hover:opacity-100 flex justify-center items-center text-white  ">
              {img.title}
              </div>
            <Image src={img.image.url} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <div className="my-12">
        <Button text="view all specials" width={200} link={"/menu"} />
        </div>
    </Section>
  );
};

export default SpecialsSection;
