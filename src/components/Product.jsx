// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import styles from "./Product.module.css";
// import { toast } from "react-toastify";
// import { addItemToCart } from "../features/cartSlice";
// function Product({ id, title, price, img }) {
//     const dispatch = useDispatch();
//     const cart = useSelector((state) => state.cart);
//     const [addedToCart, setAddedToCart] = useState(false);
//     function handleAdd() {
//         for (let item of cart) {
//             if (item.id === id) {
            
//                 return;
//             }
//             }
//             setAddedToCart(true);
//         }

//         const newCartItem = {
//             id: id,
//             price: price,
//             title: title,
//             img: img,
//             quantity: 1,
//         };
//         dispatch(addItemToCart(newCartItem));
   
//     }
//     return (
//         <div className={styles.product}>
//             <img src={img} alt={title} className={styles.productImage} />
//             <p className={styles.title}>{title}</p>
//             <p className={styles.price}>&#8377;{price}</p>

           
//              <button
//                  onClick={handleAddToCart}
//                  disabled={addedToCart}
//                  className={styles.addToCartBtn}>
//                 {addedToCart ? 'Added to Cart' : 'Add to Cart'}
//             </button>
//         </div>
//     );


// export default Product;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Product.module.css';
import { toast } from 'react-toastify';
import { addItemToCart } from '../features/cartSlice';

function Product({ id, title, price, img }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    if (cart.find((item) => item.id === id)) {
      toast.error('Product already in cart!');
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

  return (
    <div className={styles.product}>
      <img src={img} alt={title} className={styles.productImage} />
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>&#8377;{price}</p>
       <button
        onClick={handleAddToCart}
        disabled={addedToCart}
        className={`${styles.addToCartBtn} ${addedToCart ? styles.addedToCart : ''}`}
      >
        {addedToCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default Product;