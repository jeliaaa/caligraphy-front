import { axiosV2 } from "../utils/axios";

export const get = async () => {
  const response = await axiosV2.get(`/service/view`,);
  return response.data;
};

export const getSingle = async (id: string) => {
  const response = await axiosV2.get(`/service/view/${id}`,);
  return response.data;
};
