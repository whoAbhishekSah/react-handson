import { useEffect } from 'react';
import { useUser } from './hooks/user';
import { UserBrief } from './UserBrief';
import { ErrorPage } from './Error';

const Profile = ({ id }) => {
  const { isLoading, error, user, fetchUser } = useUser(id);

  useEffect(() => {
    fetchUser();
  }, []);

  if (error) {
    return <ErrorPage err={error.message} />;
  }

  if (isLoading || !user) {
    return <div>Loading...</div>;
  }

  return <UserBrief user={user} />;
};

function App() {
  return (
    <div className="App">
      <Profile id={`1`} />
    </div>
  );
}

export default App;
