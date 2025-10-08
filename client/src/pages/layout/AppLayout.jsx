import React, { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../navbar/NavBar";
import Sidebar from "../../components/Sidebar";

const AppLayout = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  console.log("before layout", isSidebarOpen);
  useEffect(() => {
    console.log("after layout...", isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <Box
      display={isNonMobile ? "flex" : "block"}
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Sidebar
        isNonMobile={isNonMobile}
        drawerwidth="300px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* normal app box */}
      <Box sx={{ flex: 1 }}>
        <NavBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
