import { Router } from 'express';
import orderController from '../controllers/orderController';

const router = Router();

router.post('/', orderController.createOrder);
router.put('/ship/:orderId', orderController.shipOrder);
router.put('/delivery/:orderId', orderController.deliverOrder);
router.delete('/cancel/:orderId', orderController.cancelOrder);

export default router;
