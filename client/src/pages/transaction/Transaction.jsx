import { React, useState } from "react";
import { Box, useTheme } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionQuery } from "../../requests/transaction.request";
import Header from "../../components/Header";
import ToolbarDataGrid from "../../components/ToolbarDataGrid";

const Transaction = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(25);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [searchVal, setSearchVal] = useState("");

  const { data, isLoading } = useGetTransactionQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });
  console.log("🚀 ~ Transaction ~ data:", data);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "UserId",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
    },
    {
      field: "products",
      headerName: "No of Products",
      flex: 0.5,
      renderCell: (params) => params.value.length,
    },

    {
      field: "cost",
      headerName: "Cost",
      flex: 0.5,
    },
  ];

  return (
    <Box m={"1.5rem 2rem"}>
      <Header title={"Transactions"} subtitle={"See Your Transactions below"} />
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
          isLoading={isLoading}
          getRowId={(row) => row._id}
          rows={data?.transactions || []}
          columns={columns}
          rowCount={data?.total || 0}
          rowsPerPageOptions={[20, 50, 100]}
          pagination
          paginationMode="server"
          sortingMode="server"
          paginationModel={{ page, pageSize }}
          onPaginationModelChange={(model) => {
            setPage(model.page);
            setPageSize(model.pageSize);
          }}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          slots={{ toolbar: ToolbarDataGrid }}
          slotProps={{
            toolbar: { searchVal, setSearchVal, setSearch },
          }}
        />
      </Box>
    </Box>
  );
};

export default Transaction;
