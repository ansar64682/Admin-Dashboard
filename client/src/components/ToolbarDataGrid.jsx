import React from "react";
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";
const ToolbarDataGrid = ({ searchVal, setSearchVal, setSearch }) => {
  return (
    <GridToolbarContainer>
      <FlexBetween
        sx={{
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </FlexBetween>
        <FlexBetween>
          <TextField
            label="Search"
            sx={{ mb: "0.5rem", width: "15rem" }}
            onChange={(e) => setSearchVal(e.target.value)}
            value={searchVal}
            variant="standard"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setSearch(searchVal);
                      setSearchVal("");
                    }}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FlexBetween>
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default ToolbarDataGrid;
