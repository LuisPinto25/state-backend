import type { Order } from './Order';
import { OrderState } from './OrderState';

export class DeliveredState extends OrderState {
  constructor(order: Order) {
    super(order);
  }

  ship() {
    this.order.setInfoMessage('Pedido ya entregado');
  }

  deliver() {
    this.order.setInfoMessage('Pedido ya entregado');
  }

  cancel() {
    this.order.setInfoMessage('Pedido ya entregado, no se puede cancelar');
  }
}
