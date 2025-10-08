import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeController } from "./theme";
import { useMemo } from "react";
import { BrowserRouter, Routes, Navigate, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import AppLayout from "./pages/layout/AppLayout";

function App() {
  const mode = useSelector((state) => state.global.mode);
  console.log(mode);
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
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
