import { createAsyncThunk } from '@reduxjs/toolkit' // adjust path if needed
import { postContact } from '../../api/contact';

export const sendContactInfo = createAsyncThunk(
    'customer/sendContactInfo',
    async ({ email, name, phone }: { email: string; name: string; phone: string }, thunkAPI) => {
        try {
            const response = await postContact(email, name, phone);
            return response;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
);
