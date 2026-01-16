import { api } from "../states/api.Client.js";

export const adminsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAdmins: build.query({
      query: () => `/management/admins`,
      providesTags: ["Admins"],
    }),
  }),
});

export const { useGetAdminsQuery } = adminsApi;
