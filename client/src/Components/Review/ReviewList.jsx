// ReviewList.jsx
// This component is responsible for displaying a list of reviews.
// It maps over an array of review objects and renders a ReviewItem component for each one.

import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = () => {
  // mockReviews is a placeholder for the actual reviews that will be fetched from the API.
  const mockReviews = [
    { id: 1, title: 'Great Book!', content: 'I really enjoyed this book because...' },
    // ... more reviews
  ];

  // The component returns a div containing a heading and a list of ReviewItem components.
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {/* The map function is used to create a ReviewItem component for each review in the mockReviews array. */}
        {mockReviews.map(review => <ReviewItem key={review.id} review={review} />)}
      </ul>
    </div>
  );
};

export default ReviewList;
