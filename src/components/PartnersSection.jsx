import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const partnersData = [
  { id: 1, img: '/assets/e8f5a324-8d3d-4528-871b-b6cb7fb5d429 1.png', alt: 'Партнер 1' },
  { id: 2, img: '/assets/Logo 2 (1).png', alt: 'Партнер 2' },
  { id: 3, img: '/assets/Logo 3.png', alt: 'Партнер 3' },
  { id: 4, img: '/assets/Logo 4.png', alt: 'Партнер 4' },
  { id: 5, img: '/assets/Logo 5.png', alt: 'Партнер 5' },
  { id: 6, img: '/assets/Logo 6.png', alt: 'Партнер 6' },
];

function PartnersSection({ partners }) {
  return (
    <Container className="mb-5">
      <h2 className="text-center mb-4">С нами работают</h2>
      <Row xs={2} md={3} lg={6} className="g-4 align-items-center">
        {partners.map((p) => (
          <Col key={p.id} className="text-center">
            <img src={p.img} alt={p.alt} className="img-fluid partner-logo" />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export { partnersData };
export default PartnersSection;