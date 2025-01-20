import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, getSingle } from "../../api/services";
import { Service } from "types/apiTypes/types";

export const fetchServices = createAsyncThunk<Service[]>(
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

export const fetchServiceSingle = createAsyncThunk<Service, string>(
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