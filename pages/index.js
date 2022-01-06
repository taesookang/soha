import { Main, MiddleSection, BottomSection } from "../components";
import Head from "next/head";
import { getMainImages, getSpecialsImages, getMoments } from "../services";

export default function Home({ mainImages, specialsImages, moments }) {
  return (
    <div>
      <Head>
        <title>Soju Haus | NYC</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </Head>
      {/* main section */}
      <Main images={mainImages} />
      <div className="spacer" />
      {/* middle section */}
      <MiddleSection images={specialsImages} />
      <div className="spacer" />
      {/* bottom section */}
      <BottomSection moments={moments} />
    </div>
  );
}

export async function getStaticProps() {
  const mainImages = await getMainImages();
  const specialsImages = await getSpecialsImages();
  const moments = await getMoments();

  return {
    props: {
      mainImages: mainImages,
      specialsImages: specialsImages,
      moments: moments,
    },
  };
}
