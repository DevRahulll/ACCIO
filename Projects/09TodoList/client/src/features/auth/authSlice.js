import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api, { parseError } from "../../utils/api";

const persistSession = ({ user, token }) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
};

export const registerUser = createAsyncThunk(
    "auth/register",
    async (form, { rejectWithValue }) => {
        try {
            const { data } = await api.post("/users/register", form);
            persistSession(data);
        } catch (error) {
            return rejectWithValue(parseError(error));
        }
    },
);

export const loginUser = createAsyncThunk(
    "auth/login",
    async (form, { rejectWithValue }) => {
        try {
            const { data } = await api.post("/auth/login", form);
            persistSession(data);
            return data;
        } catch (error) {
            return rejectWithValue(parseError(error));
        }
    },
);

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

// Slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: () => initialState,
        clearAuthError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // addCase: handle one specific action
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            });
    },
});
