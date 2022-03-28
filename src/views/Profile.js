import {useContext, useEffect, useState} from 'react';
import {MediaContext} from '../contexts/MediaContext';
import {useTag} from '../hooks/ApiHooks';
import {mediaUrl} from '../utils/variables';

const Profile = () => {
  const [user] = useContext(MediaContext);
  const [avatar, setAvatar] = useState({
    filename: 'https://placekitten.com/320',
  });
  const {getTag} = useTag();
  const fetchAvatar = async () => {
    if (user) {
      const avatars = await getTag('avatar_' + user.user_id);
      const ava = avatars.pop();
      ava.filename = mediaUrl + ava.filename;
      setAvatar(ava);
    }
  };
  useEffect(() => {
    fetchAvatar();
  }, [user]);

  return (
    <>
      <h1>Profile</h1>
      {user && (
        <>
          <img src={avatar.filename} alt={user.username} />
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.full_name}</p>
        </>
      )}
    </>
  );
};

export default Profile;
