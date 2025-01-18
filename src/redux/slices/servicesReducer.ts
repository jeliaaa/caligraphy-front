import { createSlice } from '@reduxjs/toolkit';
import { fetchServices } from '../thunks/serviceThunk';


interface IniitalState {
    data: any;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: IniitalState = {
    data: [],
    status: 'idle',
}
const serviceSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchServices.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchServices.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchServices.rejected, (state) => {
                state.status = 'failed';
            })
    }
});

export const { } = serviceSlice.actions;

export default serviceSlice.reducer;

