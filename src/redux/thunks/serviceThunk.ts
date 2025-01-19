import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, getSingle } from "../../api/services";
import { Work } from "types/apiTypes/types";

export const fetchServices = createAsyncThunk<Work[]>(
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

export const fetchServiceSingle = createAsyncThunk<Work, string>(
    'services/fetchServiceSingle',
    async (id, { rejectWithValue }) => {
        try {
            const response = await getSingle(id);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);