import React, { useEffect } from "react";
import { useContext } from "react";
import { TabContext } from "../../contexts/TabContext";
import config from "../../config.json";

function Points() {
  const { changeTab } = useContext(TabContext);
  useEffect(() => {
    changeTab(config.tabs.Points);
  }, []);
  return <div>Points page</div>;
}

export default Points;
