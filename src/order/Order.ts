import type { Id } from '../types/Id';
import type { OrderItem } from '../types/OrderItem';
import type { ResponseMessage } from '../types/ResponseMessage';
import type { OrderState } from './OrderState';
import { PendingState } from './PendingState';

export class Order {
  readonly id: Id;
  readonly customerId: Id;
  readonly items: OrderItem[];
  private state: OrderState;
  private infoMessage: ResponseMessage = {
    status: 200,
    message: 'Todo ha salido bien',
  };

  constructor(id: Id, customerId: Id, items: OrderItem[]) {
    this.id = id;
    this.customerId = customerId;
    this.items = items;
    this.state = new PendingState(this);
  }

  setState(state: OrderState) {
    this.state = state;
  }

  ship(): void {
    this.state.ship();
  }

  deliver(): void {
    this.state.deliver();
  }

  cancel(): void {
    this.state.cancel();
  }

  setInfoMessage(infoMessage: ResponseMessage) {
    this.infoMessage = infoMessage;
  }

  getInfoMessage() {
    return this.infoMessage;
  }
}
