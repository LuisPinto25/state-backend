import { Router } from 'express';
import orderController from '../controllers/orderController';

const router = Router();

router.post('/', orderController.createOrder);
router.get('/ship/:orderId', orderController.shipOrder);
router.get('/delivery/:orderId', orderController.deliverOrder);
router.get('/cancel/:orderId', orderController.cancelOrder);

export default router;
