import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../api/renovation";

export const fetchRenovation = createAsyncThunk(
    'renovation/fetchRenovation',
    async ({ trackId }: { trackId: string | undefined }, { rejectWithValue }) => {
        try {
            const response = await get(trackId)
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);