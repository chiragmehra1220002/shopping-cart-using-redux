import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

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
        <>
        <div className={styles.cart}>
            <h2 className={styles.cartHeading}>Shopping Cart</h2>
            <div>
                <div className={styles.cartItems}>
                    <span>Product</span>
                    <span className={styles.quantity1}>Quantity</span>
                    <span className={styles.price1}>Price</span>
                    <span>Total</span>
                </div>
                <hr />
                {cart.map((cartItem) => (
                    <CartItem key={cartItem.id} {...cartItem} />
                ))}
            </div>
          
        
            
            
        </div>
        <div className={styles.subtotal}>
        <h2>Subtotal:Rs. {newAmount}</h2>
      </div>
      </>
    );
}

export default Cart;