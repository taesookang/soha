import React from "react";
import Image from "next/image";
import { Button, Title } from ".";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const BottomSection = () => {
  return (
    <div className="w-full min-h-800 flex items-center justify-center flex-col ">
      <Title text="the moments" />
      <div className="w-4/5 my-12">
        <Carousel responsive={responsive} swipeable={true} containerClass="h-400 px-8 ml-10">
          <div className="card w-80 h-96 p-4">
            <div className="relative w-full h-2/3 bg-gray-100">
              <Image src={"/moment_1.jpg"} layout="fill" objectFit="cover" />
            </div>
            <div className="w-full h-1/3 mt-2 py-4">
              <p id="text_caveat" className="text-2xl text-gray-400 px-4">
                The place we can share foods, drinks and memories
              </p>
            </div>
          </div>
          <div className="card w-80 h-96 p-4">
            <div className="relative w-full h-2/3 bg-gray-100">
              <Image src={"/moment_2.jpg"} layout="fill" objectFit="cover" />
            </div>
            <div className="w-full h-1/3 mt-2 py-4">
              <p id="text_caveat" className="text-2xl text-gray-400 px-4">
                The place we can share foods, drinks and memories
              </p>
            </div>
          </div>
          <div className="card w-80 h-96 p-4">
            <div className="relative w-full h-2/3 bg-gray-100">
              <Image src={"/moment_3.jpg"} layout="fill" objectFit="cover" />
            </div>
            <div className="w-full h-1/3 mt-2 py-4">
              <p id="text_caveat" className="text-2xl text-gray-400 px-4">
                The place we can share foods, drinks and memories
              </p>
            </div>
          </div>
          <div className="card w-80 h-96 p-4">
            <div className="relative w-full h-2/3 bg-gray-100">
              <Image src={"/moment_1.jpg"} layout="fill" objectFit="cover" />
            </div>
            <div className="w-full h-1/3 mt-2 py-4">
              <p id="text_caveat" className="text-2xl text-gray-400 px-4">
                The place we can share foods, drinks and memories
              </p>
            </div>
          </div>
        </Carousel>
      </div>
        <Button text="view more moments" width={200} />
    </div>
  );
};

export default BottomSection;
