import { useFriends } from './hooks/friends';
import { ErrorPage } from './Error';
import { useEffect } from 'react';

export const Friends = ({ id }) => {
  const { loading, error, friends, fetchFriends } = useFriends(id);

  useEffect(() => {
    fetchFriends();
  }, []);

  if (error) {
    return <ErrorPage err={error.message} />;
  }

  if (loading) {
    return <div>Loading Friends...</div>;
  }

  return (
    <div>
      <p>Friends List</p>
      <table>
        <tr>
          <th>Name</th>
          <th>Phone</th>
        </tr>
        {friends.map((i) => {
          return (
            <tr>
              <td>
                {i.firstName} {i['lastName']}
              </td>
              <td>{i['phone']}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
