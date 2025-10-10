import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";

import { Outlet } from "react-router-dom";

import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../requests/user.requests";
import { useGetProductQuery } from "../../requests/product.requests";

const AppLayout = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userID = useSelector((state) => state.dataGlobal.userId);

  const { data } = useGetUserQuery(userID);
  console.log("🚀 ~ AppLayout ~ data:", data);

  const product = useGetProductQuery();
  console.log("🚀 ~ AppLayout ~ product:", product);

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
        userInfo={data || {}}
      />

      {/* normal app box */}
      <Box sx={{ flex: 1 }}>
        <NavBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          userInfo={data || {}}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
