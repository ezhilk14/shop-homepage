import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

const productsData = [
  {
    id: 1,
    name: 'Fancy Product',
    description: 'This is a fancy product',
    price: 40,
    rating: 4,
    image: 'https://via.placeholder.com/450x300'
  },
  {
    id: 2,
    name: 'Special Item',
    description: 'This is a special item',
    price: 18,
    rating: 5,
    image: 'https://via.placeholder.com/450x300'
  },
  {
    id: 3,
    name: 'Sale Item',
    description: 'This is a sale item',
    price: 25,
    rating: 3,
    image: 'https://via.placeholder.com/450x300'
  },
  {
    id: 4,
    name: 'Popular Item',
    description: 'This is a popular item',
    price: 35,
    rating: 4.5,
    image: 'https://via.placeholder.com/450x300'
  },
  {
    id: 5,
    name: 'Fancy Product 2',
    description: 'This is another fancy product',
    price: 50,
    rating: 4,
    image: 'https://via.placeholder.com/450x300'
  },
  {
    id: 6,
    name: 'Special Item 2',
    description: 'This is another special item',
    price: 20,
    rating: 5,
    image: 'https://via.placeholder.com/450x300'
  },
  {
    id: 7,
    name: 'Sale Item 2',
    description: 'This is another sale item',
    price: 22,
    rating: 3,
    image: 'https://via.placeholder.com/450x300'
  },
  {
    id: 8,
    name: 'Popular Item 2',
    description: 'This is another popular item',
    price: 30,
    rating: 4.5,
    image: 'https://via.placeholder.com/450x300'
  }
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    setCart([...cart, id]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((itemId) => itemId !== id));
  };

  return (
    <div>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col md={8}>
            <Row>
              {productsData.map((product) => (
                <Col md={3} key={product.id} className="mb-4">
                  <ProductCard
                    product={product}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    isInCart={cart.includes(product.id)}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <h3>Cart</h3>
            <Cart cartItems={cart} products={productsData} removeFromCart={removeFromCart} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
