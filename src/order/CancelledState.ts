import type { Order } from './Order';
import { OrderState } from './OrderState';

export class CancelledState extends OrderState {
  constructor(order: Order) {
    super(order);
  }

  ship() {
    this.order.setInfoMessage('No se puede enviar el pedido, fue cancelado');
  }

  deliver() {
    this.order.setInfoMessage('No se puede entregar el pedido, fue cancelado');
  }

  cancel() {
    this.order.setInfoMessage('El pedido ya ha sido cancelada');
  }
}
