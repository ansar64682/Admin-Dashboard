import { React, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionQuery } from "../../requests/transaction.request";
import Header from "../../components/Header";
import ToolbarDataGrid from "../../components/ToolbarDataGrid";
import Preloader from "../../components/PreLoader";

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

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "userId", headerName: "User ID", flex: 1 },
    { field: "createdAt", headerName: "Created At", flex: 1 },
    {
      field: "products",
      headerName: "No of Products",
      flex: 0.5,
      renderCell: (params) => params.value?.length ?? 0,
    },
    { field: "cost", headerName: "Cost", flex: 0.5 },
  ];

  return (
    <Box m="1.5rem 2rem">
      <Header title="Transactions" subtitle="See Your Transactions below" />
      {data || !isLoading ? (
        <Box
          mt="40px"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": { border: "none" },
            "& .MuiDataGrid-cell": { border: "none" },
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
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          {/* <ToolbarDataGrid
          searchVal={searchVal}
          setSearchVal={setSearchVal}
          setSearch={setSearch}
        /> */}
          <DataGrid
            loading={isLoading}
            getRowId={(row) => row._id}
            rows={data?.transactions || []}
            columns={columns}
            rowCount={data?.total || 0}
            pagination
            paginationMode="server"
            paginationModel={{ page, pageSize }}
            onPaginationModelChange={(model) => {
              setPage(model.page);
              setPageSize(model.pageSize);
            }}
            sortingMode="server"
            onSortModelChange={(newSortModel) => setSort(newSortModel[0] || {})}
            rowsPerPageOptions={[20, 50, 100]}
            showToolbar
            slots={{ Toolbar: ToolbarDataGrid }}
            slotProps={{
              toolbar: { searchVal, setSearchVal, setSearch },
            }}
          />
        </Box>
      ) : (
        <Preloader />
      )}
    </Box>
  );
};

export default Transaction;
