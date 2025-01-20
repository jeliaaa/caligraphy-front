import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../api/stage";
import { Stage } from "types/apiTypes/types";

export const fetchStage = createAsyncThunk<Stage[], number>(
    'stage/fetchStage',
    async (serviceId, { rejectWithValue }) => {
        try {
            const response = await get(serviceId);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);