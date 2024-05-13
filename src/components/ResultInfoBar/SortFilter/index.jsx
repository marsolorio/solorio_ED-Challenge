import React, { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';
import './SortFilter.css';

function SortFilter() {
  const { handleSortChange } = useContext(SearchContext);

  const handleInputChange = (event) => {
    handleSortChange(event.target.value);
  };

  return (
    <div className='SortFilterContainer'>
      <h2>Sort By:</h2>
      <select name="sort" id="sort" onChange={handleInputChange}>
        <option value="name">Name</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
      </select>
    </div>
  );
}

export { SortFilter };

