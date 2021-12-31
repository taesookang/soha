import React from 'react'
import { Button } from '.'

const MainPoster = () => {
    return (
        <div
          id="text_roboto"
          className="z-10 px-6 w-full h-full text-white flex items-center justify-center"
        >
          <div className="main_card w-full sm:w-1/2 h-3/4">
            <p className="main_card__slogan font-bold text-2xl md:text-4xl">KOREAN</p>
            <p className="main_card__slogan font-bold text-2xl md:text-4xl">DISTILLED</p>
            <p className="main_card__slogan font-bold text-2xl md:text-4xl">SPIRITS</p>
            <div className="w-14 h-4 bg-brand mt-4 " />
            <p className="main_card__title my-4 text-xs md:text-lg w-3/5 text-center">
              We’re proud to serve the most authentic Korean foods & drinks in
              NYC
            </p>
            <Button text="View Menu" />
          </div>
        </div>
    )
}

export default MainPoster
