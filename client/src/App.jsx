import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeController } from "./theme";
import { useMemo } from "react";
import { BrowserRouter, Routes, Navigate, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import AppLayout from "./pages/layout/AppLayout";
import Products from "./pages/products/Products";
import Customer from "./pages/customers/Customer";
import Transaction from "./pages/transaction/Transaction";
import Geography from "./pages/geography/Geography";
import Overview from "./pages/overview/Overview";
import Daily from "./pages/daily/Daily";
import Monthly from "./pages/monthly/Monthly";
import Breakdown from "./pages/breakdown/Breakdown";
import Admin from "./pages/admin/Admin";
import Performance from "./pages/performance/Performance";

function App() {
  const mode = useSelector((state) => state.themeGlobal.mode);
  const theme = useMemo(() => createTheme(themeController(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<AppLayout />}>
              <Route
                path="/"
                element={<Navigate to={"/dashboard"} replace />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/transactions" element={<Transaction />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
