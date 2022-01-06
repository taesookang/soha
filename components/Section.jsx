import React from 'react'
import { SectionTitle } from '.'

const Section = ({ children, title, withBg=false }) => {
    return (
        <div className={`w-full max-w-[2000px] mx-auto h-auto sm:h-75vh max-h-800 flex flex-col items-center justify-around ${withBg && "bg-brand-light"} py-8`}>
      <SectionTitle text={title} />
      {children}
        </div>
    )
}

export default Section
