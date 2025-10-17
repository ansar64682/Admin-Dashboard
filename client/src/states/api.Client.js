import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  reducerPath: "apiAdmin",
  tagTypes: ["User", "Product", "Customer", "Transaction"],
  endpoints: () => ({}),
});

export default api;
