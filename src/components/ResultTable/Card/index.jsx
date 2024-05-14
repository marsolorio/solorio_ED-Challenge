import { useContext } from 'react';
import { Detail } from './Detail';
import { SearchContext } from '../../../contexts/SearchContext';
import { CartContext } from '../../../contexts/CartContext'; // Import CartContext
import './Card.css';

function Card({ id, image, title, price, description }) {
    const {
        setIsOpen,
        setImageProduct,
        setTitleProduct,
        setPriceProduct,
        setDescriptionProduct,
    } = useContext(SearchContext);

    const { addToCart, cart, removeFromCart } = useContext(CartContext); // Destructure addToCart and removeFromCart from CartContext

    const openModal = () => {
        setIsOpen(true);
        setImageProduct(image);
        setTitleProduct(title);
        setPriceProduct(price);
        setDescriptionProduct(description);
    };

    const handleAddToCart = (event) => {
        event.stopPropagation(); // Prevent the click from bubbling to the parent container
        addToCart({ id, image, title, price, description });
    };

    const handleRemoveFromCart = (event) => {
        event.stopPropagation(); // Prevent the click from bubbling to the parent container
        removeFromCart(id);
    };

    const isInCart = cart.some((item) => item.id === id); // Check if the item is in the cart

    return (
        <div className='CardContainer' onClick={openModal}>
            <div className='ProductImageContainer'>
                <img src={image} alt={title} />
            </div>
            <Detail 
                title={title}
                price={price}
            />
            {isInCart ? (
                <button className="RemoveFromCartButton" onClick={handleRemoveFromCart}>
                    Remove from Cart
                </button>
            ) : (
                <button className="AddToCartButton" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            )}
        </div>
    );
}

export { Card };
