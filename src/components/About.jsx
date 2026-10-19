import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const features = [
  { title: 'Диспетчеризация 24/7', text: 'Живые операторы и видеоконтроль объекта, все разговоры записываются.' },
  { title: 'Автоматика проезда', text: 'Установка шлагбаумов, ворот и ограждающих элементов.' },
  { title: 'Удобное управление', text: 'Приложение, распознавание номеров, RFID, брелок, гостевой код.' },
  { title: 'Обслуживание', text: 'Быстрое устранение неисправностей и «горячая» замена оборудования.' },
];

function About({ title }) {
  return (
    <Container className="mb-5">
      <h2 className="text-center mb-2">{title.ru}</h2>
      <p className="text-center text-muted mb-4">
        «ЕГДС-СПб» оказывает комплекс услуг систем безопасности дворовой территории
        в Санкт-Петербурге и Ленинградской области.
      </p>
      <Row xs={1} md={2} lg={4} className="g-4">
        {features.map((f) => (
          <Col key={f.title}>
            <Card className="h-100 shadow-sm home-card">
              <Card.Body>
                <Card.Title className="text-danger">{f.title}</Card.Title>
                <Card.Text>{f.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default About;