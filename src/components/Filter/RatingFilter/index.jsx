import React, { useContext } from 'react';
import { SearchContext } from '/Users/martinsolorio/Desktop/easydonate/solorio_ED-Challenge-main/src/contexts/SearchContext/index.jsx'; // Update the import path
import './RatingFilter.css';

function RatingFilter() {
  const { selectedRating, handleRatingChange } = useContext(SearchContext);

  const handleInputChange = (rating) => {
    handleRatingChange(rating);
  };

  return (
    <div className='RatingFilterContainer'>
      <h2>Rating:</h2>
      <div className='RatingsContainer'>
        <span
          className={selectedRating >= 1 ? 'StarIcon active' : 'StarIcon'}
          onClick={() => handleInputChange(1)}
        >★</span>
        <span
          className={selectedRating >= 2 ? 'StarIcon active' : 'StarIcon'}
          onClick={() => handleInputChange(2)}
        >★</span>
        <span
          className={selectedRating >= 3 ? 'StarIcon active' : 'StarIcon'}
          onClick={() => handleInputChange(3)}
        >★</span>
        <span
          className={selectedRating >= 4 ? 'StarIcon active' : 'StarIcon'}
          onClick={() => handleInputChange(4)}
        >★</span>
        <span
          className={selectedRating >= 5 ? 'StarIcon active' : 'StarIcon'}
          onClick={() => handleInputChange(5)}
        >★</span>
      </div>
    </div>
  );
}

export { RatingFilter };
