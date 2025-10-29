import { api } from "../states/api.Client.js";

export const geographyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getGeography: build.query({
      query: () => `/client/geography`,
      providesTags: ["Geography"],
    }),
  }),
});

export const { useGetGeographyQuery } = geographyApi;
