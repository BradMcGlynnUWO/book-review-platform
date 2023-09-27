// Profile.jsx
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Context/AuthContext'; // Importing AuthContext to access the user

const Profile = () => {
  const { user } = useContext(AuthContext); // Accessing user from AuthContext
  const [profileData, setProfileData] = useState(null); // Local state to hold the profile data
  
  useEffect(() => {
    if (user) {
      // Fetch profile data from your backend/API using the user information and set it to local state
      // This is a placeholder and should be replaced with actual fetching logic
      setProfileData({ username: user.username, email: user.email, reviews: [], discussions: [] });
    }
  }, [user]);
  
  return (
    <div>
      <h2>Profile</h2>
      {profileData ? (
        <div>
          <p>Username: {profileData.username}</p>
          <p>Email: {profileData.email}</p>
          {/* Render reviews and discussions here */}
        </div>
      ) : (
        <p>Loading...</p> // Placeholder for loading state
      )}
    </div>
  );
};

export default Profile;
