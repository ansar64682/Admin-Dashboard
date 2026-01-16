import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Breakdown = () => {
  return (
    <Box m={"2rem 1.5rem"}>
      <Header title={"Breakdown"} subtitle={"Below is the catigorized Chart"} />
      <Box>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
