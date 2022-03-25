import {useEffect, useState} from 'react';
import {useUser} from '../hooks/ApiHooks';

const Profile = () => {
  const [user, setUser] = useState({});
  const {getUser} = useUser();
  const fetchUser = async () => {
    const userData = await getUser(localStorage.getItem('token'));
    setUser(userData);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <h1>Profile</h1>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.full_name}</p>
    </>
  );
};

export default Profile;
