// AuthProvider.jsx
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to hold the user
  
  const signIn = (username, password) => {
    // Here, you would typically send a request to your backend to sign in the user
    // and set the user to the state if sign-in is successful
    // This is a placeholder and should be replaced with actual sign-in logic
    setUser({ username });
    console.log('User Signed In:', username);
  };
  
  const signOut = () => {
    // Here, you would typically clear the user session
    // This is a placeholder and should be replaced with actual sign-out logic
    setUser(null);
    console.log('User Signed Out');
  };
  
  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
