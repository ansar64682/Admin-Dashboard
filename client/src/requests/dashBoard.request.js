import { api } from "../states/api.Client.js";

const dashBoardApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDashboard: build.query({
      query: () => `/general/dashboard`,
      providesTags: ["Dashboard"],
    }),
  }),
});

export const { useGetDashboardQuery } = dashBoardApi;
