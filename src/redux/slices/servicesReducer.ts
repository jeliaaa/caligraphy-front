import { createSlice } from '@reduxjs/toolkit';
import { fetchServices, fetchServiceSingle } from '../thunks/serviceThunk';
import { Work } from 'types/apiTypes/types';

interface InitialState {
  data: Work[]; // List of all services
  singleData: Work | null; // Data for a single service
  status: 'idle' | 'loading' | 'succeeded' | 'failed'; // Status for all services
  singleStatus: 'idle' | 'loading' | 'succeeded' | 'failed'; // Status for single service
}

const initialState: InitialState = {
  data: [],
  singleData: null,
  status: 'idle',
  singleStatus: 'idle',
};

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all services
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

      // Fetch single service
      .addCase(fetchServiceSingle.pending, (state) => {
        state.singleStatus = 'loading';
      })
      .addCase(fetchServiceSingle.fulfilled, (state, action) => {
        state.singleStatus = 'succeeded';
        state.singleData = action.payload;
      })
      .addCase(fetchServiceSingle.rejected, (state) => {
        state.singleStatus = 'failed';
      });
  },
});


export const { } = serviceSlice.actions;

export default serviceSlice.reducer;

