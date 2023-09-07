import { useMutation } from '@tanstack/react-query';
import { config } from '../utils/constant';

export const useGetPhotoUrl = () => {
  return useMutation(formData => axios.post(`/upload`, formData, config));
};
