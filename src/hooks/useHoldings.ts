import { useEffect, useState } from 'react';
import { ENDPOINTS } from '../../constants';

export interface Holding {
  avgPrice: number;
  close: number;
  ltp: number;
  quantity: number;
  symbol: string;
}
interface Holdings {
  userHolding: Holding[];
}

const useHoldings = () => {
  const [data, setData] = useState<Holding[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(ENDPOINTS.HOLDINGS);
      if (response.ok) {
        const holdings: Holdings = await response.json();
        setData(holdings.userHolding);
      } else {
        setError(response);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const isError = error !== null;

  return {
    data,
    isLoading,
    error,
    isError,
    refetch: fetchData,
    isRefetching: isLoading,
  };
};

export default useHoldings;
