import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
// import { createPortal } from "react-dom";
function Cart() {
    const cart = useSelector((state) => state.cart);
    const totalAmount = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const discount = totalAmount * 0.1;
    const newAmount = totalAmount - discount;

    if (cart.length === 0) 
        return <center>
                    <button  onClick={() => window.location.href = '/' } className={styles.emptyCartBtn}>Cart is empty!!</button>
                </center > 
                
    return (
        <div className={styles.cart}>
            <h2 className={styles.cartHeading}>Shopping Cart</h2>
            <div>
                {cart.map((cartItem) => (
                    <CartItem key={cartItem.id} {...cartItem} />
                ))}
            </div>
            <section> Total Amount : &#8377;{totalAmount}</section>
            <br />
            <button onClick={() => window.location.href = '/' } className={styles.continueShoppingBtn}>
                Continue Shopping
            </button>
            <strong> New Amount: &#8377;{newAmount}</strong>
            
        </div>
    );
}

export default Cart;