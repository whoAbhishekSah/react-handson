import { useEffect } from 'react';
import { useService } from './hooks/service';
import { UserBrief } from './UserBrief';
import { ErrorPage } from './Error';
import { Friends } from './friends';

const Profile = ({ id }) => {
  const {
    loading,
    error,
    data: user,
    fetchUrl,
  } = useService(`http://localhost:4000/api/users/${id}`);

  useEffect(() => {
    fetchUrl();
  }, [id]);

  if (error) {
    return <ErrorPage err={`failed to fetch user with id ${id}`} />;
  }

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return <UserBrief user={user} />;
};

function App() {
  return (
    <div className="App">
      <Profile id={`1`} />
      <Friends id={`1`} />
    </div>
  );
}

export default App;
