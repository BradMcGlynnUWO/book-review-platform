// App.js
import './App.css'; // Adjust the path as needed
//import './styles.css'

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing Components
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import SignUp from './Components/Auth/SignUp';
import SignIn from './Components/Auth/SignIn';
import DiscussionList from './Components/Discussion/DiscussionList';
import DiscussionDetail from './Components/Discussion/DiscussionDetail';
import Profile from './Components/Profile/Profile';
import ReviewList from './Components/Review/ReviewList';
import ReviewDetail from './Components/Review/ReviewDetail';

// Importing Context Provider
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <Router>
      <AuthProvider> {/* Wrapping Components with AuthProvider to provide authentication state */}
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/discussions" element={<DiscussionList />} />
            <Route path="/discussions/:id" element={<DiscussionDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reviews" element={<ReviewList />} />
            <Route path="/reviews/:id" element={<ReviewDetail />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
