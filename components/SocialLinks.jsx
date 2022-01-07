import React from "react";
import Link from "next/link";
import Image from "next/image";

const SocialLinks = ({ size }) => {
  return (
    <>
      <Link href="https://www.instagram.com/sojuhaus/">
        <a target="_blank" rel="noreferrer" className="flex items-center">
          <Image src="/images/instagram.svg" width={size} height={size} />
        </a>
      </Link>
      <Link href="https://www.facebook.com/SojuHaus/">
        <a target="_blank" rel="noreferrer" className="flex items-center">
          <Image src="/images/facebook.svg" width={size} height={size} />
        </a>
      </Link>
      <Link href="https://www.youtube.com/c/SojuHausNewYork">
        <a target="_blank" rel="noreferrer" className="flex items-center">
          <Image src="/images/youtube.svg" width={size} height={size} />
        </a>
      </Link>
    </>
  );
};

export default SocialLinks;
