import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const Cart = ({ cartItems, products, removeFromCart }) => {
    return (
        <ListGroup>
            {cartItems.map((itemId) => {
                const product = products.find((p) => p.id === itemId);
                return (
                    <ListGroup.Item key={product.id}>
                        {product.name} - ${product.price}
                        <Button variant="danger" size="sm" onClick={() => removeFromCart(product.id)}>
                            Remove
                        </Button>
                    </ListGroup.Item>
                );
            })}
        </ListGroup>
    );
};

export default Cart;
