import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getUserPointsHistory } from "../../services/pointsService";
import PointsContent from "../account/PointsContent";

function PointsHistory() {
  const { authed } = useContext(UserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const Init = async () => {
      if (authed?.email === "") return;
      try {
        const { data } = await getUserPointsHistory(authed.email);
        setData(data);
      } catch (ex) {}
    };
    Init();
  }, []);
  return (
    <>
      <PointsContent data={data} title="User's Points History" history={true} />
    </>
  );
}

export default PointsHistory;
