import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getGroupUsers = async () => {
  // const baseUrl = process.env.REACT_APP_BASE_URL;

  return await axios.get('/data/userData.json');
};

export const useGetGroupUsers = () => {
  const { data, isError, isLoading } = useQuery(['groupUsers'], getGroupUsers);

  return { data: data?.data.userData, isError, isLoading };
};
