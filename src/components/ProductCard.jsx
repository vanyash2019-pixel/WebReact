import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function ProductCard({  product, isFavorite, onToggleFavorite, onShowDetails, onDelete, onEdit, onAddToCart }) {
  return (
    <Card className={`h-100 shadow-sm ${isFavorite ? 'border-danger border-2' : ''}`}>
      <OverlayTrigger
        placement="left"
        overlay={
          <Tooltip id={`tooltip-fav-${product.id}`}>
            {isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
          </Tooltip>
        }
      >
        <Button
          variant="light"
          className="position-absolute top-0 end-0 m-2 rounded-circle"
          onClick={() => onToggleFavorite(product.id)}
          aria-label="Избранное"
        >
          <i className={isFavorite ? 'fa fa-heart text-danger' : 'fa fa-heart-o'}></i>
        </Button>
      </OverlayTrigger>

      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name.ru}
        style={{ height: '200px', objectFit: 'contain', padding: '10px' }}
      />

      <Card.Body className="d-flex flex-column">
        <Badge bg="secondary" className="align-self-start mb-2">
          {product.category}
        </Badge>

        <Card.Title>{product.name.ru}</Card.Title>
        <Card.Text className="text-muted small">{product.shortDescription.ru}</Card.Text>

        <Card.Text className="fw-bold fs-5 text-danger mt-auto">
          {product.price.toLocaleString('ru-RU')} руб.
        </Card.Text>

        <div className="d-grid gap-2">
          {onAddToCart && (
  <Button variant="success" onClick={() => onAddToCart(product)}>
    В корзину
  </Button>
)}
          <Button variant="primary" onClick={() => onShowDetails(product)}>
            Подробнее
          </Button>
          {onEdit && (
            <Button variant="outline-primary" onClick={() => onEdit(product)}>
              Редактировать
            </Button>
          )}
          {onDelete && (
            <Button variant="outline-secondary" onClick={() => onDelete(product.id)}>
              Удалить
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;