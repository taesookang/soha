import React, { useState, useContext, createContext, useEffect } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [currentTab, setCurrentTab] = useState("/");

  return (
    <GlobalContext.Provider value={{currentTab, setCurrentTab}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
