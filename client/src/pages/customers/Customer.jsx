import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetCustomerQuery } from "../../requests/customer.request";
import Header from "../../components/Header";

const Customer = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomerQuery();
  console.log("🚀 ~ Customer ~ data:", data);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },

    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
  ];

  return (
    <Box m={"1.5rem 2rem"}>
      <Header title={"Customers"} subtitle={"See Customers Data Below"} />
      <Box mt={"40px"} height={"75vh"}>
        <DataGrid
          isLoading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
          sx={{
            backgroundColor: theme.palette.background.alt,
            fontSize: "0.8rem",
          }}
        />
      </Box>
    </Box>
  );
};

export default Customer;
