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
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        console.log(response);
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
      <Profile id={1} />
    </div>
  );
}

export default App;
