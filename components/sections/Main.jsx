import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { MainPoster, Arrow } from "..";


const responsive = {
  default: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
}

const Main = ({ images }) => {
  return (
    <div className="relative w-full max-w-[2000px] h-75vh max-h-800 mx-auto">
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite
        removeArrowOnDeviceType={["mobile"]}
        autoPlay={true}
        autoPlaySpeed={6000}
        transitionDuration={1000}
        customRightArrow={<Arrow direction="right" />}
        customLeftArrow={<Arrow direction="left" />}
        
      >
        {images.map((img) => (
          <div className="relative min-w-full h-75vh max-h-800" key={img.id}>
              <div className="absolute top-0 left-0 w-full z-10 bg-black/40" />
              <Image
                priority
                src={img.image.url}
                layout="fill"
                objectFit="cover"
                objectPosition={"left top"}
              />
          </div>
        ))}
      </Carousel>
      <div className="absolute top-0 left-0 w-full h-full">
        <MainPoster />
      </div>
    </div>
  );
};

export default Main;
