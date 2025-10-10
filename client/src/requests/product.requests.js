import { api } from "../states/api.Client.js";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query({
      query: () => `/client/products`,
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductQuery } = productApi;
