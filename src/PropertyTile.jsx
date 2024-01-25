import React, { useState } from 'react';

import './All.css'

function PropertyTile({ property }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className={`PropertyTile ${liked ? 'liked' : ''}`}>
      <h3>{property.title}</h3>
      <p>Location: {property.location}</p>
      <p>Price: {property.price}</p>
      <button onClick={toggleLike}>{liked ? 'Unlike' : 'Like'}</button>
    </div>
  );
}

export default PropertyTile;
