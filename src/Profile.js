import React from 'react';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    // Clear user state and access token from local storage
    localStorage.removeItem('user');
    // Redirect to the signup page
    history.push('/signup');
  };

  if (!user) {
    // Redirect to the signup page if there is no user state
    history.push('/signup');
    return null;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
