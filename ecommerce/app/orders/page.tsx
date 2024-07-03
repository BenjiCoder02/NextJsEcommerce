import { Container } from '@/components/Container';
import OrderDetails from '@/components/OrderDetails';
import React from 'react';

const OrdersPage = () => {
  return (
    <div>
      <Container>
        <OrderDetails />
      </Container>
    </div>
  )
}

export default OrdersPage;
