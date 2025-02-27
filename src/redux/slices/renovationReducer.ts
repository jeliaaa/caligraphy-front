import { createSlice } from '@reduxjs/toolkit';
import { fetchRenovation, fetchRenovations } from '../thunks/renovationThunk';
import { Renovation } from 'types/apiTypes/types';


interface IniitalState {
    singleData: Renovation | null;
    data: Renovation[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: IniitalState = {
    singleData: null,
    data: [],
    status: 'idle',
}
const renovationSlice = createSlice({
    name: 'renovation',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRenovation.pending, (state) => {
                state.status = 'loading';
                state.singleData = null;
            })
            .addCase(fetchRenovation.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.singleData = action.payload;
            })
            .addCase(fetchRenovation.rejected, (state) => {
                state.status = 'failed';
                state.singleData = null;
            })
            .addCase(fetchRenovations.pending, (state) => {
                state.status = 'loading';
                state.data = [];
            })
            .addCase(fetchRenovations.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchRenovations.rejected, (state) => {
                state.status = 'failed';
                state.data = [];
            })
    }
});

// export const { } = renovationSlice.actions;

export default renovationSlice.reducer;

