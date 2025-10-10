import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./states/theme.state";
import dataReducer from "./states/data.state";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import api from "./states/api.Client";

const store = configureStore({
  reducer: {
    themeGlobal: themeReducer,
    dataGlobal: dataReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

setupListeners(store.dispatch);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
