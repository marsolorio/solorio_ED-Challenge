import React, { useState, useEffect, createContext } from 'react';

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [imageProduct, setImageProduct] = useState('');
  const [titleProduct, setTitleProduct] = useState('');
  const [priceProduct, setPriceProduct] = useState('');
  const [descriptionProduct, setDescriptionProduct] = useState('');
  const [selectedSort, setSelectedSort] = useState('name'); // Default sort by name
  const [selectedCategory, setSelectedCategory] = useState(''); // Default no category filter
  const [selectedRating, setSelectedRating] = useState('all'); // Default show all ratings

  const getData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await getData();
        setProducts(productList);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const searchedProducts = products.filter((product) => {
    const productName = product.title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return productName.includes(searchText);
  });

  // Filtered products based on selected category
  const filteredProducts = searchedProducts.filter((product) =>
    selectedCategory ? product.category.toLowerCase() === selectedCategory.toLowerCase() : true
  );

  // Filtered products based on selected rating
  const ratedProducts = filteredProducts.filter((product) =>
    selectedRating === 'all' ? true : product.rating.rate >= parseInt(selectedRating)
  );

  // Sorting logic based on selectedSort
  const sortedProducts = ratedProducts.slice().sort((a, b) => {
    if (selectedSort === 'priceLow') {
      return a.price - b.price;
    } else if (selectedSort === 'priceHigh') {
      return b.price - a.price;
    } else {
      return 0; // Default to no sorting or sort by name
    }
  });

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        searchedProducts: sortedProducts, // Use sortedProducts instead of searchedProducts
        isLoading,
        isOpen,
        setIsOpen,
        imageProduct,
        setImageProduct,
        titleProduct,
        setTitleProduct,
        priceProduct,
        setPriceProduct,
        descriptionProduct,
        setDescriptionProduct,
        selectedSort,
        handleSortChange,
        selectedCategory,
        handleCategoryChange,
        selectedRating,
        handleRatingChange,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
