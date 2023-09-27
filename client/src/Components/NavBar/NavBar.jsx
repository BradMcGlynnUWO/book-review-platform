// NavBar.jsx
// This component acts as the navigation bar for the application.
// It uses React Router's Link component to navigate between different routes.

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  // The component returns a navigation bar with links to different parts of the application.
  return (
    <nav>
      <div className="navbar"> {/* Applying the CSS class */}
      <ul>
        {/* Each Link component corresponds to a route in the application. */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/discussions">Discussions</Link></li>
      </ul>
      </div>
    </nav>
  );
};

export default NavBar;
