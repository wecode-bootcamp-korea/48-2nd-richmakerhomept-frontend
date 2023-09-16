import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const getCards = async () => {
  // const baseUrl = process.env.REACT_APP_BASE_URL;

  return await axios.get('/data/cardList.json');
};

export const useGetCards = () => {
  const { data, isError, isLoading } = useQuery(['cards'], getCards);

  return { data: data?.data.data, isError, isLoading };
};
