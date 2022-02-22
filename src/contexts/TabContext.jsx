import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import config from "../config.json";

export const TabContext = createContext();

export function TabContextProvider(props) {
  const [tab, setTab] = useState(null);
  const navigate = useNavigate();
  const changeTab = (newTab) => setTab(newTab);
  console.log(tab);
  return (
    <TabContext.Provider value={{ tab, changeTab }}>
      {props.children}
    </TabContext.Provider>
  );
}
