import React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";

const ArrowRight = ({ onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`absolute right-8 w-10 h-10 flex items-center justify-center bg-black/40 text-white rounded-full z-20 hover:bg-brand/50 transition duration-400`}
    >
      <ChevronRightIcon width={20} height={20} />
    </button>
  );
};

export default ArrowRight;
