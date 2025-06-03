import type { Request, Response } from 'express';
import orderService from '../services/orderService';
import type { ResponseMessage } from '../types/ResponseMessage';

const processOrder = async (
  req: Request,
  res: Response,
  handleOrder: (orderId: string) => Promise<ResponseMessage>
) => {
  try {
    const { orderId } = req.params;
    const orderInfo = await handleOrder(orderId ?? '');
    res.status(orderInfo.status).send({ message: orderInfo.message });
  } catch (error) {
    res.status(400).send({ message: (error as Error).message });
  }
};

const createOrder = async (req: Request, res: Response) => {
  try {
    const { order, message } = await orderService.createOrder();
    res.status(200).send({ order, message });
  } catch (error) {
    res.status(400).send({ message: (error as Error).message });
  }
};

const shipOrder = async (req: Request, res: Response) => {
  processOrder(req, res, orderService.shipOrder);
};

const deliverOrder = async (req: Request, res: Response) => {
  processOrder(req, res, orderService.deliverOrder);
};

const cancelOrder = async (req: Request, res: Response) => {
  processOrder(req, res, orderService.cancelOrder);
};

export default {
  cancelOrder,
  createOrder,
  deliverOrder,
  shipOrder,
};
