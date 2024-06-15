import { useEffect } from 'react';
import { useUserProfile } from './hooks/userProfile';
import { UserBrief } from './UserBrief';
import { ErrorPage } from './Error';
import { Friends } from './friends';

export const Profile = ({ id }) => {
  const { loading, error, profileData, fetchUserProfile } = useUserProfile(id);

  useEffect(() => {
    fetchUserProfile();
  }, [id]);

  if (error) {
    return <ErrorPage err={`failed to fetch user with id ${id}`} />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <UserBrief user={profileData.user} />
      <Friends friends={profileData.friends} />
    </>
  );
};
