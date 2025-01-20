import { createSlice } from '@reduxjs/toolkit';
import { fetchRenovation } from '../thunks/renovationThunk';
import { Renovation } from 'types/apiTypes/types';


interface IniitalState {
    data: Renovation | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: IniitalState = {
    data: null,
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
                state.data = null;
            })
            .addCase(fetchRenovation.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchRenovation.rejected, (state) => {
                state.status = 'failed';
                state.data = null;
            })
    }
});

// export const { } = renovationSlice.actions;

export default renovationSlice.reducer;

