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
      } catch (ex) {}
    };
    Init();
  }, [authed]);
  return (
    <>
      <PointsContent data={data} title="Πόντοι Ανα Επιχείρηση" />
    </>
  );
}

export default Points;
