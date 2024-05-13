import React, { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { Card } from './Card';
import { Modal } from '../Modal';
import './ResultTable.css';

function ResultTable() {
  const { searchedProducts, isLoading, isOpen, handleAddToCart } = useContext(SearchContext);

  return (
    <div className='ResultContainer'>
      <h2>Results:</h2>
      <div className='CardResultsContainer'>
        {isLoading ? (
          <span className='loader'></span>
        ) : (
          searchedProducts.map((product, index) => (
            <Card
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              handleAddToCart={handleAddToCart} // Pass the handleAddToCart function to the Card component
            />
          ))
        )}
      </div>
      {isOpen && <Modal />}
    </div>
  );
}

export { ResultTable };
