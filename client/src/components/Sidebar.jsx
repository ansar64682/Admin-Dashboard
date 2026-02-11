import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  PublicOutlined,
  ReceiptLongOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";

import FlexBetween from "./FlexBetween";

const navItemsList = [
  { name: "DashBoard", icon: <HomeOutlined /> },
  { name: "Client", icon: null },
  { name: "Products", icon: <ShoppingCartOutlined /> },
  { name: "Customer", icon: <Groups2Outlined /> },
  { name: "Transactions", icon: <ReceiptLongOutlined /> },
  { name: "Geography", icon: <PublicOutlined /> },
  { name: "Sales", icon: null },
  { name: "Overview", icon: <PointOfSaleOutlined /> },
  { name: "Daily", icon: <TodayOutlined /> },
  { name: "Monthly", icon: <CalendarMonthOutlined /> },
  { name: "Breakdown", icon: <PieChartOutlined /> },
  { name: "Management", icon: null },
  { name: "Admin", icon: <AdminPanelSettingsOutlined /> },
  { name: "Performance", icon: <TrendingUpOutlined /> },
];

const Sidebar = ({
  isNonMobile,
  drawerwidth,
  isSidebarOpen,
  setIsSidebarOpen,
  userInfo,
}) => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setIsActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerwidth,
            "& .MuiDrawer-paper": {
              display: "flex",
              flexDirection: "column",
              height: "100%",
              color: theme.palette.secondary[500],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerwidth,
            },
          }}
        >
          <Box sx={{ m: "1rem 1.2rem 1.2rem 1.2rem" }}>
            <FlexBetween color={theme.palette.secondary.main}>
              <Box display="flex" alignItems="center" gap="0.5rem">
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ fontSize: "1.2rem" }}
                >
                  ECOM Admin
                </Typography>
              </Box>
              {!isNonMobile && (
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <ChevronLeft />
                </IconButton>
              )}
            </FlexBetween>
          </Box>

          <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
            <List>
              {navItemsList.map(({ name, icon }) => {
                if (!icon) {
                  return (
                    <Typography
                      key={name}
                      sx={{
                        m: "1.5rem 0 0.7rem 1.2rem",
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        color: theme.palette.secondary[300],
                      }}
                    >
                      {name}
                    </Typography>
                  );
                }

                const nameLc = name.toLowerCase();
                const isActiveItem = isActive === nameLc;

                return (
                  <ListItem key={name} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${nameLc}`);
                        setIsActive(nameLc);
                      }}
                      sx={{
                        background: isActiveItem
                          ? theme.palette.primary[400]
                          : "transparent",
                        color: isActiveItem
                          ? theme.palette.primary[700]
                          : theme.palette.secondary[200],
                        py: "0.3rem",
                        "&:hover": {
                          backgroundColor: theme.palette.primary[700],
                          color: theme.palette.primary[100],
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "1.2rem",
                          minWidth: "32px",
                          color: isActiveItem
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[200],
                        }}
                      >
                        <Box sx={{ fontSize: "1.2rem", display: "flex" }}>
                          {icon}
                        </Box>
                      </ListItemIcon>
                      <ListItemText
                        primary={name}
                        primaryTypographyProps={{
                          fontSize: "0.85rem",
                          fontWeight: "500",
                        }}
                      />
                      {isActiveItem && (
                        <ChevronRightOutlined
                          sx={{ ml: "auto", fontSize: "1.2rem" }}
                        />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box sx={{ mt: "auto", p: "0.8rem 1.2rem 1.2rem 1.2rem" }}>
            <Divider />
            <FlexBetween textTransform="none" gap="0.8rem" sx={{ mt: 1 }}>
              <Box
                component="img"
                alt="ProfileImg"
                height="28px"
                width="28px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {userInfo?.name}
                </Typography>
                <Typography
                  fontSize="0.7rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {userInfo?.occupation}
                </Typography>
              </Box>
              <SettingsOutlined sx={{ fontSize: "1.2rem" }} />{" "}
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
