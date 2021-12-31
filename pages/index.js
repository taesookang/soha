import { Main, MiddleSection, BottomSection } from '../components'
import Head from "next/head";


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Soju Haus | NYC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* main section */}
      <Main />
      <div className='spacer'/>
      {/* middle section */}
      <MiddleSection />
      <div className='spacer'/>
      {/* bottom section */}
      <BottomSection />
    </div>
  );
}
