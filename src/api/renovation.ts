import axios from '../utils/axios_v1';

export const get = async (trackId: string | undefined) => {
    const response = await axios.get(`/track/${trackId}`,);
    return response.data;
};