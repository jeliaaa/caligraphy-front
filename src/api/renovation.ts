import { axiosV1 } from '../utils/axios';

export const get = async (trackId: string | undefined) => {
    const response = await axiosV1.get(`/track/${trackId}`,);
    return response.data;
};