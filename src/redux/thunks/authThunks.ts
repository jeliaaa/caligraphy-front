import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    customerLogin,
    customerProfile,
    customerRegister,
    customerLogout,
    verifyEmail,
    resetPassword,
    sendEmailVerify,
    sendPasswordReset
    // authGoogle
} from "../../api/auth";
import { Customer } from "types/apiTypes/types";

// export const fetchSupervisorLogin = createAsyncThunk<Supervisor, { login: string; password: string }>(
//     'supervisor/fetchSupervisorLogin',
//     async (credentials, { rejectWithValue }) => {
//         try {
//             return await supervisorLogin(credentials.login, credentials.password);
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// );

// export const fetchSupervisorProfile = createAsyncThunk<Supervisor>(
//     'supervisor/fetchSupervisorProfile',
//     async (_, { rejectWithValue }) => {
//         try {
//             return await supervisorProfile();
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// );

// export const fetchSupervisorLogout = createAsyncThunk<void>(
//     'supervisor/fetchSupervisorLogout',
//     async (_, { rejectWithValue }) => {
//         try {
//             return await supervisorLogout();
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// );

export const fetchCustomerLogin = createAsyncThunk<Customer, { email: string; password: string }>(
    'customer/fetchCustomerLogin',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await customerLogin(email, password);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


export const fetchCustomerProfile = createAsyncThunk<Customer>(
    'customer/fetchCustomerProfile',
    async (_, { rejectWithValue }) => {
        try {
            return await customerProfile();
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const fetchCustomerRegister = createAsyncThunk<Customer, { email: string; password: string; firstname: string; lastname: string }>(
    'customer/fetchCustomerRegister',
    async (data, { rejectWithValue }) => {
        try {
            return await customerRegister({ email: data.email, password: data.password, firstname: data.firstname, lastname: data.lastname });
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const fetchCustomerLogout = createAsyncThunk<void>(
    'customer/fetchCustomerLogout',
    async (_, { rejectWithValue }) => {
        try {
            return await customerLogout();
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const fetchVerifyEmail = createAsyncThunk<void, string>(
    'customer/fetchVerifyEmail',
    async (token, { rejectWithValue }) => {
        try {
            return await verifyEmail(token);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const fetchResetPassword = createAsyncThunk<void, string>(
    'customer/fetchResetPassword',
    async (token, { rejectWithValue }) => {
        try {
            return await resetPassword(token);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const fetchSendEmailVerify = createAsyncThunk<void, string>(
    'customer/fetchSendEmailVerify',
    async (email, { rejectWithValue }) => {
        try {
            return await sendEmailVerify(email);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const fetchSendPasswordReset = createAsyncThunk<void, string>(
    'customer/fetchSendPasswordReset',
    async (email, { rejectWithValue }) => {
        try {
            return await sendPasswordReset(email);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
