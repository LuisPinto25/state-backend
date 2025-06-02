import type { OrderState } from './OrderState';
import { PendingState } from './PendingState';

type Id = `${string}-${string}-${string}-${string}-${string}`;

type OrderItem = {
  id: Id;
  image: string;
  description: string;
  price: number;
};

export class Order {
  readonly id: Id;
  readonly customerId: Id;
  readonly items: OrderItem[];
  private state: OrderState;
  private infoMessage: string = '';

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

  setInfoMessage(infoMessage: string) {
    this.infoMessage = infoMessage;
  }

  getInfoMessage() {
    return this.infoMessage;
  }
}
