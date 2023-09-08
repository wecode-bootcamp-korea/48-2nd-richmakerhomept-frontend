import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { config } from '../utils/constant';

export const useGetPhotoUrl = () => {
  return useMutation(formData => axios.post(`/upload`, formData, config));
};
