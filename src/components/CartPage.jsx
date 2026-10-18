import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function CartPage({ cart, onRemove }) {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <Container className="py-4">
      <h1 className="mb-4">Корзина</h1>
      {cart.length === 0 ? (
        <Alert variant="info">Корзина пуста.</Alert>
      ) : (
        <>
          <Table striped hover responsive>
            <thead>
              <tr><th>Товар</th><th>Цена</th><th>Кол-во</th><th>Сумма</th><th></th></tr>
            </thead>
            <tbody>
              {cart.map((i) => (
                <tr key={i.id}>
                  <td>{i.name.ru}</td>
                  <td>{i.price.toLocaleString('ru-RU')}</td>
                  <td>{i.qty}</td>
                  <td>{(i.price * i.qty).toLocaleString('ru-RU')}</td>
                  <td>
                    <Button size="sm" variant="outline-danger" onClick={() => onRemove(i.id)}>
                      Убрать
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4 className="text-end">Итого: {total.toLocaleString('ru-RU')} руб.</h4>
        </>
      )}
    </Container>
  );
}

export default CartPage;