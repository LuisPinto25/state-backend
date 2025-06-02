import type { Order } from './Order';
import { OrderState } from './OrderState';
import { CancelledState } from './CancelledState';
import { ShippedState } from './ShippedState';

export class PendingState extends OrderState {
  constructor(order: Order) {
    super(order);
  }

  ship() {
    this.order.setState(new ShippedState(this.order));
    this.order.setInfoMessage('Pedido enviado');
  }

  deliver() {
    this.order.setInfoMessage(
      'El pedido debe ser enviado primero antes de entregar.'
    );
  }

  cancel() {
    this.order.setState(new CancelledState(this.order));
    this.order.setInfoMessage('Pedido cancelado exitosamente');
  }
}
