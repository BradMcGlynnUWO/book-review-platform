// DiscussionDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To access route parameters

const DiscussionDetail = () => {
  const { id } = useParams(); // Get the discussion id from the route parameters
  const [discussion, setDiscussion] = useState(null); // Local state to hold the discussion
  
  useEffect(() => {
    // Fetch discussion detail from your backend/API using the id and set it to local state
    // This is a placeholder and should be replaced with actual fetching logic
    setDiscussion({ id, title: 'Discussion ' + id, content: 'Discussion content...' });
  }, [id]);
  
  return (
    <div>
      <h2>Discussion Detail</h2>
      {discussion ? (
        <div>
          <h3>{discussion.title}</h3>
          <p>{discussion.content}</p>
        </div>
      ) : (
        <p>Loading...</p> // Placeholder for loading state
      )}
    </div>
  );
};

export default DiscussionDetail;
