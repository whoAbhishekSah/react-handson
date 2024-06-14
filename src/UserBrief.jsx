export const UserBrief = ({ user }) => {
  return (
    <div>
      <p>
        Name: {user.firstName} {user.lastName}{' '}
      </p>
      <p>Phone Number: {user.phone}</p>
    </div>
  );
};
