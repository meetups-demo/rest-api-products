import { Router } from 'express';
import productController from './controller';
const router: Router = Router();

router.get('/', productController.list);

export default router;
