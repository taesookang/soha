import React from "react";
import Image from "next/image";
import { Button, HomePageTitle, Arrow } from ".";
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

const BottomSection = ({ moments }) => {
  return (
    <div className="w-full min-h-800 flex items-center justify-center flex-col ">
      <HomePageTitle text="the moments" />
      <div className="w-4/5 my-12">
        <Carousel
          responsive={responsive}
          swipeable={true}
          itemClass="mr-2"
          customRightArrow={<Arrow direction="right" />}
          customLeftArrow={<Arrow direction="left" />}
        >
          {moments.map((moment) => (
            <div
              className="card aspect-[6/7] w-full sm:w-[90%] p-4 my-4"
              key={moment.id}
            >
              <div className="relative w-full h-2/3 bg-gray-100">
                <Image src={moment.image.url} layout="fill" objectFit="cover" />
              </div>
              <div className="w-full h-1/3 mt-2 py-4 flex items-center justify-center">
                <p
                  id="text_caveat"
                  className="text-lg md:text-xl leading-5 text-gray-500 px-2 lg:px-4"
                >
                  {moment.caption}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <Button text="view more moments" width={200} />
    </div>
  );
};

export default BottomSection;
