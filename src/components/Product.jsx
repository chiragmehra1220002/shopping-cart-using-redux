
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Product.module.css';
import { Button } from 'rsuite';
import { addItemToCart } from '../features/cartSlice';
import "rsuite/dist/rsuite.min.css";
function Product({ id, title, price, img }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [addedToCart, setAddedToCart] = useState(false);
  const ButtonStyles = {display:'block',margin:'0 auto',height:'40px', width:'70%',marginBottom:'10px'}

  const handleAddToCart = () => {
    if (cart.find((item) => item.id === id)) {
     
      return;
    }

    const newCartItem = {
      id,
      price,
      title,
      img,
      quantity: 1,
    };

    dispatch(addItemToCart(newCartItem));
    setAddedToCart(true);
  };

  const isProductInCart = cart.find((item) => item.id === id);

  return (
    <div className={styles.product}>
      <img src={img} alt={title} className={styles.productImage} />
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>Rs. {price}</p>
      <Button
        onClick={handleAddToCart}
        disabled={addedToCart || isProductInCart}
        style={ButtonStyles}
        appearance="primary" 
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default Product;



