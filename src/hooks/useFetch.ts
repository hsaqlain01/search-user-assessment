import { useState, useEffect } from 'react';
import { FetchResult } from '../interfaces';
import { baseURL } from '../common/constants';

const useFetch = <T>(endpoint: string): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}${endpoint}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result: T = await response.json();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, error, loading };
};

export default useFetch;
