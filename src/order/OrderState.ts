import type { Order } from './Order';

export abstract class OrderState {
  protected order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  abstract ship(): void;
  abstract deliver(): void;
  abstract cancel(): void;
}
