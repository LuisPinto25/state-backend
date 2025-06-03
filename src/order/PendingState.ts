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
    this.order.setInfoMessage({ status: 200, message: 'Pedido enviado' });
  }

  deliver() {
    this.order.setInfoMessage({
      status: 400,
      message: 'El pedido debe ser enviado primero antes de entregar.',
    });
  }

  cancel() {
    this.order.setState(new CancelledState(this.order));
    this.order.setInfoMessage({
      status: 200,
      message: 'Pedido cancelado exitosamente',
    });
  }
}
