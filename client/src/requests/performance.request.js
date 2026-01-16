import { api } from "../states/api.Client.js";

export const userPerformanceApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPerformance: build.query({
      query: (id) => `/management/performance/${id}`,
      providesTags: ["Performance"],
    }),
  }),
});

export const { useGetPerformanceQuery } = userPerformanceApi;
