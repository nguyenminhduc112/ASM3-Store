import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "../../utils/managerToken";
import { getUser, removeUser, setUser } from "../../services/userServies";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthentication: getToken() ? true : false,
        token: getToken() || null,
        user: getUser()
    },
    reducers: {
        ON_LOGIN: (state, action) => {
            state.isAuthentication = true
            state.token = action.payload.token
            state.user = setUser(action.payload.id, action.payload.email, action.payload.fullname)
        },

        ON_LOGOUT: (state) => {
            state.isAuthentication = false
            state.token = null
            state.user = removeUser()
        }
    }
})

export const authAction = authSlice.actions
export default authSlice.reducer