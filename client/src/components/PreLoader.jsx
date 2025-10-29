import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Preloader = ({ text = "Loading..." }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      sx={{
        backdropFilter: "blur(6px)",
        borderRadius: "1rem",
      }}
    >
      <CircularProgress
        thickness={4}
        size={60}
        sx={{
          color: "primary.main",
          mb: 2,
        }}
      />
      <Typography
        variant="subtitle1"
        sx={{
          color: "text.secondary",
          letterSpacing: "0.05em",
          fontWeight: 500,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Preloader;
