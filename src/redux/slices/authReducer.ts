import { createSlice } from '@reduxjs/toolkit';
import { Customer } from 'types/apiTypes/types';
import {
    fetchCustomerLogin,
    fetchCustomerProfile,
    fetchCustomerRegister,
    fetchCustomerLogout,
    fetchVerifyEmail,
    fetchResetPassword,
    fetchSendEmailVerify,
    fetchSendPasswordReset,
} from '../thunks/authThunks';

interface InitialState {
    data: Customer | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: InitialState = {
    data: null,
    status: 'idle',
};

const authSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCustomerLogin.pending, (state) => {
                state.status = 'loading';
                state.data = null;
            })
            .addCase(fetchCustomerLogin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchCustomerLogin.rejected, (state) => {
                state.status = 'failed';
                state.data = null;
            })
            .addCase(fetchCustomerProfile.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchCustomerRegister.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchCustomerRegister.rejected, (state) => {
                state.status = "failed";
                state.data = null;
            })
            .addCase(fetchCustomerLogout.fulfilled, (state) => {
                state.status = 'idle';
                state.data = null;
            })
            .addCase(fetchVerifyEmail.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(fetchResetPassword.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(fetchSendEmailVerify.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(fetchSendPasswordReset.fulfilled, (state) => {
                state.status = 'succeeded';
            })
    }
});

export default authSlice.reducer;
