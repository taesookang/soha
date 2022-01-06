import React from 'react'

const SectionTitle = ({ text }) => {

    const words = text.split(" ")
    return (
        <h1 className="uppercase text-xl sm:text-3xl my-4">
        {words[0]} <span className="text-brand">{words[1]}</span>
      </h1>
    )
}

export default SectionTitle
