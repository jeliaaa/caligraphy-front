import { axiosV3 } from '../utils/axios';

// export const supervisorLogin = async (login: string, password: string) => {
//     const response = await axiosV3.post(`/supervisor/login`, { login, password });
//     return response.data;
// };

// export const supervisorProfile = async () => {
//     const response = await axiosV3.get(`/supervisor/profile`);
//     return response.data;
// };

// export const supervisorLogout = async () => {
//     const response = await axiosV3.post(`/supervisor/logout`);
//     return response.data;
// };

export const customerLogin = async (login: string, password: string) => {
    const response = await axiosV3.post(`/customer/login`, { login, password });
    return response.data;
};

export const customerProfile = async () => {
    const response = await axiosV3.get(`/customer/profile`);
    return response.data;
};

export const customerRegister = async ({ email, password, firstname, lastname }: { email: string, password: string, firstname: string, lastname: string }) => {
    console.log({ email, password, firstname, lastname });
    const response = await axiosV3.post(`/customer/register`, { email: email, password: password, firstname: firstname, lastname: lastname });
    console.log(response);
    return response.data;
};

export const customerLogout = async () => {
    const response = await axiosV3.post(`/customer/logout`);
    return response.data;
};

export const verifyEmail = async (token: string) => {
    const response = await axiosV3.post(`/customer/verify-email`, null, { params: { token } });
    return response.data;
};

export const resetPassword = async (token: string) => {
    const response = await axiosV3.post(`/customer/reset-password`, null, { params: { token } });
    return response.data;
};

export const sendEmailVerify = async (email: string) => {
    const response = await axiosV3.post(`/customer/send-email-verify`, { email });
    return response.data;
};

export const sendPasswordReset = async (email: string) => {
    const response = await axiosV3.post(`/customer/send-password-reset`, { email });
    return response.data;
};

export const authGoogle = async () => {
    const response = await axiosV3.post(`/customer/auth/google`);
    return response.data;
};