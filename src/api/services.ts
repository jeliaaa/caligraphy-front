import axios from '../utils/axios_v2';

export const get = async () => {
  const response = await axios.get(`/work/view`,);
  return response.data;
};
