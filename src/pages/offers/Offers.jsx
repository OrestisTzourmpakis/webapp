import React, { useContext, useEffect } from "react";
import config from "../../config.json";
import { TabContext } from "../../contexts/TabContext";

function Offers() {
  const { changeTab } = useContext(TabContext);

  useEffect(() => {
    changeTab(config.tabs.Offers);
  }, []);
  return <div>Offers</div>;
}

export default Offers;
