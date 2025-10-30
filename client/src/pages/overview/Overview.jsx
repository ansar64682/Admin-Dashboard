import { React, useState } from "react";
import { Box, FormControl, MenuItem, InputLabel, Select } from "@mui/material";
import Header from "../../components/Header";
import OverviewGraph from "../../components/OverviewGraph";

const Overview = () => {
  const [view, setView] = useState("");

  return (
    <Box m={"1.5rem 2rem"}>
      <Header title={"OverView"} subtitle={"See Chart for sales Overview"} />
      <Box height={"75vh"} m={"0.05rem 2rem"}>
        <FormControl sx={{ mt: "3rem", width: "8rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewGraph view={view} />
      </Box>
    </Box>
  );
};

export default Overview;
