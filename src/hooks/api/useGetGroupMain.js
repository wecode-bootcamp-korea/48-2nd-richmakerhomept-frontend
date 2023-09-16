import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getGroupInfos = async () => {
  // const baseUrl = process.env.REACT_APP_BASE_URL;

  return await axios.get('/data/groupInfo.json');
};

export const useGetGroupMain = () => {
  const { data, isError, isLoading } = useQuery(['groupInfos'], getGroupInfos);

  return { data: data?.data.data, isError, isLoading };
};
