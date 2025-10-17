import { api } from "../states/api.Client.js";

export const transactionApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTransaction: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "/client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetTransactionQuery } = transactionApi;
