import { axiosV1 } from '../utils/axios';

export const get = async (serviceId: number | undefined) => {
    const response = await axiosV1.get(`/stage/view`, { params: { serviceId: serviceId } });
    return response.data;
};