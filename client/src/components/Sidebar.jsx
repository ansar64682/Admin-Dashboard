import React from "react";
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

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileimg from "../assets/profileImg.jpg";

const navItemsList = [
  {
    name: "DashBoard",
    icon: <HomeOutlined />,
  },
  {
    name: "Client",
    icon: null,
  },
  {
    name: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    name: "Customer",
    icon: <Groups2Outlined />,
  },
  {
    name: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    name: "Geography",
    icon: <PublicOutlined />,
  },
  {
    name: "Sales",
    icon: null,
  },
  {
    name: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    name: "Daily",
    icon: <TodayOutlined />,
  },
  {
    name: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    name: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    name: "Management",
    icon: null,
  },
  {
    name: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    name: "Performance",
    icon: <TrendingUpOutlined />,
  },
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
              color: theme.palette.secondary[500],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerwidth,
            },
          }}
        >
          <Box width={"100%"}>
            <Box m={"1.5rem 2rem 2rem 2rem"}>
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
                  <Typography variant="h4" fontWeight={"bold"}>
                    ECOM Admin
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton
                    onClick={() => {
                      setIsSidebarOpen(!isSidebarOpen);
                    }}
                  >
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>

            <List>
              {navItemsList.map(({ name, icon }) => {
                if (!icon) {
                  return (
                    <Typography
                      key={{ name }}
                      sx={{
                        m: "2.25rem 0 1rem 2rem",
                      }}
                    >
                      {name}
                    </Typography>
                  );
                }
                const nameLc = name.toLowerCase();

                return (
                  <ListItem key={name} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${nameLc}`);
                        setIsActive(nameLc);
                      }}
                      sx={{
                        background:
                          isActive === nameLc
                            ? theme.palette.primary[400]
                            : "tarnsparent",
                        color:
                          isActive === nameLc
                            ? theme.palette.primary[700]
                            : theme.palette.secondary[200],
                        "&:hover": {
                          backgroundColor: theme.palette.primary[700],
                          color: theme.palette.primary[100],
                          transform: "scale(1.0)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            isActive === nameLc
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={name} />
                      {isActive === nameLc && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Box position={"absolute"} bottom={"2rem"}>
            <Divider />
            <FlexBetween
              textTransform={"none"}
              gap={"1rem"}
              m={"1.5rem 2rem 0 5rem"}
            >
              <Box
                component={"img"}
                alt="ProfileImg"
                src={profileimg}
                height={"40px"}
                width={"40"}
                borderRadius={"50%"}
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign={"left"}>
                <Typography
                  fontWeight={"bold"}
                  fontSize={"0.9rem"}
                  sx={{
                    color: theme.palette.secondary[100],
                  }}
                >
                  {userInfo.name}
                </Typography>
                <Typography
                  fontSize={"0.9rem"}
                  sx={{
                    color: theme.palette.secondary[200],
                  }}
                >
                  {userInfo.occupation}
                </Typography>
              </Box>
              <SettingsOutlined />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
