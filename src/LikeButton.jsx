import React, { useState } from 'react';
import './All.css'; // Import the CSS file for styling

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button className={`LikeButton ${liked ? 'liked' : ''}`} onClick={toggleLike}>
      {liked ? 'Unlike' : 'Like'}
    </button>
  );
}

export default LikeButton;
