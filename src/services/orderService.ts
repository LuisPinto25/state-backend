import { Database } from '../database/Database';
import { processOrder } from '../helpers/processOrder';
import { Order } from '../order/Order';

const createOrder = async () => {
  try {
    const order = new Order(crypto.randomUUID(), crypto.randomUUID(), [
      {
        id: crypto.randomUUID(),
        image: 'http://klk.com/image.png',
        description: 'Cable HDMI 2.0',
        price: 3,
      },
    ]);

    order.setInfoMessage({
      status: 200,
      message: 'Pedido realizado, pronto el vendedor empezará con el envío',
    });

    await Database.createOrder(order);

    return {
      order: {
        id: order.id,
        customerId: order.customerId,
        items: order.items,
      },
      message: order.getInfoMessage().message,
    };
  } catch (error) {
    throw error;
  }
};

const shipOrder = async (id: string) => {
  return await processOrder(id, (order) => order.ship());
};

const deliverOrder = async (id: string) => {
  return processOrder(id, (order) => order.deliver());
};

const cancelOrder = async (id: string) => {
  return processOrder(id, (order) => order.cancel());
};

export default { createOrder, shipOrder, deliverOrder, cancelOrder };
