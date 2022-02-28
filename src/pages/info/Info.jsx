import React, { useContext, useEffect } from "react";
import { TabContext } from "../../contexts/TabContext";
import config from "../../config.json";

function Info() {
  const { changeTab } = useContext(TabContext);
  useEffect(() => {
    changeTab(config.tabs.Info);
  }, []);
  return <div>Info</div>;
}

export default Info;
