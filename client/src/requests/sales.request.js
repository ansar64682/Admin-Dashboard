import { api } from "../states/api.Client.js";

export const SalesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSales: build.query({
      query: () => `/sales/sales`,
      providesTags: ["Sales"],
    }),
  }),
});

export const { useGetSalesQuery } = SalesApi;
