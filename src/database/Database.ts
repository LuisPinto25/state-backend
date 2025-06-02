import type { Order } from '../order/Order';

export class Database {
  private static orders: Order[] = [];

  static async createOrder(order: Order) {
    this.orders.push(order);
  }

  static async getOrderById(id: string) {
    const order = this.orders.find((order) => order.id === id);

    return order;
  }
}
