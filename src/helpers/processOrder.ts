import { Database } from '../database/Database';
import type { Order } from '../order/Order';

export const processOrder = async (
  id: string,
  handleOrder: (order: Order) => void
) => {
  try {
    const order = await Database.getOrderById(id);
    if (!order) throw new Error('Pedido no encontrado');
    handleOrder(order);

    return order.getInfoMessage();
  } catch (error) {
    throw error;
  }
};
