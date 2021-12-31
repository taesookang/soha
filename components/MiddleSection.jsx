import React from "react";
import Image from "next/image";
import { Button, Title } from '.'

const MiddleSection = () => {
  return (
    <div className="w-full h-auto sm:h-75vh max-h-800 flex flex-col items-center justify-around bg-brand-light py-8">
      
      <Title text="soha specials" />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 w-4/5 max-w-4xl">
          <div className="relative h-28">
              <Image 
                src={'/buljokbal.jpg'}
                layout="fill"
                objectFit="cover"
              />
          </div>
          <div className="relative h-28">
              <Image 
                src={'/bossam.jpg'}
                layout="fill"
                objectFit="cover"
              />
          </div>
          <div className="relative h-28">
              <Image 
                src={'/backribs.jpg'}
                layout="fill"
                objectFit="cover"
              />
          </div>
          <div className="relative h-28">
              <Image 
                src={'/backsuk.jpg'}
                layout="fill"
                objectFit="cover"
              />
          </div>
      </div>
      <div className="my-4">
        <Button text="view all specials" width={200}/>
        </div>
    </div>
  );
};

export default MiddleSection;