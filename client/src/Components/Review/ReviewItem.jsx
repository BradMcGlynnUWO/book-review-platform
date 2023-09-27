// ReviewItem.jsx
// This component is responsible for displaying an individual review.
// It receives a review object as a prop and renders the title and content of the review.

import React from 'react';

const ReviewItem = ({ review }) => {
  // The component returns a list item containing a heading and a paragraph.
  return (
    <li>
      <h3>{review.title}</h3>
      <p>{review.content}</p>
    </li>
  );
};

export default ReviewItem;
