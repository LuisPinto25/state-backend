import type { Request, Response } from 'express';
import orderService from '../services/orderService';

const processOrder = async (
  req: Request,
  res: Response,
  handleOrder: (orderId: string) => Promise<string>
) => {
  try {
    const { orderId } = req.params;
    const message = await handleOrder(orderId ?? '');
    res.status(200).send({ message });
  } catch (error) {
    res.status(400).send({ message: (error as Error).message });
  }
};

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderInfo = await orderService.createOrder();
    res.status(200).send(orderInfo);
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
