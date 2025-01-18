import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../api/services";

export const fetchServices = createAsyncThunk(
    'services/fetchServices',
    async (_, { rejectWithValue }) => {
        try {
            const response = await get()
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);