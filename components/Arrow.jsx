import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const Arrow = ({ onClick, direction }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`absolute ${
        direction === "right" ? "right-8" : direction === "left" && "left-8"
      } w-10 h-10 flex items-center justify-center bg-black/40 text-white rounded-full z-20 hover:bg-brand/50 transition duration-400`}
    >
      {direction === "right" ? (
        <ChevronRightIcon width={20} height={20} />
      ) : (
        <ChevronLeftIcon width={20} height={20} />
      )}
    </button>
  );
};

export default Arrow;
