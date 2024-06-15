import { useState } from 'react';

export const useFriends = (id) => {
  const [friends, setFriends] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFriends = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:4000/api/users/${id}/friends`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch friends of user with id: ${id}`);
      }
      const jsonData = await response.json();
      console.log({ jsonData });
      setFriends(jsonData);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { friends, loading, error, fetchFriends };
};
