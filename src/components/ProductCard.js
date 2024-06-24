import React from 'react';
import { Card, Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

const ProductCard = ({ product, addToCart, removeFromCart, isInCart }) => {
    return (
        <Card className="product-card" style={{ width: '18rem' }}>
            <Card.Img
                variant="top"
                src={product.image}
            />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>${product.price}</Card.Text>
                <StarRatings
                    rating={product.rating}
                    starRatedColor="gold"
                    numberOfStars={5}
                    name="rating"
                    starDimension="20px"
                    starSpacing="3px"
                />
                <div className="mt-2">
                    {isInCart ? (
                        <Button variant="danger" onClick={() => removeFromCart(product.id)}>
                            Remove from Cart
                        </Button>
                    ) : (
                        <Button variant="primary" onClick={() => addToCart(product.id)}>
                            Add to Cart
                        </Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
