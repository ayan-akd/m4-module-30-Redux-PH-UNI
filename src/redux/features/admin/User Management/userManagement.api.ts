import { baseApi } from "@/redux/api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllUsers: builder.query({
    //   query: () => ({
    //     url: "/users",
    //     method: "GET",
    //   }),
    //   providesTags: ["user"],
    // })
    addStudent: builder.mutation({
      query: (data) => ({
        url: "/user/create-student",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useAddStudentMutation } = userManagementApi;
