import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function CallbackSection() {
  const [show, setShow] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setShow(false);
  }

  return (
    <div className="bg-light py-5 mb-0">
      <Container className="text-center">
        <h3 className="mb-3 text-danger">Оставьте отзыв, нам важно ваше мнение!</h3>
        {sent && <Alert variant="success" dismissible onClose={() => setSent(false)}>Спасибо за отзыв!</Alert>}
        <Button variant="primary" size="lg" onClick={() => setShow(true)}>Написать отзыв</Button>
      </Container>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton><Modal.Title>Оставить отзыв</Modal.Title></Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Ваше имя</Form.Label>
              <Form.Control required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Отзыв</Form.Label>
              <Form.Control as="textarea" rows={4} required />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>Отмена</Button>
            <Button type="submit" variant="primary">Отправить</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default CallbackSection;