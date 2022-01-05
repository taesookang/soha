import React from 'react'
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";


const Arrow = ({ onClick, direction }) => {
    return (
        <button
          onClick={() => onClick()}
          className={`absolute ${direction}-8 w-10 h-10 flex items-center justify-center bg-black/30 text-white rounded-full z-20 hover:bg-brand/50 transition duration-400`}
        >
         { direction === "right"? <ChevronRightIcon width={20} height={20} />:<ChevronLeftIcon width={20} height={20} />}
        </button>
    )
}

export default Arrow
