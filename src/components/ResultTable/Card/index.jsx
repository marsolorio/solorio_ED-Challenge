import { useContext } from 'react';
import { Detail } from './Detail'
import { SearchContext } from '../../../contexts/SearchContext';
import './Card.css'

function Card({ image, title, price, description }) {
    const {
        setIsOpen,
        setImageProduct,
        setTitleProduct,
        setPriceProduct,
        setDescriptionProduct,
    } = useContext(SearchContext);

    const openModal = () => {
        setIsOpen(true);
        setImageProduct(image);
        setTitleProduct(title);
        setPriceProduct(price);
        setDescriptionProduct(description);
    };

    const addToCart = (event) => {
        event.stopPropagation(); // Prevent the click from bubbling to the parent container
        // Add your logic here to handle adding the item to the cart
        console.log('Item added to cart:', title);
    };

    return (
        <div className='CardContainer' onClick={openModal}>
            <div className='ProductImageContainer'>
                <img src={image} alt={title} />
            </div>
            <Detail 
                title={title}
                price={price}
            />
            <button className="AddToCartButton" onClick={addToCart}>
                Add to Cart
            </button>
        </div>
    );
}

export { Card };
