import React from "react";
import { products } from "../data/products";
import Product from "./Product";
import styles from "./Products.module.css";
import Container from "./Container";
function Products() {
    return (
        <Container>
            <h1 className={styles.title}>Best of Shop</h1>
            <div className={styles.products}>
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </Container>
    );
}

export default Products;