import { useEffect, useState } from 'react';

const UserBrief = ({ user }) => {
  return (
    <div>
      <p>
        Name: {user.firstName} {user.lastName}{' '}
      </p>
      <p>Phone Number: {user.phone}</p>
    </div>
  );
};

const ErrorPage = ({ err }) => {
  return (
    <div>
      <p>Error: {err}</p>
    </div>
  );
};

const Profile = ({ id }) => {
  const [user, setUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(undefined);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        const jsonData = await response.json();
        setUser(jsonData);
      } catch (err) {
        console.error(err);
        setIsError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (isLoading || !user) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <ErrorPage err={isError} />;
  }

  return <UserBrief user={user} />;
};

function App() {
  return (
    <div className="App">
      <Profile id={'abs'} />
    </div>
  );
}

export default App;
