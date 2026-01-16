import React from "react";
import Header from "../../components/Header";
import Preloader from "../../components/PreLoader";
import { useGetDashboardQuery } from "../../requests/dashBoard.request";

import {
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
  EmailOutlined,
} from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
import StatCard from "../../components/StatCard";
import OverviewGraph from "../../components/OverviewGraph";
import PieChart from "../../components/PieChart";

function Dashboard() {
  const isNonMobile = useMediaQuery("(min-width: 1200px)");
  const theme = useTheme();
  const { data, isLoading } = useGetDashboardQuery();
  console.log(`🚀 ~ Dashboard ~ data:`, data);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
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

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Box m={"2rem 1.5rem"} height={"100vh"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Header title={"DashBoard"} subtitle={"Welcome to your Dashbaord"} />
        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined
              sx={{
                mr: "12px",
              }}
            />
            Download Reports
          </Button>
        </Box>
      </Box>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 12" },
        }}
      >
        {/* first row */}
        <StatCard
          title={"Total Customers"}
          value={data && data.totalCustomers}
          increase={"14+"}
          description={"Since Last Month"}
          icon={<EmailOutlined />}
        />
        <StatCard
          title={"Sales Today"}
          value={data.thisday && data.thisDay.totalSales}
          increase={"14%"}
          description={"Since Last Month"}
          icon={<PointOfSale />}
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <OverviewGraph isDashboard={true} view={"Sales"} />
        </Box>
        <StatCard
          title={"Monthly Sales"}
          value={data.thisMonthStats && data.thisMonthStats.totalSales}
          increase={"5%"}
          description={"Since Last Month"}
          icon={<PersonAdd />}
        />
        <StatCard
          title={"Yearly Sales"}
          value={data && data.yearlySalesTotal}
          increase={"55%"}
          description={"Since Last Month"}
          icon={<Traffic />}
        />

        {/* Row 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "1rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt,
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
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={(data && data.transactions) || []}
            columns={columns}
          />
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
            Sales By Category
          </Typography>
          <PieChart isDashboard={true} />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
