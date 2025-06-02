import type { Order } from './Order';
import { OrderState } from './OrderState';

export class CancelledState extends OrderState {
  constructor(order: Order) {
    super(order);
  }

  ship() {
    this.order.setInfoMessage('No se puede enviar la orden, fue cancelada');
  }

  deliver() {
    this.order.setInfoMessage('No se puede entregar la orden, fue cancelada');
  }

  cancel() {
    this.order.setInfoMessage('La orden ya había sido cancelada');
  }
}
