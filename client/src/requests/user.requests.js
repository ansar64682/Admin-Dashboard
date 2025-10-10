import { api } from "../states/api.Client.js";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/general/user/${id}`,
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUserQuery } = userApi;
