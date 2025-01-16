import React from "react";

import styles from "./CartItem.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import {
    increaseQty,
    decreaseQty,
    removeItemFromCart,
} from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function CartItem({ id, price, img, title, quantity }) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const totalAmount = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const discount = totalAmount * 0.1;
    const newAmount = totalAmount - discount;

    return (
        <>
        <div className={styles.cartItem}>
           
            <div className={styles.imgAndTitle}>
                <div className={styles.imgContainer}>
                    <img src={img} alt={title} className={styles.cartImage} />
                </div>
                <div className={styles.title}>
                    <h3>{title}</h3>
                </div>
               
            </div>
           <div className="controls">
                <div className={styles.qtyInput}>
                        <button
                            onClick={() => {
                                if (quantity <= 1) {
                                    return;
                                }
                                dispatch(decreaseQty({ id }));
                            }}
                        >
                            <AiOutlineMinus className={styles.plus}/>
                        </button>
                        <span className={styles.quantityDisplay}>{quantity}</span>
                        <button
                            onClick={() => {
                                dispatch(increaseQty({ id }));
                            }}
                        >
                            <AiOutlinePlus className={styles.plus} />
                        </button>
                     
                        
                    
                </div>
                <button
                    className={styles.removeItemBtn}
                    onClick={() => {
                                dispatch(removeItemFromCart({ id }));
                            }}
                >
                 Remove   <ImCross className={styles.cross}/>
                </button>
            </div>
           

            
            <p> Rs. {price * quantity}</p>
            <section >
                 <div  >&#8377;{totalAmount}</div>
                 <article> {newAmount}</article>
            </section>
                
        
            
        </div>
       
        </>
        
    );
       
}

export default CartItem;