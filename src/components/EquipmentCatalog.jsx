import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function EquipmentCatalog({ items }) {
  return (
    <Container className="mb-5">
      <h2 className="text-center mb-4">Каталог оборудования</h2>
      <Row xs={1} md={3} className="g-4">
        {items.map((item) => (
          <Col key={item.id}>
            <Card as={Link} to={item.link} className="h-100 text-center text-decoration-none shadow-sm home-card">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center py-4">
                <img src={item.icon} alt={item.title.ru} height="70" className="mb-3" />
                <Card.Title className="text-dark mb-0">{item.title.ru}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default EquipmentCatalog;