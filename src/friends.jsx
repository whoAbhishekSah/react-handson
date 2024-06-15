import { ErrorPage } from './Error';
import { useEffect } from 'react';
import { useService } from './hooks/service';

export const Friends = ({ id }) => {
  const {
    loading,
    error,
    data: friends,
    fetchUrl,
  } = useService(`http://localhost:4000/api/users/${id}/friends`);

  useEffect(() => {
    fetchUrl();
  }, [id]);

  if (error) {
    return <ErrorPage err={`failed to fetch friends for user with id ${id}`} />;
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
                {i['firstName']} {i['lastName']}
              </td>
              <td>{i['phone']}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
