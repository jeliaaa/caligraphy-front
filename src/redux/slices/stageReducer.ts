import { createSlice } from '@reduxjs/toolkit';
import { Stage } from 'types/apiTypes/types';
import { fetchStage } from '../thunks/stagesThunk';


interface IniitalState {
    data: Stage[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: IniitalState = {
    data: [],
    status: 'idle',
}
const stageSlicer = createSlice({
    name: 'stage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStage.pending, (state) => {
                state.status = 'loading';
                state.data = [];
            })
            .addCase(fetchStage.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchStage.rejected, (state) => {
                state.status = 'failed';
                state.data = [];
            })
    }
});

// export const { } = stageSlicer.actions;

export default stageSlicer.reducer;

