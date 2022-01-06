import React from 'react'
import Link from "next/link";
import Image from "next/image";



const SocialLinks = ({ size }) => {
    return (
        <>
            <Link href="https://www.instagram.com/sojuhaus/">
            <a target='_blank' rel="noreferrer">
              <Image src={"/images/instagram.svg"} width={size} height={size} />
            </a>
          </Link>
          <Link href="https://www.facebook.com/SojuHaus/">
            <a target='_blank' rel="noreferrer">
              <Image src={"/images/facebook.svg"} width={size} height={size} />
            </a>
          </Link>
          <Link href="https://www.youtube.com/c/SojuHausNewYork">
            <a target='_blank' rel="noreferrer">
              <Image src={"/images/Youtube.svg"} width={size} height={size} />
            </a>
          </Link>
        </>
    )
}

export default SocialLinks
