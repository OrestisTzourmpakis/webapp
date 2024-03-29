import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import config from "../config.json";

export const TabContext = createContext();

export function TabContextProvider(props) {
  const [tab, setTab] = useState(null);
  const [bottomNavigationIndex, setBottomNavigationIndex] = useState(0);
  const navigate = useNavigate();
  const changeTab = (newTab) => {
    setBottomNavigationIndex(newTab);
    setTab(newTab);
  };

  return (
    <TabContext.Provider value={{ tab, changeTab, bottomNavigationIndex }}>
      {props.children}
    </TabContext.Provider>
  );
}
