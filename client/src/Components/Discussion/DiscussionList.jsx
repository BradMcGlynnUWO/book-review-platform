// DiscussionList.jsx
import React, { useEffect, useState } from 'react';

const DiscussionList = () => {
  const [discussions, setDiscussions] = useState([]); // Local state to hold discussions
  
  useEffect(() => {
    // Fetch discussions from your backend/API and set them to local state
    // This is a placeholder and should be replaced with actual fetching logic
    setDiscussions([
      { id: 1, title: 'Discussion 1' },
      { id: 2, title: 'Discussion 2' },
    ]);
  }, []);
  
  return (
    <div>
      <h2>Discussions</h2>
      <ul>
        {discussions.map(discussion => (
          <li key={discussion.id}>{discussion.title}</li> // Render each discussion
        ))}
      </ul>
    </div>
  );
};

export default DiscussionList;
