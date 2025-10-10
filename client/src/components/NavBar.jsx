import React from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import {
  Box,
  useTheme,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Button,
  Menu as Menu,
  MenuItem,
} from "@mui/material";
import { setMode } from "../states/theme.state.js";
import profileimg from "../assets/profileImg.jpg";
import { useState } from "react";

const NavBar = ({ isSidebarOpen, setIsSidebarOpen, userInfo }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "0px 1.5px 6px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <FlexBetween>
          <IconButton
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
          >
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="1rem"
            p="0.1rem , 1.5rem "
          >
            <InputBase placeholder="Serach Something" />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        <FlexBetween gap="2rem">
          <IconButton
            onClick={() => {
              dispatch(setMode());
              console.log(theme.palette.mode);
            }}
          >
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined></SettingsOutlined>
          </IconButton>
          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component={"img"}
                alt="ProfileImg"
                src={profileimg}
                height={"30px"}
                width={"30"}
                borderRadius={"50%"}
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign={"left"}>
                <Typography
                  fontWeight={"bold"}
                  fontSize={"0.8rem"}
                  sx={{
                    color: theme.palette.secondary[100],
                  }}
                >
                  {userInfo.name}
                </Typography>
                <Typography
                  fontSize={"0.7rem"}
                  sx={{
                    color: theme.palette.secondary[200],
                  }}
                >
                  {userInfo.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "25px",
                }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>LogOut</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
