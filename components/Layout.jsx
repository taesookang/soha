import React from "react";
import { Navbar, Footer } from "./";
import { useGlobalContext } from '../contexts'

const Layout = ({ children }) => {

  const { menuOpen } = useGlobalContext();

  return (
    <>
      <Navbar />
      {/* <div className={`w-full h-full ${menuOpen && "blur-sm"} transition-all duration-1000`}> */}
      {children}
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Layout;
