import React from "react";

const SectionTitle = ({ title, titleKr = null }) => {
  return (
    <div className="capitalize w-full border-b-2 bg-white border-brand px-4 my-12 pb-2 text-brand text-xl sticky top-[64px] z-30">
      {title}
      {titleKr && (
        <span className="text-base ml-4 text-gray-500">{titleKr}</span>
      )}
    </div>
  );
};

export default SectionTitle;
