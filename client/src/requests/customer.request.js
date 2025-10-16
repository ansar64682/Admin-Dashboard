import { api } from "../states/api.Client.js";

export const customerApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCustomer: build.query({
      query: () => `/client/customers`,
      providesTags: ["Customer"],
    }),
  }),
});

export const { useGetCustomerQuery } = customerApi;
