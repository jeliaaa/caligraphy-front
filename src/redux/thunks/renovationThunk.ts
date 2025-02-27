import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, getAll } from "../../api/renovation";
import { Renovation } from "types/apiTypes/types";

export const fetchRenovation = createAsyncThunk<Renovation, string | undefined>(
    'renovation/fetchRenovation',
    async (trackId, { rejectWithValue }) => {
        try {
            const response = await get(trackId)
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const fetchRenovations = createAsyncThunk<Renovation[]>(
    'renovation/fetchRenovations',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getAll()
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);