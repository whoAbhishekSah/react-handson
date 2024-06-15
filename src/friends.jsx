export const Friends = ({ friends }) => {
  return (
    <div>
      <p>Friends List</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};
