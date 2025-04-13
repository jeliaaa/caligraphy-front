import { axiosV3 } from '../utils/axios';

export const postContact = async (email: string, name: string, phone: string) => {
    const response = await axiosV3.post(`/customer/login`, { phone, email, name });
    return response.data;
};