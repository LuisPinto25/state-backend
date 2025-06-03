import type { Order } from './Order';
import { OrderState } from './OrderState';

export class CancelledState extends OrderState {
  constructor(order: Order) {
    super(order);
  }

  ship() {
    this.order.setInfoMessage({
      status: 400,
      message: 'No se puede enviar el pedido, fue cancelado',
    });
  }

  deliver() {
    this.order.setInfoMessage({
      status: 400,
      message: 'No se puede entregar el pedido, fue cancelado',
    });
  }

  cancel() {
    this.order.setInfoMessage({
      status: 400,
      message: 'El pedido ya ha sido cancelado',
    });
  }
}
