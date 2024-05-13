import React from 'react';
import { SortFilter } from './SortFilter';
import './ResultInfoBar.css';

function ResultInfoBar() {
  return (
    <div className='ResultInfoBarContainer'>
      <h2>Results:</h2>
      <SortFilter />
    </div>
  );
}

export { ResultInfoBar };