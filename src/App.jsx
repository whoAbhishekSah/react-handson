import { useEffect, useState } from "react";

const UserBrief = ({user}) => {
  return (<div><p>Name: {user.firstName} {user.lastName} </p><p>Phone Number: {user.phone}</p></div>)
}

const Profile = ({ id }) => {
  const [user, setUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try{
        setIsLoading(true)
        console.log("called fetch user")
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        const jsonData = await response.json();
        setUser(jsonData);
      }
      catch(err){
        console.error(err)
      }finally{
        setIsLoading(false)
      }
    };

    fetchUser();
  }, [id]);
  
  if (isLoading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <UserBrief user={user} />
  );
};

function App() {
  return (
    <div className="App">
      <Profile id={1}/>
    </div>
  );
}

export default App;
