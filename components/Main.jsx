import React from "react";
import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { Button, MainPoster } from ".";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Main = () => {
  return (
    <div className="relative w-full h-75vh max-h-800">
      <Carousel responsive={responsive} showDots={true}>
        <div className="w-full h-75vh max-h-800">
          <div className="main_image_filter" />
          <Image
          priority
            className="main_image"
            src="/main_1.jpeg"
            layout="fill"
            objectFit="cover"
            objectPosition={"left top"}
          />
        </div>
        
      </Carousel>
      <div className="absolute top-0 left-0 w-full h-full">
        <MainPoster />
      </div>
    </div>
  );
};

export default Main;
