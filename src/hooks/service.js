import { useState } from 'react';
import { get } from '../utils/get';

export const useService = (url) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUrl = async () => {
    try {
      setLoading(true);
      const jsonData = await get(url);
      setData(jsonData);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchUrl };
};
