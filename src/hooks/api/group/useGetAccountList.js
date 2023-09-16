import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getAccounts = async () => {
  // const baseUrl = process.env.REACT_APP_BASE_URL;

  return await axios.get('/data/accountList.json');
};

export const useGetAccounts = () => {
  const { data, isError, isLoading } = useQuery(['accounts'], getAccounts);

  return { data: data?.data.data, isError, isLoading };
};
