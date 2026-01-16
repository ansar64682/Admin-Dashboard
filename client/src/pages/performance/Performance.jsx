import React from "react";
import { Box, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useGetPerformanceQuery } from "../../requests/performance.request";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import Preloader from "../../components/PreLoader";

const Performance = () => {
  const theme = useTheme();
  const userId = useSelector((state) => state.dataGlobal.userId);

  const { data, isLoading } = useGetPerformanceQuery(userId);
  console.log("🚀 ~ Performance ~ data:", data);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "UserId",
      flex: 0.5,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },

    {
      field: "products",
      headerName: "Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },

    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box m={"2rem 1.5rem"}>
      <Header title={"Admins"} subtitle={"See Admisn List Bellow"} />

      {data || !isLoading ? (
        <Box
          mt={"40px"}
          height={"75vh"}
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              border: "none",
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.primary.light,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-toolbarConatiner .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          <DataGrid
            isLoading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={(data && data.sales) || []}
            columns={columns}
          />
        </Box>
      ) : (
        <Preloader />
      )}
    </Box>
  );
};

export default Performance;
