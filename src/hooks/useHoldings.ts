import { useEffect, useState } from 'react';

const HOLDINGS_ENDPOINT =
  'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8';

const useHoldings = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(HOLDINGS_ENDPOINT);
      if (response.ok) {
        const holdings = await response.json();
        setData(holdings.userHolding);
        console.log(holdings);
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
