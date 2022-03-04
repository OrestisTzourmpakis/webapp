import React, { useEffect, useContext, useState } from "react";
import { TabContext } from "../../contexts/TabContext";
import config from "../../config.json";
import { UserContext } from "../../contexts/UserContext";
import { getUserPoints } from "../../services/pointsService";
import PointsContent from "../account/PointsContent";

function Points() {
  const { changeTab } = useContext(TabContext);
  const { authed } = useContext(UserContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    //changeTab(config.tabs.Points);
    const Init = async () => {
      if (authed?.email === "") return;
      try {
        const { data } = await getUserPoints(authed.email);
        setData(data);
        console.log("Ta data points:", data);
      } catch (ex) {
        console.log("Points content error:", ex);
      }
    };
    Init();
  }, [authed]);
  return (
    <>
      <PointsContent data={data} title="User Points Per Company" />
    </>
  );
}

export default Points;
