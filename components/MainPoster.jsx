import React from 'react'
import { Button } from '.'

const MainPoster = () => {
    return (
        <div
          id="text_roboto"
          className="z-20 px-6 w-full h-full text-white flex items-center justify-center"
        >
          <div className="w-full sm:w-1/2 h-3/4 max-w-[600px] flex flex-col justify-center items-center bg-black/60 border-2 border-brand ">
            <p className="text-brand font-bold text-2xl md:text-4xl">KOREAN</p>
            <p className="text-brand font-bold text-2xl md:text-4xl">DISTILLED</p>
            <p className="text-brand font-bold text-2xl md:text-4xl">SPIRITS</p>
            <div className="w-14 h-2 bg-brand mt-4 " />
            <p className="my-4 text-xs md:text-lg w-3/5 text-center opacity-60">
              We’re proud to serve the most authentic Korean foods & drinks in
              NYC
            </p>
            <Button text="View Menu" />
          </div>
        </div>
    )
}

export default MainPoster
