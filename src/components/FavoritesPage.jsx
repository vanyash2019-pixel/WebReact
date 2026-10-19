import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import ProductCard from './ProductCard';
import avtomatikaData from '../data/avtomatika.json';
import radioupravlenieData from '../data/radioupravlenie.json';
import svobodnyyVyezdData from '../data/svobodnyy-vyezd.json';

const allProducts = [...avtomatikaData, ...radioupravlenieData, ...svobodnyyVyezdData];

function FavoritesPage({ favoriteIds, onToggleFavorite, onAddToCart }) {
  const favoriteProducts = allProducts.filter((p) => favoriteIds.includes(p.id));

  return (
    <Container className="py-4">
      <h1 className="mb-4">Избранное</h1>
      {favoriteProducts.length === 0 ? (
        <Alert variant="info">Вы пока ничего не добавили в избранное.</Alert>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {favoriteProducts.map((product) => (
            <Col key={product.id}>
              <ProductCard
                product={product}
                isFavorite
                onToggleFavorite={onToggleFavorite}
                onShowDetails={() => {}}
                onAddToCart={onAddToCart}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default FavoritesPage;