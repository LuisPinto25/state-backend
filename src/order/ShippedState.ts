import { OrderState } from './OrderState';
import { DeliveredState } from './DeliveredState';

export class ShippedState extends OrderState {
  ship() {
    this.order.setInfoMessage({ status: 400, message: 'Pedido ya enviado' });
  }

  deliver() {
    this.order.setState(new DeliveredState(this.order));
    this.order.setInfoMessage({ status: 200, message: 'Pedido entregado' });
  }

  cancel() {
    this.order.setInfoMessage({
      status: 400,
      message: 'Pedido enviado, no lo puedes cancelar',
    });
  }
}
