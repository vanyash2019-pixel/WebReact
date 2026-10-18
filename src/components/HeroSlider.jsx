import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const slidesData = [
  {
    id: 1,
    title: 'Умная диспетчеризация',
    items: [
      'Онлайн-консьерж, живой оператор',
      'Диспетчер открывает шлагбаум для спецтранспорта',
      'Оператор работает по регламенту, согласованному с вами',
      'Умная диспетчеризация увеличит пропускную способность проезда',
    ],
    image: '/assets/ofis-2-1536x1060_pixian_ai 1.png',
  },
  {
    id: 2,
    title: 'Установка шлагбаума во дворе позволяет',
    items: [
      'Ограничить проезд случайным автомобилям',
      'Исключить проезд «транзитных» автомобилей',
      'Повысить вероятность найти свободное место',
      'Повысить безопасность дворовой территории',
    ],
    image: '/assets/Парковка.png',
  },
  {
    id: 3,
    title: 'Как управлять шлагбаумом',
    items: [
      'Мобильное приложение',
      'Распознавание автомобильных номеров',
      'RFID-метки и звонок с телефона',
      'Защищённый персональный пульт',
    ],
    image: '/assets/Group 21.png',
  },
  {
    id: 4,
    title: 'Система «Умный шлагбаум»',
    items: [
      'Каждое открытие шлагбаума персонализировано',
      'Фотофиксация проездов автотранспорта',
      'Статистика управления и пребывания автомобилей',
      'Автоматизация внутреннего регламента',
    ],
    image: '/assets/Машина.png',
  },
];

function HeroSlider() {
  return (
    <Container className="mt-5 mb-5">
      <Carousel
        variant="dark"
        interval={5000}
        pause="hover"
        className="hero-carousel"
      >
        {slidesData.map((slide) => (
          <Carousel.Item key={slide.id}>
            <Row className="align-items-center g-4 px-4 px-md-5 py-5 mx-0" style={{ minHeight: '380px' }}>
              <Col md={7}>
                <h2 className="mb-3">{slide.title}</h2>
                <ul className="mb-0">
                  {slide.items.map((item, i) => (
                    <li key={i} className="mb-2">{item}</li>
                  ))}
                </ul>
              </Col>
              <Col md={5} className="text-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="img-fluid"
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                />
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default HeroSlider;