import React from "react";
import Image from "next/image";
import { Button, Arrow, Section } from "..";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1536 },
    items: 5,
  },
  largeDesktop: {
    breakpoint: { max: 1536, min: 1280 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};


const MomentsSections = ({ moments }) => {
  return (
    <Section title="the moments">
      <div className="w-5/6">
        <Carousel
          responsive={responsive}
          // swipeable={true}
          draggable={true}
          itemClass="flex justify-center items-center max-w-[340px] sm:max-w-full px-2 "
          containerClass="px-1"
          customRightArrow={<Arrow direction="right"  />}
          customLeftArrow={<Arrow direction="left" />}
          removeArrowOnDeviceType={["mobile"]}
          customTransition="all .5s"
          infinite
        >
          {moments.map((moment) => (
            <div
              className="card aspect-[6/7] w-full min-h-[340px] sm:min-h-0 sm:w-[90%] p-4 my-4"
              key={moment.id}
            >
              <div className="relative w-full h-2/3 min-h-[220px] sm:min-h-0 bg-gray-100">
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
      <Button text="view more moments" width={200} link={"/moments"} />
    </Section>
  );
};

export default MomentsSections;
