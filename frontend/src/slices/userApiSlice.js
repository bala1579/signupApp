import { apiSlice } from "./apiSlice";

const USER_URL ='/api/users'

export const  userApiSlice = apiSlice.injectEndpoints({
      
    endpoints : (builder) =>
    ({
        login : builder.mutation({
            query : (data) => ({
                url : `${USER_URL}/auth`,
                method : 'post',
                body : data,
            }),
        }),


        register : builder.mutation({
            query : (data) => ({
                url : `${USER_URL}`,
                method : 'post',
                body : data,
            }),
        }),

        logout : builder.mutation({
            query : (data) => ({
                url : `${USER_URL}/logout`,
                method : 'post',
                body : data,
                
            }),
        }),


        profile : builder.mutation({
            query : (data) => ({
                url : `${USER_URL}/profile`,
                method : 'post',
                body : data,
            }),
        }),


        updateUser : builder.mutation({
            query : (data) => ({
                url : `${USER_URL}/profile/update`,
                method : 'PUT',
                body : data,
            }),
        }),



    })


})

export const { useLoginMutation , useLogoutMutation , useProfileMutation,
     useRegisterMutation , useUpdateUserMutation} = userApiSlice; 