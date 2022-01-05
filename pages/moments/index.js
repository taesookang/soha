import React from "react";
import Image from 'next/image'
import { SectionTitle } from "../../components";
import { getMoments } from "../../services";

const MomentsPage = ({ moments }) => {
  console.log(moments);
  return (
    <div className="container mx-auto">
      <SectionTitle title="Moments" />
      <div className="grid grid-cols-4 gap-2 p-8">
      {moments.map((moment) => (
          <div className="relative aspect-square bg-gray-50 hover:scale-110 transition ease-in rounded-sm overflow-hidden">
            <div className="absolute z-10 flex justify-center items-center transition ease-in opacity-0 hover:opacity-100 duration-500 w-full h-full bg-black/70">
              <span id="text_caveat" className="text-white mx-7">{moment.caption}</span>
            </div>
            <Image 
                src={moment.image.url}
                layout="fill"
                objectFit="cover"
            />
          </div>
      ))}
      </div>
    </div>
  );
};

export default MomentsPage;

export async function getStaticProps() {
  const moments = await getMoments();

  return {
    props: {
      moments: moments,
    },
  };
}
