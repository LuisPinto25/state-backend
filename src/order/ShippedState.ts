import { OrderState } from './OrderState';
import { DeliveredState } from './DeliveredState';

export class ShippedState extends OrderState {
  ship() {
    this.order.setInfoMessage('Pedido ya enviado');
  }

  deliver() {
    this.order.setState(new DeliveredState(this.order));
    this.order.setInfoMessage('Pedido entregado');
  }

  cancel() {
    this.order.setInfoMessage('Pedido enviado, no lo puedes cancelar');
  }
}
