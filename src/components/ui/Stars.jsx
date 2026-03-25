import React from 'react';


function Stars({ rating, size = 14 }) {
  const rounded = Math.round(rating);
  return (
    <div className="stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className="star"
          style={{
            fontSize: size,
            color: i <= rounded ? '#f5a623' : '#d0d8e0',
          }}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Stars;
