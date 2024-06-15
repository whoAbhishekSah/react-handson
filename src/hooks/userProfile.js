import { useState } from 'react';
import { get } from '../utils/get';

export const useUserProfile = (id) => {
  const [profileData, setProfileData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      const [user, friends] = await Promise.all([
        get(`http://localhost:4000/api/users/${id}`),
        get(`http://localhost:4000/api/users/${id}/friends`),
      ]);
      setProfileData({ user, friends });
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { profileData, loading, error, fetchUserProfile };
};
