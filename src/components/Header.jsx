import { useEffect, useState } from "react";
import Modal from "./Modal";
import Cart from "./Cart";
import styles from "./Header.module.css";
import Container from "./Container";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";


import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

  const handleShopClick = () => {
    navigate('/');
  };
    const cart = useSelector((state) => state.cart);
    const totalQuantity = cart.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    function closeModal() {
        setIsModalOpen(false);
    }
    useEffect(() => {
        if (isModalOpen) {
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "scroll";
        }
    }, [isModalOpen]);
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}> 
                
                    <button  onClick={() => window.location.href = '/' } className={styles.title} >Shop</button>
                  
                    <button
                        className={styles.showCartBtn}
                        onClick={() => {
                            setIsModalOpen(true);
                        }}
                    >
                        <span className={styles.cartIconAndNumber}>
                            <BsCartFill />
                            {totalQuantity > 0 && (
                                <span className={styles.number}>
                                    {totalQuantity}
                                </span>
                            )}
                        </span>
                        <span className={styles.cartText}>Cart</span>
                    </button>
                </nav>
            </Container>
            {isModalOpen && (
                <Modal closeModal={closeModal}>
                    <Cart />
                </Modal>
            )}
        </header>
    );
}

export default Header;
