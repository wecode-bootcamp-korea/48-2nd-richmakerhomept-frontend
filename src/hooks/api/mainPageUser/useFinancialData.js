import { useQuery } from '@tanstack/react-query';
import { fetchFinancialData } from './mainAPI';

const useFinancialData = () => {
  return useQuery({
    queryFn: fetchFinancialData,
    queryKey: ['financialData'],
    staleTime: 1000 * 60 * 10,
  });
};

export default useFinancialData;
