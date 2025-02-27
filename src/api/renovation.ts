import { axiosV1 } from '../utils/axios';

export const get = async (trackId: string | undefined) => {
    const response = await axiosV1.get(`/renovation/view/${trackId}`,);
    return response.data;
};

export const getAll = async () => {
    const response = await axiosV1.get(`/renovation/view`,);
    return response.data;
};