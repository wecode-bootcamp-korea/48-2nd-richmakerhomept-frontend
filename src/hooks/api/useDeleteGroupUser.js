import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const useDeleteGroupUser = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: id => {
      return axios.delete(`${baseUrl}/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['groupUsers']);
    },
  });

  return mutation;
};
