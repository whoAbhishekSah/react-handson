import { useEffect, useState } from 'react';

export const useUser = (id) => {
  const [user, setUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch user with id: ${id}`);
        }
        const jsonData = await response.json();
        setUser(jsonData);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [id]);
  return { user, isLoading, error };
};
